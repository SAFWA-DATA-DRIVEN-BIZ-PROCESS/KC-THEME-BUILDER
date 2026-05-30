/* eslint-disable no-undef */
import { readdirSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { createInterface } from "readline";
import AdmZip from "adm-zip";

const distDir = "./dist_keycloak";
const args = process.argv.slice(2);
const shouldAutoSelectNewest =
  args.includes("--non-interactive") ||
  args.includes("--latest") ||
  process.env.KEYCLOAK_THEME_NON_INTERACTIVE === "1" ||
  process.env.CI === "1" ||
  process.env.CI === "true";

function getOutputDir(jarFile) {
  const timestampMatch = jarFile.match(/^(\d{14})\.jar$/);
  if (timestampMatch) {
    const ts = timestampMatch[1];
    const formattedDate = `${ts.slice(0,4)}-${ts.slice(4,6)}-${ts.slice(6,8)}_${ts.slice(8,10)}-${ts.slice(10,12)}-${ts.slice(12,14)}`;
    return join(distDir, `extracted_${formattedDate}`);
  }
  // Fallback: use filename stem as output dir name
  const stem = jarFile.replace(/\.jar$/i, "");
  return join(distDir, `extracted_${stem}`);
}

function selectJarFile(files) {
  return new Promise((resolve) => {
    if (files.length === 0) {
      console.error("No JAR file found in dist_keycloak/. Run 'yarn build-keycloak-theme' first.");
      process.exit(1);
    }

    if (files.length === 1) {
      resolve(files[0]);
      return;
    }

    // Sort descending so newest is first; auto-select if running non-interactively
    const sorted = [...files].sort((a, b) => b.localeCompare(a));
    if (shouldAutoSelectNewest || !process.stdin.isTTY) {
      console.log(`Multiple JARs found. Auto-selecting newest: ${sorted[0]}`);
      resolve(sorted[0]);
      return;
    }

    console.log("Multiple JAR files found. Select one to extract (newest first):");
    sorted.forEach((file, index) => {
      console.log(`  ${index + 1}. ${file}`);
    });

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter number [default: 1]: ", (answer) => {
      rl.close();
      const index = answer.trim() === "" ? 0 : parseInt(answer) - 1;
      if (isNaN(index) || index < 0 || index >= sorted.length) {
        console.error("Invalid selection. Exiting.");
        process.exit(1);
      }
      resolve(sorted[index]);
    });
  });
}

function extractJar(jarFile, outputDir) {
  const jarPath = resolve(distDir, jarFile);
  const destinationPath = resolve(outputDir);
  const zip = new AdmZip(jarPath);
  zip.extractAllTo(destinationPath, true);
}

(async () => {
  if (!existsSync(distDir)) {
    console.error(`'${distDir}' directory not found. Run 'yarn build-keycloak-theme' first.`);
    process.exit(1);
  }

  const jarFiles = readdirSync(distDir).filter(file => file.endsWith(".jar"));
  const jarFile = await selectJarFile(jarFiles);
  const outputDir = getOutputDir(jarFile);

  if (existsSync(outputDir)) {
    console.log(`Output directory already exists, overwriting: ${outputDir}`);
  } else {
    mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Extracting ${jarFile} to ${outputDir}...`);
  try {
    extractJar(jarFile, outputDir);
    console.log(`Done. Extracted to ${outputDir}`);
  } catch (error) {
    console.error(`Failed to extract ${jarFile}:`, error.message);
    process.exit(1);
  }
})();
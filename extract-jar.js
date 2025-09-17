/* eslint-disable no-undef */
import { readdirSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import { createInterface } from "readline";

const distDir = "./dist_keycloak";

function getOutputDir(jarFile) {
  const timestampMatch = jarFile.match(/^(\d{14})\.jar$/);
  if (!timestampMatch) {
    console.error(`Invalid JAR file name format: ${jarFile}. Expected YYYYMMDDHHMMSS.jar`);
    process.exit(1);
  }
  const timestamp = timestampMatch[1];
  const year = timestamp.slice(0, 4);
  const month = timestamp.slice(4, 6);
  const day = timestamp.slice(6, 8);
  const hour = timestamp.slice(8, 10);
  const minute = timestamp.slice(10, 12);
  const second = timestamp.slice(12, 14);
  const formattedDate = `${year}-${month}-${day}_${hour}-${minute}-${second}`;
  return join(distDir, `extracted_${formattedDate}`);
}

function selectJarFile(files) {
  return new Promise((resolve, reject) => {
    if (files.length === 0) {
      console.error("No JAR file found in dist_keycloak directory.");
      process.exit(1);
    }

    if (files.length === 1) {
      resolve(files[0]);
      return;
    }

    console.log("Multiple JAR files found. Please select one to extract:");
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter the number of the JAR file to extract: ", (answer) => {
      const index = parseInt(answer) - 1;
      rl.close();
      if (isNaN(index) || index < 0 || index >= files.length) {
        console.error("Invalid selection. Exiting.");
        process.exit(1);
      }
      resolve(files[index]);
    });
  });
}

(async () => {
  const jarFiles = readdirSync(distDir).filter(file => file.endsWith(".jar"));
  const jarFile = await selectJarFile(jarFiles);

  const outputDir = getOutputDir(jarFile);

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Extracting ${jarFile} to ${outputDir}...`);
  try {
    execSync(`cd ${outputDir} && jar -xf "${join("..", jarFile)}"`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to extract ${jarFile}:`, error.message);
    process.exit(1);
  }
})();
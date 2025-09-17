/* eslint-disable no-undef */
import { readdirSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";
import prompts from "prompts";

const distDir = "./dist_keycloak";

function getOutputDir(jarFile) {
  // Extract timestamp from JAR file name (e.g., 20250917103345.jar -> 20250917103345)
  const timestampMatch = jarFile.match(/^(\d{14})\.jar$/);
  if (!timestampMatch) {
    console.error(`Invalid JAR file name format: ${jarFile}. Expected YYYYMMDDHHMMSS.jar`);
    process.exit(1);
  }
  const timestamp = timestampMatch[1];
  // Format timestamp as YYYY-MM-DD_HH-MM-SS
  const year = timestamp.slice(0, 4);
  const month = timestamp.slice(4, 6);
  const day = timestamp.slice(6, 8);
  const hour = timestamp.slice(8, 10);
  const minute = timestamp.slice(10, 12);
  const second = timestamp.slice(12, 14);
  const formattedDate = `${year}-${month}-${day}_${hour}-${minute}-${second}`;
  return join(distDir, `extracted_${formattedDate}`);
}

async function selectJarFile(files) {
  if (files.length === 0) {
    console.error("No JAR file found in dist_keycloak directory.");
    process.exit(1);
  }

  if (files.length === 1) {
    return files[0];
  }

  // Prompt user to select a JAR file
  const response = await prompts({
    type: "select",
    name: "jarFile",
    message: "Multiple JAR files found. Please select one to extract:",
    choices: files.map(file => ({ title: file, value: file })),
  });

  if (!response.jarFile) {
    console.error("No JAR file selected. Exiting.");
    process.exit(1);
  }

  return response.jarFile;
}

(async () => {
  // Find all .jar files
  const jarFiles = readdirSync(distDir).filter(file => file.endsWith(".jar"));
  const jarFile = await selectJarFile(jarFiles);

  // Get output directory based on JAR file name
  const outputDir = getOutputDir(jarFile);

  // Create output directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Extracting ${jarFile} to ${outputDir}...`);
  try {
    // Change to output directory and extract JAR there
    execSync(`cd ${outputDir} && jar -xf "${join("..", jarFile)}"`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to extract ${jarFile}:`, error.message);
    process.exit(1);
  }
})();
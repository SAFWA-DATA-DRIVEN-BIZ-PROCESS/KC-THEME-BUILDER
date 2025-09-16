/* eslint-disable no-undef */
import { readdirSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const distDir = "./dist_keycloak";
const outputDir = join(distDir, "extracted");

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const jarFile = readdirSync(distDir).find(file => file.endsWith(".jar"));

if (jarFile) {
  console.log(`Extracting ${jarFile} to ${outputDir}...`);
  try {
    // Change to output directory and extract JAR there
    execSync(`cd ${outputDir} && jar -xf "${join("..", jarFile)}"`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to extract ${jarFile}:`, error.message);
    process.exit(1);
  }
} else {
  console.error("No JAR file found in dist_keycloak directory.");
  process.exit(1);
}
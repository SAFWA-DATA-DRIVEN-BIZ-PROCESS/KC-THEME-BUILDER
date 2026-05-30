#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const pkgDir = path.join(scriptsDir, "..");
const args = process.argv.slice(2);
const nonInteractive = args.includes("--non-interactive") || args.includes("--latest");

function getArgValue(flag) {
  const index = args.indexOf(flag);
  if (index === -1 || index + 1 >= args.length) {
    return undefined;
  }
  return args[index + 1];
}

function readThemeNamesFromKcGen() {
  const kcGenPath = path.join(pkgDir, "src", "kc.gen.tsx");
  if (!existsSync(kcGenPath)) {
    return [];
  }

  const content = readFileSync(kcGenPath, "utf8");
  const match = content.match(/export const themeNames:\s*ThemeName\[\]\s*=\s*\[([^\]]*)\]/m);
  if (!match) {
    return [];
  }

  return [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

function askQuestion(prompt) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function resolveSelectionOptions() {
  const explicitTheme = getArgValue("--theme");
  if (explicitTheme) {
    return { selectedTheme: explicitTheme };
  }

  if (nonInteractive || !process.stdin.isTTY) {
    return { selectedTheme: undefined };
  }

  const themeNames = readThemeNamesFromKcGen();
  if (themeNames.length === 0) {
    return { selectedTheme: undefined };
  }

  console.log("Build output mode:");
  console.log("  1. Compile/build and extract all themes");
  console.log("  2. Compile/build all themes, then extract selected theme only");

  const modeAnswer = await askQuestion("Choose [default: 1]: ");
  const selectedMode = modeAnswer === "" ? "1" : modeAnswer;

  if (selectedMode !== "2") {
    return { selectedTheme: undefined };
  }

  console.log("Available themes:");
  themeNames.forEach((themeName, index) => {
    console.log(`  ${index + 1}. ${themeName}`);
  });

  const themeAnswer = await askQuestion("Select theme number [default: 1]: ");
  const selectedIndex = themeAnswer === "" ? 0 : Number.parseInt(themeAnswer, 10) - 1;

  if (Number.isNaN(selectedIndex) || selectedIndex < 0 || selectedIndex >= themeNames.length) {
    console.error("Invalid theme selection. Exiting.");
    process.exit(1);
  }

  return { selectedTheme: themeNames[selectedIndex] };
}

function runNodeScript(scriptName, scriptArgs = []) {
  const scriptPath = path.join(scriptsDir, scriptName);
  const result = spawnSync(process.execPath, [scriptPath, ...scriptArgs], {
    stdio: "inherit",
    cwd: pkgDir,
    env: process.env,
  });

  if (result.error) {
    console.error(`[keycloak-theme] Failed to run ${scriptName}: ${result.error.message}`);
    return 1;
  }

  return result.status ?? 1;
}

const { selectedTheme } = await resolveSelectionOptions();

let code = runNodeScript("run-build-kc.mjs");
if (code !== 0) process.exit(code);

const extractArgs = [];
if (nonInteractive) {
  extractArgs.push("--non-interactive");
}
if (selectedTheme) {
  extractArgs.push("--theme", selectedTheme);
}

code = runNodeScript("extract-themes.mjs", extractArgs);
process.exit(code);

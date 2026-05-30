#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const pkgDir = path.join(scriptsDir, "..");
const args = process.argv.slice(2);
const nonInteractive = args.includes("--non-interactive") || args.includes("--latest");

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

let code = runNodeScript("run-build-kc.mjs");
if (code !== 0) process.exit(code);

code = runNodeScript("extract-themes.mjs", nonInteractive ? ["--non-interactive"] : []);
process.exit(code);

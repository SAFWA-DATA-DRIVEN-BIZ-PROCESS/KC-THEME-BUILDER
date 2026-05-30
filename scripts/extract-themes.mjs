#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const pkgDir = path.join(scriptsDir, "..");
const args = process.argv.slice(2);

const result = spawnSync(process.execPath, ["./extract-jar.js", ...args], {
  stdio: "inherit",
  cwd: pkgDir,
  env: process.env,
});

if (result.error) {
  console.error(`[keycloak-theme] Failed to run extract-jar.js: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);

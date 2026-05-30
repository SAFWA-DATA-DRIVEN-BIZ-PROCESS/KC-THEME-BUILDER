#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const pkgDir = path.join(scriptsDir, "..");

function run(command) {
  const result = spawnSync(command, {
    stdio: "inherit",
    cwd: pkgDir,
    env: process.env,
    shell: true,
  });

  if (result.error) {
    console.error(`[keycloak-theme] Failed to run ${command}: ${result.error.message}`);
    process.exit(1);
  }

  return result.status ?? 1;
}

let code = run("yarn run build");
if (code !== 0) process.exit(code);

code = run("yarn run keycloakify build");
process.exit(code);

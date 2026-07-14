import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { env, execPath, exit, platform } from "node:process";
import { fileURLToPath } from "node:url";

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspaceRoot = resolve(siteRoot, "..");

const task = process.argv[2];
const extraArgs = process.argv.slice(3);
const taskMap = {
  dev: [["astro", "dev"]],
  check: [["astro", "check"]],
  build: [
    ["astro", "check"],
    ["astro", "build"],
  ],
  production: [
    [
      "node",
      "--test",
      "./scripts/topic-inventory-checks.mjs",
      "./scripts/check-built-site-checks.mjs",
    ],
    ["vitest", "run"],
    ["astro", "check"],
    ["astro", "build"],
    ["node", "./scripts/check-built-site.mjs"],
  ],
  preview: [["astro", "preview"]],
  test: [
    [
      "node",
      "--test",
      "./scripts/topic-inventory-checks.mjs",
      "./scripts/check-built-site-checks.mjs",
    ],
    ["vitest", "run"],
  ],
};

if (!task || !taskMap[task]) {
  console.error(`Unknown task "${task ?? ""}". Expected one of: ${Object.keys(taskMap).join(", ")}`);
  exit(1);
}

function localBin(name) {
  if (name === "node") {
    return execPath;
  }

  const executable = `${name}${platform === "win32" ? ".cmd" : ""}`;
  const candidates = [
    join(workspaceRoot, "node_modules", ".bin", executable),
    join(siteRoot, "node_modules", ".bin", executable),
  ];
  return candidates.find((candidate) => existsSync(candidate)) ?? executable;
}

function run([binName, ...args]) {
  return new Promise((resolve, reject) => {
    const child = spawn(localBin(binName), args, {
      cwd: siteRoot,
      stdio: "inherit",
      shell: platform === "win32" && binName !== "node",
      env: {
        ...env,
        ASTRO_TELEMETRY_DISABLED: "1",
        TELEMETRY_DISABLED: "1",
      },
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${binName} ${args.join(" ")} exited with code ${code}`));
      }
    });
  });
}

for (const command of taskMap[task]) {
  const commandWithArgs = task === "dev" || task === "preview" ? [...command, ...extraArgs] : command;
  await run(commandWithArgs);
}

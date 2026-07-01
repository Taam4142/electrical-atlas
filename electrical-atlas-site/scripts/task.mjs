import { spawn } from "node:child_process";
import { join } from "node:path";
import { cwd, env, exit, platform } from "node:process";

const task = process.argv[2];
const extraArgs = process.argv.slice(3);
const taskMap = {
  dev: [["astro", "dev"]],
  check: [["astro", "check"]],
  build: [
    ["astro", "check"],
    ["astro", "build"],
  ],
  preview: [["astro", "preview"]],
  test: [["vitest", "run"]],
};

if (!task || !taskMap[task]) {
  console.error(`Unknown task "${task ?? ""}". Expected one of: ${Object.keys(taskMap).join(", ")}`);
  exit(1);
}

function localBin(name) {
  return join(cwd(), "node_modules", ".bin", `${name}${platform === "win32" ? ".cmd" : ""}`);
}

function run([binName, ...args]) {
  return new Promise((resolve, reject) => {
    const child = spawn(localBin(binName), args, {
      stdio: "inherit",
      shell: platform === "win32",
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

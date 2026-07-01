import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve, sep } from "node:path";

const args = new Map(
  process.argv
    .slice(2)
    .map((value, index, array) => (value.startsWith("--") ? [value.slice(2), array[index + 1]] : null))
    .filter(Boolean),
);

const host = args.get("host") || "127.0.0.1";
const port = Number(args.get("port") || 4321);
const root = resolve("dist");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function resolveRequest(url) {
  const parsed = new URL(url || "/", `http://${host}:${port}`);
  const pathname = decodeURIComponent(parsed.pathname);
  const safePath = pathname.replace(/^\/+/, "");
  let candidate = resolve(root, safePath);

  if (!candidate.startsWith(root + sep) && candidate !== root) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    candidate = join(candidate, "index.html");
  }

  if (!existsSync(candidate) && !extname(candidate)) {
    candidate = join(candidate, "index.html");
  }

  return candidate;
}

const server = createServer((request, response) => {
  const file = resolveRequest(request.url);

  if (!file || !existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": mime[extname(file)] || "application/octet-stream",
    "cache-control": "no-store",
  });
  createReadStream(file).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Electrical Atlas static preview: http://${host}:${port}/`);
});

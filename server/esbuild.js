import { build } from "esbuild";

const outputFolder = "./dist/";
const entryPoints = [
  // { src: "./server/server.js", filename: "server.bundle.js" },
  { src: "./.fastedge/static-index.js", filename: "static-index.bundle.js" },
];

async function buildAll() {
  for (const { src, filename } of entryPoints) {
    await build({
      entryPoints: [src],
      bundle: true,
      outfile: `${outputFolder}${filename}`,
      format: "cjs",
      external: ["fastedge::fs"],
      // sourcemap: true,
      platform: "node",
      logLevel: "info",
    });
  }
}

try {
  await buildAll();
} catch (e) {
  console.error("Build Failed:", e);
}

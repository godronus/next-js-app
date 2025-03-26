// esbuild.config.js
import { build } from "esbuild";

const entryFile = "server.js";
const outputFile = "dist/server.bundle.js";

build({
  entryPoints: [entryFile],
  bundle: true,
  outfile: outputFile,
  platform: "node",
  target: "node14", // Adjust based on your Node.js version
  loader: {
    ".js": "js",
  },
  logLevel: "info",
}).catch(() => process.exit(1));

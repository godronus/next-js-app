import { createServer } from "http";
import { parse } from "url";
import next from "../node_modules/next/dist/server/next-server";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    console.log("Farq: new requests: req.url", req.url);
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});

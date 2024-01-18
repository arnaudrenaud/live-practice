import { Weather } from "./Weather";
import express from "express";

const PORT = 3500;
async function main() {
  const server = express();

  server.get("/", (request, response) => {
    return response.json({ message: "Hello world!" });
  });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

main();

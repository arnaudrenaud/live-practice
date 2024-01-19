import { Weather } from "./Weather";
import express from "express";

const PORT = 3500;
async function main() {
  const server = express();

  server.get("/", (_request, response) => {
    return response.json({ message: "Hello world!" });
  });

  server.get("/weather", async (_request, response) => {
    const weather = new Weather("Lille");
    await weather.setCurrent();
    return response.json(weather);
  });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

main();

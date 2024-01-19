import "reflect-metadata";
import { Weather } from "./Weather";
import express from "express";
import { DataSource } from "typeorm";
import { Place } from "./Place";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./sqlite.db",
  entities: [Place],
  synchronize: true,
});

const PORT = 3500;
async function main() {
  await dataSource.initialize();
  console.log("Successfully connected to database.");
  const server = express();

  server.get("/", (_request, response) => {
    return response.json({ message: "Hello world!" });
  });

  server.get("/weather", async (_request, response) => {
    const weather = new Weather("Lille");
    await weather.setCurrent();
    return response.json(weather);
  });

  server.get("/search/places", (request, response) => {
    const { name } = request.query;
    if (!name || Array.isArray(name)) {
      return response.status(400).json({
        error:
          "You must supply a single query param `name` to search for locations.",
      });
    }
    // TODO: implement behavior
    return response.json({});
  });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

main();

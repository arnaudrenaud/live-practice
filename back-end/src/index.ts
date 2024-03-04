import "reflect-metadata";
import { Weather } from "./Weather";
import express from "express";
import { DataSource } from "typeorm";
import { Place } from "./Place";
import { searchPlaces } from "./controllers";
import { WeatherDescription } from "./weather-codes";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./sqlite.db",
  entities: [Place],
  synchronize: true,
});

type PlaceWithWeather = {
  name: string;
  weather: {
    temperatureCelsius: number;
    weatherDescription: WeatherDescription;
  };
};

const PORT = 3500;
async function main() {
  await dataSource.initialize();
  console.log("Successfully connected to database.");
  const server = express();

  server.get("/", (_request, response) => {
    return response.json({ message: "Hello world!" });
  });

  server.get("/weather", async (_request, response) => {});

  server.get("/search/places", searchPlaces);

  server.get("/places", async (request, response) => {
    const placesWithWeather: PlaceWithWeather[] = [
      {
        name: "Paris",
        weather: {
          temperatureCelsius: 7,
          weatherDescription: { text: "Bruine légère", icon: "🌧️" },
        },
      },
      {
        name: "Lille",
        weather: {
          temperatureCelsius: 5,
          weatherDescription: { text: "Principalement dégagé", icon: "☁️" },
        },
      },
    ];
    return response.json({ placesWithWeather });
  });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

main();

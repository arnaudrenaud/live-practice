import { Weather } from "./types";
import { WEATHER_CODES } from "./weather-codes";

const WEATHER_FOR_CITIES: Weather[] = [
  { city: "Lille", country: "France", temperatureCelsius: -2, weatherCode: 2 },
  { city: "Paris", country: "France", temperatureCelsius: -1, weatherCode: 45 },
  { city: "Reims", country: "France", temperatureCelsius: -4, weatherCode: 0 },
];

export function getWeatherForCity(city: string): Weather {
  const weather = WEATHER_FOR_CITIES.find((weather) => weather.city === city);
  if (!weather) {
    throw new Error(`No weather found for city ${city}.`);
  }
  return weather;
}

export function printWeatherForCity(city: string): void {
  const weather = getWeatherForCity(city);
  const icon: string = WEATHER_CODES[weather.weatherCode].icon;
  const text: string = WEATHER_CODES[weather.weatherCode].text;

  console.log(
    "┌" +
      "-".repeat(
        45 + (text.length + icon.length >= 20 ? text.length + icon.length : 18)
      ) +
      "┐"
  );
  console.log("| City   | Country   | Temperature (°C) | Weather Description");
  console.log(
    "|" +
      "-".repeat(
        45 + (text.length + icon.length >= 20 ? text.length + icon.length : 18)
      ) +
      "|"
  );
  console.log(
    `| ${weather.city}  | ${weather.country}    | ${weather.temperatureCelsius}°C             | ${icon} ${text}`
  );
  console.log(
    "└" +
      "-".repeat(
        45 + (text.length + icon.length >= 20 ? text.length + icon.length : 18)
      ) +
      "┘"
  );
}

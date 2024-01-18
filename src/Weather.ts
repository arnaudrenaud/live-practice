import { TemperatureUnit, WeatherAttributes } from "./types";
import { WEATHER_CODES } from "./weather-codes";

const WEATHER_FOR_CITIES: WeatherAttributes[] = [
  { city: "Lille", country: "France", temperatureCelsius: -2, weatherCode: 2 },
  { city: "Paris", country: "France", temperatureCelsius: -1, weatherCode: 45 },
  { city: "Reims", country: "France", temperatureCelsius: -4, weatherCode: 0 },
];

export function getWeatherForCity(city: string): WeatherAttributes {
  const weather = WEATHER_FOR_CITIES.find((weather) => weather.city === city);
  if (!weather) {
    throw new Error(`No weather found for city ${city}.`);
  }
  return weather;
}

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export function printWeatherForCity(
  city: string,
  temperatureUnit: TemperatureUnit = "CELSIUS"
): void {
  const weather = getWeatherForCity(city);
  const icon: string = WEATHER_CODES[weather.weatherCode].icon;
  const text: string = WEATHER_CODES[weather.weatherCode].text;

  const temperature = Math.round(
    temperatureUnit === "CELSIUS"
      ? weather.temperatureCelsius
      : getTemperatureFahrenheit(weather.temperatureCelsius)
  );
  const shortTemperatureUnit = temperatureUnit === "CELSIUS" ? "C" : "F";

  console.log(
    "┌" +
      "-".repeat(
        45 + (text.length + icon.length >= 20 ? text.length + icon.length : 18)
      ) +
      "┐"
  );
  console.log(
    `| City   | Country   | Temperature (°${shortTemperatureUnit}) | Weather Description`
  );
  console.log(
    "|" +
      "-".repeat(
        45 + (text.length + icon.length >= 20 ? text.length + icon.length : 18)
      ) +
      "|"
  );
  console.log(
    `| ${weather.city}  | ${weather.country}    | ${temperature}°${shortTemperatureUnit}             | ${icon} ${text}`
  );
  console.log(
    "└" +
      "-".repeat(
        45 + (text.length + icon.length >= 20 ? text.length + icon.length : 18)
      ) +
      "┘"
  );
}

export class Weather implements WeatherAttributes {
  city: string;
  country: string;
  temperatureCelsius: number;
  weatherCode: number;


  constructor(city: string) {
    this.city = // reprendre le code de getWeatherForCity
  }

  print() {}
}
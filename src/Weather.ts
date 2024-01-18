import {
  CoordinatesForCity,
  TemperatureUnit,
  WeatherAttributes,
} from "./types";
import { WEATHER_CODES } from "./weather-codes";

const COORDINATES_FOR_CITIES: CoordinatesForCity[] = [
  { city: "Lille", latitude: 50.6365654, longitude: 3.0635282 },
  { city: "Paris", latitude: 48.8534951, longitude: 2.3483915 },
  { city: "Reims", latitude: 49.2577886, longitude: 4.031926 },
];

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export class Weather implements WeatherAttributes {
  city: string;
  temperatureCelsius: number;
  weatherCode: number;

  constructor(city: string) {
    this.city = city;
  }

  async setCurrent() {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    );
    const weather = await weatherResponse.json();

    // set this.temperatureCelsius, this.weatherCode
  }

  print(temperatureUnit: TemperatureUnit = "CELSIUS"): void {
    const icon: string = WEATHER_CODES[this.weatherCode].icon;
    const text: string = WEATHER_CODES[this.weatherCode].text;

    const temperature = Math.round(
      temperatureUnit === "CELSIUS"
        ? this.temperatureCelsius
        : getTemperatureFahrenheit(this.temperatureCelsius)
    );
    const shortTemperatureUnit = temperatureUnit === "CELSIUS" ? "C" : "F";

    console.log(
      "┌" +
        "-".repeat(
          45 +
            (text.length + icon.length >= 20 ? text.length + icon.length : 18)
        ) +
        "┐"
    );
    console.log(
      `| City  | Temperature (°${shortTemperatureUnit}) | Weather Description`
    );
    console.log(
      "|" +
        "-".repeat(
          45 +
            (text.length + icon.length >= 20 ? text.length + icon.length : 18)
        ) +
        "|"
    );
    console.log(
      `| ${this.city}   | ${temperature}°${shortTemperatureUnit}             | ${icon} ${text}`
    );
    console.log(
      "└" +
        "-".repeat(
          45 +
            (text.length + icon.length >= 20 ? text.length + icon.length : 18)
        ) +
        "┘"
    );
  }
}

import { TemperatureUnit, WeatherAttributes } from "./types";
import { WEATHER_CODES } from "./weather-codes";

const WEATHER_FOR_CITIES: WeatherAttributes[] = [
  { city: "Lille", country: "France", temperatureCelsius: -2, weatherCode: 2 },
  { city: "Paris", country: "France", temperatureCelsius: -1, weatherCode: 45 },
  { city: "Reims", country: "France", temperatureCelsius: -4, weatherCode: 0 },
];

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export class Weather implements WeatherAttributes {
  city: string;
  country: string;
  temperatureCelsius: number;
  weatherCode: number;

  constructor(city: string) {
    const { country, temperatureCelsius, weatherCode } =
      Weather.getWeatherForCity(city);

    this.city = city;
    this.country = country;
    this.temperatureCelsius = temperatureCelsius;
    this.weatherCode = weatherCode;
  }

  private static getWeatherForCity(city: string): WeatherAttributes {
    const weather = WEATHER_FOR_CITIES.find((weather) => weather.city === city);
    if (!weather) {
      throw new Error(`No weather found for city ${city}.`);
    }
    return weather;
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
      `| City   | Country   | Temperature (°${shortTemperatureUnit}) | Weather Description`
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
      `| ${this.city}  | ${this.country}    | ${temperature}°${shortTemperatureUnit}             | ${icon} ${text}`
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

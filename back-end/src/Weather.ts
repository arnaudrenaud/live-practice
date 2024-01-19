import { Place } from "./Place";
import { CoordinatesForCity, TemperatureUnit } from "./types";
import { WEATHER_CODES } from "./weather-codes";

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export class Weather {
  place: Place;
  temperatureCelsius?: number;
  weatherCode?: number;

  constructor(place: Place) {
    this.place = place;
  }

  async setCurrent(): Promise<void> {
    const { latitude, longitude } = this.place;

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
    );
    const weather = (await weatherResponse.json()) as {
      current: { temperature_2m: number; weather_code: number };
    };

    this.temperatureCelsius = weather.current.temperature_2m;
    this.weatherCode = weather.current.weather_code;
  }

  print(temperatureUnit: TemperatureUnit = "CELSIUS"): void {
    if (
      this.temperatureCelsius === undefined ||
      this.weatherCode === undefined
    ) {
      throw new Error(
        `No weather data found for city ${this.place.name}: run \`setCurrent\` on Weather object.`
      );
    }

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
      `| City   | Temperature (°${shortTemperatureUnit}) | Weather Description`
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
      `| ${this.place.name}   | ${temperature}°${shortTemperatureUnit}             | ${icon} ${text}`
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

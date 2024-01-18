import { WeatherCodes } from "./weather-codes";

export type WeatherAttributes = {
  city: string;
  country: string;
  temperatureCelsius: number;
  weatherCode: keyof WeatherCodes;
};

export type TemperatureUnit = "CELSIUS" | "FAHRENHEIT";

import { WeatherCodes } from "./weather-codes";

export type Weather = {
  city: string;
  country: string;
  temperatureCelsius: number;
  weatherCode: keyof WeatherCodes;
};

export type TemperatureUnit = "CELSIUS" | "FAHRENHEIT";

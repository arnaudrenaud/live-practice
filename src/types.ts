import { WeatherCodes } from "./weather-codes";

export type WeatherAttributes = {
  city: string;
  country: string;
  temperatureCelsius: number;
  weatherCode: keyof WeatherCodes;
};

export type CoordinatesForCity = {
  city: string;
  latitude: number;
  longitude: number;
};

export type TemperatureUnit = "CELSIUS" | "FAHRENHEIT";

export type WeatherDescription = {
  text: string;
  icon: string;
};

export type WeatherCodes = {
  [code: number]: WeatherDescription;
};

export type CoordinatesForCity = {
  city: string;
  latitude: number;
  longitude: number;
};

export type TemperatureUnit = "CELSIUS" | "FAHRENHEIT";

export type PlaceWithWeather = {
  name: string;
  weather: {
    temperatureCelsius: number;
    weatherDescription: WeatherDescription;
  };
};

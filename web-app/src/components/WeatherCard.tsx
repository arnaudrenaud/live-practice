import { PlaceWithWeather, TemperatureUnit } from "../types";
import "../App.css";
import { useContext } from "react";
import {
  TemperatureUnitContext,
  TemperatureUnitContextType,
} from "../TemperatureUnitContext";

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

function getPrintableTemperature(
  temperatureCelsius: number,
  temperatureUnit: TemperatureUnit
): string {
  if (temperatureUnit === TemperatureUnit.CELSIUS) {
    return `${temperatureCelsius} °C`;
  }
  return `${getTemperatureFahrenheit(temperatureCelsius)} °F`;
}

export function WeatherCard({
  name,
  weather: { temperatureCelsius, weatherDescription },
}: PlaceWithWeather) {
  const { unit } = useContext(
    TemperatureUnitContext
  ) as TemperatureUnitContextType;

  return (
    <div className="WeatherCard">
      <div>
        <b>{name}</b>
      </div>
      <span>{weatherDescription.icon}</span>{" "}
      <span>{getPrintableTemperature(temperatureCelsius, unit)}</span>
    </div>
  );
}

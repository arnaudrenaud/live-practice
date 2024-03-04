import { PlaceWithWeather, TemperatureUnit } from "../types";
import "../App.css";

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
  temperatureUnit = TemperatureUnit.CELSIUS,
}: PlaceWithWeather & { temperatureUnit?: TemperatureUnit }) {
  return (
    <div className="WeatherCard">
      <div>
        <b>{name}</b>
      </div>
      <span>{weatherDescription.icon}</span>{" "}
      <span>
        {getPrintableTemperature(temperatureCelsius, temperatureUnit)}
      </span>
    </div>
  );
}

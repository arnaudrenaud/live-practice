import { PlaceWithWeather } from "../types";
import "../App.css";

export function WeatherCard({
  name,
  weather: { temperatureCelsius, weatherDescription },
}: PlaceWithWeather) {
  return (
    <div className="WeatherCard">
      <div>
        <b>{name}</b>
      </div>
      <span>{weatherDescription.icon}</span> <span>{temperatureCelsius}°C</span>
    </div>
  );
}

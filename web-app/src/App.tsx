import { useEffect, useState } from "react";
import "./App.css";

import { PlaceWithWeather, TemperatureUnit } from "./types";
import { WeatherCard } from "./components/WeatherCard";
import { TemperatureSwitch } from "./components/TemperatureSwitch";
import { TemperatureUnitContext } from "./TemperatureUnitContext";

function App() {
  const [temperatureUnit, setTemperatureUnit] = useState(
    TemperatureUnit.CELSIUS
  );
  const [placesWithWeather, setPlacesWithWeather] =
    useState<PlaceWithWeather[]>();

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch("/places");
      const data = await response.json();
      setPlacesWithWeather(data.placesWithWeather);
    }
    fetchPlaces();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TemperatureUnitContext.Provider
          value={{ unit: temperatureUnit, setUnit: setTemperatureUnit }}
        >
          <div className="App-grid">
            {placesWithWeather &&
              placesWithWeather.map((place) => (
                <WeatherCard {...place} key={place.name} />
              ))}
          </div>
          <TemperatureSwitch />
        </TemperatureUnitContext.Provider>
      </header>
    </div>
  );
}

export default App;

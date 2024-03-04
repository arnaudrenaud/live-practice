import { useEffect, useState } from "react";
import "./App.css";

import { PlaceWithWeather, TemperatureUnit } from "./types";
import { WeatherCard } from "./components/WeatherCard";
import { TemperatureSwitch } from "./components/TemperatureSwitch";

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
        <div className="App-grid">
          {placesWithWeather &&
            placesWithWeather.map((place) => (
              <WeatherCard
                {...place}
                temperatureUnit={temperatureUnit}
                key={place.name}
              />
            ))}
        </div>
        <TemperatureSwitch
          unit={temperatureUnit}
          setUnit={setTemperatureUnit}
        />
      </header>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

import { PlaceWithWeather } from "./types";
import { WeatherCard } from "./components/WeatherCard";

function App() {
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
              <WeatherCard {...place} key={place.name} />
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;

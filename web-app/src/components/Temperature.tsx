import { useState } from "react";

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

export function Temperature() {
  const [isCelsius, setIsCelsius] = useState(true);

  const TEMPERATURE = 5;

  return (
    <div>
      {isCelsius ? TEMPERATURE : getTemperatureFahrenheit(TEMPERATURE)}°
      {isCelsius ? "C" : "F"}
      <fieldset>
        <legend>Unité d'affichage :</legend>
        <label>
          <input
            type="radio"
            name="unit"
            value="celsius"
            onClick={() => {
              setIsCelsius(true);
            }}
            defaultChecked
          />
          Celsius
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="unit"
            value="fahrenheit"
            onClick={() => {
              setIsCelsius(false);
            }}
          />
          Fahrenheit
        </label>
      </fieldset>
    </div>
  );
}

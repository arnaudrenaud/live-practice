import { useState } from "react";

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

enum TemperatureUnit {
  CELSIUS,
  FAHRENHEIT,
}

export function Temperature() {
  const [unit, setUnit] = useState<TemperatureUnit>(TemperatureUnit.CELSIUS);

  const TEMPERATURE = 5;

  return (
    <div>
      {unit === TemperatureUnit.CELSIUS
        ? TEMPERATURE
        : getTemperatureFahrenheit(TEMPERATURE)}
      °{unit === TemperatureUnit.CELSIUS ? "C" : "F"}
      <fieldset>
        <legend>Unité d'affichage :</legend>
        <label>
          <input
            type="radio"
            name="unit"
            value="celsius"
            onClick={() => {
              setUnit(TemperatureUnit.CELSIUS);
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
              setUnit(TemperatureUnit.FAHRENHEIT);
            }}
          />
          Fahrenheit
        </label>
      </fieldset>
    </div>
  );
}

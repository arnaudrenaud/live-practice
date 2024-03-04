import { useState } from "react";

function getShuffledArray<T>(array: T[]): T[] {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// getShuffledArray([2, 5, 10]);
// getShuffledArray(["aa", "b", "0"]);
// getShuffledArray([{ a: 1 }, { a: "1" }]);

function getTemperatureFahrenheit(tempCelsius: number): number {
  return (tempCelsius * 9) / 5 + 32;
}

enum TemperatureUnit {
  CELSIUS,
  FAHRENHEIT,
}

type Props = {
  value: number;
};

export function Temperature({ value }: Props) {
  const [unit, setUnit] = useState(TemperatureUnit.CELSIUS);

  return (
    <div>
      {unit === TemperatureUnit.CELSIUS
        ? value
        : getTemperatureFahrenheit(value)}
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

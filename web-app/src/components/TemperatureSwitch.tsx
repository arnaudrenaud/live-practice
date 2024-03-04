import { TemperatureUnit } from "../types";

import "../App.css";

type Props = {
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
};

export function TemperatureSwitch({ unit, setUnit }: Props) {
  return (
    <div className="TemperatureSwitch">
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

import { TemperatureUnit } from "../types";

import "../App.css";
import { useContext } from "react";
import {
  TemperatureUnitContext,
  TemperatureUnitContextType,
} from "../TemperatureUnitContext";

export function TemperatureSwitch() {
  const { setUnit } = useContext(
    TemperatureUnitContext
  ) as TemperatureUnitContextType;

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

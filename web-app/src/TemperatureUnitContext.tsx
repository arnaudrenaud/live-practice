import { createContext } from "react";
import { TemperatureUnit } from "./types";

export type TemperatureUnitContextType = {
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
};

export const TemperatureUnitContext =
  createContext<TemperatureUnitContextType | null>(null);

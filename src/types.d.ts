import { initialState } from "./constant";
import { SetStateAction } from "react";

export type mode = "true" | "false";

export interface EventValuesContextType {
  setMode(value: mode): void;
  setScreenSize(value: number): void;
  screenSize: number;
  toggleTheme(value: string): void;
  mode: mode;
  showHamburgerMenu: boolean;
  setShowHamburgerMenu(value: SetStateAction<boolean>): void;
}

export type SubHamburgerMenuType = {
  [key: string]: string;
  isPresent: keyof typeof initialState;
};
export type HamburgerMenuType = {
  [key: string]: SubHamburgerMenuType | string;
  subMenu: SubHamburgerMenuType;
};

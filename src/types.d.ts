import { initialState } from "./constant";

export type mode = "true" | "false";

export interface EventValuesContextType {
  setMode(value: mode): void;
  setScreenSize(value: number): void;
  screenSize: number;
  toggleTheme(value: string): void;
  mode: mode;
}

export type SubHamburgerMenuType = {
  [key: string]: string;
  isPresent: keyof typeof initialState;
};
export type HamburgerMenuType = {
  [key: string]: SubHamburgerMenuType | string;
  subMenu: SubHamburgerMenuType;
};

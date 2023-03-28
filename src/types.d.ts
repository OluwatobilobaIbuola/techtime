export type mode = "true" | "false";

export interface EventValuesContextType {
  setMode(value: mode): void;
  setScreenSize(value: number): void;
  screenSize: number;
  toggleTheme(value: string): void;
  mode: mode;
}

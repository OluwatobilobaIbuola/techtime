import React from "react";
import { createContext, useState } from "react";
import { EventValuesContextType, mode } from "../types";

export const EventValues = createContext<EventValuesContextType>({
  mode: "false",
  screenSize: window.innerWidth,
  setScreenSize: () => {},
  setMode: () => {},
  toggleTheme: () => {},
});

export const EventValuesContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<mode>("true");
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const toggleTheme = (mode: mode): void => {
    if (mode === "false") {
      setMode("true");
      localStorage.setItem("mode", "true");
    } else {
      setMode("false");
      localStorage.setItem("mode", "false");
    }
  };

  return (
    <EventValues.Provider
      value={{
        screenSize,
        setScreenSize,
        toggleTheme,
        mode,
        setMode,
      }}
    >
      {children}
    </EventValues.Provider>
  );
};

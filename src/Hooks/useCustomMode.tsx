import { useEffect, useContext } from "react";
import { EventValues } from "../context/context";
export const useCustomMode = () => {
  const { mode, setMode } = useContext(EventValues);

  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    if (localMode === null) {
      return;
    } else if (localMode === "true" || localMode === "false") {
      setMode(localMode);
    }
  }, [setMode]);
  return mode;
};

import { useEffect, useContext } from "react";
import { EventValues } from "../context/context";
export const useCustomMedia = () => {
  const { screenSize, setScreenSize } = useContext(EventValues);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  return { screenSize };
};

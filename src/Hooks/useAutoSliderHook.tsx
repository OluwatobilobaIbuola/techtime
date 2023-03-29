import { useState, useEffect } from "react";

export const useAutoSliderHook = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let xLength = String(`${slideIndex * 606}px`);
  const infiniteClick = () => {
    setSlideIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      infiniteClick();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return { xLength, slideIndex };
};

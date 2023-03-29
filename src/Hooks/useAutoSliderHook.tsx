import { useState, useEffect } from "react";

export const useAutoSliderHook = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const infiniteClick = () => {
    setSlideIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      infiniteClick();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return { slideIndex };
};

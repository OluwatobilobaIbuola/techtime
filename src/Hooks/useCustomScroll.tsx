import { useScroll, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export const useCustomScroll = () => {
  const { scrollY } = useScroll();
  const [, setScrollProgress] = useState(0);
  const animation = useAnimation();
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrollProgress((prevState) => {
        if (latest < prevState) {
          animation.start({
            y: "0",
            transition: { type: "spring", duration: 0.4 },
          });
        } else {
          animation.start({
            y: "-100%",
            transition: { type: "spring", duration: 0.4 },
          });
        }
        return latest;
      });
    });
  }, [animation, scrollY]);
  return animation;
};

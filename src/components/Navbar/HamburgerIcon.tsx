import React from "react";
import { useContext } from "react";
import { EventValues } from "../../context/context";
import { motion } from "framer-motion";

export default function HamburgerIcon() {
  const { showHamburgerMenu, setShowHamburgerMenu } = useContext(EventValues);
  return (
    <div
      onClick={() => setShowHamburgerMenu((prev) => (prev = !prev))}
      className="sm:hidden inline-block absolute w-[22px] right-1 top-[50%] -translate-y-[50%] h-[22px]"
    >
      <motion.div
        className={` ${
          showHamburgerMenu
            ? "after:w-full before:w-full transform before:translate-y-0 after:translate-y-0 rotate-45 after:-rotate-90"
            : "before:w-[60%] after:w-[80%] after:right-0 before:right-0 transform after:translate-y-[8.5px] before:-translate-y-[8.5px]"
        } absolute w-full top-[50%] -translate-y-[50%] h-[2px] bg-white before:absolute after:absolute  
      before:h-[2px] before:bg-white before:content-[' '] after:h-[2px] after:bg-white after:content-[' '] 
      transition ease-in-out duration-500`}
      />
    </div>
  );
}

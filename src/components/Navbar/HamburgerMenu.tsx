import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { arrowRight } from "../../assets/icons";
import { hamburgerMenu, initialState } from "../../constant";
import { useOnClickOutside } from "../../Hooks/useOnClickOutside";
const activeLink =
  "text-[16px] leading-[22px] font-[700] p-[8px] flex gap-x-4 items-center whitespace-nowrap text-white";
const normalLink = `text-[16px] leading-[22px] font-[700] flex gap-x-4 items-center whitespace-nowrap p-[8px] rounded-[16px] 
text-textBlueVariant transition duration-500 ease-in-out`;

export default function HamburgerMenu() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showSubHamburgerMenu, setSubShowHamburgerMenu] =
    useState(initialState);
  const handleClick = (clicked: keyof typeof initialState) => {
    setSubShowHamburgerMenu({
      ...initialState,
      [clicked]: !showSubHamburgerMenu[clicked],
    });
  };
  // const closeRef = useRef<HTMLElement>(null);
  // useOnClickOutside(closeRef, () => setShowHamburgerMenu(false));
  return (
    <>
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

      <motion.div
        initial={{ x: "100vw" }}
        animate={showHamburgerMenu ? { x: "0" } : { x: "100vw" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="fixed top-[100px] right-0 left-0 bottom-0 bg-black/60"
      >
        <motion.nav
          // ref={closeRef}
          initial={{ opacity: 0 }}
          animate={showHamburgerMenu ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          className={`flex gap-y-2 md:gap-y-6 flex-col bg-primary h-[70%] pt-8 px-4`}
        >
          {hamburgerMenu.map(
            ({ menu, subMenu: { name, isPresent } }, index) => {
              return (
                <motion.div
                  key={index}
                  animate={{
                    height: showSubHamburgerMenu[isPresent] ? "100px" : "60px",
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    ease: "easeIn",
                    delay: !showSubHamburgerMenu[isPresent] ? 0.5 : 0,
                  }}
                  onClick={() => handleClick(isPresent)}
                  className="py-2"
                >
                  <div className="flex justify-between">
                    <NavLink
                      to=""
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {typeof menu === "string" ? menu : null}
                    </NavLink>
                    <motion.img
                      animate={
                        showSubHamburgerMenu[isPresent]
                          ? { rotateZ: "90deg" }
                          : { rotateZ: "0" }
                      }
                      transition={{
                        duration: 0.5,
                        ease: "easeIn",
                        type: "tween",
                      }}
                      src={arrowRight}
                      className={`cursor-pointer`}
                      alt="arrowRight"
                    />
                  </div>

                  <motion.p
                    animate={{
                      opacity: showSubHamburgerMenu[isPresent] ? 1 : 0,
                      height: showSubHamburgerMenu[isPresent] ? "auto" : 0,
                      padding: showSubHamburgerMenu[isPresent] ? "8px" : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "tween",
                      ease: "easeIn",
                      delay: showSubHamburgerMenu[isPresent] ? 0.5 : 0,
                    }}
                    className={` ${"text-secondary_two"}`}
                  >
                    {name}
                  </motion.p>
                </motion.div>
              );
            }
          )}
        </motion.nav>
      </motion.div>
    </>
  );
}

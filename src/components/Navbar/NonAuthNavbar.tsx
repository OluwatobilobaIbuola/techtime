import { Link, NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../../Hooks/useOnClickOutside";
import { techtime } from "../../assets/images/index";
import { close, menu } from "../../assets/icons";
import Button from "../Button/index";
import { useCustomScroll } from "../../Hooks/useCustomScroll";
import { motion } from "framer-motion";

export default function NonAuthNavbar(): JSX.Element {
  const animation = useCustomScroll();
  const [toggle, setToggle] = useState(false);
  const closeRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(closeRef, () => setToggle((prev) => (prev = false)));

  const activeLink =
    "text-[16px] leading-[22px] font-[700] p-[8px] flex gap-x-4 items-center whitespace-nowrap text-white";
  const normalLink =
    "text-[16px] leading-[22px] font-[700] flex gap-x-4 items-center whitespace-nowrap p-[8px] rounded-[16px] text-textBlueVariant transition duration-500 ease-in-out";

  return (
    <motion.div
      animate={animation}
      className={`sm:h-[150px] h-[100px] bg-primary top-0 left-0 right-0 sticky z-[100]`}
    >
      <div className={`px-4 sm:px-28 h-full`}>
        <div className={`h-full`}>
          <div className={`h-full flex justify-between gap-x-10 items-center`}>
            <Link to="/" className="flex-1">
              <div className="flex items-center sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]">
                <img
                  alt=""
                  className="rounded-[4px] max-w-full max-h-full object-cover"
                  src={techtime}
                />
              </div>
            </Link>
            <nav className={`sm:flex hidden ml-auto`}>
              <div className="flex gap-x-2 md:gap-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  About
                </NavLink>

                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Courses
                </NavLink>

                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Testimonials
                </NavLink>

                <NavLink
                  to="community"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Community
                </NavLink>
              </div>
            </nav>

            <div className={`hidden md:inline-block`}>
              <Button
                active={"Enroll Now"}
                wrap="whitespace-nowrap"
                width="max-w-[145px]"
                text="Enroll Now"
                border="border-[1px]"
                bgColor="bg-white"
                textColor="text-primary"
              />
            </div>
            <div
              ref={closeRef}
              className="sm:hidden flex flex-1 z-[10] justify-end items-center"
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

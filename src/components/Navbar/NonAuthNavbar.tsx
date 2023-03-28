import { Link, NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { EventValues } from "../../context/context";
import { useContext } from "react";
import { useOnClickOutside } from "../../Hooks/useOnClickOutside";
import { techtime } from "../../assets/images/index";
import { close, menu } from "../../assets/icons";
import Button from "../Button/index";

export default function NonAuthNavbar(): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const { mode } = useContext(EventValues);
  const closeRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(closeRef, () => setToggle((prev) => (prev = false)));

  const activeLink =
    "text-[16px] leading-[22px] font-[700] p-[8px] flex gap-x-4 items-center whitespace-nowrap text-white";
  const normalLink =
    "text-[16px] leading-[22px] font-[700] flex gap-x-4 items-center whitespace-nowrap p-[8px] rounded-[16px] text-textBlueVariant transition duration-500 ease-in-out";

  return (
    <div
      className={`sm:h-[150px] h-[100px] bg-primary top-0 left-0 right-0 fixed z-[100]`}
    >
      <div className={`px-4 sm:px-12 h-full`}>
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
              <div className="flex gap-x-[1.5rem]">
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

            <div className={``}>
              <Button
                active={"Enroll Now"}
                wrap="whitespace-nowrap"
                width="w-[145px]"
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
              {toggle && (
                <div
                  className={` p-6 ${
                    mode === "true" ? "bg-colorTwo" : null
                  } absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar`}
                >
                  <ul
                    className={`text-white flex justify-end items-start flex-1 flex-col gap-[1rem] text-[16px] font-semibold`}
                  >
                    <li onClick={() => setToggle((prev) => !prev)}>
                      <Link
                        to="/"
                        className={`flex items-center justify-center  gap-x-[0.5rem]`}
                      >
                        Home
                      </Link>
                    </li>
                    <li onClick={() => setToggle((prev) => !prev)}>
                      <Link
                        to="/prices"
                        className={`flex items-center justify-center  gap-x-[0.5rem]`}
                      >
                        About
                      </Link>
                    </li>
                    <li onClick={() => setToggle((prev) => !prev)}>
                      <Link
                        to="/services"
                        className={`flex items-center justify-center  gap-x-[0.5rem]`}
                      >
                        Courses
                      </Link>
                    </li>
                    <li onClick={() => setToggle((prev) => !prev)}>
                      <Link
                        to="/associate"
                        className={`flex items-center justify-center  gap-x-[0.5rem]`}
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li onClick={() => setToggle((prev) => !prev)}>
                      <Link
                        to="/FAQ"
                        className={`flex items-center justify-center  gap-x-[0.5rem]`}
                      >
                        Community
                      </Link>
                    </li>

                    <Button
                      active={"ENROLL NOW"}
                      wrap="whitespace-nowrap"
                      width="w-[140px]"
                      text="ENROLL NOW"
                      border="border-[1px]"
                      bgColor="bg-transparent"
                      textColor="text-mainBlueDarkShade"
                    />
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

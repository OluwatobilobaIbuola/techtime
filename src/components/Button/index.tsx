import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
}
export default function Button({
  wrap,
  width,
  textColor,
  text,
  bgColor,
  LogoIcon,
  click,
  active,
  height,
  type,
}: Props): JSX.Element {
  return (
    <button
      type={type}
      className={`${
        active === text ? bgColor : "bg-transparent"
      } ${wrap} flex items-center px-[1rem] py-[1rem] justify-center  rounded-[8px] outline-none h-[40px] sm:h-[54px] border ${height} 
        "border-white"
      ${width} `}
      onClick={click}
    >
      <p
        className={`${
          active === text ? textColor : "text-white"
        } px-[0.5rem] text-[12px] sm:text-[16px] leading-[1.5rem] font-[700]`}
      >
        {text}
      </p>
      {LogoIcon && <img src={LogoIcon} alt="icon" />}
    </button>
  );
}

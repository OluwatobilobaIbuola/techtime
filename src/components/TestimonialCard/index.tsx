import React from "react";

type Props = {
  profilePicture: string;
  person: string;
  title: string;
  testimony: string;
};

export default function TestimonialCard({
  profilePicture,
  person,
  title,
  testimony,
}: Props) {
  return (
    <>
      <p className="font-[500] leading-[14px] sm:leading-[28px] text-[10px] sm:text-[14px] text-neutralTwo">
        {testimony}
      </p>
      <div className="flex gap-x-4 mt-4 items-center">
        <div className="w-[30px] sm:w-[48px] h-[30px] sm:h-[48px]">
          <img
            className="w-full h-full"
            src={profilePicture}
            alt="look of the profile owner"
          />
        </div>
        <div>
          <h5 className="font-[500] leading-[14px] sm:leading-[19px] text-[10px] sm:text-[14px] text-black">
            {person}
          </h5>
          <p className="font-normal leading-[11px] sm:leading-[16px] text-[8px] sm:text-[12px] text-neutralTwo">
            {title}
          </p>
        </div>
      </div>
    </>
  );
}

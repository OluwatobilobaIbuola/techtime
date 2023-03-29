import React from "react";
import { TESTIMONIALSARR } from "../../constant";
import TestimonialCard from "../TestimonialCard";
import { useAutoSliderHook } from "../../Hooks/useAutoSliderHook";
import TestimonyNavigator from "../Navigator/TestimonyNavigator";

export default function Testimonials() {
  const { xLength, slideIndex } = useAutoSliderHook();
  return (
    <div className="px-4 sm:px-28 bg-bgNeutral py-12 sm:py-24 overflow-x-hidden">
      <div>
        <h1 className="font-clashDisplay text-center mb-2 leading-[40px] sm:leading-[69px] sm:text-[56px] text-[32px] font-[700] text-textBlack">
          What our clients are saying
        </h1>
        <p className="text-center font-[500] leading-[28px] text-[12px] sm:text-[16px] text-neutralTwo md:px-32">
          High-defination video is video of higher resolution and quality than
          standard definition. while there's no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <div
        className={`w-[1660px] sm:w-[3030px] -translate-x-[${xLength}] flex gap-x-4 mt-12 transition ease-in-out duration-1000`}
      >
        {TESTIMONIALSARR.map(
          ({ person, title, profilePicture, testimony }, index) => {
            return (
              <div
                key={index}
                className="w-[332px] sm:w-[606px] rounded-[24px] bg-white px-4 py-8"
              >
                <TestimonialCard
                  person={person}
                  title={title}
                  profilePicture={profilePicture}
                  testimony={testimony}
                />
              </div>
            );
          }
        )}
      </div>
      <TestimonyNavigator slideIndex={slideIndex} />
    </div>
  );
}

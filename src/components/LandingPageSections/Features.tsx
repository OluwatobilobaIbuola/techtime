import React from "react";
import { featuresImageOne, yellowSpiral } from "../../assets/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../../styles/styles";
import { meeting, mentor, people, prices } from "../../assets/icons";

export default function Features() {
  return (
    <section className="px-4 sm:px-28 bg-bgNeutral py-12 sm:py-24 relative">
      <div className="flex sm:flex-row flex-col gap-16">
        <div className="flex-[40%] relative">
          <h3
            className={`relative font-clashDisplay mb-2 leading-[36px] sm:leading-[50px] xl:leading-[70px] xl:text-[56px]
            sm:text-[32px] text-[24px] font-[700] text-center sm:text-left text-textBlack`}
          >
            This is why we are better <br />
            than others
          </h3>
          <p className="mt-4 sm:mt-8 text-neutralTwo text-center md:text-left text-[12px] sm:text-[16px]">
            High-defination video is video of higher resolution and quality than
            standard <br className="hidden xl:inline-block" />
            definition. while there's no standard meaning for high definition,
            generally any <br className="hidden xl:inline-block" /> standard
            video image
          </p>
          <div className="mt-8 max-w-[712px] max-h-[475px]">
            <LazyLoadImage
              src={featuresImageOne}
              className="max-h-full max-w-full rounded-[24px]"
              alt="learning with a laptop"
              effect="blur"
              placeholderSrc={featuresImageOne}
            />
          </div>
        </div>
        <div className="flex-[40%] flex flex-wrap gap-8 items-center self-center">
          <div className="py-4 px-8 flex-[40%] rounded-[8px] bg-white  xs:min-w-[300px]">
            <span
              className={`${styles.flexCenter} w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[4px] bg-bgBoxSix`}
            >
              <img src={mentor} alt="icon" />
            </span>
            <h4 className="mt-4 font-[700] text-[16px] leading-[22px] text-textBlack">
              Experienced Mentors
            </h4>
            <p className="mt-4 text-neutralTwo  text-[12px] sm:text-[16px]">
              high-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
          <div className="py-4 px-8 flex-[40%] rounded-[8px] bg-white  xs:min-w-[300px]">
            <span
              className={`${styles.flexCenter} w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[4px] bg-bgBoxFive`}
            >
              <img src={meeting} alt="icon" />
            </span>
            <h4 className="mt-4 font-[700] text-[16px] leading-[22px] text-textBlack">
              One-On-One meetings
            </h4>
            <p className="mt-4 text-neutralTwo  text-[12px] sm:text-[16px]">
              high-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
          <div className="py-4 px-8 flex-[40%] rounded-[8px] bg-white  xs:min-w-[300px]">
            <span
              className={`${styles.flexCenter} w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[4px] bg-bgBoxSeven`}
            >
              <img src={people} alt="icon" />
            </span>
            <h4 className="mt-4 font-[700] text-[16px] leading-[22px] text-textBlack">
              One-On-One meetings
            </h4>
            <p className="mt-4 text-neutralTwo text-[12px] sm:text-[16px]">
              high-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
          <div className="py-4 px-8 flex-[40%] rounded-[8px] bg-white xs:min-w-[300px]">
            <span
              className={`${styles.flexCenter} w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[4px] bg-bgBoxEight`}
            >
              <img src={prices} alt="icon" />
            </span>
            <h4 className="mt-4 font-[700] text-[16px] leading-[22px] text-textBlack">
              Affordable Prices
            </h4>
            <p className="mt-4 text-neutralTwo text-[12px] sm:text-[16px]">
              high-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition.
            </p>
          </div>
        </div>
      </div>
      <img
        src={yellowSpiral}
        className="absolute hidden sm:inline-block sm:right-[30%] sm:top-[5%]"
        alt="yellow spiral icon"
      />
    </section>
  );
}

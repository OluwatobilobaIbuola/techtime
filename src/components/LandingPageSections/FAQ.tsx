import React, { useState } from "react";
import { useScrollToTop } from "../../Hooks/useScrollToTop";
import { FAQARRONE } from "../../constant/index";
import { motion, AnimatePresence } from "framer-motion";
import { add, circleTwo, remove } from "../../assets/icons";
import { faqBgImage1, faqBgImage2, yellowSpiral } from "../../assets/images";

const initialState: Record<string, boolean> = {
  faq1: false,
  faq2: false,
  faq3: false,
  faq4: false,
  faq5: false,
  faq6: false,
};
export default function FAQ() {
  useScrollToTop();
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>(initialState);
  const handleClick = (clicked: string) => {
    setIsOpen({ ...initialState, [clicked]: !isOpen[clicked] });
  };
  return (
    <section className={`relative bg-white px-4 py-10 sm:py-20`}>
      <div className="max-w-[1046px] w-full mx-auto">
        <div className="">
          <h1 className="font-clashDisplay text-center mb-2 leading-[40px] sm:leading-[69px] sm:text-[56px] xs:text-[32px] text-[24px] font-[700] text-textBlack">
            Frequenctly Asked Questions
          </h1>
          <p className="text-center font-[500] sm:leading-[28px] text-[12px] sm:text-[16px] text-neutralTwo md:px-32">
            High-defination video is video of higher resolution and quality than
            standard definition. while there's no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className="mt-20">
          {FAQARRONE.map((faq) => {
            return (
              <motion.div
                key={faq.isPresent}
                className="overflow-y-hidden mt-8 border-b border-neutral"
              >
                <h3
                  className={`${
                    isOpen[faq.isPresent] ? "text-primary" : "text-textBlack"
                  } flex justify-between cursor-pointer transition duration-500 ease-out relative z-[2] text-[16px] sm:text-[24px] leading-[16px] sm:leading-[24px] font-bold h-[64px] bg-white`}
                  onClick={() => {
                    handleClick(faq.isPresent);
                  }}
                >
                  {faq.question}
                  <img
                    src={!isOpen[faq.isPresent] ? add : remove}
                    className={`
                      self-start mt-1`}
                    alt="toggle-icon"
                  />
                </h3>
                <AnimatePresence mode="wait">
                  {isOpen[faq.isPresent] && (
                    <motion.p
                      exit={{ opacity: 0, height: 0, y: "-100%" }}
                      initial={{ opacity: 0, height: 0, y: "-100%" }}
                      animate={{ opacity: 1, y: "0", height: "auto" }}
                      transition={{ duration: 0.5, ease: "easeIn" }}
                      className={` ${"relative z-[1]"} text-neutralTwo pb-8 font-normal text-[0.8rem] sm:text-[1rem] leading-[1.4rem]`}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
      <img
        src={yellowSpiral}
        alt="circle icon"
        className="absolute top-[200px] sm:top-[285px] -left-[30px] sm:left-0 w-[45px] sm:w-[75px]"
      />
      <img
        src={circleTwo}
        alt="spiral icon"
        className="absolute top-6 right-3 sm:top-[100px] sm:right-[300px] w-[10px] sm:w-[20px]"
      />
      <img
        src={faqBgImage1}
        alt="side icon"
        className="absolute top-6 hidden sm:inline-block right-0 sm:top-[100px]"
      />
      <img
        src={faqBgImage2}
        alt="side icon"
        className="absolute bottom-6 hidden sm:inline-block left-0 sm:bottom-[100px]"
      />
    </section>
  );
}

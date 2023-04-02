import { TESTIMONIALSARR } from "../../constant";
import TestimonialCard from "../TestimonialCard";
import { useAutoSliderHook } from "../../Hooks/useAutoSliderHook";
import TestimonyNavigator from "../Navigator/TestimonyNavigator";
import { motion } from "framer-motion";
import { useCustomMedia } from "../../Hooks/useCustomMedia";
type SliderProps = 332 | 606;
export default function Testimonials() {
  const { screenSize } = useCustomMedia();
  const { slideIndex } = useAutoSliderHook();
  let slideBy: SliderProps = screenSize < 768 ? 332 : 606;
  let xLength = String(`-${slideIndex * slideBy}px`);

  return (
    <section className="px-4 sm:px-28 bg-bgNeutral py-12 sm:py-24 overflow-x-hidden">
      <div>
        <h1 className="font-clashDisplay text-center mb-2 leading-[40px] sm:leading-[69px] sm:text-[56px] xs:text-[32px] text-[24px] font-[700] text-textBlack">
          What our clients are saying
        </h1>
        <p className="max-w-[1046px] w-full mx-auto text-center font-[500] sm:leading-[28px] text-[12px] sm:text-[16px] text-neutralTwo md:px-32">
          High-defination video is video of higher resolution and quality than
          standard definition. while there's no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: xLength }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className={`w-[1660px] sm:w-[3030px] flex gap-x-4 mt-12`}
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
      </motion.div>
      <TestimonyNavigator slideIndex={slideIndex} />
    </section>
  );
}

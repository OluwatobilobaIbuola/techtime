import { cta } from "../../assets/images";
import Button from "../Button/index";

export default function CTA() {
  return (
    <section className="px-4 sm:px-28 bg-primary py-12 sm:py-24">
      <div>
        <p className="text-center tracking-[0.05em] sm:tracking-[0.1em] font-[500] leading-[22px] text-[16px] text-white mb-2">
          JOIN OUR COMMUNITY
        </p>
        <h1 className="font-clashDisplay text-center mb-2 leading-[30px] sm:leading-[69px] sm:text-[56px] text-[30px] font-[700] text-white">
          Are you ready to connect with the future talent of the tech world
        </h1>
        <p className="text-center font-[500] leading-[22px] text-[16px] text-white">
          Meet up with other techstars and grow together
        </p>
      </div>
      <div className="mt-8">
        <div className="mx-auto max-w-[983px] max-h-[454px]">
          <img src={cta} className="w-full h-full" alt="icon" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          active={"Join Our Community"}
          wrap="whitespace-nowrap"
          width="max-w-[220px]"
          text="Join Our Community"
          border="border-[1px]"
          bgColor="bg-white"
          textColor="text-primary"
        />
      </div>
    </section>
  );
}

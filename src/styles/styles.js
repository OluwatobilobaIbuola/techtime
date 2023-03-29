const styles = {
  boxWidth: "xxl:max-w-[1440px] w-full mx-auto",

  heading1:
    "font-clashDisplay font-[700] text-[32px] sm:text-[48px] xl:text-[64px] leading-[40px] md:leading-[56px] xl:leading-[82px] text-white",
  heading2: " ",
  heading3:
    "font-clashDisplay font-[600] text-[24px] xl:text-[32px] leading-[39px]  mb-8 text-white",
  paragraph: "",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-center",

  paddingX: "sm:px-[4.5rem] px-[1rem]",
  paddingY: "sm:py-[5rem] py-[1.8rem]",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
};

export default styles;

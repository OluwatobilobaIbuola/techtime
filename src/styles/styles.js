const styles = {
  boxWidth: "xxl:max-w-[1440px] w-full mx-auto",

  heading1:
    "font-manrope font-bold xs:text-[62px] text-[24px] xs:leading-[84px] leading-[62px] w-full",
  heading2:
    "font-manrope font-bold xs:text-[40px] text-[16px] xs:leading-[55px] leading-[42px] w-full",
  heading3:
    "font-manrope font-semibold xs:text-[24px] text-[16px] xs:leading-[33px] leading-[25px] w-full",
  paragraph:
    "font-manrope font-normal text-[0.8rem] sm:text-[1.125rem] leading-[1.75rem]",

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
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;

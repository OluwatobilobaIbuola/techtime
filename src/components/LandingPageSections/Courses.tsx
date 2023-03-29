import { audio, live, recorded, note } from "../../assets/icons";
import styles from "../../styles/styles";
import Button from "../Button/index";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  coursesImageOne,
  coursesImageTwo,
  crown,
  semiCircle,
} from "../../assets/images";
import { AvatarGroup, Avatar } from "@mui/material";
import { useCustomMedia } from "../../Hooks/useCustomMedia";

export default function Courses() {
  const { screenSize } = useCustomMedia();
  return (
    <section className="bg-bgNeutral px-4 sm:pl-40 sm:pr-28 py-10 sm:py-24 relative">
      <div className="items-center flex md:flex-row flex-col gap-y-10">
        <div className="flex-1 relative flex flex-col items-center md:items-stretch">
          <h1
            className={`relative font-clashDisplay mb-2 leading-[36px] sm:leading-[50px] xl:leading-[70px] xl:text-[56px]
             sm:text-[32px] text-[24px] font-[700] text-left text-textBlack`}
          >
            High quality video, audio <br className="hidden xl:inline-block" />&
            live classes
            <img
              src={crown}
              className="absolute -top-[15px] sm:-top-[27px] -left-[23px] sm:-left-[36px] h-[30px] sm:h-[50px]"
              alt="crown icon"
            />
          </h1>
          <p className="mt-4 sm:mt-8 text-neutralTwo text-center md:text-left text-[12px] sm:text-[16px]">
            High-defination video is video of higher resolution and quality than
            standard <br className="hidden xl:inline-block" />
            definition. while there's no standard meaning for high definition,
            generally any <br className="hidden xl:inline-block" /> standard
            video image
          </p>
          <div className="mt-8">
            <Button
              active={"View Courses"}
              wrap="whitespace-nowrap"
              width="max-w-[216px]"
              text="View Courses"
              border="border-[1px]"
              bgColor="bg-primary"
              textColor="text-white"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-8 sm:w-[80%] justify-center sm:justify-start">
            <div className=" py-4 px-8 flex items-center gap-x-2 sm:gap-x-4 rounded-[8px] bg-white">
              <span
                className={`${styles.flexCenter} h-[17px] w-[17px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-bgBoxFour`}
              >
                <img src={audio} alt="audio icon" />
              </span>
              <p className="font-[700] text-[8px] sm:text-[16px] leading-[22px] text-textBlack">
                Audio Classes
              </p>
            </div>
            <div className="py-4 px-8 flex items-center gap-x-2 sm:gap-x-4 rounded-[8px] bg-white">
              <span
                className={`${styles.flexCenter} h-[17px] w-[17px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-bgBoxThree`}
              >
                <img src={live} alt="icon" />
              </span>
              <p className="font-[700] text-[8px] sm:text-[16px] leading-[22px] text-textBlack">
                Live Classes
              </p>
            </div>
            <div className="py-4 px-8 flex items-center gap-x-2 sm:gap-x-4rounded-[8px] bg-white">
              <span
                className={`${styles.flexCenter} h-[17px] w-[17px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-bgBoxTwo`}
              >
                <img src={recorded} alt="icon" />
              </span>
              <p className="font-[700] text-[8px] sm:text-[16px] leading-[22px] text-textBlack">
                Recorded Classes
              </p>
            </div>
            <div className="py-4 px-8 flex items-center gap-x-2 sm:gap-x-4 rounded-[8px] bg-white">
              <span
                className={`${styles.flexCenter} h-[17px] w-[17px] sm:w-[32px] sm:h-[32px] rounded-[4px] bg-bgBoxOne`}
              >
                <img src={note} alt="icon" />
              </span>
              <p className="font-[700] text-[8px] sm:text-[16px] leading-[22px] text-textBlack">
                50+ Notes
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative xxl:max-w-[606px] max-w-[406px] max-h-[312px] xxl:max-h-[512px] w-[80%] mx-auto">
            <LazyLoadImage
              src={coursesImageOne}
              className="w-full h-full rounded-[24px] border-[4px] sm:border-[9px] border-borderColorOne relative z-1"
              alt="learning in a room"
              effect="blur"
              placeholderSrc={coursesImageOne}
            />
            <div
              className="xxl:max-w-[397px] xxl:max-h-[265px] max-w-[197px] max-h-[165px] absolute xxl:-left-[200px]
             -left-[50px] sm:-left-[100px] -bottom-[45px] xxl:-bottom-[90px] z-2"
            >
              <LazyLoadImage
                src={coursesImageTwo}
                className="rounded-[24px] border-[2px] sm:border-[5px] border-borderColorOne"
                alt="learning with a laptop"
                effect="blur"
                placeholderSrc={coursesImageTwo}
              />
            </div>
            <div className="flex flex-col items-center rounded-[8px] bg-white p-2 absolute -left-[70px] sm:-left-[120px] top-[30px] xs:top-[50px] xxl:top-[100px]">
              <p className="text-[8px] xs:text-[12px] text-center xs:leading-7 text-textBlack font-[700] xs:mb-2">
                255k+ Enrolled Student
              </p>
              <AvatarGroup max={5}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867753/IMGL9951_rqwqnp.jpg"
                  sx={
                    screenSize < 480
                      ? { width: 22, height: 22 }
                      : { width: 44, height: 44 }
                  }
                />
                <Avatar
                  alt="Travis Howard"
                  src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867753/IMGL9951_rqwqnp.jpg"
                  sx={
                    screenSize < 480
                      ? { width: 22, height: 22 }
                      : { width: 44, height: 44 }
                  }
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://res.cloudinary.com/dkta8etdk/image/upload/v1679151371/img2_zuomaw.jpg"
                  sx={
                    screenSize < 480
                      ? { width: 22, height: 22 }
                      : { width: 44, height: 44 }
                  }
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867631/img1_jvatew.jpg"
                  sx={
                    screenSize < 480
                      ? { width: 22, height: 22 }
                      : { width: 44, height: 44 }
                  }
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867753/IMGL9951_rqwqnp.jpg"
                  sx={
                    screenSize < 480
                      ? { width: 22, height: 22 }
                      : { width: 44, height: 44 }
                  }
                />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>
      <img
        src={semiCircle}
        className="absolute right-0 bottom-[10%]"
        alt="semi-circle icon"
      />
    </section>
  );
}

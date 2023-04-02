import { arrowUp } from "../../assets/icons";
import { forward, heroImage, spiral } from "../../assets/images";
import styles from "../../styles/styles";
import Button from "../Button/index";
import { AvatarGroup, Avatar } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useCustomMedia } from "../../Hooks/useCustomMedia";

export default function Hero() {
  const { screenSize } = useCustomMedia();
  return (
    <section className="relative flex items-center flex-col md:flex-row bg-primary gap-y-8 px-4 sm:px-28 pt-12">
      <div className="flex-1 relative flex flex-col items-center sm:items-stretch">
        <h1 className={`${styles.heading1} text-center sm:text-start`}>
          Grow your skills to <br className="hidden xxl:block" />
          advance your career <br className="hidden xxl:block" />
          path
        </h1>
        <p className="mt-8 text-[12px] sm:text-[16px] leading-[15px] sm:leading-[19px] text-neutral text-center sm:text-start">
          Build your future with our quality education. the best and largest all
          <br className="hidden xxl:block" />
          -in-one online tutoring platform in the world
        </p>
        <div className="mt-8 flex items-center gap-x-4">
          <Button
            active={"Get Started Now"}
            wrap="whitespace-nowrap"
            width="max-w-[216px]"
            text="Get Started Now"
            border="border-[1px]"
            bgColor="bg-transparent"
            textColor="text-white"
            LogoIcon={arrowUp}
          />
          <Button
            active={"Enroll Now"}
            wrap="whitespace-nowrap"
            width="max-w-[145px]"
            text="Enroll Now"
            border="border-[1px]"
            bgColor="bg-white"
            textColor="text-primary"
          />
        </div>
        <div className="mt-8 flex items-center gap-x-4">
          <AvatarGroup max={5}>
            <Avatar
              alt="Remy Sharp"
              src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867753/IMGL9951_rqwqnp.jpg"
              sx={
                screenSize < 480
                  ? { width: 32, height: 32 }
                  : { width: 64, height: 64 }
              }
            />
            <Avatar
              alt="Travis Howard"
              src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867753/IMGL9951_rqwqnp.jpg"
              sx={
                screenSize < 480
                  ? { width: 32, height: 32 }
                  : { width: 64, height: 64 }
              }
            />
            <Avatar
              alt="Cindy Baker"
              src="https://res.cloudinary.com/dkta8etdk/image/upload/v1679151371/img2_zuomaw.jpg"
              sx={
                screenSize < 480
                  ? { width: 32, height: 32 }
                  : { width: 64, height: 64 }
              }
            />
            <Avatar
              alt="Agnes Walker"
              src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867631/img1_jvatew.jpg"
              sx={
                screenSize < 480
                  ? { width: 32, height: 32 }
                  : { width: 64, height: 64 }
              }
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://res.cloudinary.com/dkta8etdk/image/upload/v1678867753/IMGL9951_rqwqnp.jpg"
              sx={
                screenSize < 480
                  ? { width: 32, height: 32 }
                  : { width: 64, height: 64 }
              }
            />
          </AvatarGroup>
          <div className="">
            <h4 className="font-clashDisplay text-[16px] sm:text-[24px]  sm:leading-7 text-white font-[700]">
              255k+
            </h4>
            <p className="text-[10px] font-normal">Previews</p>
          </div>
        </div>
        <img
          src={forward}
          className="absolute right-[15px] sm:-right-[50px] -bottom-[40px] sm:bottom-0
           rotate-45 sm:rotate-0 w-[70px] h-[100px] sm:w-[150px] sm:h-[150px]"
          alt="forward-spiral icon"
        />
      </div>
      <div className="flex-1">
        <div className="max-w-[768px] max-h-[886px]">
          <LazyLoadImage
            src={heroImage}
            className="sm:min-w-[500px] sm:min-h-[600px] w-full h-full object-contain"
            alt="happy people look"
            effect="blur"
          />
        </div>
      </div>
      <img
        src={spiral}
        alt="spiral icon"
        className="absolute left-0 top-[50%]"
      />
    </section>
  );
}

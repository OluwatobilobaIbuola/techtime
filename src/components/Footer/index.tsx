import { Link } from "react-router-dom";
import {
  discord,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../assets/icons";
import { techtime } from "../../assets/images";
import styles from "../../styles/styles";

function Footer() {
  return (
    <div className="bg-bgDark">
      <div className={`py-12 sm:pt-40 pt-28 pb-28 sm:pb-60 px-4 sm:px-28`}>
        <div className="flex lg:flex-row gap-y-8 flex-col justify-between text-white">
          <div className="">
            <Link to="/">
              <div className="flex items-center w-[100px] h-[38px] sm:w-[130px] sm:h-[47px]">
                <img
                  alt=""
                  className="rounded-[4px] w-full h-full object-contain"
                  src={techtime}
                />
              </div>
            </Link>
            <p className="mt-6 text-[16px] leading-5 font-normal">
              Reach out to us on any of our <br />
              social media networks
            </p>
            <div className="cursor-pointer flex items-center gap-x-8 mt-6">
              <img src={facebook} alt="facebook logo" />
              <img src={twitter} alt="twitter logo" />
              <img src={youtube} alt="youtube logo" />
              <img src={instagram} alt="instagram logo" />
              <img src={discord} alt="discord logo" />
            </div>
          </div>
          <div className="">
            <h3 className={`${styles.heading3}`}>Useful links</h3>
            <ul className="cursor-pointer xl:text-[24px] leading-8 font-normal flex flex-col gap-y-4">
              <li>Home</li>
              <li>About</li>
              <li>Our Courses</li>
              <li>Testimonials</li>
              <li>Our Community</li>
            </ul>
          </div>
          <div className="">
            <h3 className={`${styles.heading3}`}>Community</h3>
            <ul className="cursor-pointer xl:text-[24px] leading-8 font-normal flex flex-col gap-y-4">
              <li>Help Centers</li>
              <li>Partners</li>
              <li>Suggestion</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="">
            <h3 className={`${styles.heading3}`}>Subscribe</h3>
            <div className="relative h-[46px] max-w-[386px]">
              <input
                className="pl-4 w-full h-full border border-primary bg-bgInput outline-none"
                placeholder="Type here"
              />
              <button className="bg-primary text-white text-[14px] font-[500] absolute w-[123px] right-0 top-0 bottom-0">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

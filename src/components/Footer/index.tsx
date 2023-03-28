import { Link } from "react-router-dom";
import {
  discord,
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../assets/icons";
import { techtime } from "../../assets/images";

function Footer() {
  return (
    <div className="bg-bgDark xxl:max-w-[1440px] w-full mx-auto ">
      <div className={`py-12 sm:pt-40 pt-28 pb-28 sm:pb-60 px-4 sm:px-12`}>
        <div className="flex sm:flex-row gap-y-[1rem] flex-col gap-x-36 text-white">
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
            <div className="flex items-center gap-x-8 mt-6">
              <img src={facebook} />
              <img src={twitter} />
              <img src={youtube} />
              <img src={instagram} />
              <img src={discord} />
            </div>
          </div>
          <div className="">
            <h3
              className={`font-clashDisplay font-[700] text-[24px] leading-6  mb-[1rem] text-dimWhite`}
            >
              Useful links
            </h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Our Courses</li>
              <li>Testimonials</li>
              <li>Our Community</li>
            </ul>
          </div>
          <div className="">
            <h3
              className={`font-clashDisplay font-[700] text-[24px] leading-6  mb-[1rem] text-dimWhite`}
            >
              Community
            </h3>
            <ul>
              <li>Help Centers</li>
              <li>Partners</li>
              <li>Suggestion</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="">
            <h3
              className={`font-clashDisplay  font-[700] text-[24px] leading-6 mb-[1rem] text-dimWhite`}
            >
              Subscribe
            </h3>
            <div className="relative h-[46px] w-[386px]">
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

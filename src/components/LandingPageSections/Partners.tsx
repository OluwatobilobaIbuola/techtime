import { dropbox, monday, slack, stripe, zoom } from "../../assets/icons";

export default function Partners() {
  return (
    <section className="bg-bgLightBlue flex items-center gap-x-4 sm:gap-x-[36px] md:gap-x-[73px] justify-center py-8">
      <img
        className="w-[50px] h-[30px] xm:w-[70px] sm:w-[130px]"
        src={zoom}
        alt="zoom logo icon"
      />
      <img
        className="w-[50px] h-[30px] xm:w-[70px] sm:w-[130px]"
        src={stripe}
        alt="stripe logo icon"
      />
      <img
        className="w-[50px] h-[30px] xm:w-[70px] sm:w-[130px]"
        src={monday}
        alt="monday logo icon"
      />
      <img
        className="w-[50px] h-[30px] xm:w-[70px] sm:w-[130px]"
        src={slack}
        alt="slack logo icon"
      />
      <img
        className="w-[50px] h-[30px] xm:w-[70px] sm:w-[130px]"
        src={dropbox}
        alt="dropbox logo icon"
      />
    </section>
  );
}

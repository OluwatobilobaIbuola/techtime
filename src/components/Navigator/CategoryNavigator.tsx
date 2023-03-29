import { SetStateAction } from "react";

type Props = {
  initialState: Record<string, boolean>;
  showNext: Record<string, boolean>;
  setShowNext(value: SetStateAction<Record<string, boolean>>): void;
};
export default function CategoryNavigator({
  showNext,
  initialState,
  setShowNext,
}: Props) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-x-7 sm:gap-x-14 justify-center mt-7 sm:mt-14">
      <p
        className={`${
          showNext.com1 ? "rounded-[8px] bg-white text-primary" : undefined
        } text-neutralTwo h-[46px] px-[16px] py-[12px] justify-center cursor-pointer flex items-center font-[700] whitespace-nowrap`}
        onClick={() => setShowNext({ ...initialState })}
      >
        All Categories
      </p>
      <p
        className={`${
          showNext.com2 ? "rounded-[8px] bg-white text-primary" : undefined
        } text-neutralTwo h-[46px] px-[16px] py-[12px] justify-center  cursor-pointer flex items-center font-[700]`}
        onClick={() =>
          setShowNext({ ...initialState, com1: false, com2: true })
        }
      >
        Design
      </p>
      <p
        className={`${
          showNext.com3 ? "rounded-[8px] bg-white text-primary" : undefined
        } text-neutralTwo h-[46px] px-[16px] py-[12px] justify-center  cursor-pointer flex items-center font-[700]`}
        onClick={() =>
          setShowNext({ ...initialState, com1: false, com3: true })
        }
      >
        Development
      </p>
      <p
        className={`${
          showNext.com4 ? "rounded-[8px] bg-white text-primary" : undefined
        } text-neutralTwo h-[46px] px-[16px] py-[12px] justify-center  cursor-pointer flex items-center font-[700]`}
        onClick={() =>
          setShowNext({ ...initialState, com1: false, com4: true })
        }
      >
        Marketing
      </p>
    </div>
  );
}

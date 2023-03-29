type Props = {
  slideIndex: number;
};

export default function TestimonyNavigator({ slideIndex }: Props) {
  return (
    <div className="flex gap-x-4 mt-8 justify-center items-center">
      <span
        className={`w-[10px] h-[10px] rounded-[50%] ${
          slideIndex === 0 ? "bg-primary" : "bg-bgLightBlue"
        }`}
      ></span>
      <span
        className={`w-[10px] h-[10px] rounded-[50%] ${
          slideIndex === 1 ? "bg-primary" : "bg-bgLightBlue"
        }`}
      ></span>
      <span
        className={`w-[10px] h-[10px] rounded-[50%] ${
          slideIndex === 2 ? "bg-primary" : "bg-bgLightBlue"
        }`}
      ></span>
      <span
        className={`w-[10px] h-[10px] rounded-[50%] ${
          slideIndex === 3 ? "bg-primary" : "bg-bgLightBlue"
        }`}
      ></span>
      <span
        className={`w-[10px] h-[10px] rounded-[50%] ${
          slideIndex === 4 ? "bg-primary" : "bg-bgLightBlue"
        }`}
      ></span>
    </div>
  );
}

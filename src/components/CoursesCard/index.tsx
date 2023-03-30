import { star, lessons, time } from "../../assets/icons";

type Props = {
  category: string;
  image: string;
  studentCount: number;
  reviews: number;
  courseTitle: string;
  tutorImage: string;
  tutorName: string;
  coursePrice: number;
  noOfLesson: number;
  period: number;
};

export default function CoursesCard({
  image,
  category,
  studentCount,
  reviews,
  courseTitle,
  tutorImage,
  tutorName,
  coursePrice,
  noOfLesson,
  period,
}: Props) {
  return (
    <>
      <div className="w-full">
        <img src={image} className="w-full" alt="course thumbnail" />
        <div className="flex justify-between mt-4 items-center">
          <span className="font-[700] rounded-[16px] px-4 py-1 flex items-center text-[12px] sm:text-[16px] bg-bgLightBlue text-primary">
            {category}
          </span>
          <div className="flex gap-x-2 items-center text-[12px] sm:text-[16px]">
            <div className="flex items-center gap-x-1">
              <span>{(reviews / 1000).toFixed(1)}k</span>
              <img src={star} alt="star icon" />
            </div>
            <span>({(studentCount / 1000).toFixed(1)}k+)</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="pr-16 text-textBlack font-semibold font-clashDisplay text-[16px] sm:text-[24px] leading-[19px] sm:leading-[30px]">
          {courseTitle}
        </h4>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-x-2">
            <img src={time} alt="time icon" />
            <span className="text-[12px] sm:text-[16px]">
              {(period / 3600).toFixed(0)}hrs{" "}
              {((period % 3600) / 60).toFixed(0)}
              mins
            </span>
          </div>
          <div className="flex gap-x-2 items-center">
            <img src={lessons} alt="book icon" />
            <span>{noOfLesson} Lessons</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-x-2 items-center">
          <img src={tutorImage} alt="tutor showing face" />
          <span className="text-[16px] font-[700] text-textBlack">
            {tutorName}
          </span>
        </div>
        <div>
          <span className="font-clashDisplay text-[20px] font-semibold text-primary">
            ${coursePrice.toFixed(2).toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
}

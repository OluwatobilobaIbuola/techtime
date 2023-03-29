import CoursesCard from "../CoursesCard/index";
import { COURSESARR } from "../../constant/index";

type Props = {
  categoryType: string;
};

export default function MarketingCategory({ categoryType }: Props) {
  const marketingData = COURSESARR.filter(
    (item) => item.category === categoryType
  );
  return (
    <div className="flex flex-wrap gap-8 items-center  mt-12">
      {marketingData.map(
        (
          {
            courseTitle,
            image,
            studentCount,
            reviews,
            noOfLesson,
            tutorImage,
            tutorName,
            coursePrice,
            category,
            period,
          },
          index
        ) => {
          return (
            <div
              key={index}
              className="xs:flex-[50%] sm:flex-[30%] bg-white rounded-[16px] p-2"
            >
              <CoursesCard
                courseTitle={courseTitle}
                image={image}
                studentCount={studentCount}
                reviews={reviews}
                noOfLesson={noOfLesson}
                tutorImage={tutorImage}
                tutorName={tutorName}
                coursePrice={coursePrice}
                category={category}
                period={period}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

import React from "react";
import { COURSESARR } from "../../constant";
import CoursesCard from "../CoursesCard/index";

type Props = {
  categoryType: string;
};

export default function DesignCategory({ categoryType }: Props) {
  const designData = COURSESARR.filter(
    (item) => item.category === categoryType
  );
  return (
    <div className="flex flex-wrap gap-8 items-center  mt-12">
      {designData.map(
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

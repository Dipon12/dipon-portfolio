import React from "react";
import CourseTable, { Course } from "./CourseTable";
import parse from 'html-react-parser';

type Experience = {
  company: string;
  roles: {
    title: string;
    address?: string;
    duration: string;
    courses?: Course[];
    responsibilities: string[];
    extra?: string;
  }[];
};

const WorkExperienceComponent: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <div key={index} className="border-b border-gray-300 pb-6">
          <h3 className="text-lg font-semibold">{experience.company}</h3>
          <div className="mt-2 space-y-6">
            {experience.roles.map((role, roleIndex) => (
              <>
                <div key={roleIndex} className="flex justify-between">
                  <div className="">
                    <h4 className="text-sm  font-semibold italic">{role.title}</h4>
                    <ul className=" text-xs list-disc list-inside mt-1 space-y-1 text-gray-900">
                      {role.responsibilities.map((responsibility, i) => (
                        <li key={i}>{parse(responsibility)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xs  text-right text-gray-500 min-w-[6rem] md:min-w-[10rem] lg:min-w-64 2xl:min-w-fit">
                    <p>{role.address}</p>
                    <p>{role.duration}</p>
                  </div>
                </div>
                {role.courses && (
                  <div className="mt-2">
                    <CourseTable courses={role.courses} />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceComponent;

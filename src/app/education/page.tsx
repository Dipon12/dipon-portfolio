import EducationSection from "@/components/custom/EducationSection";
import EducationData from "@/Data/education";
import parse from "html-react-parser";
const Icon = () => {
  return (
    <>
      <svg
        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    </>
  );
};

export default function Education() {
  return (
    <div className="mt-16 md:mt-8">
      <EducationSection
        id="education"
        title="Education"
        items={EducationData.educationItems}
      />
      <hr className="h-px my-2 md:my-4 bg-[#00000010] border-0 dark:bg-gray-700" />
      <EducationSection
        id="international-certification"
        title="International Certification"
        items={EducationData.certificationItems}
      />
      <hr className="h-px my-2 md:my-4 bg-[#00000010] border-0 dark:bg-gray-700" />

      <h2 id="Online-Courses" className="text-2xl font-bold mb-4 text-primary">
        Online Courses
      </h2>

      <ol className="mt-4 space-y-4 text-left text-gray-800 dark:text-gray-800">
        {EducationData?.OnlineCourses.map((course) => {
          return (
            <>
              <a href={course.link}>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Icon />
                  <span>{parse(course.title)}</span>
                </li>
              </a>
            </>
          );
        })}
      </ol>

      <hr className="h-px my-2 md:my-4 bg-[#00000010] border-0 dark:bg-gray-700" />

      <h2 id="training" className="text-2xl font-bold mb-4 text-primary">
        Training & WorkShop
      </h2>
      <ol className="mt-4 space-y-4 text-left text-gray-800 dark:text-gray-800">
        {EducationData?.trainingWorkShop.map((course) => {
          return (
            <>
              
                <li className="flex items-center gap-6 space-x-3 ">
                  <span>{course.year}</span>
                  <a href={course.url}><span>{course.content}</span></a>
                </li>
              
            </>
          );
        })}
      </ol>
    </div>
  );
}

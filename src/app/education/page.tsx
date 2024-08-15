import EducationSection from "@/components/custom/EducationSection";
const Icon = () => {
  return (
    <>
      {/* <svg
        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg> */}
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
  const educationItems = [
    {
      title: "Chittagong University of Engineering & Technology (CUET)",
      details: [
        "<strong class='text-[#559988]'>B.Sc. in Computer Science and Engineering</strong>",
        "February 2016 - June 2021",
        "<b>CGPA: 3.80 (with Honors)</b> / 4.00",
        "Merit Position: 4th / 120",
      ],
    },
    {
      title: "Brahmanbaria Govt. College",
      details: [
        "Higher Secondary School Certificate (HSC)",
        "June 2013 - May 2015",
        "GPA: 5.00 out of 5.00",
      ],
    },
  ];

  const certificationItems = [
    {
      title: "Language Proficiency Test-IELTS",
      details: [
        "Score: 7.5 (Score Card)",
        "Test taken: Sep 23, 2021",
        "Listening - 8.5 | Reading - 8.0 | Speaking - 7.5 | Writing - 6.5",
      ],
    },
  ];
  const OnlineCourses = [
    {
      title:
        "Reinforcement Learning Specialization - University of Alberta (Online)",
      link: "",
    },
    {
      title: "Machine Learning - Stanford University (Online)",
      link: "",
    },
    {
      title: "Deep Learning Specialization - Deep Learning Specialization",
      link: "",
    },
    {
      title: "TensorFlow Data and Deployment Specialization - DeepLearning.ai",
      link: "",
    },
    {
      title:
        "DeepLearning.AI TensorFlow Developer Specialization - DeepLearning.ai",
      link: "",
    },
    {
      title:
        "CCNA Exploration 1 - IICT, Chittagong University of Engineering & Technology",
      link: "",
    },
  ];

  const trainingWorkShop = [
    {
      content:
        "Introduction to Quantum Computing, 2020 Qiskit Global Summer School, IBM Qiskit",
      year: "2020",
      url: "",
    },
    {
      content:
        "Machine Learning, Deep Learning and Artificial Intelligence with Python  Bangladesh Hi-Tech Park Authority",
      year: "2019",
      url: "",
    },
    {
      content: "Ethical Hacking and Blockchain, IEEE CUETSB",
      year: "2019",
      url: "",
    },
    {
      content: "",
      year: "",
      url: "",
    },
  ];
  return (
    <div className="mt-16 md:mt-8">
      <EducationSection
        id="education"
        title="Education"
        items={educationItems}
      />
      <hr className="h-px my-2 md:my-4 bg-[#00000010] border-0 dark:bg-gray-700" />
      <EducationSection
        id="international-certification"
        title="International Certification"
        items={certificationItems}
      />
      <hr className="h-px my-2 md:my-4 bg-[#00000010] border-0 dark:bg-gray-700" />

      <h2 className="text-2xl font-bold mb-4 text-primary">Online Coureses</h2>

      <ol className="mt-4 space-y-4 text-left text-gray-800 dark:text-gray-800">
        {OnlineCourses.map((course) => {
          return (
            <>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Icon />
                <span>{course.title}</span>
              </li>
            </>
          );
        })}
      </ol>

      <hr className="h-px my-2 md:my-4 bg-[#00000010] border-0 dark:bg-gray-700" />

      <h2 className="text-2xl font-bold mb-4 text-primary">Training & WorkShop</h2>
    </div>
  );
}

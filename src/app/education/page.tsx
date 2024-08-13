import EducationSection from "@/components/custom/EducationSection";

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

  return (
    <div className="max-w-4xl mx-auto px-4 mt-16">
      <EducationSection id="education" title="Education" items={educationItems} />
      <hr className="h-px my-8 bg-[#00000010] border-0 dark:bg-gray-700" />
      <EducationSection id = 'international-certification' title="International Certification" items={certificationItems} />
      <hr className="h-px my-8 bg-[#00000010] border-0 dark:bg-gray-700" />
    </div>
  );
}

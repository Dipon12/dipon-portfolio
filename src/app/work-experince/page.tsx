import CourseTable from "@/components/custom/CourseTable";
import WorkExperienceComponent from "@/components/custom/WorkExperienceComponent";

export default function WorkExperience() {
  const courses = [
    {
      title: "Structured Programming (C)",
      classSize: 131,
      status: "Running (Oct '23-)",
    },
    {
      title: "Structured Programming (Sessional)",
      classSize: 131,
      status: "Running (Oct '23-)",
    },
    {
      title: "Compiler Designing",
      classSize: 125,
      status: "Completed (May '23-Sep '23)",
    },
    {
      title: "Compiler Designing (Sessional)",
      classSize: 125,
      status: "Completed (May '23-Sep '23)",
    },
  ];
  const trainerCourses = [    {
    title: "Artificial Intelligence",
    classSize: 125,
    status: "Running (Oct '23- )",
  },
  {
    title: "Artificial Intelligence (Sessional)",
    classSize: 125,
    status: "Completed (Oct '22-Feb '23)",
  },
  {
    title: "Software Engineering (Sessional)",
    classSize: 131,
    status: "Completed (Oct '22-Feb '23)",
  },
  {
    title: "Computer Programming and Engineering Analysis (Sessional)",
    classSize: 30,
    status: "Completed (May '23-Sep '23)",
  },
  {
    title: "Computer Programming and Engineering Analysis",
    classSize: 30,
    status: "Completed (Aug '22-Dec '23)",
  }];
  const professionalExperiences = [
    {
      company: "Workera.ai (a deeplearning.ai company)",
      roles: [
        {
          title: "Senior Assessment Developer",
          address:"(Remote) California, USA",
          duration: "August, 2024 - Present",
          responsibilities: [
            `Conducted R&D to leverage LLMs in the development process,including engineering core
production prompts, tuning of LLMs, and incorporating agentic workflows within the
development phase.`,
            `Implemented process automation in technical report generation from item banks and
mapping of online learning contents to Workera skill ontology and skill signals.`,
            `Developed and piloted assessments for the company’s signature products such as Deep
Learning, Machine Learning, Computer Vision, Responsible AI, Accountability AI, and
Mathematics for AI.`,
          ],
        },
        {
          title: "Assessment Developer",
          address:"(Remote) California, USA",
          duration: "June, 2021 - August,2024",
          responsibilities: [
            "Led a team of 5 engineers to build scalable software solutions.",
            "Mentored junior developers and conducted code reviews.",
          ],
        },
      ],
    },
  ];
  const researchExperiences = [
    {
      company: "Universal Machine",
      roles: [
        {
          title: "Research Assistant",
          address:"(Remote) California, USA",
          duration: "December, 2023 - Present",
          responsibilities: [
            `<b>Advisor:</b> Nazmus Saquib, PhD  `,
            `<b>Dissertation</b>: Embodied Mathematics, Computer Vision, and Human-Computer Interfacing`
          ],
        },
      ],
    },
  ];
  const teachingExperiences = [
    {
      company: "East Delta University",
      roles: [
        {
          title: "Adjunct Lecturer",
          address:"Chittagong, Bangladesh",
          duration: "Fall, 2023 - Present",
          courses: courses,
          responsibilities: [
            `Teaching/Taught the following theory courses: Computer Graphics, Mobile Computing,
Digital Electronics & Pulse Techniques, and Compiler Design`,
          ],
        },
      ],
    },
    {
      company: "Bangladesh Hi-Tech Park Authority",
      roles: [
        {
          title: "Trainer",
          address:"Chittagong, Bangladesh",
          duration: "April, 2024 - Present",
          // courses: trainerCourses,
          responsibilities: [
            `Delivering training on Machine Learning, Deep Learning, and Computer Vision domains.`,
          ],
        },
      ],
    },
  ];


  return (
    <div className="px-4 md:px-8 lg:px-32 mt-16 md:mt-16 w-full">
      {/* <h1 className="font-bold text-4xl">Experience</h1> */}
      <div id="professionalExperience">
        {/* <h2 className="font-bold text-2xl md:text-3xl mb-4">Professional Experience</h2> */}
        <h2 className="font-bold text-xl mb-2">Professional Experience</h2>
        <div className="ml-3 md:ml-6">
        <WorkExperienceComponent experiences={professionalExperiences} />
        </div>
      </div>
      <div id="teachingExperience" className="mt-4">
        <h2 className="font-bold text-xl mb-2">Teaching Experience</h2>
        <div className="ml-3 md:ml-6">

        <WorkExperienceComponent experiences={teachingExperiences} />
        </div>
      </div>
      <div id="researchExperience" className="mt-4">
        <h2 className="font-bold text-xl mb-2">Research Experience</h2>
        <div className="ml-3 md:ml-6">
        <WorkExperienceComponent experiences={researchExperiences} />
        </div>
      </div>
    </div>
  );
}

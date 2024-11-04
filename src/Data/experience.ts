import exp from "constants";

const courses = [
    {
      title: "CSE 307: Mobile Computing",
      classSize: 131,
      status: "Summer '24",
    },
    {
      title: "CSE 319: Compiler Design",
      classSize: 131,
      status: "Spring '24",
    },
    {
      title: "CSE 223: Digital Electronics and Pulse technologies",
      classSize: 125,
      status: "Fall '23",
    },
    {
      title: "CSE 321: Computer Graphics",
      classSize: 125,
      status: "Fall '23",
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
      url:'https://workera.ai/',
      roles: [
        {
          title: "Senior Assessment Developer",
          address:"(Remote) California, USA",
          duration: "August, 2024 - Present",
          responsibilities: [
            `Collaborating on cross-team R&D initiatives to integrate multi-agent LLM processes into
the Workera Skillmap tool and introducing new assessment modalities within the Workera
product suite.`,
            `Leading the development and management of specialized assessments for clients in the
domains of AI Security, Information Retrieval, Large Vision Models, and Neural Acceleration
Technologies`,
          ],
        },
        {
          title: "Assessment Developer",
          address:"June, 2021 - August,2024",
          duration: "",
          responsibilities: [
            `Conducted R&D to leverage LLMs in the development process,including engineering core
production prompts, tuning of LLMs, and incorporating agentic workflows within Workera
GOAT™ (Generative Ontology & Authoring Tool).`,

            `Implemented automated pipelines to generate technical report from Workera item bank
database and to map online learning resources to Workera skill ontology and skill signals.`,

`Developed assessments and learning plans as the primary subject matter expert for the
Workera signature products such as Deep Learning, Machine Learning, Computer Vision,
Responsible AI, MLOps, Accountability AI, and Mathematics for AI.`
          ],
        },
      ],
    },
  ];
  const researchExperiences = [
    {
      company: "Universal Machine",
      url:'https://workera.ai/',
      roles: [
        {
          title: "Research Assistant",
          address:"(Remote) California, USA",
          duration: "December, 2023 - Present",
          responsibilities: [
            `<b>Advisor:</b> <a href="https://www.nsaquib.org/https://www.nsaquib.org/">Nazmus Saquib</a>,PhD  `,
            `<b>Research</b>: Approach to represent AI models through the embodied representation of
              differential equations for enhancing model interpretability`
          ],
        },
      ],
    },
  ];
  const teachingExperiences = [
    {
      company: "East Delta University",
      url:'https://www.eastdelta.edu.bd/',
      roles: [
        {
          title: "Adjunct Lecturer",
          address:"Chittagong, Bangladesh",
          duration: "Fall, 2023 - Present",
          courses: courses,
          responsibilities: [
            `Conducting/conducted the following theory courses:`,
          ],
        },
      ],
    },
    {
      company: "IT Business Incubator, CUET",
      url:'https://skitbi-cuet.com/',

      roles: [
        {
          title: "Specialized Trainer",
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


  export const experiencePageData = {
    courses,
    trainerCourses,
    teachingExperiences,
    professionalExperiences,
    researchExperiences,
  }

  export default experiencePageData;

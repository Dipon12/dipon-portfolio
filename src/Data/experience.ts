import exp from "constants";

const courses = [
    {
      title: "CSE 307: Mobile Computing and Applications",
      classSize: 131,
      status: "Summer '25",
    },
    {
      title: "CSE 307: Mobile Computing and Applications",
      classSize: 131,
      status: "Spring '25",
    },
    {
      title: "CSE 320: Compiler Design (Sessional)",
      classSize: 131,
      status: "Fall '24",
    },
    {
      title: "CSE 319: Compiler Design",
      classSize: 131,
      status: "Fall '24",
    },
    {
      title: "CSE 307: Mobile Computing and Applications",
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
  const trainerCourses = [    
  {
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
            `Developed an agentic workflow using ChatGPT API to generate
            evidence-centered personalized AI assessments in Workera platform.`,

            `Integrated new assessment modalities (Short Answer, Whiteboard, and Coding) into the
            Workera product suite by leveraging the ChatGPT API for dynamic item generation, response
            evaluation and MermaidJS for diagram rendering.`,

            `Designed core scoring rubric for short-answer and coding items, optimized to guide LLMs toward
            generating accurate, hallucination-resistant scoring outputs and targeted, context-aware
            feedback.`,

            `Lead the development and design of hyperpersonalized AI assessments for clients including
            AT&T, Booz Allen Hamilton, MARS, Samsung India.`,

            `Designed and developed top-rated signature and core assessments, including Deep 
            Learning, TensorFlow, and Machine Learning along with 
            <a href="https://www.linkedin.com/in/kiankatan/">Kian Katanforoosh</a>.`

            
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

            `Built a pipeline to extract domain-specific assessment data from the Workera question bank
            and generate technical PDF reports with item analytics, learner performance, and learning
            impact insights.`,
              
            `Designed and developed a system that imports questions from the Workera item bank and
            leverages ChatGPT to calculate max solve time-based on personalized features.`,

            `Developed a web scraper to extract free online blogs aligned with a predefined skill ontology
            of a domain and systematically store the learning content for creating personalized learning
            pathways.`,

            `Implemented automated pipelines to generate technical reports from the Workera item bank
            database and to map online learning resources to Workera skill ontology and skill signals.`,

            `Developed assessments and learning plans as the primary subject matter expert for the
            Workera signature products such as Deep Learning, Machine Learning, Computer Vision,
            Responsible AI, MLOps, Accountability AI, and Mathematics for AI.`  
          ],
        },
      ],
    },
    {
      company: "Universal Machine",
      url:'https://universalmachine.io/',
      roles: [
        {
          title: "Software Engineer - II",
          address:"(Remote) California, USA",
          duration: "April, 2025 - Present",
          responsibilities: [
            `Developed in-game AI agents using LangChain and OpenAI models with character-specific personas that provide contextual NPC interactions that adapt based on player proximity and game state, and intereacts through structured dialogue systems and memory persistence`,

            `Built AI-powered investment strategy parser using OpenAI GPT models to convert natural language trading rules into structured, executable strategies with automated market condition evaluation`,

            `Integrated real-time cryptocurrency data services through CoinGecko API with MCP server architecture, enabling live price tracking, coin validation, and market analysis for trading decisions`,

            `Developed full-stack DAO platform with smart contract governance system, proposal voting mechanisms, and member management using Solidity, Web3.py, and Ethereum blockchain integration`,

            `Engineered automated token generation and deployment system for ERC-20 tokens with batch deployment capabilities, transaction validation, and blockchain interaction handling`,
          ],
        },
      ],
    }
  ];
  const researchExperiences = [
    {
      company: "Universal Machine",
      url:'https://www.nsaquib.org/',
      roles: [
        {
          title: "Research Assistant",
          address:"(Remote) California, USA",
          duration: "December, 2023 - March, 2025",
          responsibilities: [
            `<b>Advisor:</b> <a href="https://www.nsaquib.org/https://www.nsaquib.org/">Nazmus Saquib</a>,PhD  `,
            `<b>Research</b>: Approach to solve differential equations through the embodied representation of equations.`
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
          duration: "April, 2024 - December, 2024",
          // courses: trainerCourses,
          responsibilities: [
            `Delivered training on Machine Learning, Deep Learning, and Computer Vision domains.`,
            `Trainer of EDGE project ($295M Funding from World Bank), BDSET project ($5M Joint Funding 
            from Bangladesh and India) alongside core training programs`
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

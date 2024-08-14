import CourseTable from "@/components/custom/CourseTable";
import WorkExperienceComponent from "@/components/custom/WorkExperienceComponent";

export default  function WorkExperience(){

    const experiences = [
        {
          company: 'Company A',
          roles: [
            {
              title: 'Software Engineer',
              duration: '2018 - 2020',
              responsibilities: [
                'Developed and maintained web applications.',
                'Collaborated with cross-functional teams to define project requirements.',
              ],
            },
            {
              title: 'Senior Software Engineer',
              duration: '2020 - 2022',
              responsibilities: [
                'Led a team of 5 engineers to build scalable software solutions.',
                'Mentored junior developers and conducted code reviews.',
              ],
            },
          ],
        },
        {
          company: 'Company B',
          roles: [
            {
              title: 'Full Stack Developer',
              duration: '2022 - Present',
              responsibilities: [
                'Designed and implemented APIs using Node.js.',
                'Built responsive frontend components with React and Tailwind CSS.',
              ],
            },
          ],
        },
      ];
      const courses = [
        { title: 'Structured Programming (C)', classSize: 131, status: "Running (Oct '23-)" },
        { title: 'Structured Programming (Sessional)', classSize: 131, status: "Running (Oct '23-)" },
        { title: 'Compiler Designing', classSize: 125, status: "Completed (May '23-Sep '23)" },
        { title: 'Compiler Designing (Sessional)', classSize: 125, status: "Completed (May '23-Sep '23)" },
        { title: 'Artificial Intelligence', classSize: 125, status: "Running (Oct '23- )" },
        { title: 'Artificial Intelligence (Sessional)', classSize: 125, status: "Completed (Oct '22-Feb '23)" },
        { title: 'Software Engineering (Sessional)', classSize: 131, status: "Completed (Oct '22-Feb '23)" },
        { title: 'Computer Programming and Engineering Analysis (Sessional)', classSize: 30, status: "Completed (May '23-Sep '23)" },
        { title: 'Computer Programming and Engineering Analysis', classSize: 30, status: "Completed (Aug '22-Dec '23)" },
      ];
      
    return(
    <div className="px-32 mt-16 md:mt-16 w-full">
        <h1 className="font-bold text-4xl">Experience</h1>
        <div id="professionalExperience">
        <h2 className="font-bold text-xl">Professional Experience</h2>
        <WorkExperienceComponent experiences={experiences} />
        <CourseTable courses={courses} />

        </div>
    </div>)
}
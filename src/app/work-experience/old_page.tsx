import React from 'react';

interface AcademicSectionProps {
  title: string;
  dateRange: string;
  children: React.ReactNode;
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({ title, dateRange, children }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span>{dateRange}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

// components/CourseTable.tsx

interface Course {
  title: string;
  classSize: string;
  timing: string;
}

interface CourseTableProps {
  courses: Course[];
}

export const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr>
          <th>Course title</th>
          <th>Class Size</th>
          <th>Timing</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index} className="border-t">
            <td>{course.title}</td>
            <td>{course.classSize}</td>
            <td>{course.timing}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// components/RoleSection.tsx

interface RoleSectionProps {
  roles: string[];
}

export const RoleSection: React.FC<RoleSectionProps> = ({ roles }) => {
  return (
    <ul className="list-disc list-inside text-sm space-y-1">
      {roles.map((role, index) => (
        <li key={index}>{role}</li>
      ))}
    </ul>
  );
};

const WorkExperince = () => {
    const courses = [
      { title: 'Structured Programming (C)', classSize: '120', timing: 'Morning (Sat. 9-12)' },
      { title: 'Structured Programming (Sessional)', classSize: '35', timing: 'Morning (Sat. 12-3)' },
      { title: 'Compiler Designing', classSize: '120', timing: 'Morning (Sat. 3-6)' },
      // Add more courses as needed
    ];
  
    const lecturerRoles = [
      'Co-supervising students on MS, BS, and BE theses.',
      'Machine Learning models using python.',
      'Teaching in AI research with Natural Language Technologies.',
    ];
  
    const mlEngineerRoles = [
      'Developed machine learning models for English, Arabic, and Urdu languages.',
      'Led a team of engineers.',
      'Researching and testing cutting edge technologies.',
    ];
  
    return (
      <div className="container mx-auto p-8 text-gray-800">
        <AcademicSection title="Lecturer" dateRange="July 2022 - Present">
          <CourseTable courses={courses} />
          <RoleSection roles={lecturerRoles} />
        </AcademicSection>
  
        <AcademicSection title="Machine Learning Engineer" dateRange="July 2021 - July 2022">
          <RoleSection roles={mlEngineerRoles} />
        </AcademicSection>
  
        {/* Add more sections as needed */}
      </div>
    );
  };
  
  export default WorkExperince;
import React from 'react';

export type Course = {
  title: string;
  classSize: number;
  status: string;
};

export type CourseTableProps = {
  courses: Course[];
};

const CourseTable: React.FC<CourseTableProps> = ({ courses }) => {
  return (
    <div className="overflow-x-auto">
      <table className="max-w-6xl mx-auto bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-black border-b">Course Title</th>
            {/* <th className="px-4 py-3 text-center text-sm font-medium text-black border-b">Class Size</th> */}
            <th className="px-4 py-3 text-center text-sm font-medium text-black border-b">Semester</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="px-4 py-4 text-sm text-gray-800 border-b">{course.title}</td>
              {/* <td className="px-4 py-4 text-sm text-center text-gray-800 border-b">{course.classSize}</td> */}
              <td className="px-4 py-4 text-sm text-right text-gray-800 border-b">{course.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;

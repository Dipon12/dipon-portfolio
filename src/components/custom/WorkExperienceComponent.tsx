import React from 'react';

type Experience = {
  company: string;
  roles: {
    title: string;
    duration: string;
    responsibilities: string[];
    extra?:string;
  }[];
};

const WorkExperienceComponent: React.FC<{ experiences: Experience[] }> = ({ experiences }) => {
  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <div key={index} className="border-b border-gray-300 pb-6">
          <h3 className="text-xxl font-bold">{experience.company}</h3>
          <div className="mt-2 space-y-6">
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="flex justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{role.title}</h4>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-gray-900">
                    {role.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-right text-gray-500">
                  <p>{role.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceComponent;

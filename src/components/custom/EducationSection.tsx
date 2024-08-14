import React from 'react';

type SingleSectionProps = {
  title: string;
  details: string[];
};
type SectionProps = {
    id: string;
    title: string;
    items : SingleSectionProps[];
}
const SingleSection: React.FC<SingleSectionProps> = ({ title, details }) => {
    return (
      <div className="mt-4 md:mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ul className="list-none list-inside">
  
        {details.map((item, index) => (
       <li className="text-xs md:text-sm" key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
              </ul>
  
      </div>
    );
  };
const EducationSection:  React.FC<SectionProps> = (props) => {
return (
    <>
      <h2 className="text-xl font-bold mb-4">{props.title}</h2>
      {
        props.items.map((item, index) => {
            return <SingleSection key={index} title={item.title} details={item.details} />
})
    }
    </>
)
}


export default EducationSection;

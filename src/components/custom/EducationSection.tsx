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
      <div className="my-8">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <ul className="list-none list-inside mt-2">
  
        {details.map((item, index) => (
       <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
              </ul>
  
      </div>
    );
  };
const EducationSection:  React.FC<SectionProps> = (props) => {
    console.log('hello');
return (
    <>
      <h2 className="text-2xl font-bold mb-4">{props.title}</h2>
      {
        props.items.map((item, index) => {
            return <SingleSection key={index} title={item.title} details={item.details} />
})
    }
    </>
)
}


export default EducationSection;

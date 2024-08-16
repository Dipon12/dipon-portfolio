import React from "react";
import Heading from "../ui/Heading";

type SingleSectionProps = {
  title: string;
  details: string[];
};

type SectionProps = {
  id: string;
  title: string;
  items: SingleSectionProps[];
};

const SingleSection: React.FC<SingleSectionProps> = ({ title, details }) => {
  return (
    <div className="mt-4 md:mt-0">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="list-none list-inside">
        {details.map((item, index) => (
          <li
            className="text-xs md:text-sm"
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    </div>
  );
};

const EducationSection: React.FC<SectionProps> = (props) => {
  // Explicitly type the accumulator in reduce
  const groupedItems = props.items.reduce<SingleSectionProps[][]>(
    (result, item, index) => {
      if (index % 2 === 0) {
        result.push([item]);
      } else {
        result[result.length - 1].push(item);
      }
      return result;
    },
    []
  );

  return (
    <>
      <Heading title={props.title} />

      {groupedItems.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="group-wrapper flex flex-col lg:flex-row lg:gap-4 md:justify-between"
        >
          {group.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`${
                itemIndex % 2 !== 0 ? "lg:text-right" : "lg:text-left"
              } lg:w-1/2`}
            >
              <SingleSection title={item.title} details={item.details} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default EducationSection;

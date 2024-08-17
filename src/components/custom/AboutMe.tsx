import React from "react";
import Heading from "../ui/Heading";
import parse from "html-react-parser"
type ProfileProps = {
  title: string,
  description: string,
}

const AboutMe = ({title,description}:ProfileProps) => {
  return (
    <article>
      {/* <div className="font-semibold text-lg mb-2">About me</div> */}
      <Heading title={title}/>
      {parse(description)}
    </article>
  );
};

export default AboutMe;

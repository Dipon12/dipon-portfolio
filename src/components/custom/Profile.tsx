// src/components/ProfileCard.tsx
import Image from "next/image";
import React from "react";
import ProfileName from "./ProfileHeading";
import Heading from "../ui/Heading";

const Profile: React.FC = () => {
  const researcInterestLine = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Human Computer Interaction",
  ];
  return (
    <div className="md:mt-8">
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-full md:w-3/4 order-2 md:order-1">
          <article>
            {/* <h3 className="font-semibold text-lg mb-2">Research Agenda</h3> */}
            <Heading title={'Research Agenda'}/>
            <p>
              As enhanced devices at the edge of the network exploit artificial
              intelligence, even novel computing challenges are raised. In my
              current research agenda, I <a>investigate</a> all aspects related to
              distributed intelligent systems for supporting cities and
              communities, with a strong focus on optimizing decentralized and
              self-organized systems. My research finds application in several
              domains, among which smart city, mobility, healthcare, cultural
              heritage and natural disasters.
            </p>
          </article>
        </div>
        <div className="w-full md:w-1/4 grid place-items-center order-1 md:order-2">
          <div className="w-[12rem] h-[12rem] rounded-lg overflow-hidden border-4 border-primary">
            <Image
              src="/profilePic.jpg"
              alt="Profile Picture"
              layout="responsive"
              width={160}
              height={160}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

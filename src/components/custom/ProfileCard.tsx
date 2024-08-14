// src/components/ProfileCard.tsx
import Image from "next/image";
import React from "react";
import ProfileName from "./ProfileName";

const ProfileCard: React.FC = () => {
  const socialIcons = [
    { name: "facebook", icon: "./facebook.svg", url: "http://facebook.com" },
    { name: "github", icon: "./github.svg", url: "http://facebook.com" },
    { name: "linkedIn", icon: "./linkedIn.svg", url: "http://facebook.com" },
    { name: "skype", icon: "./skype.svg", url: "http://facebook.com" },
    { name: "twitterx", icon: "./twitterx.svg", url: "http://facebook.com" },
  ];
  const researcInterestLine = [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Human Computer Interaction",
  ];
  return (
    <div className="mt-8">
      <ProfileName />
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-3/4">
          <article>
            <h3 className="font-semibold text-lg mb-2">Research Agenda</h3>
            <p>
              As enhanced devices at the edge of the network exploit artificial
              intelligence, even novel computing challenges are raised. In my
              current research agenda, I investigate all aspects related to
              distributed intelligent systems for supporting cities and
              communities, with a strong focus on optimizing decentralized and
              self-organized systems. My research finds application in several
              domains, among which smart city, mobility, healthcare, cultural
              heritage and natural disasters.
            </p>
          </article>
        </div>
        <div className="w-1/4 grid place-items-center">
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

export default ProfileCard;

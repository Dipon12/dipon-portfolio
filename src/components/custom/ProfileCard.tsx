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
    <div className="flex flex-col items-center md:flex-row px-4 md:p-8 md:px-16 bg-white rounded-lg shadow-lg mx-auto">
      {/* Text Content */}
      <div className="md:w-2/3 md:pr-6 flex-1 flex flex-col order-2 md:order-1">
        {/* <h1 className="text-3xl font-bold mb-2">Fatima Jahara</h1>
        <p className="text-gray-600 mb-4">
          Senior Assessment Developer at{" "}
          <a
            href="https://www.workera.ai"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Workera
          </a>
          . Recipient of{" "}
          <span className="text-pink-600 font-semibold">
            Fatima Al-Fihri Predoctoral Fellowship
          </span>{" "}
          2023 Cohort.
        </p>
        <p className="text-gray-800 font-semibold mb-2">
          My research interest lies in the broad spectrum of:
        </p> */}
        <div className="mb-4">
          <ProfileName />
        </div>
        <p className="text-gray-800 font-semibold mb-2">
          My research interest lies in the broad spectrum of:
        </p>
        <ul className="list-none mb-4">
          {researcInterestLine.map((item) => (
            <>
              <li className="flex items-center mb-1">
                <span className="text-blue-600 mr-2">✔</span>
                {item}{" "}
              </li>
            </>
          ))}
        </ul>
        <div className="flex space-x-3 mb-4">
          {socialIcons.map((social) => (
            <>
              <a
                href={social.url}
                className="text-blue-600 hover:text-blue-800"
              >
                {/* <SocialLogo icon="linkedin" size={ 48 } /> */}
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={48}
                  height={48}
                  objectFit="cover"
                />
              </a>
            </>
          ))}
        </div>
        <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-800">
          Download CV
        </button>
      </div>
      {/* Image */}
      <div className="md:w-1/3 mt-6 md:mt-0 flex-1 flex items-center justify-center order-1 md:order-2">
        <div className="w-[16rem] h-[16rem] rounded-full overflow-hidden border-4 border-blue-600">
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
  );
};

export default ProfileCard;

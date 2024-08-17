"use client";
import AboutMe from "@/components/custom/AboutMe";
import Profile from "@/components/custom/Profile";
import { Homedata } from "@/Data/home";
export default function Home() {

  return (

      <>
        <div id="introduction">
          <Profile title={Homedata.firstTitle} description={Homedata.researchAgenda}/>
        </div>
        <div className="mt-8" id="about-me">
          <AboutMe title={Homedata.secondTitle} description={Homedata.aboutMe}/>
        </div>
      </>
  );
}

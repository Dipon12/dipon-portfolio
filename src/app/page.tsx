"use client";
import AboutMe from "@/components/custom/AboutMe";
import ProfileCard from "@/components/custom/ProfileCard";
import ProfileName from "@/components/custom/ProfileName";
import Sidebar from "@/components/custom/SideBar";

export default function Home() {
  const items = [
    {
      title: "Home",
      links: [
        { label: "Introduction", href: "#introduction" },
        { label: "About Me", href: "#about-me" },
      ],
    },
    {
      title: "Home",
      items: [
        {
          title: "Subsection 1.1",
          links: [
            { label: "Link 1.1.1", href: "#" },
            { label: "Link 1.1.2", href: "#" },
          ],
        },
        {
          title: "Subsection 1.2",
          items: [
            {
              title: "Sub-subsection 1.2.1",
              links: [
                { label: "Link 1.2.1.1", href: "#" },
                { label: "Link 1.2.1.2", href: "#" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Section 2",
      links: [
        { label: "Link 2.1", href: "#" },
        { label: "Link 2.2", href: "#" },
      ],
    },
  ];

  return (

      <div className="flex-1 px-32">
        <div id="introduction">
          <ProfileCard />
        </div>
        <div className="mt-16" id="about-me">
          <AboutMe />
        </div>
      </div>
  );
  // return (
  //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //         <div>
  //             <ProfileName/>

  //         </div>
  //     </main>
  // );
}

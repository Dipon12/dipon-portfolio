import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import projectPageData from "@/Data/projects";

function Projects() {
  return (
    <div >
      <div className="technical-skill mb-8">
        <Heading title="Technical Skills" />
        <ol className="mt-4 space-y-2 text-left">
        {projectPageData?.skillData.map((item) => {
          return (
            <>
                <li className="">
                  <span className="font-semibold text-sm text-primary/80">{item.category}: </span>
                  <span>{item.skills?.join(', ')}</span>
                  {/* {
                    item.skills?.map((skill)=><></>)
                  } */}
                </li>
              
            </>
          );
        })}
      </ol>
      </div>
      <div id="project">
        <Heading title={"Projects"} />
        <div className="flex flex-col gap-y-10">
          {projectPageData?.selectedProjects.map((project, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-[45%,55%] lg:grid-rows-[auto,1fr] gap-2 lg:gap-x-8 lg:gap-y-0 p-4">
                  {/* Image Section */}
                  <div className="order-2 lg:order-1 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 relative h-full">
                    <Image
                      // fill
                      width={200}
                      height={100}
                      src={project.picture}
                      alt={project.title}
                      className="object-contain w-full h-full aspect-auto"
                    />
                  </div>

                  {/* Title Section */}
                  <div className="order-1 lg:order-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                    <a
                      className="hover:text-primary/60"
                      href={project.gitHubLink}
                    >
                      <h1 className="text-2xl font-bold after:content-link">
                        {project.title}
                        {/* <Image src="/link-svgrepo-com.svg" alt="link-icon" width={24} height={24}/> */}
                      </h1>
                    </a>
                  </div>

                  {/* Description Section */}
                  <div className="order-3 lg:order-3 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                    <p><span className="text-primary font-semibold">Tech-stack: </span>{project.techStack}</p>
                    <p className="text-gray-600">{project.LongDescription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

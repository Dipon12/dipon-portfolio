import React from "react";
import Image from "next/image";

function Projects() {
  const selectedProjects = [
    {
      id: 1,
      title: "Skin Disease Classification using Transfer Learning Approach",
      shortDescription: "",
      LongDescription: `Developed an variant of the Xception Model, utilizing pre-trained ImageNet weights, to effectively classify five distinct skin
diseases from images. The approach achieved a remarkable accuracy rate of 79.8%, surpassing the performance of existing
similar works of the time`,
picture: "/project/project-3.gif",
techStack:'Python, Tensorflow, Flask, JS, CSS, HTML',
gitHubLink: 'https://github.com/',
},
    {
      id: 2,
      title: "FriendZee: An AI Chatbot",
      shortDescription: "",
      LongDescription: `Friendzee is an AI chatbot designed to provide emotional support for individuals who may find it challenging to express
            their feelings. This project features a custom-developed dataset, on which a Recurrent Neural Network (RNN) has been
            trained to generate response. The project has been deployed using a Flask server. Integration between the frontend and
            backend is achieved through REST API, where the trained model delivers a empathetic response.`,
            picture: "/project/project-2.gif",
            techStack:'Python, Tensorflow, Flask, JS, CSS, HTML',
            gitHubLink: 'https://github.com/',
        },
    {
      id: 4,
      title: "Image High-Resolution with AutoEncoder Architecture",
      shortDescription: "",
      LongDescription: `Leveraged Auto-Encoder architecturefor Image High-Resolution, enhancing image quality through a sophisticated compression
technique. This approach achieved a superior Peak Signal-to-Noise Ratio (PSNR) compared to the original distorted image,
demonstrating remarkable improvements in clarity and detail.`,
picture: "/project/project-2.gif",
techStack:'Python, Tensorflow, Flask, JS, CSS, HTML',
gitHubLink: 'https://github.com/',

    },
    {
      id: 3,
      title: "Synthetic Data Generation using DCGAN Architecture blah blahfg nqoruujnvbo nornwegoj nowrngon  nIWORNGO NOINWRGON NOOIRNGO ORINGWRGON",
      shortDescription: "",
      LongDescription: `Developed a Generative Adversarial Network (GAN)model using the Fashion MNIST dataset, successfully generating synthetic,
unique, high-quality images across 10 distinct classes`,
picture: "/project/project-2.gif",
techStack:'Python, Tensorflow, Flask, JS, CSS, HTML',
gitHubLink: 'https://github.com/',

     },
  ];
  return (
    <div className="mx-auto px-4 xl:px-16 mt-8 md:mt-16">
      <h1 className="text-xl font-bold text-left">Projects</h1>

      {selectedProjects.map((project,index) => {
        return (
          <div key={index}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 my-4 md:my-12">
            <div className="w-full lg:w-1/3 relative h-32 mt-6" >
              <Image
                src={project.picture}
                alt={project.title}
                // height={48}
                // width={64}
                 fill
          className=" object-cover aspect-video rounded-2xl"
              />
              </div>
              <div className="w-full lg:w-2/3">
              <h2 className="font-semibold text-lg mb-2 ">{project.title} <a href={project.gitHubLink}><Image src='/link-svgrepo-com.svg' alt="link"
              width={18} height={18}
              className="hover:cursor-pointer"
              /></a></h2>
              <p>{project.LongDescription}</p>
              <p><b>Tech-stack:</b> {project.techStack}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

import React from "react";
import Image from "next/image";
const LinkIcon = () => (
  <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
	 width="24px" height="24px" viewBox="0 0 72 72" enable-background="new 0 0 72 72" >
<g>
	<g>
		<path d="M18.321,69.07c-2.874,0-5.775-0.845-8.31-2.604l-0.534-0.371c-6.614-4.593-8.259-13.712-3.666-20.326l13.931-18.588
			c2.183-3.146,5.522-5.292,9.361-5.984c3.839-0.694,7.717,0.152,10.921,2.377l0.534,0.37c2.72,1.888,4.735,4.676,5.675,7.85
			c0.313,1.059-0.291,2.172-1.351,2.485c-1.058,0.311-2.171-0.29-2.485-1.351c-0.691-2.337-2.116-4.308-4.119-5.698l-0.534-0.37
			c-2.328-1.617-5.146-2.231-7.931-1.727c-2.787,0.503-5.212,2.061-6.828,4.388L9.055,48.108
			c-3.293,4.744-2.099,11.365,2.704,14.701l0.534,0.371c4.801,3.334,11.423,2.142,14.759-2.66l4.256-6.126
			c0.631-0.905,1.875-1.129,2.784-0.501c0.906,0.631,1.131,1.877,0.501,2.784l-4.256,6.125C27.504,66.882,22.948,69.07,18.321,69.07
			z"/>
	</g>
	<g>
		<path d="M40.297,51.043c-2.877,0-5.784-0.844-8.323-2.606l-0.538-0.375c-2.718-1.888-4.731-4.674-5.669-7.845
			c-0.313-1.06,0.292-2.172,1.351-2.485c1.063-0.313,2.173,0.291,2.485,1.351c0.69,2.335,2.114,4.305,4.117,5.696l0.538,0.375
			c4.799,3.332,11.421,2.138,14.757-2.664l13.93-18.59c3.294-4.744,2.1-11.365-2.703-14.701l-0.53-0.365
			c-2.332-1.621-5.147-2.232-7.936-1.731c-2.787,0.503-5.212,2.061-6.828,4.388l-4.255,6.125c-0.63,0.908-1.876,1.132-2.783,0.502
			s-1.132-1.876-0.502-2.783l4.255-6.125c2.225-3.205,5.564-5.351,9.404-6.043c3.838-0.691,7.718,0.153,10.922,2.379l0.529,0.365
			c6.62,4.598,8.264,13.717,3.67,20.33l-13.93,18.59C49.453,48.868,44.914,51.043,40.297,51.043z"/>
	</g>
	<g>
		<path d="M52.76,33.106c-0.209,0-0.419-0.065-0.599-0.2c-0.442-0.331-0.532-0.958-0.2-1.399l0.548-0.73
			c0.331-0.442,0.959-0.53,1.399-0.2c0.442,0.331,0.532,0.958,0.2,1.399l-0.548,0.73C53.364,32.969,53.064,33.106,52.76,33.106z"/>
	</g>
	<g>
		<path d="M55.047,30.056c-0.209,0-0.419-0.065-0.599-0.2c-0.442-0.331-0.532-0.958-0.2-1.399l4.426-5.904
			c1.061-1.528,1.471-3.414,1.134-5.28c-0.337-1.867-1.38-3.491-2.938-4.572l-0.343-0.237c-0.454-0.315-0.567-0.938-0.253-1.392
			c0.313-0.454,0.936-0.568,1.392-0.253l0.344,0.238c1.997,1.387,3.334,3.468,3.766,5.86s-0.094,4.81-1.48,6.806l-4.447,5.934
			C55.651,29.918,55.352,30.056,55.047,30.056z"/>
	</g>
</g>
</svg>
)
function Projects() {
  const selectedProjects = [
    {
      id: 1,
      title: "Skin Disease Classification using Transfer Learning Approach ",
      shortDescription: "",
      LongDescription: `Developed a variant of the Xception Model, utilizing pre-trained ImageNet weights, to effectively classify five distinct skin diseases from images. The approach achieved a remarkable accuracy rate of 79.8%, surpassing the performance of existing similar works of the time.`,
      picture: "/project/project-3.gif",
      techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
      gitHubLink: "https://github.com/",
    },
    {
      id: 2,
      title: "FriendZee: An AI Chatbot",
      shortDescription: "",
      LongDescription: `Friendzee is an AI chatbot designed to provide emotional support for individuals who may find it challenging to express their feelings. This project features a custom-developed dataset, on which a Recurrent Neural Network (RNN) has been trained to generate responses. The project has been deployed using a Flask server. Integration between the frontend and backend is achieved through REST API, where the trained model delivers an empathetic response.`,
      picture: "/project/project-2.gif",
      techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
      gitHubLink: "https://github.com/",
    },
    {
      id: 4,
      title: "Image High-Resolution with AutoEncoder Architecture",
      shortDescription: "",
      LongDescription: `Leveraged Auto-Encoder architecture for Image High-Resolution, enhancing image quality through a sophisticated compression technique. This approach achieved a superior Peak Signal-to-Noise Ratio (PSNR) compared to the original distorted image, demonstrating remarkable improvements in clarity and detail.`,
      picture: "/project/project-2.gif",
      techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
      gitHubLink: "https://github.com/",
    },
    {
      id: 3,
      title: "Synthetic Data Generation using DCGAN Architecture",
      shortDescription: "",
      LongDescription: `Developed a Generative Adversarial Network (GAN) model using the Fashion MNIST dataset, successfully generating synthetic, unique, high-quality images across 10 distinct classes.`,
      picture: "/project/project-2.gif",
      techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
      gitHubLink: "https://github.com/",
    },
  ];

  return (
    <div className="mt-8 md:mt-16">
      <h1 className="text-2xl font-bold text-left text-primary mb-6">Projects</h1>
      <div className="flex flex-col gap-y-10">
        {selectedProjects.map((project, index) => {
          return (
            <div key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-[45%,55%] lg:grid-rows-[auto,1fr] gap-2 lg:gap-x-8 lg:gap-y-0 p-4">
                {/* Image Section */}
                <div className="order-2 lg:order-1 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
                  <img
                    src={project.picture}
                    alt={project.title}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Title Section */}
                <div className="order-1 lg:order-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                  <h1 className="text-2xl font-bold after:content-link">
                    {project.title} 
                    {/* <Image src="/link-svgrepo-com.svg" alt="link-icon" width={24} height={24}/> */}
                  </h1>
                </div>

                {/* Description Section */}
                <div className="order-3 lg:order-3 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <p className="text-gray-600">
                    {project.LongDescription}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

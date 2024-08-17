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
    title: "FriendZee: An AI Chatbot ",
    shortDescription: "",
    LongDescription: `Friendzee is an AI chatbot designed to provide emotional support for individuals who may find it challenging to express their feelings. This project features a custom-developed dataset, on which a Recurrent Neural Network (RNN) has been trained to generate responses. The project has been deployed using a Flask server. Integration between the frontend and backend is achieved through REST API, where the trained model delivers an empathetic response.`,
    picture: "/project/project-2.gif",
    techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
    gitHubLink: "https://github.com/",
  },
  {
    id: 4,
    title: "Image High-Resolution with AutoEncoder Architecture ",
    shortDescription: "",
    LongDescription: `Leveraged Auto-Encoder architecture for Image High-Resolution, enhancing image quality through a sophisticated compression technique. This approach achieved a superior Peak Signal-to-Noise Ratio (PSNR) compared to the original distorted image, demonstrating remarkable improvements in clarity and detail.`,
    picture: "/project/project-2.gif",
    techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
    gitHubLink: "https://github.com/",
  },
  {
    id: 3,
    title: "Synthetic Data Generation using DCGAN Architecture ",
    shortDescription: "",
    LongDescription: `Developed a Generative Adversarial Network (GAN) model using the Fashion MNIST dataset, successfully generating synthetic, unique, high-quality images across 10 distinct classes.`,
    picture: "/project/project-2.gif",
    techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
    gitHubLink: "https://github.com/",
  },
];

const skillData = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "C",
      "C++",
      "Matlab",
      "Octave",
      "JavaScript",
      "R",
      "SQL",
      "Bash",
    ],
  },
  {
    category: "ML Libraries",
    skills: [
      "Tensorflow",
      "Keras",
      "OpenCV",
      "Scikit-learn",
      "TensorflowJS",
      "PyTorch",
      "PySindy",
      "Pandas",
      "Numpy",
      "Seaborn",
    ],
  },
  {
    category: "Web Programming Libraries",
    skills: [" Flask", "FabricJS"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "LateX", "Tkinter", "Wireshark"],
  },
];

const projectPageData = {
  selectedProjects,
  skillData,
};

export default projectPageData;

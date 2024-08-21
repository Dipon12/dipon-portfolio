const selectedProjects = [
  {
    id: 1,
    title: "Constructing Embodied Differential Equation by Sketching in a Vector Space",
    shortDescription: "",
    LongDescription: `The project’s primary objective is to derive the governing 
    differential equations of a dynamical system by analyzing the dynamics of 
    sketched object attributes. The Sparse Identification of Nonlinear Dynamical
     Systems (SINDy) model is employed to extract these dynamics, while the interface 
     is deployed in a web environment using Flask. The vector interface is constructed 
     utilizing Fabric.js, enabling intuitive and dynamic user interactions.`,
    picture: "/project/project-3.gif",
    techStack: "Python, Tensorflow, Flask, FabricJS, CSS, HTML",
    gitHubLink: "https://github.com/Dipon12/Constructing-Embodied-Differential-Equation-by-Sketching-in-a-Vector-Space",
  },
  {
    id: 2,
    title: "FriendZee: An AI Chatbot ",
    shortDescription: "",
    LongDescription: `Friendzee is an AI chatbot designed to provide emotional support
     for individuals who may find it challenging to express their feelings. This 
     project features a custom-developed dataset, on which a Recurrent Neural Network 
     (RNN) has been trained to generate responses. The project has been deployed using 
     a Flask server. Integration between the frontend and backend is achieved through 
     REST API, where the trained model delivers an empathetic response.`,
    picture: "/project/project-2.gif",
    techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
    gitHubLink: "https://github.com/Dipon12/Friendzee-An-AI-Chatbot",
  },
  {
    id: 3,
    title: "Image High-Resolution with AutoEncoder Architecture ",
    shortDescription: "",
    LongDescription: `Leveraged Auto-Encoder architecture for Image High-Resolution,
     enhancing image quality through a sophisticated compression technique. This 
     approach achieved a superior Peak Signal-to-Noise Ratio (PSNR) compared to 
     the original distorted image, demonstrating remarkable improvements in clarity and detail.`,
    picture: "/project/project-4.png",
    techStack: "Python, Tensorflow, OpenCV",
    gitHubLink: "https://github.com/Dipon12/Image-Super-Resolution-using-Autoencoder",
  },
  

  {
    id: 4,
    title: "CartPole Gaming Agent using DQN",
    shortDescription: "",
    LongDescription: `This project implements a reinforcement learning solution to the 
    CartPole-v1 environment using a Deep Q-Network (DQN) algorithm. The CartPole-v1 environment 
    is a standard benchmark in reinforcement learning where the objective is to control a 
    cart moving along a one-dimensional track by applying forces to keep a pole balanced 
    vertically. The agent receives a reward at each time step based on how well it keeps the 
    pole balanced, and the episode ends if the pole falls beyond a certain angle or the cart
     moves too far from the center.`,
    picture: "/project/project-5.gif",
    techStack: "Python, PyTorch, OpenAI Gym",
    gitHubLink: "https://github.com/Dipon12/CartPole-Gaming-Agent-using-DQN",
  },

  {
    id: 5,
    title: "A WebApp to Diagnose Human Pyrexia(Fever) Cases using Machine Learning",
    shortDescription: "",
    LongDescription: `The application employs classical machine learning algorithms 
    to classify the likelihood of a patient having fever based on their symptoms 
    and medical history. The project highlights the integration of machine learning
     models into a web-based application, offering a practical tool for preliminary
      medical diagnosis.`,
    picture: "/project/project-6.png",
    techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
    gitHubLink: "https://github.com/Dipon12/A-WebApp-to-Diagnose-Human-Pyrexia-Case-using-Machine-Learning-Approach",
  },

  // {
  //   id: 6,
  //   title: "Synthetic Data Generation using DCGAN Architecture ",
  //   shortDescription: "",
  //   LongDescription: `Developed a Generative Adversarial Network (GAN) model using 
  //   the Fashion MNIST dataset, successfully generating synthetic, unique, high-quality
  //    images across 10 distinct classes.`,
  //   picture: "/project/project-1.png",
  //   techStack: "Python, Tensorflow, Flask, JS, CSS, HTML",
  //   gitHubLink: "https://github.com/Dipon12/DeepFake-using-DCGAN-Architecture-Keras-Implementation",
  // },
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

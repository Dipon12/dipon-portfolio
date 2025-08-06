type paper = {
    title: string;
  };
  type PublicationsProp = {
    category: string;
    papers: paper[];
  };

  const publicationPapers: PublicationsProp[] = [
    {
      category: "Peer Reviewed Publications",
      papers: [
        {
          title:
            `<p><b>D. Talukder</b>, F. Jahara, S. Barua \& M. M. Haque, 
            <i>“OkkhorNama: BdSL Image Dataset For Real-Time Object Detection
            Algorithms</i>,” 2021 IEEE Region 10 Symposium (TENSYMP), South Korea, 2021.
            <a href="https://ieeexplore.ieee.org/document/9550907"> [Paper Link] </a></p>`,
        },
        {
          title:
          `<p><b>D. Talukder</b> \& F. Jahara, <i>”Real-Time Bangla Sign Language Detection with Sentence and Speech Generation,”</i> 2020
          23rd International Conference on Computer and Information Technology (ICCIT), 2020.
          <a href="https://ieeexplore.ieee.org/abstract/document/9392693/"> [Paper Link] </a></p>`,
        },
        {
          title:
            `<p>S. Barua \& <b>D. Talukder</b>, <i>”A Blockchain 
            based Decentralize Video Streaming Platform with Content Protection System,”</i> 2020
            23rd International Conference on Computer and Information Technology (ICCIT), 2020.
            <a href="https://ieeexplore.ieee.org/abstract/document/9392746"> [Paper Link] </a></p>`,
        },
        {
          title:
            `<p>R. Saha, <b>D. Talukder</b>, MDA Iqbal, \& M. M. Haque, 
            <i>{”TOS: A Relative Metric Approach for Model Selection in 
            Machine Learning Solutions,”</i> 2021 IEEE International Conference 
            on Robotics, Automation, Artificial-Intelligence and Internet-of-Things (RAAICON)
            <a href="https://ieeexplore.ieee.org/abstract/document/9929722/"> [Paper Link] </a></p>`,
        },
      ],
    },
    {
      category: "Book Chapter",
      papers: [
        {
          title:
            `<p><b>D. Talukder</b> \& M. M. Haque, (2023). 
            <i>"A Machine Learning Approach to Clinically Diagnose Human Pyrexia Cases."</i> In Applied 
            Intelligence for Industry 4.0 (pp. 90–103). Chapman and Hall/CRC eBooks.
            <a href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003256083-8/machine-learning-approach-clinically-diagnose-human-pyrexia-cases-dipon-talukder-md-mokammel-haque"> [Chapter Link] </a></p>`,
        },
      ],
    },
    {
      category: "In Progress",
      papers: [
        {
          title:
            `<p>N. Saquib, <b>D. Talukder</b> <i>”Constructing Embodied 
            Differential Equations of dynamical systems by Sketching in a Infinite Vector Space”</i></p>`,
        },
        {
          title:
            `<p><b>D. Talukder</b>, R.Saha, F. Jahara, A. Iqbal, 
            I. Haque, \& M. M. Haque <i>”Bahon: A large-scale 
            benchmark dataset for Bangladeshi transport detection and localization”</i></p>`,
        },
      ],
    },
  ];
export const researchAgendaData = {
  title:"Research Interest",
  description: `<div class="">Macro areas that interest me the most are:</div>
  <ul class="list-disc list-inside space-y-2 my-4 ml-5">
      <li>Scene Understanding</li>
      <li>Visual Reasoning</li>
      <li>Multimodal AI</li>
      <li>Explainable and Trustworthy AI</li>
      <li>Human-Computer Interaction</li>
  </ul>

    My recent interested shifted towards achieving generalizablity, reliablity, and interpretablity of the vision models through mathematical approaches. Additionally, I aim to leverage multimodality to enhance contextual understanding of the vision systems. My research interest seeks to advance vision capabilities, particularly for applications in medical diagnostics, robotics and autonomous systems.

  </div>`,
 
}
  export default publicationPapers;

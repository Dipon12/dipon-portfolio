import React from "react";
import parse from "html-react-parser";
import Heading from "@/components/ui/Heading";
import { convertToSlug } from "@/lib/utils";
import publicationPapers,{researchAgendaData} from "@/Data/publications";
import ResearchAgenda from "@/components/custom/ResearchAgenda";

type paper = {
  title: string;
};
type PublicationsProp = {
  category: string;
  papers: paper[];
};
function Publications() {
  
  return (
    <div className="">
      <div className="mb-8">
      <ResearchAgenda title={researchAgendaData.title} description={researchAgendaData.description} /></div>
      {publicationPapers.map((item: PublicationsProp, index) => {
        return (
            <div id={convertToSlug(item.category)} key={index}>
              <Heading title={item.category} />
              <div className="ml-4 md:ml-8 my-4 md:my-6">
                <ol className="list-decimal">
                  {item.papers.map((paper, index) => {
                    return <li key={index}>{parse(paper.title)}</li>;
                  })}
                </ol>
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default Publications;

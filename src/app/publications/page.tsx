import React from "react";
import parse from "html-react-parser";
import Heading from "@/components/ui/Heading";
import { convertToSlug } from "@/lib/utils";

type paper = {
  title: string;
};
type PublicationsProp = {
  category: string;
  papers: paper[];
};
function Publications() {
  const publicationPapers: PublicationsProp[] = [
    {
      category: "Peer Reviewed Conference",
      papers: [
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
      ],
    },
    {
      category: "Book Chapter",
      papers: [
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
      ],
    },
    {
      category: "In Progress",
      papers: [
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
        {
          title:
            "Sandra Schüssler, Julia Zuschnegg, Lucas Paletta, Gerald Lodron, Josef Steiner, Sandra Pansy-Resch, Dimitrios Prodromou, Sebastian Brunsch, Lorenzo Carnevale, Thomas Orgel, Michael Schneeberger, Silvia Russegger, Maria Fellner, Lara Lammer, Magdalena Holter. “Effects of coach robot pepper versus tablet training on psychosocial and physical outcomes of persons with dementia: A mixed-methods study”. Alzheimer’s & Dementia, vol. 17, issu S11, ISSN: 1552-5279 (December 2021) (doi: 10.1002/alz.053453)",
        },
      ],
    },
  ];
  return (
    <div className="">
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

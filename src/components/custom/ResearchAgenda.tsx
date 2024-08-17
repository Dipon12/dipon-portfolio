import Heading from "../ui/Heading";
import parse from "html-react-parser";
function ResearchAgenda({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  console.log(title, description);
  return (
      <article>
        {/* <h3 className="font-semibold text-lg mb-2">Research Agenda</h3> */}
        <Heading title={title} />
        <p>{parse(description)}</p>
      </article>
  );
}

export default ResearchAgenda;

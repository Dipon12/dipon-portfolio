import Heading from "@/components/ui/Heading";
import outReachPageData from "@/Data/outreach";
import { convertToSlug } from "@/lib/utils";
import parse from "html-react-parser";
export type OutReachDataProp = {
  year: string;
  url: string;
  title: string;
  description?: string;
};
const OutReach = () => {
  return (
    <>
      {outReachPageData.map((outReachData, index) => (
        <div
          key={convertToSlug(outReachData.category)}
          id={convertToSlug(outReachData.category)}
          className="mb-10"
        >
          <Heading className="" title={outReachData.category} />
          <div className="ml-5">
            <ul>
              {outReachData.data.map((awardData, index) => (
                <a href={awardData.url} key={index}>
                  <li key={index} className="my-3">
                    <div className="">
                      <span className="font-semibold mr-5">
                        {awardData.year}
                      </span>
                      <span className="font-semibold">
                        {parse(awardData.title)}
                      </span>
                    </div>
                    {/* @ts-ignore  */}
                    {awardData?.description && (
                        // @ts-ignore
                      <div className="ml-14">{parse(awardData.description)}</div>
                    )}
                    {/* <li className="my-2 flex items-center">
                            <span className="font-semibold mr-5">{awardData.year}</span>
                            <span className="">
                            <div className="font-semibold">{parse(awardData.title)}</div>
                             @ts-ignore 
                            {awardData?.description && <div>{parse(awardData.description)}</div>}

                            </span>*/}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};
export default OutReach;

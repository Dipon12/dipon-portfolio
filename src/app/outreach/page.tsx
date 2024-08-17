import  Heading  from "@/components/ui/Heading";
import outReachPageData from "@/Data/outreach";
import { convertToSlug } from "@/lib/utils";
import parse from 'html-react-parser';
const OutReach = () => {
    return (
        <>
        {
         outReachPageData.map((outReachData,index) => 
            
            <div key={convertToSlug(outReachData.category)} id={convertToSlug(outReachData.category)} className="mb-10">
            <Heading className="" title={outReachData.category}/>
            <div className="ml-5">
                <ul>
                    { outReachData.data.map((awardData,index) =>(
                        <a href={awardData.url} key={index}><li className="my-2">
                            <span className="font-semibold mr-5">{awardData.year}</span>
                            <span>{parse(awardData.title)}</span>

                        </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
            
         )   
        }
        
        </>
    )
}
export default OutReach;
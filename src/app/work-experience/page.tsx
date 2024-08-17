import CourseTable from "@/components/custom/CourseTable";
import WorkExperienceComponent from "@/components/custom/WorkExperienceComponent";
import Heading from "@/components/ui/Heading";
import experiencePageData from "@/Data/experience";

export default function WorkExperience() {
  const { teachingExperiences, professionalExperiences, researchExperiences } =
    experiencePageData;
  return (
    <div className="mt-16 md:mt-8">
      <div id="professional-experience">
        <Heading title="Professional Experience" />
        <div className="ml-3 md:ml-6">
          <WorkExperienceComponent experiences={professionalExperiences} />
        </div>
      </div>
      <div id="research-experience" className="mt-8">
        <Heading title="Research Experience" />
        <div className="ml-3 md:ml-6">
          <WorkExperienceComponent experiences={researchExperiences} />
        </div>
      </div>
      <div id="teaching-experience" className="mt-8">
        <Heading title="Teaching Experience" />
        <div className="ml-3 md:ml-6">
          <WorkExperienceComponent experiences={teachingExperiences} />
        </div>
      </div>
    </div>
  );
}

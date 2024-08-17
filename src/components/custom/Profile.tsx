// src/components/ProfileCard.tsx
import Image from "next/image";
import ResearchAgenda from "./ResearchAgenda";
type ProfileProps = {
  title: string;
  description: string;
};
const Profile = ({ title, description }: ProfileProps) => {
  return (
    <div className="md:mt-8">
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-full md:w-3/4 order-2 md:order-1">
          <ResearchAgenda
            // title={"Research Agenda"}
            title={title}
            description={description}
          />
        </div>
        <div className="w-full md:w-1/4 grid place-items-center order-1 md:order-2">
          <div className="w-[12rem] h-[12rem] rounded-lg overflow-hidden border-4 border-primary">
            <Image
              src="/profilePic.jpg"
              alt="Profile Picture"
              layout="responsive"
              width={160}
              height={160}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

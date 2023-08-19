// import { AiFillLinkedin } from "react-icons/ai";
// import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { Link, ProfileData } from "../types";
import MediaIcons from "./MediaIcons";
// import MyLink from "./MyLink";
import Slide from "./Slide";
import Typing from "./Typing";

interface Props {
  profileData: ProfileData;
  links: Link[];
}

export default function ProfileCard({ profileData, links }: Props) {
  return (
    <div className="profile h-full lg:w-[42rem] xl:w-[48rem] bg-gray-900 relative lg:block hidden bg-opacity-30 backdrop-blur-[2px]">
      <div className="relative z-40 w-full h-full myShadow ">
        <Slide images={profileData.bgImages} />

        <div className="relative z-20 w-56 h-56 mx-auto rounded-full -mt-36 profilePic">
          <img
            src={profileData.ownersPhoto.url}
            alt="userPic"
            className="w-full h-full block p-0 z-20 relative object-cover rounded-full border-4 border-[#1c1b1b] border-solid"
          />
        </div>

        <h1 className="text-center text-gray-300 text-[3.4rem] font-medium mt-4 mb-0.5">
          {profileData.name}
        </h1>

        <Typing />
        <MediaIcons links={links} />

        {/* <div className="absolute bottom-0 left-0 flex w-full h-28 borderLeft customLine">
          <MyLink
            name="download cv"
            Icon={BsFillCloudArrowDownFill}
            url={profileData.cv}
            border
          />
          <MyLink
            name="my linkedin"
            Icon={AiFillLinkedin}
            url="https://www.linkedin.com/in/arafat-freelancer"
          />
        </div> */}
      </div>
    </div>
  );
}

import Button from "../../components/Button";
import TextRoadmapClub from "../../components/TextRoadmapClub";
import { BUTTON_TYPES } from "../../consts";

export const RoadmapClub = () => {
  return (
    <section className="flex flex-col justify-center max-w-[1140px] w-full mx-auto  mt-[200px] pl-[70px] pb-[60px] bg-gradient-to-br from-[#A96BF7] to-[#3103B5] rounded-3xl">
      <div className="flex flex-col mt-[52px]">
        <span className="text-white text-[40px] font-bold leading-[72px]">
          Roadmap club
        </span>
        <span className="text-white text-[20px] font-normal leading-[36px] mt-[4px]">
          Join DAO creators and tool makers shaping the future of DAO economy.
          <br /> Meet peers, share your ideas, and ask for help.
        </span>
        <div className="mt-[15px]">
          <TextRoadmapClub>Open roadmap for DAO infrastructure</TextRoadmapClub>
          <TextRoadmapClub>DB with 500+ DAOs and tools</TextRoadmapClub>
          <TextRoadmapClub>Online and offline meetups</TextRoadmapClub>
        </div>
        <div className="flex mt-[44px] gap-[28px]">
          <Button type={BUTTON_TYPES.PRIMARY}>Join community</Button>
          <Button type={BUTTON_TYPES.SECONDARY}>Learn more</Button>
        </div>
      </div>
    </section>
  );
};

const TextRoadmapClub = (props) => {
  return (
    <div className="flex mt-[5px] items-center gap-[16px]">
      <img src="table/Icon_wing.svg" alt="icon-wing" />
      <div className="text-[#FFF] text-[20px] font-bold leading-[36px]">
        {props.children}
      </div>
    </div>
  );
};

export default TextRoadmapClub;

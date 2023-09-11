const LearnMore = () => {
  return (
    <section className="flex flex-col mt-[160px] max-w-[1140px] mx-auto w-full">
      <div className="flex justify-center align-center  ">
        <span className="text-white text-center text-[48px] font-bold leading-[92px] drop-shadow-4xl pre-table-underline-3 ">
          Learn more
        </span>
      </div>
      <div className="flex justify-center gap-[44px] mt-[52px]">
        <div className="flex flex-col">
          <img className="" src="learnmore/Img_1.svg" alt="img" />
          <div className="flex flex-col bg-[#1B2A40] pl-[28px] pb-[24px] rounded-b-xl max-w-[350px] w-full">
            <span className="text-[#FFD600] text-[15px] tracking-[0.4px] font-bold leading-[36px] mt-[16px] uppercase">
              Beginners guide
            </span>
            <span className="text-white text-[20px] font-bold leading-[32px] mt-[2px]">
              DAO Briefing from The Generalist
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <img className="" src="learnmore/Img_2.svg" alt="img" />
          <div className="flex flex-col bg-[#1B2A40] pl-[28px] pb-[24px] rounded-b-xl max-w-[350px] w-full">
            <span className="text-[#FFD600] text-[15px] tracking-[0.4px] font-bold leading-[36px] mt-[16px] uppercase">
              Success stories
            </span>
            <span className="text-white text-[20px] font-bold leading-[32px] mt-[2px]">
              The largest DAOs by cap <br /> on Deepdao.io
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <img className="" src="learnmore/Img_3.svg" alt="img" />
          <div className="flex flex-col bg-[#1B2A40] pl-[28px] pb-[24px] rounded-b-xl max-w-[350px] w-full">
            <span className="text-[#FFD600] text-[15px] tracking-[0.4px] font-bold leading-[36px] mt-[16px] uppercase">
              Directory
            </span>
            <span className="text-white text-[20px] font-bold leading-[32px] mt-[2px]">
              Twitter lists for DAO ecosystem by Guild XYZ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;

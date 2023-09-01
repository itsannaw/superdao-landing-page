const PreTable = () => {
  return (
    <section>
      <div className="flex flex-col justify-center max-w-[645px] w-full mx-auto align-center  ">
        <span className="text-white text-center text-[40px] font-bold leading-[52px] drop-shadow-4xl pre-table-underline-2 ">
          Superpowers for creators
        </span>
      </div>
      <div className="flex fustify-center max-w-[936px] w-full mx-auto gap-[126px] mt-[80px]">
        <div className="flex flex-col">
          <img
            className="h-6 w-24"
            src="preheader/icon_feature_1.svg"
            alt="icon"
          />
          <span className="text-[#FFD600] text-[24px] font-bold leading-[36px] mt-[28px]">
            Formation
          </span>
          <span className="text-white text-[20px] font-normal leading-[32px] mt-[8px]">
            Template-based DAO <br /> creation in one click
          </span>
        </div>

        <div className="flex flex-col">
          <img
            className="h-6 w-24"
            src="preheader/icon_feature_2.svg"
            alt="icon"
          />
          <span className="text-[#FFD600] text-[24px] font-bold leading-[36px] mt-[28px]">
            Starter pack
          </span>
          <span className="text-white text-[20px] font-normal leading-[32px] mt-[8px]">
            Member directory and <br /> contributor rewards
          </span>
        </div>

        <div className="flex flex-col">
          <img
            className="h-6 w-24"
            src="preheader/icon_feature_3.svg"
            alt="icon"
          />
          <span className="text-[#FFD600] text-[24px] font-bold leading-[36px] mt-[28px]">
            App ecosystem
          </span>
          <span className="text-white text-[20px] font-normal leading-[32px] mt-[8px]">
            Third-party apps <br /> for every need
          </span>
        </div>
      </div>
    </section>
  );
};

export default PreTable;

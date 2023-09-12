const BackedBy = () => {
  return (
    <section>
      <div className="flex flex-col justify-center max-w-[1140px] w-full mx-auto align-center mt-[180px] ">
        <span className="text-white text-center text-[48px] font-bold leading-[92px] drop-shadow-4xl pre-table-underline-4 ">
          Backed by
        </span>
      </div>

      <div className="flex fustify-center max-w-[1140px] w-full mx-auto gap-[64px] mt-[45px]">
        <img className="" src="backedby/Logo_fund_1.svg" alt="icon" />
        <img className="" src="backedby/Logo_fund_2.svg" alt="icon" />
        <img className="" src="backedby/Logo_fund_3.svg" alt="icon" />
        <img className="" src="backedby/Logo_fund_4.svg" alt="icon" />
        <img className="" src="backedby/Logo_fund_5.svg" alt="icon" />
      </div>

      <div className="flex justify-center max-w-[620px] w-full mx-auto gap-[28px] mt-[36px]">
        <div className="flex justify-center align-center px-[24px] py-[8px] rounded-xl border-2 border-[#ffffff]/[.15]">
          <span className="text-white text-[18px] font-bold leading-[32px]">
            Thomas Chen
          </span>
        </div>

        <div className="flex justify-center align-center px-[24px] py-[8px] rounded-xl border-2 border-solid border-[#ffffff]/[.15]">
          <span className="text-white text-[18px] font-bold leading-[32px]">
            Jesse Clayburgh
          </span>
        </div>

        <div className="flex justify-center align-center px-[24px] py-[8px] rounded-xl border-2 border-solid border-[#ffffff]/[.15]">
          <span className="text-white text-center text-[18px] font-bold leading-[32px]">
            Matt Brezina
          </span>
        </div>
      </div>
    </section>
  );
};

export default BackedBy;

const Footer = () => {
  return (
    <section className="mt-[160px] max-w-[1920px] w-full mx-auto from-[#FFD600] to-[#FFC700] bg-gradient-to-b">
      <div className="flex px-[200px] ">
        <div className="my-[32px]">
          <img src="footer/LogoFullBlack.svg" alt="" />
        </div>

        <div className="flex justify-center gap-[56px] my-[42px] ml-[284px]">
          <span className="text-black text-[20px] font-bold leading-9 cursor-pointer">
            Roadmap club
          </span>
          <span className="text-black text-[20px] font-bold leading-9 cursor-pointer">
            About
          </span>
          <span className="text-black text-[20px] font-bold leading-9 cursor-pointer">
            Jobs
          </span>
        </div>

        <div className="flex justify-center gap-[32px] ml-[200px]">
          <img
            className="cursor-pointer hover:scale-105 ease-linear duration-300"
            src="footer/Icon_twitter.svg"
            alt=""
          />
          <img
            className="cursor-pointer hover:scale-105 ease-linear duration-300"
            src="footer/Icon_telegram.svg"
            alt=""
          />
          <img
            className="cursor-pointer hover:scale-105 ease-linear duration-300"
            src="footer/Icon_email.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

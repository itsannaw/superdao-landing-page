import Button from "../../components/Button";
import HeaderLink from "../../components/HeaderLink";
import { BUTTON_TYPES } from "../../consts";

const Header = () => {
  return (
    <section className="von">
      <div className="flex items-center justify-between  max-w-[1140px] w-full mx-auto pt-[46px]">
        <img className="items-start" src="header/logo.svg" alt="logo" />

        <div className="flex items-center justify-around max-w-[340px] w-full gap-[52px]">
          <HeaderLink>Roadmap club</HeaderLink>
          <HeaderLink>About</HeaderLink>
          <HeaderLink>Jobs</HeaderLink>
        </div>

        <button className="flex justify-center align-center gap-[8px] rounded-lg bg-[#262E37] py-[6px] pl-[12px] pr-[16px] max-w-[128px] w-full hover:scale-105 ease-linear duration-300">
          <img src="header/icons8-twitter 1.svg" alt="twitter" />
          <span className="text-white text-[16px] font-bold leading-7 opacity-90">
            Twitter
          </span>
        </button>
      </div>

      <div className="flex items-center flex-col max-w-[1170px] w-full mx-auto  mt-[204px]">
        <span className="text-white text-center text-7xl leading-[80px] font-bold drop-shadow-3xl">
          Modern infrastructure <br /> for{" "}
          <span className="dao-underline-1 drop-shadow-3xl">DAOs</span>
        </span>
        <span className="text-white text-center text-2xl font-light leading-10 opacity-80	mt-[32px]">
          Superdao makes it easier to start and operate <br /> decentralized
          autonomous organizations
        </span>
        <div className="mb-[100px]  mt-[80px] ">
          <Button type={BUTTON_TYPES.PRIMARY}>Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default Header;

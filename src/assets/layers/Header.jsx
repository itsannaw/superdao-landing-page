import Button from "../../components/Button";
import HeaderLink from "../../components/HeaderLink";
import { BUTTON_TYPES } from "../../consts";

const Header = () => {
  return (
    <section className="von">
      <div className="flex items-center justify-around max-w-[1140px] w-full pt-[46px] mx-auto">
        <img
          className="items-start mr-[395px]"
          src="header/logo.svg"
          alt="logo"
        />

        <div className="flex items-center justify-around max-w-[340px] w-full gap-[52px]">
          <HeaderLink>Roadmap club</HeaderLink>
          <HeaderLink>About</HeaderLink>
          <HeaderLink>Jobs</HeaderLink>
        </div>

        <button className="ml-[74px] hover:scale-105 ease-linear duration-300">
          <img src="header/button.svg" alt="button" />
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
        <Button type={BUTTON_TYPES.PRIMARY}>Get started</Button>
      </div>
    </section>
  );
};

export default Header;

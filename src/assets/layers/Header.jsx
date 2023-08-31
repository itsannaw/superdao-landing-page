import HeaderLink from "../../components/HeaderLink";

const Header = () => {
  return (
    <section>
      <div className="flex items-center justify-around max-w-[1140px] w-full py-[46px] mx-auto">
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

      <div className="flex items-center flex-col max-w-[1170px] w-full mx-auto py-[160px]">
        <span className="text-white text-center text-7xl font-bold">
          Modern infrastructure <br /> for DAOs
        </span>
        <span className="text-white text-center text-2xl font-normal leading-10 opacity-80	py-[32px]">
          Superdao makes it easier to start and operate <br /> decentralized
          autonomous organizations
        </span>
      </div>
    </section>
  );
};

export default Header;

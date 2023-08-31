const HeaderLink = (props) => {
  return (
    <a
      href="#"
      className="text-white text-right text-lg font-bold leading-9 opacity-90 hover:text-[#FFB800] ease-linear duration-300"
    >
      {props.children}
    </a>
  );
};

export default HeaderLink;

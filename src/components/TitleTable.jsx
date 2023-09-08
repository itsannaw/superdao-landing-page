const TitleTable = (props) => {
  return (
    <div className="flex justify-center items-center gap-[8px]">
      <img src="table/Icon_wing.svg" alt="icon-wing" />
      <div className="text-[#FFD600] text-[28px] font-bold leading-[36px]">
        {props.children}
      </div>
    </div>
  );
};

export default TitleTable;

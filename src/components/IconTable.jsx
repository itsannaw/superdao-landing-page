const IconTable = (props) => {
  return (
    <div className="flex align-center pl-[8px] pr-[20px] py-[8px] items-center  gap-[16px] rounded-xl bg-white/[.10]">
      {props.children}
    </div>
  );
};

export default IconTable;

import { useMemo } from "react";
import { BUTTON_TYPES } from "../consts";

const COLOR_MAPPER = {
  [BUTTON_TYPES.PRIMARY]: "text-[#10151A] from-[#FFD600] to-[#FFB800]",
  [BUTTON_TYPES.SECONDARY]: "text-[#fff] from-[#FFD600] to-[#FFB800]",
};

const Button = (props) => {
  const colors = useMemo(() => {
    return COLOR_MAPPER[props.type];
  }, [props.type]);
  return (
    <button
      className={`${colors} text-center text-xl font-bold px-[40px] py-[16px] rounded-2xl bg-gradient-to-b  mt-[80px] shadow-[0px_9px_44px_0px_rgba(255,214,0,0.19)]  hover:scale-105 ease-linear duration-300 mb-[100px]`}
    >
      {props.children}
    </button>
  );
};

export default Button;

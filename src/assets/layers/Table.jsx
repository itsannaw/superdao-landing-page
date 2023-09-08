import IconTable from "../../components/IconTable";
import IconTableBlockchains from "../../components/IconTableBlockchains";
import TitleTable from "../../components/TitleTable";

const Table = () => {
  return (
    <section className="flex flex-col justify-center max-w-[1064px] w-full mx-auto  mt-[100px] border-[3px] border-solid border-[#FFD12F] rounded-3xl bg-white/[.02]">
      <div className="px-[80px] py-[70px]">
        <div className="max-w-[701px] w-full mx-auto">
          <TitleTable>Apps</TitleTable>
          <div className="flex justify-around pt-[28px] gap-[24px]">
            <IconTable>
              <img src="table/Icon_1.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Voting
              </span>
            </IconTable>
            <IconTable>
              <img src="table/Icon_2.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Payroll
              </span>
            </IconTable>
            <IconTable>
              <img src="table/Icon_3.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Treasury
              </span>
            </IconTable>
            <IconTable>
              <img src="table/Icon_4.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Grants
              </span>
            </IconTable>
          </div>
          <div className="flex justify-center pt-[20px] gap-[24px]">
            <IconTable>
              <img src="table/Icon_5.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Chat
              </span>
            </IconTable>
            <IconTable>
              <img src="table/Icon_6.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Member updates
              </span>
            </IconTable>
            <IconTable>
              <img src="table/Icon_7.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                + more
              </span>
            </IconTable>
          </div>
        </div>

        <div className="max-w-[904px] w-full mx-auto mt-[60px]">
          <TitleTable>Superdao operating system</TitleTable>
          <div className="flex justify-center gap-[42px]">
            <div className="flex flex-col  align-center items-center rounded-xl bg-white/[.10] max-w-[432px] w-full mt-[28px]">
              <img
                className="mt-[36px]"
                src="table/Icon_ownership.svg"
                alt=""
              />
              <span className="text-[#FFD600] text-[24px] font-bold leading-[36px] mt-[16px]">
                Ownership
              </span>
              <span className="text-white text-center text-[20px] font-normal leading-[32px] mb-[32px]">
                Tokens, NFTs, promises, <br /> options, levels
              </span>
            </div>

            <div className="flex flex-col justify-center align-center items-center rounded-xl bg-white/[.10] max-w-[432px] w-full mt-[28px]">
              <img className="mt-[36px]" src="table/Icon_access.svg" alt="" />
              <span className="text-[#FFD600] text-[24px] font-bold leading-[36px] mt-[16px]">
                Access control
              </span>
              <span className="text-white text-center text-[20px] font-normal leading-[32px] mb-[32px]">
                Data access, spending, voting, <br /> decision execution
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[904px] w-full mx-auto mt-[60px]">
          <TitleTable>Blockchains</TitleTable>
          <div className="flex justify-between pt-[28px] gap-[24px]">
            <IconTableBlockchains>
              <img src="table/Ethereum (ETH).svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Etherium
              </span>
            </IconTableBlockchains>
            <IconTableBlockchains>
              <img src="table/Icon_binance.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Binance
              </span>
            </IconTableBlockchains>
            <IconTableBlockchains>
              <img src="table/Icon_solana.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Solana
              </span>
            </IconTableBlockchains>
            <IconTableBlockchains>
              <img src="table/Icon_avalanche.svg" alt="icon-1" />
              <span className="text-white text-[18px] font-bold leading-[32px]">
                Avalanche
              </span>
            </IconTableBlockchains>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;

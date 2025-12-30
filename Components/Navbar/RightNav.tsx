import { Search, ChevronDown, Star, Bell, Wallet, UserCog,Menu } from "lucide-react";
import IconButton from "./Button";
import PillButton from "./PillButton";

interface RightNavProps {
  fun: () => void;
}
const RightNav = ({ fun }: RightNavProps) => {
  return (
    <div className="flex items-center h-full justify-end gap-3  pl-[4.5rem] max-sm:gap-1 gap-1 w-full">
      <IconButton
        Icon={Search}
   
      />

      <PillButton className="max-sm:hidden">
        <img src="https://axiom.trade/images/sol-fill.svg" alt="" />
        <span className="text-sm font-medium">SOL</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </PillButton>

      <button className="h-8 max-sm:hidden !px-4 rounded-full bg-[rgb(var(--primary-color))]">
        <span className="text-black font-semibold text-sm">Deposit</span>
      </button>

      <IconButton Icon={Star} cuscc={true} />
      <IconButton Icon={Bell}cuscc={true} />

      <button className="flex items-center max-sm:gap-1 gap-3 h-8 max-sm:!px-2 !px-4 rounded-full bg-gray-700/50">
        <div className="flex items-center gap-2">
          <Wallet className="max-sm:w-3 max-sm:h-3 w-4 h-4 text-muted-foreground" />
          <div className="flex items-center gap-1">
            <img src="https://axiom.trade/images/sol-fill.svg" className="max-sm:w-3 max-sm:h-3" alt="" />
            <span className="text-foreground font-medium max-sm:text-[0.8rem] text-md">0</span>
          </div>
        </div>
        <div className="w-px h-5 bg-border" />
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
            <img src="https://axiom.trade/images/usdc-perps.svg" alt="" />
          </div>
          <span className="text-foreground font-medium text-sm">0</span>
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>

      <button className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 via-pink-400 to-blue-500 flex items-center justify-center">
        <span className="font-bold text-sm">O</span>
      </button>

      <IconButton Icon={UserCog} />
       <div 
       onClick={()=> fun()}
       className="max-sm:block hidden z-[100] ">
        <IconButton  Icon={Menu} />
       </div>
    </div>
  );
};

export default RightNav;

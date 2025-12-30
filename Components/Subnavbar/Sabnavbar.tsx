import { Settings, Star, ChartLine } from "lucide-react";

function Sabnavbar() {
  return (
    <>
      <div className="h-[28px] max-sm:hidden w-full flex justify-start items-center border-b gap-[8px] border-gray-600/30 ">
        <Settings className="!ml-5  h-[0.8rem] w-[0.8rem] text-neutral-500" />
        <span className="text-neutral-600/50">|</span>
       <div className="flex w-15 justify-evenly">
         <Star className="h-[0.8rem] w-[0.8rem] text-neutral-500" />
        <ChartLine className="!ml-2 h-[0.8rem] w-[0.8rem] text-neutral-500" />
       </div>
        <span className="text-neutral-600/50">|</span>
      </div>
    </>
  );
}

export default Sabnavbar;

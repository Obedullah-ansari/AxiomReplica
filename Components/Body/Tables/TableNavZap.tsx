import { Zap, SlidersHorizontal } from "lucide-react";
type CustomType ={
cuscss? : boolean
}
function TableNavZap({cuscss}:CustomType) {
  return (
    <>
    <div className={`overflow-hidden  flex  justify-end items-center ${cuscss ? "w-[14rem] h-[34px] " :"w-full h-[28px]"}`}>
        <div className={`flex  items-center !gap-2.5 ${cuscss ?" w-full h-full " :""} `}>
        
          <div className={`flex items-center  ${cuscss ?" w-full h-full justify-end " :"h-[28px] bg-neutral-900"} border border-gray-800/80 rounded-full `}>
            
    
            <div className={`flex items-center !gap-6 !px-1 ${cuscss ? "justify-between w-full" :""}`}>
             <div className="flex gap-2 items-center">
                 <Zap className="!w-3 !h-5 text-neutral-500 fill-neutral-500" />
              <span className="text-[0.7rem] font-medium text-neutral-300">0</span>
             </div>
              <img
                src="https://axiom.trade/images/sol-fill.svg"
                alt="sol"
                className="!w-3.5 !h-3.5"
              />
            </div>

          
            <div className="!w-px h-full bg-neutral-700" />


            <div className="flex items-center ">
              {["P1", "P2", "P3"].map((p, i) => (
                <button
                  key={p}
                  className={`!px-2 !h-[22px] text-[0.7rem] font-medium rounded
                    transition-colors cursor-pointer
                    ${
                      i === 0
                        ? " text-blue-400"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          
          <button className="text-neutral-300/90 hidden lg:block hover:text-neutral-200 transition-colors">
            <SlidersHorizontal className="!w-4 !h-4" />
          </button>
        </div>
      </div>
    </>
  )
}

export default TableNavZap;

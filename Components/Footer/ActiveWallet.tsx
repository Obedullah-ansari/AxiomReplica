import * as Tooltip from "@radix-ui/react-tooltip";
import { ChevronDown, Wallet } from "lucide-react";

type Interface = {
  customcss?: boolean;
};
function ActiveWallet({
  customcss,
}: Interface) {
  return (
    <>
      <Tooltip.TooltipProvider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className={`flex items-center cursor-pointer !gap-0.5  border border-gray-700/60 hover:bg-gray-700/40  rounded-full  ${customcss ? "!px-2.5 !py-1" : "!px-1.5 !py-0.5"}`}>
              <button className="!p-0.5  rounded transition-colors">
                <Wallet className={`${customcss ? "w-4 h-4" : "w-3 h-3"}`} />
              </button>
              <span className="text-xs font-medium !mx-0.5">1</span>
              <button className="!p-0.5 rounded transition-colors">
                <img src="https://axiom.trade/images/sol-fill.svg" alt="" className={`${customcss ? "w-5 h-5" : ""}`} />
              </button>
              <span className="text-xs font-medium !mx-0.5">0</span>
              <ChevronDown className={`${customcss ? "w-4 h-4" : "w-2.5 h-2.5"} text-gray-400`} />
            </div>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={6}
              className="rounded bg-neutral-800/80 !px-2 !py-1 text-xs text-neutral-300 shadow"
            >
              Active Wallets
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.TooltipProvider>
    </>
  );
}

export default ActiveWallet;

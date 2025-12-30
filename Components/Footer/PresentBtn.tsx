import * as Tooltip from "@radix-ui/react-tooltip";
import { Columns3Cog } from "lucide-react";
function PresentBtn() {
  return (
    <>
      <Tooltip.TooltipProvider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="flex  items-center !gap-1 !px-1 !py-[0.15rem] bg-[rgb(var(--primary-color)/0.6)]  rounded text-xs font-medium transition-colors border border-gray-700 cursor-pointer">
              <Columns3Cog className="w-3.5 h-3.5 text-blue-400/80" />
              <span className="text-blue-400/80 text-nowrap ">PRESET 1</span>
            </button>
          </Tooltip.Trigger>

          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={6}
              className="rounded bg-neutral-800/80 !px-2 !py-1 text-xs text-neutral-300 shadow"
            >
              Trading settings
              <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.TooltipProvider>
    </>
  );
}

export default PresentBtn;

"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type TextIconButtonProps = {
  icon?: LucideIcon;
  svg?: ReactNode;
  label: string;
  tooltip: string;
  showDot?: boolean;
};

export default function TextIconButton({
  icon: Icon,
  label,
  tooltip,
  showDot = false,
  svg,
}: TextIconButtonProps) {
  return (
    <Tooltip.TooltipProvider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="flex items-center justify-center !gap-1 !px-1 !py-1 hover:bg-gray-700/60 rounded text-xs font-medium relative transition-colors cursor-pointer">
            {Icon && <Icon className="w-3.5 h-3.5 text-neutral-400"  />}
            {svg && svg}
            <span className="text-neutral-300 text-[0.73rem]">{label}</span>

            {showDot && (
              <span className="absolute -top-0.5 -right-0.5 w-[0.3rem] h-[0.3rem] rounded-full bg-red-500" />
            )}
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={6}
            className="rounded bg-neutral-800/80 !px-2 !py-1 text-xs text-neutral-300 shadow"
          >
            {tooltip}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.TooltipProvider>
  );
}

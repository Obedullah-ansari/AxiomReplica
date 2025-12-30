"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

type IconButtonProps = {
  icon?: LucideIcon;
  tooltip: string;
  className?: string;
  svg?: ReactNode;
  imgSrc?: string;
  customcss?: boolean;
};

export default function IconButton({
  icon: Icon,
  svg,
  tooltip,
  className = "",
  imgSrc,
  customcss,
}: IconButtonProps) {
  return (
    <Tooltip.TooltipProvider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            className={`!p-1 transition-colors cursor-pointer ${className} ${
              customcss
                ? "rounded-full hover:bg-gray-700/30 text-neutral-300/80"
                : "rounded hover:bg-gray-700/40"
            }`}
          >
            {Icon && <Icon className="w-4 h-4 !m-1" />}
            {svg && svg}
            {imgSrc && <img src={imgSrc} />}
          </div>
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

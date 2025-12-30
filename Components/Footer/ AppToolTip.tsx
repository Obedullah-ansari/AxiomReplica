"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { JSX, ReactNode } from "react";

type TooltipProps = {
  children: ReactNode;     // element you hover
  content: JSX.Element;      // tooltip UI (text or component)
  side?: "top" | "bottom" | "left" | "right";
};

function AppToolTip({
  children,
  content,
  side = "top",
}: TooltipProps) {
  return (
    <Tooltip.Provider delayDuration={200}
    >
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            sideOffset={8}
            className="z-50 "
          >
            {content}
            <Tooltip.Arrow className="fill-neutral-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default AppToolTip;

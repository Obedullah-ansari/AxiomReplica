"use client";

import * as Popover from "@radix-ui/react-popover";
import { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DisplayPopoverProps {
  button: JSX.Element;
  content: JSX.Element;
  isSideNav?: boolean;
}

export default function DisplayPopover({
  button,
  content,
  isSideNav = false,
}: DisplayPopoverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{button}</Popover.Trigger>

      <Popover.Portal>
        <AnimatePresence>
          <Popover.Content asChild>
            {isSideNav ? (
              <div>
                {/* Backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                {/* Side Nav */}
                <motion.div
                  className="fixed top-0 right-0 z-50 h-screen"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  {content}
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1, }}
              >
                <div className="z-50">{content}</div>
              </motion.div>
            )}
          </Popover.Content>
        </AnimatePresence>
      </Popover.Portal>
    </Popover.Root>
  );
}

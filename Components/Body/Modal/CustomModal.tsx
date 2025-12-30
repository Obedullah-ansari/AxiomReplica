"use client";

import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type CustomDialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const CustomModal = ({ trigger, children }: CustomDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />

        <Dialog.Content
          className="
            fixed top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            
          "
        >
          <VisuallyHidden>
            <Dialog.Title></Dialog.Title>
          </VisuallyHidden>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomModal;

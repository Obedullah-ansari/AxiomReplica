"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import TabsNav from "./Tabsbutton";
import TableNavZap from "../TableNavZap";
import ActiveWallet from "@/Components/Footer/ActiveWallet";
import DisplayPopover from "../../MidNav/DisplayPopover";

type Tab = "new" | "final" | "migrated";

type MobileTableNavProps = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

export function MobileTableNav({
  activeTab,
  setActiveTab,
}: MobileTableNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden w-full">
      <div className="w-full relative h-[58px] flex items-end items-center border-b border-gray-700/40">

      
        <div className="flex items-end !p-[0.5rem] h-full !gap-[12px]">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-neutral-800">
            <img
              src="https://axiom.trade/images/sol-fill.svg"
              className="w-5 h-5 cursor-pointer"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center w-[26px] h-[26px] hover:bg-neutral-700/10 rounded-full">
            <img
              src="https://axiom.trade/images/bnb-fill.svg"
              className="w-5 h-5 opacity-65 hover:opacity-80 cursor-pointer"
              alt=""
            />
          </div>
        </div>

      
        <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-6 right-0 !pr-[12px] !pb-[8px] text-neutral-400 hover:text-white"
        >
          <ChevronDown
            className={`!w-5 !h-5 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      
      {open && (
        <div className="w-full h-[100px] text-neutral-300 flex justify-end flex-col !pb-2 gap-2">
          <DisplayPopover
            button={
              <button className="flex items-center text-neutral-200 !gap-[6px] !px-[14px] !py-[3px] rounded-full bg-gray-700/65 hover:bg-gray-600/60">
                <List className="w-[16px] h-[16px]" />
                <span className="font-semibold text-[0.9rem]">Display</span>
                <ChevronDown className="w-[14px] h-[14px]" />
              </button>
            }
            content={<></>}
          />

          <div className="flex justify-between items-center">
            <ActiveWallet customcss />
            <TableNavZap cuscss />
          </div>
        </div>
      )}
    </div>
  );
}

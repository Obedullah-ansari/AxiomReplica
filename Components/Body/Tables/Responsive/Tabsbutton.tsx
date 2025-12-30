"use client";

import { useState } from "react";

type Tab = "new" | "final" | "migrated";

type TabsNavProps = {
  activeTab?: Tab;
  setActiveTab?: (tab: Tab) => void;
};

export default function Tabsbutton({
  activeTab: controlledTab,
  setActiveTab: controlledSetTab,
}: TabsNavProps) {
  const [internalTab, setInternalTab] = useState<Tab>("new");

  const activeTab = controlledTab ?? internalTab;
  const setActiveTab = controlledSetTab ?? setInternalTab;

  return (
    <div className=" relative flex !gap-[30px] !p-2 h-full items-end">

  
      <div
        className={`absolute  z-[1] bottom-0 max-sm:top-6 max-sm:h-[30px] h-[2px] bg-white 
        max-sm:bg-neutral-700 max-sm:rounded-full transition-all
          ${
            activeTab === "new"
              ? "left-[3.5px] w-[80px]"
              : activeTab === "final"
              ? "max-sm:left-[95px] max-sm:w-[95px] left-[100px] w-[90px]"
              : "max-sm:left-[200px] max-sm:w-[95px] left-[210px] w-[70px]"
          }`}
      />

      <button
        onClick={() => setActiveTab("new")}
        className={`text-[0.9rem] z-[3] font-medium cursor-pointer
          ${activeTab === "new" ? "text-white " : "text-neutral-400"}`}
      >
        New Pairs
      </button>

      <button
        onClick={() => setActiveTab("final")}
        className={`text-[0.9rem] z-[3] font-medium cursor-pointer
          ${activeTab === "final" ? "text-white" : "text-neutral-400"}`}
      >
        Final Stretch
      </button>

      <button
        onClick={() => setActiveTab("migrated")}
        className={`text-[0.9rem] z-[3] font-medium cursor-pointer
          ${activeTab === "migrated" ? "text-white" : "text-neutral-400"}`}
      >
        Migrated
      </button>
    </div>
  );
}

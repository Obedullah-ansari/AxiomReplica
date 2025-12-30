"use client";

import { useState, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import { MobileTableNav } from "./MobileTableNav";
import Tabsbutton from "./Tabsbutton";
import { TOKENS } from "@/Components/DB(mock)/token.data";
import TokenCard from "@/Components/Body/Tables/TokenCard";
import { useLiveTokens } from "@/Components/DB(mock)/useLiveTokens"; // Import the hook

type Tab = "new" | "final" | "migrated";

export default function ResponsiveTable() {
  const [activeTab, setActiveTab] = useState<Tab>("new");

  // Map tab to category
  const categoryMap = {
    new: "New Pairs",
    final: "Final Stretch",
    migrated: "Migrated"
  };

  // Get category based on active tab
  const currentCategory = categoryMap[activeTab];
  
  // Get initial filtered data
  const initialData = TOKENS.filter(token => token.category === currentCategory);
  
  // Use the hook to get live-updating tokens
  const data = useLiveTokens(initialData);

  // Re-run when tab changes to update initial data
  useEffect(() => {
    // The hook already handles dependency on initialData
  }, [currentCategory]);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      {/* DESKTOP NAV (Hidden on mobile) */}
      <div className="relative hidden sm:flex h-[48px] items-center border-b border-gray-700/40">
        <Tabsbutton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="ml-auto pr-[12px] pb-[8px]">
          <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
        </div>
      </div>

      {/* MOBILE NAV */}
      <MobileTableNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* TOKEN CARDS CONTENT */}
      <div className="flex-1 overflow-y-auto bg-neutral-900/70">
        {data.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
}
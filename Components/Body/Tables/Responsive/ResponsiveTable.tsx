"use client";

import { useState, useEffect, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { MobileTableNav } from "./MobileTableNav";
import Tabsbutton from "./Tabsbutton";
import { TOKENS } from "@/Components/DB(mock)/token.data";
import TokenCard from "@/Components/Body/Tables/TokenCard";
import { useLiveTokens } from "@/Components/DB(mock)/useLiveTokens";
import TokenCardSkeleton from "../TokenCardSkeleton";

type Tab = "new" | "final" | "migrated";

export default function ResponsiveTable() {
  const [activeTab, setActiveTab] = useState<Tab>("new");

 
  const categoryMap = {
    new: "New Pairs",
    final: "Final Stretch",
    migrated: "Migrated",
  };

  
  const currentCategory = useMemo(() => categoryMap[activeTab], [activeTab]);


  const initialData = useMemo(
    () => TOKENS.filter((token) => token.category === currentCategory),
    [currentCategory]
  );

 
  const data = useLiveTokens(initialData);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="relative hidden bg-neutral-800/40 sm:flex h-[48px] items-center border-b border-gray-700/40">
        <Tabsbutton activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="!ml-auto !pr-[12px] pb-[8px]">
          <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
        </div>
      </div>

      <MobileTableNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 overflow-y-auto bg-neutral-900/70">
        {data.length === 0 ? (
            <div className="w-full h-full overflow-y-auto bg-neutral-800/40 border-r border-gray-800/75">
            {data.length === 0 ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <TokenCardSkeleton key={i} />
                ))}
              </>
            ) : (
              data.map((token) => <TokenCard key={token.id} token={token} />)
            )}
          </div>
        ) : (
          data.map((token) => <TokenCard key={token.id} token={token} />)
        )}
      </div>
    </div>
  );
}

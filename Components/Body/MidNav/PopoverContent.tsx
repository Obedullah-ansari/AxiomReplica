import { useState } from "react";
import {
  Sun,
  Search,
  Hash,
  Eye,
  Square,
  Circle,
  LayoutGrid,
  Zap,
} from "lucide-react";

const PopoverContent = () => {
  const [selectedMetric, setSelectedMetric] = useState<"small" | "large">("large");
  const [selectedQuickBuy, setSelectedQuickBuy] = useState<string>("small");
  const [activeTab, setActiveTab] = useState<string>("layout");
  const [toggles, setToggles] = useState({
    searchBar: false,
    noDecimals: false,
    hiddenTokens: false,
    unhideMigrated: false,
    circleImages: false,
    progressBar: false,
    spacedTables: false,
  });

  const handleToggle = (key: keyof typeof toggles) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-neutral-900 !p-5 text-gray-200 w-[380px]  shadow-lg rounded-sm h-[81vh]">
      <div className="space-y-5">
        <div className="space-y-2">
          <h3 className="text-[0.85rem] font-medium text-gray-400">Metrics</h3>
          <div className="grid grid-cols-2 !gap-3">
            <button
              onClick={() => setSelectedMetric("small")}
              className={`rounded-lg border !p-4 text-center transition-all ${
                selectedMetric === "small"
                  ? "border-blue-500 bg-neutral-800"
                  : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
              }`}
            >
              <div className="text-[0.95rem] font-semibold text-gray-300">MC 77K</div>
              <div className="text-[0.8rem] text-gray-500">Small</div>
            </button>
            <button
              onClick={() => setSelectedMetric("large")}
              className={`rounded-lg border !p-4 text-center transition-all ${
                selectedMetric === "large"
                  ? "border-blue-500 bg-neutral-800"
                  : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
              }`}
            >
              <div className="text-[0.95rem] font-semibold text-gray-200">
                <span className="text-[0.8rem]">MC</span> 77K
              </div>
              <div className="text-[0.8rem] text-gray-500">Large</div>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[0.85rem] font-medium text-gray-400">Quick Buy</h3>
          <div className="grid grid-cols-4 !gap-2">
            {["small", "large", "mega", "ultra"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedQuickBuy(size)}
                className={`rounded-lg border !p-2.5 text-center transition-all ${
                  selectedQuickBuy === size
                    ? "border-blue-500 bg-neutral-800"
                    : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                }`}
              >
                <div className="!mb-1 flex items-center justify-center">
                  <span className="flex items-center !gap-0.5 rounded bg-blue-600 !px-2 !py-0.5 text-[0.5rem] font-medium text-white">
                    <Zap className="h-1 w-2" />7
                  </span>
                </div>
                <div className="text-[0.75rem] capitalize text-gray-400">{size}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center !gap-3">
          <Sun className="h-4 w-4 text-neutral-300" />
          <span className="font-medium text-[0.9rem] text-gray-200">Grey</span>
        </div>

        <div className="flex !gap-1 rounded-full bg-neutral-900 !p-1">
          {["layout", "metrics", "row", "extras"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full !px-4 !py-1.5 text-[0.85rem] font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="space-y-0.5">
          <button
            onClick={() => handleToggle("searchBar")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 text-left transition-colors hover:bg-neutral-700"
          >
            <Search className={`h-4 w-4 ${toggles.searchBar ? "text-amber-400" : "text-gray-400"}`} />
            <span className="font-medium text-[0.9rem]">Show Search Bar</span>
            {toggles.searchBar && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>

          <button
            onClick={() => handleToggle("noDecimals")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 text-left transition-colors hover:bg-neutral-700"
          >
            <Hash className={`h-4 w-4 ${toggles.noDecimals ? "text-green-500" : "text-gray-400"}`} />
            <span className="font-medium text-[0.9rem]">No Decimals</span>
            {toggles.noDecimals && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>

          <button
            onClick={() => handleToggle("hiddenTokens")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 text-left transition-colors hover:bg-neutral-700"
          >
            <Eye className={`h-4 w-4 ${toggles.hiddenTokens ? "text-green-500" : "text-gray-400"}`} />
            <span className="font-medium text-[0.9rem]">Show Hidden Tokens</span>
            {toggles.hiddenTokens && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>

          <button
            onClick={() => handleToggle("unhideMigrated")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 !pl-8 text-left transition-colors hover:bg-neutral-700"
          >
            <Eye className={`h-4 w-4 ${toggles.unhideMigrated ? "text-green-500" : "text-gray-500"}`} />
            <span className={`font-medium text-[0.9rem] ${toggles.unhideMigrated ? "text-green-500" : "text-gray-400"}`}>
              Unhide on Migrated
            </span>
            {toggles.unhideMigrated && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>

          <button
            onClick={() => handleToggle("circleImages")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 text-left transition-colors hover:bg-neutral-700"
          >
            <Square className={`h-4 w-4 ${toggles.circleImages ? "text-green-500" : "text-gray-400"}`} />
            <span className="font-medium text-[0.9rem]">Circle Images</span>
            {toggles.circleImages && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>

          <button
            onClick={() => handleToggle("progressBar")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 text-left transition-colors hover:bg-neutral-700"
          >
            <Circle className={`h-4 w-4 ${toggles.progressBar ? "text-green-500" : "text-gray-400"}`} />
            <span className="font-medium text-[0.9rem]">Progress Bar</span>
            {toggles.progressBar && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>

          <button
            onClick={() => handleToggle("spacedTables")}
            className="flex w-full items-center !gap-3 rounded-lg !p-2.5 text-left transition-colors hover:bg-neutral-700"
          >
            <LayoutGrid className={`h-4 w-4 ${toggles.spacedTables ? "text-green-500" : "text-gray-400"}`} />
            <span className="font-medium text-[0.9rem]">Spaced Tables</span>
            {toggles.spacedTables && <span className="ml-auto text-[0.75rem] text-green-500">✓</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopoverContent;
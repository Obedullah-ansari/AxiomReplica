import { useState } from "react";
import { X, Info, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
const BlacklistComponent = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Dev", "CA", "Keyword", "Website", "Twitter"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      className="min-h-screen flex items-center justify-center  !p-[16px]"
    >
      <div className="w-[480px] h-[700px] bg-[#141419] rounded-[12px] border border-[#2a2a35] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-[56px] !px-[20px] flex items-center justify-between border-b border-[#2a2a35]">
          <span className="text-[0.9rem] font-medium text-[#e5e5e5]">
            Blacklist
          </span>
          <Dialog.Close asChild>
            <button className="text-neutral-400 hover:text-white transition-colors !p-1.5">
              <X className="w-4 h-4" />
            </button>
          </Dialog.Close>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col !p-[20px]">
          {/* Input Row */}
          <div className="h-[44px] flex !gap-[12px] !mb-[12px]">
            <input
              type="text"
              placeholder="Enter twitter profile, dev address or keyword"
              className="flex-1 h-[44px] !px-[16px] bg-[#1e1e26] border border-[#2a2a35] rounded-[8px] text-[0.9rem] text-[#e5e5e5] placeholder-[#666] focus:outline-none focus:border-[#5865f2]"
            />
            <button className="h-[44px] !px-[24px] bg-[#5865f2] hover:bg-[#4752c4] text-[#fff] text-[0.9rem] font-medium rounded-[24px] transition-colors">
              Blacklist
            </button>
          </div>

          {/* Info Banner */}
          <div className="h-[44px] !px-[16px] !mb-[16px] flex items-center !gap-[10px] bg-[#1e1e26] rounded-[8px] border border-[#2a2a35]">
            <Info className="w-[16px] h-[16px] text-[#888]" />
            <span className="text-[0.9rem] text-[#888]">
              Blacklist all types of metrics!
            </span>
          </div>

          {/* Tabs */}
          <div className="h-[36px] flex items-center !gap-[8px] !mb-[16px]">
            {tabs.map((tab, index) => (
              <div key={tab} className="flex items-center">
                {index === 1 && (
                  <div className="w-[1px] h-[20px] bg-[#2a2a35] !mr-[8px]" />
                )}
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`h-[36px] !px-[16px] text-[0.9rem] rounded-[20px] transition-colors ${
                    activeTab === tab
                      ? "bg-[#2a2a35] text-[#e5e5e5]"
                      : "text-[#888] hover:text-[#e5e5e5]"
                  }`}
                >
                  {tab}
                </button>
              </div>
            ))}
            <ChevronRight className="w-[16px] h-[16px] text-[#888] ml-auto" />
          </div>

          {/* Empty Content Area */}
          <div className="flex-1 border-t border-[#2a2a35]" />
        </div>

        {/* Footer */}
        <div className="h-[64px] !px-[20px] flex items-center justify-between border-t border-[#2a2a35]">
          <span className="text-[0.9rem] text-[#888]">0 / 1000 blacklists</span>
          <div className="flex !gap-[12px]">
            <button className="h-[40px] !px-[24px] bg-transparent border border-[#e91e63] text-[#e91e63] text-[0.9rem] font-medium rounded-[24px] hover:bg-[#e91e63] hover:text-[#fff] transition-colors">
              Delete All
            </button>
            <button className="h-[40px] !px-[24px] bg-[#2a2a35] text-[#e5e5e5] text-[0.9rem] font-medium rounded-[24px] hover:bg-[#3a3a45] transition-colors">
              Import
            </button>
            <button className="h-[40px] !px-[24px] bg-[#2a2a35] text-[#e5e5e5] text-[0.9rem] font-medium rounded-[24px] hover:bg-[#3a3a45] transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlacklistComponent;

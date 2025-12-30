"use client";

import {
  HelpCircle,
  Bookmark,
  Calculator,
  Volume2,
  Settings,
  List,
  ChevronDown,
} from "lucide-react";
import TableNavZap from "../Tables/TableNavZap";
import ActiveWallet from "../../Footer/ActiveWallet";
import IconButton from "../../Footer/IconButton";
import DisplayPopover from "./DisplayPopover";
import CustomModal from "../Modal/CustomModal";
import BlacklistComponent from "../Modal/BlacklistComponen";
import HotkeySettings from "../Modal/HotkeySetting";
import PopoverContent from "./PopoverContent";
function MidNav() {
  return (
    <>
      <div className=" h-full w-full text-neutral-200 overflow-hidden ">
        <header className="flex  flex-nowrap items-center lg:justify-between  justify-end ">
          <div className="flex items-center !gap-[12px] w-full">
            <span className="text-white text-[1.2rem] font-medium">Pulse</span>
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-neutral-800">
              <img
                src="https://axiom.trade/images/sol-fill.svg"
                className="w-6 h-6 cursor-pointer"
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

          <div className="flex flex-nowrap justify-end items-center !gap-[14px] w-full">
            <div className="flex gap-4 items-center">
              <IconButton
                icon={HelpCircle}
                tooltip="Help with plus Filter setting"
                customcss={true}
              />
              <DisplayPopover
                button={
                  <div>
                    <button className="flex items-center text-neutral-200 !gap-[6px] !px-[14px] !py-[3px] rounded-full bg-gray-700/65 hover:bg-gray-600/60 cursor-pointer transition-colors">
                      <List className="w-[16px] h-[16px]" />
                      <span className="font-semibold text-[0.9rem]">
                        Display
                      </span>
                      <ChevronDown className="w-[14px] h-[14px] font-bold" />
                    </button>
                  </div>
                }
                content={<PopoverContent />}
              />

              <div className="flex gap-1 items-center">
                <CustomModal
                  trigger={
                    <button type="button">
                      <IconButton
                        icon={Bookmark}
                        tooltip="Blacklist dev, handle, keywords"
                        customcss
                      />
                    </button>
                  }
                >
                  <BlacklistComponent />
                </CustomModal>
                <CustomModal
                  trigger={
                    <button type="button">
                      <IconButton
                        icon={Calculator}
                        tooltip="Hotkey Settings"
                        customcss
                      />
                    </button>
                  }
                >
                  <HotkeySettings />
                </CustomModal>

                <IconButton icon={Volume2} tooltip="Alret" customcss={true} />
                <IconButton
                  icon={Settings}
                  tooltip="Snipe Settings"
                  customcss={true}
                />
              </div>
            </div>
            <div className="w-[1px] h-[20px] bg-gray-700/60 !mx-[4px]"></div>
            <ActiveWallet customcss={true} />

            <div className=" lg:hidden ">
              <TableNavZap
              cuscss={true}
              />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default MidNav;

"use client";
import {
  Settings,
  Wallet,
  Compass,
  Activity,
  Bell,
  ChevronDown,
  ChartNoAxesColumn,
  Dock,
  Palette,
  Gamepad2,
  BookText,
} from "lucide-react";

import TextIconButton from "./TextIconButton.tsx";
import IconButton from "./IconButton";
import MarketLighthouse from "./MarketLighthouse";
import AppToolTip from "./ AppToolTip";
import ActiveWallet from "./ActiveWallet";
import PresentBtn from "./PresentBtn";
import ResponsiveFooter from "./ResponsiveFooter";
const Footer = () => {
  return (
    <>
      <ResponsiveFooter/>
      <footer className="max-sm:hidden flex flex-nowrap items-center justify-between   text-gray-300 !px-[24px] border-t border-gray-700/60 h-[36px] min-h-[36px]">
      <div className="flex items-center  !gap-1.5">

        <PresentBtn />
        <ActiveWallet />
        <div className="h-4 w-px bg-gray-800 !mx-1" />

        <div className="flex gap-3 !pl-1">
          <TextIconButton icon={Settings} label="" tooltip="Tracker Settings" />
          <TextIconButton
            icon={Wallet}
            label="Wallets"
            tooltip="wallet Tracker"
            showDot={true}
          />
          <TextIconButton
            svg={
              <svg
                className="w-3.5 h-3.5 text-neutral-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
            label="Twitter"
            tooltip="Twitter Tracker"
            showDot={true}
          />

          <TextIconButton
            icon={Compass}
            label="Discover"
            tooltip="Discover Tracker"
            showDot={true}
          />
          <TextIconButton
            icon={Activity}
            label="Pulse"
            tooltip="Pulse Tracker"
            showDot={true}
          />
          <TextIconButton
            icon={ChartNoAxesColumn}
            label="PnL"
            tooltip="PnL Tracker"
          />
        </div>
        <div className="h-4 w-[0.04rem] bg-gray-700 hidden lg:block !mx-1" />

        <div className=" items-center hidden lg:flex  flex-nowrap border border-gray-700 rounded-full cursor-pointer">
          <AppToolTip content={<MarketLighthouse />} side="top">
            <div className="flex  flex-nowrap itmes-center !gap-0.5   !py-1   !px-1">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/200x200/23095.png"
                alt=""
                className="w-2 h-2 rounded-full !m-[0.05rem]"
              />
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png"
                alt=""
                className="w-2 h-2 rounded-full !m-[0.05rem]"
              />
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-cartoon-money-illustration_23-2150939386.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                className="w-2 h-2rounded-full !m-[0.05rem]"
              />
            </div>
          </AppToolTip>
        </div>
        <div className="h-4 hidden lg:block w-px bg-gray-700 !mx-1" />

        <div className="hidden lg:flex items-center !gap-1  !py-1  font-medium">
          <IconButton
            imgSrc="https://axiom.trade/images/sol-fill.svg"
            tooltip="Price of SOL in USD"
          />
          <span className="text-green-500 text-[0.75rem]">$123.06</span>
        </div>
      </div>

      <div className="  flex items-center !gap-1.5">
        <div className="flex items-center !gap-1.5 !px-2 !py-1 bg-teal-700/50 rounded text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          <span className="text-teal-500 hidden text-nowrap   lg:block font-medium">
            Connection is stable
          </span>
        </div>

        <button className="flex items-center !gap-1 !px-2 !py-1  hover:bg-gray-700/30 rounded text-xs font-medium transition-colors cursor-pointer">
          <span>GLOBAL</span>
          <ChevronDown className="w-2.5 h-2.5" />
        </button>

        <div className="h-4 w-px bg-gray-700/40 !mx-1" />

        <div className="flex items-center !gap-0.5 ">
          <IconButton icon={Dock} tooltip="Hide Watchlist Tracker" />
          <IconButton icon={Bell} tooltip="Notifications settings" />
          <IconButton icon={Palette} tooltip="Customize Theme" />
          <div className="w-[0.05rem] h-4 bg-neutral-700/40"></div>

          <IconButton icon={Gamepad2} tooltip="Join our Discord" />
          <IconButton
            svg={
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
            tooltip="Follow us on X"
          />

          <BookText className="w-4 h-4 !ml-1" />
          <span className="text-[0.8rem]">Docs</span>
        </div>
      </div>
    </footer>
    </>
   
  );
};

export default Footer;

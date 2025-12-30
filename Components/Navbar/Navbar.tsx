"use client"
import Logo from "./Logo";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Sidebar from "../SideNavbar/SideBar";
import { useState } from "react";
function Navbar() {

  const [SideOpen, SetSideOpen] = useState<boolean>(false)

   function sideOpenfuntion() {
    SetSideOpen((prev)=>!prev)
  }

  
  
  return (
    <>
      <div className=" w-full max-sm:h-[44px] h-[52px] sm:h-[64px] !px-[16px] lg:!px-[24px] border-b border-primaryStroke border-gray-800 text-white flex  items-center ">
        <Logo />
        <LeftNav />
        <RightNav
         fun={sideOpenfuntion}
        />
        <Sidebar
         animateside={SideOpen}
         fun={sideOpenfuntion}
        />
      </div>
    </>
  );
}

export default Navbar;

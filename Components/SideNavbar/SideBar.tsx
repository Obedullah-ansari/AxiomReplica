"use client";

import {
  Eye,
  Gift,
  DollarSign,
  Star,
  Globe,
  User,
  Bell,
  Languages,
  Sparkles,
  ArrowDownToLine,
  ArrowUpFromLine,
  LogOut,
} from "lucide-react";

import SidebarUserProfile from "./SidebarUserProfile";
import SidebarSection from "./SidebarSectionProps";
import SidebarMenuItem from "./SidebarMenuItemProps";
import { motion, AnimatePresence } from "framer-motion";

type SidebarProps = {
  animateside: boolean;
  fun: () => void;
};

const Sidebar = ({ animateside, fun }: SidebarProps) => {
  return (
    <AnimatePresence>
      {animateside && (
        <>
        
          <motion.div
            onClick={fun}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[90]
              bg-neutral-950/40 backdrop-blur-lg
              max-sm:block hidden
            "
          />

     
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              fixed top-0 right-0 z-[100]
              w-80 min-h-screen
              bg-neutral-900 text-neutral-300
              max-sm:flex hidden
              flex-col pb-1 overflow-y-auto
            "
          >
            <SidebarUserProfile />

            <SidebarSection title="Navigation">
              <SidebarMenuItem icon={Eye} label="Vision" />
              <SidebarMenuItem icon={Gift} label="Rewards" />
              <SidebarMenuItem icon={DollarSign} label="Yield" />
              <SidebarMenuItem icon={Star} label="Watchlist" />
            </SidebarSection>

            <SidebarSection title="Settings">
              <SidebarMenuItem icon={Globe} label="Regions" />
              <SidebarMenuItem icon={User} label="Account and Security" />
              <SidebarMenuItem icon={Bell} label="Notifications" />
              <SidebarMenuItem icon={Languages} label="Auto Translate" />
              <SidebarMenuItem icon={Sparkles} label="Feature Updates" />
            </SidebarSection>

            <SidebarSection title="Account">
              <SidebarMenuItem icon={ArrowDownToLine} label="Deposit" />
              <SidebarMenuItem icon={ArrowUpFromLine} label="Withdraw" />
              <SidebarMenuItem
                icon={LogOut}
                label="Log Out"
                variant="destructive"
              />
            </SidebarSection>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;

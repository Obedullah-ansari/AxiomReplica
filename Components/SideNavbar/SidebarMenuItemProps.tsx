import { LucideIcon } from "lucide-react";
import clsx from "clsx";

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  variant?: "default" | "destructive";
}

const SidebarMenuItem = ({
  icon: Icon,
  label,
  variant = "default",
}: SidebarMenuItemProps) => {
  return (
    <div
      className={clsx(
        "flex items-center !gap-4 !px-4 !py-2 rounded-xl cursor-pointer transition-all",
        "bg-neutral-900/80 border border-white/5 hover:border-white/10 hover:bg-neutral-800/80",
        variant === "destructive" &&
          "text-pink-400 hover:bg-pink-500/10 border-pink-500/20"
      )}
    >
      <Icon className="!w-5 !h-5" />
      <span className="text-base font-medium">{label}</span>
    </div>
  );
};

export default SidebarMenuItem;

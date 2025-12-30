import { ReactNode } from "react";

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
}

const SidebarSection = ({ title, children }: SidebarSectionProps) => {
  return (
    <div className="!mt-4">
      <h3 className="!px-4 !mb-3 text-neutral-500 text-sm font-semibold tracking-wide uppercase">
        {title}
      </h3>
      <div className="flex flex-col !gap-2 !px-3">
        {children}
      </div>
    </div>
  );
};

export default SidebarSection;

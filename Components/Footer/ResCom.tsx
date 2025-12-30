import { LucideIcon } from "lucide-react";

type ResComProps = {
  label: string;
  Icon: LucideIcon;
};

const ResCom: React.FC<ResComProps> = ({ label, Icon }) => {
  return (
    <div className="flex flex-col items-center  text-gray-500  cursor-pointer transition-colors">
      <Icon size={18} />
      <span className="text-[0.85rem]">{label}</span>
    </div>
  );
};

export default ResCom;

import { LucideIcon } from "lucide-react";


type IconButtonProps = {
  Icon: LucideIcon;
  cuscc?: boolean;
  
};

const IconButton = ({ Icon, cuscc }: IconButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-700/70 transition-colors ${cuscc? "hidden" :""} `}
        
    >
      <Icon className="w-5 h-5 text-neutral-200" />
    </button>
  );
};

export default IconButton;

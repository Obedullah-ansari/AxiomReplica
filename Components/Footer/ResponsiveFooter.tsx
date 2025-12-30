import {
  FileUser,
  Activity,
  Flame,
  RadioTower,
  ArrowLeftRight,
} from "lucide-react";
import ResCom from "./ResCom";

type FooterItem = {
  label: string;
  Icon: any;
};

const footerItems: FooterItem[] = [
  { label: "Trending", Icon: Flame },
  { label: "Track", Icon: RadioTower },
  { label: "Pulse", Icon: Activity },
  { label: "Perpetuals", Icon: ArrowLeftRight },
  { label: "Account", Icon: FileUser },
];

function ResponsiveFooter() {
  return (
    <div className="max-sm:flex hidden justify-evenly items-center  w-full h-[56px] !pr-2 !pt-1">
      {footerItems.map((item) => (
        <ResCom key={item.label} label={item.label} Icon={item.Icon} />
      ))}
    </div>
  );
}

export default ResponsiveFooter;

"use client";

import {
  Link,
  Search,
  Users,
  Copy,
  Eye,
  Crown,
  Target,
  Gift,
  Lock,
} from "lucide-react";
import { Token } from "@/Components/DB(mock)/token.types";

/* ---------- COLOR MAPS ---------- */

const trendText = {
  up: "text-green-400",
  down: "text-red-400",
  neutral: "text-neutral-300",
  alert: "text-yellow-400",
};

const trendBorder = {
  up: "ring-2 ring-green-500",
  down: "ring-2 ring-red-500",
  neutral: "ring-1 ring-neutral-600",
  alert: "ring-2 ring-yellow-400",
};

const trendBadge = {
  up: "text-green-300",
  down: "text-red-300",
  neutral: "text-neutral-200",
  alert: "text-yellow-300",
};

// ADD THIS: Icon color mapping
const trendIcon = {
  up: "text-green-300",
  down: "text-red-300",
  neutral: "text-neutral-300",
  alert: "text-yellow-300",
};

interface TokenCardProps {
  token: Token;
}

const TokenCard = ({ token }: TokenCardProps) => {

  return (
    <div className="h-[142px]  !px-3 !py-2 flex flex-col justify-between border-b border-gray-700/40 ">
      {/* TOP */}
      <div className="flex gap-3 items-start">
        {/* IMAGE */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div
            className={`relative w-[72px] h-[72px] rounded-md ${
              trendBorder[token.borderTrend]
            } transition-all`}
          >
            <img
              src={token.imageUrl}
              alt={token.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <span className="text-[10px] text-cyan-400 truncate max-w-[72px]">
            {token.walletAddress}
          </span>
        </div>

        {/* CENTER */}
        <div className="flex-1 min-w-0 text-neutral-300 text-[1.2rem] flex flex-col gap-1">
          <div className="flex items-center gap-1 truncate">
            <span className="font-semibold text-sm truncate">{token.name}</span>
            <span className="text-xs text-neutral-400 truncate">
              {token.description}
            </span>
            <Copy className="w-3 h-3 text-neutral-500 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2 text-[0.8rem] text-neutral-500 flex-wrap">
            <span className={trendText[token.priceTrend]}>{token.timeAgo}</span>
            <Link className="w-3 h-3" />
            <Search className="w-3 h-3" />
            <Users className="w-3 h-3" /> {token.replies}
            <span className="text-green-400">↑{token.upvotes}</span>
            <span className="text-red-400">↓{token.downvotes}</span>
            <Eye className="w-3 h-3" /> {token.views}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end text-[11px] min-w-[90px]">
          <span
            className={`font-semibold text-sm ${
              trendText[token.priceTrend]
            } transition-colors`}
          >
            {token.marketCap}
          </span>
          <span>{token.volume}</span>
          <span className="text-green-400">
            {token.floor} · TX {token.txCount}
          </span>
        </div>
      </div>

      {/* BADGES */}
      <div className="flex gap-1 flex-wrap">
        <Badge
          icon={<Users className={`w-3 h-3 ${trendIcon[token.badgeTrend]}`} />}
          value={token.holderPercent}
          trend={token.badgeTrend}
        />
        <Badge
          icon={<Crown className={`w-3 h-3 ${trendIcon[token.badgeTrend]}`} />}
          value={`${token.devPercent} ${token.devTime}`}
          trend={token.badgeTrend}
        />
        <Badge
          icon={<Target className={`w-3 h-3 ${trendIcon[token.badgeTrend]}`} />}
          value={token.targetPercent}
          trend={token.badgeTrend}
        />
        <Badge
          icon={<Lock className={`w-3 h-3 ${trendIcon[token.badgeTrend]}`} />}
          value={token.lockPercent}
          trend={token.badgeTrend}
        />
        <Badge
          icon={<Gift className={`w-3 h-3 ${trendIcon[token.badgeTrend]}`} />}
          value={token.giftPercent}
          trend={token.badgeTrend}
        />
      </div>
    </div>
  );
};

const Badge = ({
  icon,
  value,
  trend,
}: {
  icon: React.ReactNode;
  value: string;
  trend: "up" | "down" | "neutral" | "alert";
}) => (
  <div className="!px-1.5 !py-[2px] border border-gray-800/60 rounded-full text-[0.8rem] flex items-center gap-0.5">
    {icon}
    <span className={trendBadge[trend]}>{value}</span>
  </div>
);

export default TokenCard;
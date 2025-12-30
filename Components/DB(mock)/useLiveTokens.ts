"use client";

import { useState, useEffect } from "react";
import { Token, Trend } from "@/Components/DB(mock)/token.types";

const trends: Trend[] = ["up", "down", "neutral", "alert"];

export const useLiveTokens = (initialTokens: Token[]) => {
  const [data, setData] = useState<Token[]>(initialTokens);

 
  useEffect(() => {
    setData(initialTokens);
  }, [initialTokens]);

 
  useEffect(() => {
    const id = setInterval(() => {
      setData(prev =>
        prev.map(t => {
          const newTrend = trends[Math.floor(Math.random() * trends.length)];

          const parseNumber = (str: string) =>
            parseFloat(str.replace(/[^0-9.]/g, "")) || 0;

          const formatPercent = (num: number) =>
            `${Math.max(0, Math.min(100, num)).toFixed(0)}%`;

          const newMarketCap =
            parseNumber(t.marketCap) * (1 + (Math.random() * 2 - 1) * 0.05);
          const newVolume =
            parseNumber(t.volume) * (1 + (Math.random() * 2 - 1) * 0.1);
          const newFloor =
            parseNumber(t.floor) * (1 + (Math.random() * 2 - 1) * 0.1);

          return {
            ...t,
            priceTrend: newTrend,
            borderTrend: newTrend,
            badgeTrend: newTrend,

            marketCap: `$${newMarketCap.toFixed(2)}K`,
            volume: `$${Math.round(newVolume)}`,
            floor:
              newFloor < 0.01
                ? `0.0₃${Math.floor(newFloor * 1000)}`
                : newFloor.toFixed(4),

            txCount: Math.max(0, t.txCount + Math.floor(Math.random() * 5) - 2),

            holderPercent: formatPercent(
              parseNumber(t.holderPercent) + (Math.random() * 4 - 2)
            ),
            devPercent: formatPercent(
              parseNumber(t.devPercent) + (Math.random() * 3 - 1.5)
            ),
            targetPercent: formatPercent(
              parseNumber(t.targetPercent) + (Math.random() * 4 - 2)
            ),
            lockPercent: formatPercent(
              parseNumber(t.lockPercent) + (Math.random() * 2 - 1)
            ),
            giftPercent: formatPercent(
              parseNumber(t.giftPercent) + (Math.random() * 2 - 1)
            ),

            timeAgo: `${Math.floor(Math.random() * 60)}s`,
            replies: Math.max(0, t.replies + Math.floor(Math.random() * 3) - 1),
            upvotes: Math.max(0, t.upvotes + Math.floor(Math.random() * 4) - 1),
            downvotes: Math.max(0, t.downvotes + Math.floor(Math.random() * 3) - 1),
            watchlistCount: Math.max(
              0,
              t.watchlistCount + Math.floor(Math.random() * 3) - 1
            ),
            views: Math.max(0, t.views + Math.floor(Math.random() * 10) - 3),
          };
        })
      );
    }, 500);

    return () => clearInterval(id);
  }, []);

  return data;
};

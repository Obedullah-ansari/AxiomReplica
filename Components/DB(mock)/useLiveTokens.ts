"use client";

import { useState, useEffect, useRef } from "react";
import { Token, Trend } from "@/Components/DB(mock)/token.types";

const trends: Trend[] = ["up", "down", "neutral", "alert"];

export const useLiveTokens = (initialTokens: Token[]) => {
  const [data, setData] = useState<Token[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Reset data when initialTokens changes AND on client mount
  useEffect(() => {
    setIsMounted(true);
    setData(initialTokens);
  }, [initialTokens]);

  // 2. Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // 3. Live updates - only on client, only when mounted
  useEffect(() => {
    if (!isMounted || initialTokens.length === 0) return;

    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const parseNumber = (str: string) =>
      parseFloat(str.replace(/[^0-9.]/g, "")) || 0;

    const formatPercent = (num: number) =>
      `${Math.max(0, Math.min(100, num)).toFixed(0)}%`;

    intervalRef.current = setInterval(() => {
      setData((prev) => {
        if (prev.length === 0) return prev;

        return prev.map((t) => {
          const newTrend = trends[Math.floor(Math.random() * trends.length)];

          const newMarketCap = parseNumber(t.marketCap) * (1 + (Math.random() * 2 - 1) * 0.05);
          const newVolume = parseNumber(t.volume) * (1 + (Math.random() * 2 - 1) * 0.1);
          const newFloor = parseNumber(t.floor) * (1 + (Math.random() * 2 - 1) * 0.1);

          return {
            ...t,
            priceTrend: newTrend,
            borderTrend: newTrend,
            badgeTrend: newTrend,

            marketCap: `$${newMarketCap.toFixed(2)}K`,
            volume: `$${Math.round(newVolume)}`,
            floor: newFloor < 0.01 ? `0.0₃${Math.floor(newFloor * 1000)}` : newFloor.toFixed(4),
            txCount: Math.max(0, t.txCount + Math.floor(Math.random() * 5) - 2),

            holderPercent: formatPercent(parseNumber(t.holderPercent) + (Math.random() * 4 - 2)),
            devPercent: formatPercent(parseNumber(t.devPercent) + (Math.random() * 3 - 1.5)),
            targetPercent: formatPercent(parseNumber(t.targetPercent) + (Math.random() * 4 - 2)),
            lockPercent: formatPercent(parseNumber(t.lockPercent) + (Math.random() * 2 - 1)),
            giftPercent: formatPercent(parseNumber(t.giftPercent) + (Math.random() * 2 - 1)),

            timeAgo: `${Math.floor(Math.random() * 60)}s`,
            replies: Math.max(0, t.replies + Math.floor(Math.random() * 3) - 1),
            upvotes: Math.max(0, t.upvotes + Math.floor(Math.random() * 4) - 1),
            downvotes: Math.max(0, t.downvotes + Math.floor(Math.random() * 3) - 1),
            watchlistCount: Math.max(0, t.watchlistCount + Math.floor(Math.random() * 3) - 1),
            views: Math.max(0, t.views + Math.floor(Math.random() * 10) - 3),
          };
        });
      });
    }, 500);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMounted, initialTokens]); // Depend on initialTokens to restart when tab changes

  return data;
};
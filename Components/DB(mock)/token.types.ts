export type Trend = "up" | "down" | "neutral" | "alert";

export interface Token {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  walletAddress: string;

  timeAgo: string;
  replies: number;
  upvotes: number;
  downvotes: number;
  watchlistCount: number;
  views: number;

  marketCap: string;
  volume: string;
  floor: string;
  txCount: number;

  holderPercent: string;
  devPercent: string;
  devTime: string;
  targetPercent: string;
  lockPercent: string;
  giftPercent: string;

  showVerified: boolean;

  priceTrend: Trend;
  borderTrend: Trend;
  badgeTrend: Trend;

  category: "New Pairs" | "Final Stretch" | "Migrated" | string;

  // ✅ Add priceChange for dynamic updates
  priceChange: number;
}

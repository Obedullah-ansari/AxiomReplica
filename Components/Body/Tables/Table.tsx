"use client";

import { useMemo } from "react";
import { TOKENS } from "@/Components/DB(mock)/token.data";
import TokenCard from "./TokenCard";
import TableNav from "./TableNav";
import { useLiveTokens } from "@/Components/DB(mock)/useLiveTokens";
import { Token } from "@/Components/DB(mock)/token.types";
import TokenCardSkeleton from "./TokenCardSkeleton";

type Props = {
  heading: string;
  category: "New Pairs" | "Final Stretch" | "Migrated" | string;
};

function Table({ heading, category }: Props) {
  const initialData: Token[] = useMemo(
    () => TOKENS.filter((t) => t.category === category),
    [category]
  );

  const data = useLiveTokens(initialData);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full min-h-[48px]">
        <TableNav heading={heading} />
      </div>

      <div className="w-full h-full overflow-y-auto bg-neutral-800/40 border-r border-gray-800/75">
        {data.length === 0 ? (
          <div className="w-full h-full overflow-y-auto bg-neutral-800/40 border-r border-gray-800/75">
            {data.length === 0 ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <TokenCardSkeleton key={i} />
                ))}
              </>
            ) : (
              data.map((token) => <TokenCard key={token.id} token={token} />)
            )}
          </div>
        ) : (
          data.map((token) => <TokenCard key={token.id} token={token} />)
        )}
      </div>
    </div>
  );
}

export default Table;

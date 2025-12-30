"use client";

import { TOKENS } from "@/Components/DB(mock)/token.data";
import TokenCard from "./TokenCard";
import TableNav from "./TableNav";
import { useLiveTokens } from "@/Components/DB(mock)/useLiveTokens"; // Import the hook

type Props = {
  heading: string;
  category: "New Pairs" | "Final Stretch" | "Migrated" | string;
};

function Table({ heading, category }: Props) {

  const initialData = TOKENS.filter((t) => t.category === category);
  

  const data = useLiveTokens(initialData);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full min-h-[48px]">
        <TableNav heading={heading} />
      </div>

      <div className="w-full h-full bg-neutral-800/40 border-r border-gray-800/75">
        {data.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
}

export default Table;
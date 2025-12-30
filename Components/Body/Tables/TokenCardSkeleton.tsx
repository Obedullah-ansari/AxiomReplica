export default function TokenCardSkeleton() {
  return (
    <div className="h-[142px] !px-3 !py-2 flex flex-col justify-between border-b border-gray-700/40 animate-pulse">
      
      <div className="flex gap-3">
      
        <div className="w-[72px] h-[72px] rounded-md bg-neutral-700/60" />

     
        <div className="flex-1 !space-y-2">
          <div className="h-3 w-1/2 bg-neutral-700/60 rounded" />
          <div className="h-2 w-3/4 bg-neutral-700/50 rounded" />
          <div className="flex gap-2">
            <div className="h-2 w-12 bg-neutral-700/50 rounded" />
            <div className="h-2 w-10 bg-neutral-700/50 rounded" />
            <div className="h-2 w-14 bg-neutral-700/50 rounded" />
          </div>
        </div>

        
        <div className="w-[90px] !space-y-2">
          <div className="h-3 w-full bg-neutral-700/60 rounded" />
          <div className="h-2 w-3/4 bg-neutral-700/50 rounded" />
          <div className="h-2 w-2/3 bg-neutral-700/50 rounded" />
        </div>
      </div>


      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-12 rounded-full bg-neutral-700/50"
          />
        ))}
      </div>
    </div>
  );
}

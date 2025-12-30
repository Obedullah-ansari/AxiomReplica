const SidebarUserProfile = () => {
  return (
    <div className="!mx-3 !my-1 !p-2 rounded-xl bg-gradient-to-r from-red-900/60 via-yellow-800/50 to-green-800/60 border border-white/10">
      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="!w-12 !h-12 rounded-full bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 flex items-center justify-center text-black font-bold text-lg shadow-inner">
              US
            </div>
            <div className="absolute !bottom-0 !right-0 !w-3 !h-3 bg-green-400 rounded-full border-2 border-neutral-900" />
          </div>

          <div>
            <div className="text-white font-semibold text-base">User</div>
            <div className="text-neutral-200 text-sm flex items-center gap-1">
              0 wallets •
              <span className="flex items-center gap-1">
                <span className="text-blue-400">≋</span> 0
              </span>
            </div>
          </div>
        </div>

        {/* Right status */}
        <div className="flex items-center gap-2 bg-black/40 !px-3 !py-1 rounded-full">
          <div className="!w-2 !h-2 bg-green-400 rounded-full" />
          <span className="text-white text-sm">0</span>
        </div>

      </div>
    </div>
  );
};

export default SidebarUserProfile;

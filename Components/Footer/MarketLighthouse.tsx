import { BarChart3, Users, Gem, Link } from "lucide-react";

const MarketLighthouse = () => {
  return (
    <div className="bg-neutral-900 rounded-lg !p-4 w-full max-w-md border border-neutral-700">
  
      <div className="flex items-center justify-between !mb-4">
        <div className="flex items-center !gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-white font-medium">Market Lighthouse</span>
        </div>
        <div className="flex items-center !gap-3 text-sm">
          <span className="text-neutral-400 cursor-pointer hover:text-white transition-colors">5m</span>
          <span className="text-neutral-400 cursor-pointer hover:text-white transition-colors">1h</span>
          <span className="text-neutral-400 cursor-pointer hover:text-white transition-colors">6h</span>
          <span className="text-red-500 font-medium cursor-pointer">24h</span>
        </div>
      </div>


      <div className="grid grid-cols-2 !gap-3 !mb-4">
        <div className="bg-neutral-800/70 rounded-lg !p-3">
          <div className="text-neutral-400 text-xs !mb-1">Total Trades</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center !gap-1.5">
              <BarChart3 className="w-4 h-4 text-neutral-400" />
              <span className="text-white font-medium text-base">8.17M</span>
            </div>
            <span className="text-red-500 text-sm font-medium">-3.015%</span>
          </div>
        </div>
        <div className="bg-neutral-800/70 rounded-lg !p-3">
          <div className="text-neutral-400 text-xs !mb-1">Traders</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center !gap-1.5">
              <Users className="w-4 h-4 text-neutral-400" />
              <span className="text-white font-medium text-base">371K</span>
            </div>
            <span className="text-red-500 text-sm font-medium">-1.133%</span>
          </div>
        </div>
      </div>


      <div className="!mb-4">
        <div className="flex items-center justify-between !mb-2">
          <span className="text-neutral-400 text-sm">24h Vol</span>
          <div className="flex items-center !gap-1">
            <span className="text-white font-medium text-base">$1.71B</span>
            <span className="text-green-500 text-sm font-medium">+0.54%</span>
          </div>
        </div>
        <div className="h-1 rounded-full overflow-hidden flex">
          <div className="bg-green-500/70 w-[57%]" />
          <div className="bg-red-400/70 w-[43%]" />
        </div>
        <div className="flex items-center justify-between !mt-2 text-sm">
          <span className="text-green-500 font-medium">4.7M / $866M</span>
          <span className="text-red-500 font-medium">3.47M / $849M</span>
        </div>
      </div>


      <div className="!mb-4">
        <div className="flex items-center !gap-2 !mb-3">
          <Gem className="w-4 h-4 text-neutral-400" />
          <span className="text-neutral-400 text-sm">Token Stats</span>
        </div>
        <div className="grid grid-cols-2 !gap-3">
          <div className="bg-neutral-800/70 rounded-lg !p-3">
            <div className="text-neutral-400 text-xs !mb-1">Created</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center !gap-1.5">
                <Gem className="w-4 h-4 text-neutral-400" />
                <span className="text-white font-medium text-base">29.7K</span>
              </div>
              <span className="text-green-500 text-sm font-medium">+1.998%</span>
            </div>
          </div>
          <div className="bg-neutral-800/70 rounded-lg !p-3">
            <div className="text-neutral-400 text-xs !mb-1">Migrations</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center !gap-1.5">
                <Link className="w-4 h-4 text-neutral-400" />
                <span className="text-white font-medium text-base">129</span>
              </div>
              <span className="text-neutral-400 text-sm">+0%</span>
            </div>
          </div>
        </div>
      </div>


      <div className="!mb-4">
        <div className="text-neutral-400 text-sm !mb-3">Top Launchpads</div>
        <div className="grid grid-cols-3 !gap-2">
          <div className="bg-neutral-800/70 rounded-lg !p-2.5 flex items-center !gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-xs">💊</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">$161M</div>
              <div className="text-red-500 text-xs font-medium">-15.8%</div>
            </div>
          </div>
          <div className="bg-neutral-800/70 rounded-lg !p-2.5 flex items-center !gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              <span className="text-lg">🐕</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">$11.3M</div>
              <div className="text-green-500 text-xs font-medium">+62.28%</div>
            </div>
          </div>
          <div className="bg-neutral-800/70 rounded-lg !p-2.5 flex items-center !gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-xs font-bold text-neutral-900">$</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">$5.61M</div>
              <div className="text-green-500 text-xs font-medium">+770.2%</div>
            </div>
          </div>
        </div>
      </div>

      
      <div>
        <div className="text-neutral-400 text-sm !mb-3">Top Protocols</div>
        <div className="grid grid-cols-3 !gap-2">
          <div className="bg-neutral-800/70 rounded-lg !p-2.5 flex items-center !gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-green-500 via-green-400 to-green-600 flex items-center justify-center">
                <span className="text-xs">🟢</span>
              </div>
            </div>
            <div>
              <div className="text-white text-sm font-medium">$900M</div>
              <div className="text-green-500 text-xs font-medium">+8.373%</div>
            </div>
          </div>
          <div className="bg-neutral-800/70 rounded-lg !p-2.5 flex items-center !gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-xs">🟢</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">$81.8M</div>
              <div className="text-red-500 text-xs font-medium">-30%</div>
            </div>
          </div>
          <div className="bg-neutral-800/70 rounded-lg !p-2.5 flex items-center !gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-xs font-bold text-white">R</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">$30.1M</div>
              <div className="text-red-500 text-xs font-medium">-24.7%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketLighthouse;
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { Stat } from '../shared/types/Game';

interface StatCardProps {
  stat: Stat;
}
export function StatCard({ stat }: StatCardProps) {
  const isUp = stat.trendDirection === 'up';
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex justify-between items-start mb-2">
        <span className="text-sm font-medium text-gray-500">{stat.label}</span>
        <div
          className={`flex items-center gap-1 text-xs font-medium px-1.5 py-0.5 rounded ${isUp ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
        >
          {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          <span>{stat.trend}%</span>
        </div>
      </div>

      <div>
        <span className="text-3xl font-semibold text-gray-900 tracking-tight">{stat.value}</span>
      </div>
    </div>
  );
}

import { games, monthlyData, stats } from '../../data/games';
import { GameTable } from '../../components/GameTable';
import { StatCard } from '../../components/StatCard';
import { BarChart } from '../../components/BarCharts';

export function AdminDashboard() {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">
            Overview of platform performance and inventory
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Export Report
          </button>
          <button className="px-4 py-2 bg-ink text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
            + Add Game
          </button>
        </div>
      </header>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Charts & Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 h-[400px]">
          <BarChart data={monthlyData} title="Monthly Active Players" />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3 w-full">
            <button className="w-full py-2.5 px-4 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Review New Reviews
            </button>
            <button className="w-full py-2.5 px-4 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Update Featured List
            </button>
            <button className="w-full py-2.5 px-4 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              Manage Users
            </button>
            <button className="w-full py-2.5 px-4 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
              System Settings
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Game Inventory</h2>
          <button className="text-sm text-accent font-medium hover:text-accent/80">View All</button>
        </div>
        <GameTable games={games} />
      </section>
    </div>
  );
}

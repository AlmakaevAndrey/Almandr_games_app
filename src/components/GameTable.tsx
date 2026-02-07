import { Edit, Trash2 } from 'lucide-react';
import type { Game } from '../shared/types/Game';

interface GameTableProps {
  games: Game[];
}

export function GameTable({ games }: GameTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Game Title
              </th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Genre
              </th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Players
              </th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="p-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {games.map((game) => (
              <tr key={game.id} className="group hover:bg-gray-50 transition-colors">
                <td className="p-4 text-sm font-medium text-gray-900">{game.title}</td>
                <td className="p-4 text-sm text-gray-500">{game.genre}</td>
                <td className="p-4 text-sm text-gray-500">{game.players}</td>
                <td className="p-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-900">{game.rating}</span>
                    <span className="text-gray-400">/5</span>
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${game.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-700 border-gray-200'}`}
                  >
                    {game.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-500 hover:text-gray-900 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

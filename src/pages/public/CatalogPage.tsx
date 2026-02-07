import { useState } from 'react';
import { games } from '../../data/games';
import { GameCard } from '../../components/GameCard';

export function CatalogPage() {
  const [filter, setFilter] = useState('All');
  const genres = ['All', ...Array.from(new Set(games.map((g) => g.genre)))];
  const filteredGames = filter === 'All' ? games : games.filter((g) => g.genre === filter);

  return (
    <div className="min-h-screen pb-20 pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Game Catalog</h1>
        <p className="text-gray-500 max-w-2xl mb-8">
          Browse and manage the complete inventory of available board games and puzzles.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setFilter(genre)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${filter === genre ? 'bg-ink border-ink text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'}`}
            >
              {genre}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} className="h-full" />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20 bg-white border border-gray-200 rounded-lg border-dashed">
          <p className="text-gray-500">No games found in this category.</p>
          <button
            onClick={() => setFilter('All')}
            className="mt-4 text-accent hover:text-accent/80 font-medium text-sm"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

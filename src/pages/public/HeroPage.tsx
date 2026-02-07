import { ArrowRight } from 'lucide-react';
import { GameCard } from '../../components/GameCard';
import { games } from '../../data/games';
import type { Game } from '../../shared/types/Game';

interface HeroPageProps {
  onNavigate: (view: 'catalog') => void;
}

export function HeroPage({ onNavigate }: HeroPageProps) {
  const featuredGames = games.filter((g) => g.featured).slice(0, 6);
  return (
    <div className="pb-20">
      <section className="pt-16 pb-20 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Board Games & Puzzles
            </h1>

            <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
              Browse the catalog, manage inventory, and track platform performance from the admin
              dashboard.
            </p>

            <button
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Browse Catalog
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Featured Games</h2>
          <p className="text-gray-500 text-sm mt-1">Curated selection for this month</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}

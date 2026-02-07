import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { GameCover } from './GameCover';
import type { Game } from '../data/games';
interface GameCardProps {
  game: Game;
  className?: string;
}
export function GameCard({ game, className = '' }: GameCardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col hover:border-gray-300 transition-colors ${className}`}
    >
      <div className="relative w-full h-48 overflow-hidden bg-gray-50">
        <GameCover gameId={game.id} colors={game.colors} className="w-full h-full" />

        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded px-2 py-1 flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-semibold text-gray-700">{game.rating}</span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-accent">{game.genre}</span>
          <span className="text-xs font-medium text-gray-500">${game.price}</span>
        </div>

        <h3 className="font-bold text-lg leading-tight mb-2 text-gray-900">{game.title}</h3>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        <div className="mt-auto flex items-center gap-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-gray-400" />
            <span>{game.players}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{game.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

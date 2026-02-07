export interface Game {
  id: number;
  title: string;
  genre: string;
  players: string;
  duration: string;
  description: string;
  rating: number;
  featured: boolean;
  colors: string[];
  price: number;
  status: 'Active' | 'Draft';
}

export interface Stat {
  label: string;
  value: string | number;
  trend: number;
  trendDirection: 'up' | 'down';
}

export interface MonthlyDataPoint {
  name: string;
  players: number;
  revenue: number;
}

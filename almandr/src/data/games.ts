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

export const games: Game[] = [
  {
    id: 1,
    title: 'Chronos & Kairos',
    genre: 'Strategy',
    players: '2-4',
    duration: '60-90m',
    description: 'A deep strategy game about manipulating time streams to build civilizations.',
    rating: 4.8,
    featured: true,
    colors: ['#f97316', '#1c1917', '#fafaf9'],
    price: 59.99,
    status: 'Active',
  },
  {
    id: 2,
    title: 'The Silent Orchard',
    genre: 'Cooperative',
    players: '1-5',
    duration: '45m',
    description: 'Work together to harvest mystical fruits before the silence takes over.',
    rating: 4.5,
    featured: true,
    colors: ['#166534', '#dcfce7', '#1c1917'],
    price: 34.5,
    status: 'Active',
  },
  {
    id: 3,
    title: 'Neon Circuit',
    genre: 'Puzzle',
    players: '1-2',
    duration: '30m',
    description: 'Connect the wires in a cyberpunk city to restore power to the grid.',
    rating: 4.2,
    featured: false,
    colors: ['#a855f7', '#e879f9', '#1c1917'],
    price: 24.99,
    status: 'Active',
  },
  {
    id: 4,
    title: 'Velvet Masquerade',
    genre: 'Social Deduction',
    players: '5-10',
    duration: '30-60m',
    description: 'Uncover the spies at the grand ball without revealing your own identity.',
    rating: 4.7,
    featured: true,
    colors: ['#9f1239', '#fb7185', '#1c1917'],
    price: 29.99,
    status: 'Active',
  },
  {
    id: 5,
    title: 'Architects of Aether',
    genre: 'Strategy',
    players: '2-4',
    duration: '120m',
    description: 'Build floating cities in the sky using magical blueprints.',
    rating: 4.9,
    featured: false,
    colors: ['#0ea5e9', '#7dd3fc', '#1c1917'],
    price: 64.99,
    status: 'Draft',
  },
  {
    id: 6,
    title: 'Lost Transmission',
    genre: 'Sci-Fi',
    players: '2-6',
    duration: '45m',
    description: 'Decode alien signals to find your way home across the galaxy.',
    rating: 4.3,
    featured: false,
    colors: ['#eab308', '#fef08a', '#1c1917'],
    price: 39.99,
    status: 'Active',
  },
  {
    id: 7,
    title: "Botanist's Journal",
    genre: 'Family',
    players: '1-4',
    duration: '30m',
    description: 'Collect rare plant specimens and complete your field journal.',
    rating: 4.6,
    featured: false,
    colors: ['#22c55e', '#86efac', '#1c1917'],
    price: 29.99,
    status: 'Active',
  },
  {
    id: 8,
    title: 'Shadow Syndicate',
    genre: 'Strategy',
    players: '3-5',
    duration: '90m',
    description: 'Vie for control of the criminal underworld in a noir setting.',
    rating: 4.4,
    featured: true,
    colors: ['#475569', '#94a3b8', '#1c1917'],
    price: 49.99,
    status: 'Active',
  },
  {
    id: 9,
    title: 'Quantum Leap',
    genre: 'Puzzle',
    players: '1',
    duration: '15-30m',
    description: 'Solve physics-bending puzzles by jumping through dimensions.',
    rating: 4.1,
    featured: false,
    colors: ['#6366f1', '#a5b4fc', '#1c1917'],
    price: 19.99,
    status: 'Draft',
  },
  {
    id: 10,
    title: 'Dungeon Inc.',
    genre: 'Party',
    players: '3-8',
    duration: '45m',
    description: 'Manage a dungeon like a corporate office. Keep the heroes out!',
    rating: 4.5,
    featured: false,
    colors: ['#dc2626', '#fca5a5', '#1c1917'],
    price: 24.99,
    status: 'Active',
  },
  {
    id: 11,
    title: 'Steam & Steel',
    genre: 'Strategy',
    players: '2-4',
    duration: '120m',
    description: 'Industrial revolution era economic engine builder.',
    rating: 4.7,
    featured: false,
    colors: ['#78350f', '#d6d3d1', '#1c1917'],
    price: 54.99,
    status: 'Active',
  },
  {
    id: 12,
    title: 'Midnight Express',
    genre: 'Mystery',
    players: '2-5',
    duration: '60m',
    description: 'Solve a murder on a moving train before it reaches the station.',
    rating: 4.6,
    featured: true,
    colors: ['#312e81', '#818cf8', '#1c1917'],
    price: 39.99,
    status: 'Active',
  },
];

export const stats: Stat[] = [
  { label: 'Total Games', value: 12, trend: 2, trendDirection: 'up' },
  { label: 'Active Players', value: '2,847', trend: 12, trendDirection: 'up' },
  { label: 'Avg Session', value: '24m', trend: 5, trendDirection: 'down' },
  { label: 'Revenue', value: '$12,450', trend: 8, trendDirection: 'up' },
];

export const monthlyData: MonthlyDataPoint[] = [
  { name: 'Jan', players: 1200, revenue: 4500 },
  { name: 'Feb', players: 1900, revenue: 6200 },
  { name: 'Mar', players: 2400, revenue: 8100 },
  { name: 'Apr', players: 2100, revenue: 7800 },
  { name: 'May', players: 2800, revenue: 11200 },
  { name: 'Jun', players: 3200, revenue: 12450 },
];

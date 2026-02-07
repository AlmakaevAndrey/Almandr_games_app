export type Metric = {
  id: string;
  label: string;
  value: number;
};

export const metrics: Metric[] = [
  {
    id: 'active-games',
    label: 'Active Games',
    value: 4,
  },
  {
    id: 'total-games',
    label: 'Total Games',
    value: 5,
  },
  {
    id: 'paid-games',
    label: 'Paid Games',
    value: 3,
  },
];

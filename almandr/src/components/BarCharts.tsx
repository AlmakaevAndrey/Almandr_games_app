import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import type { MonthlyDataPoint } from '../shared/types/Game';

interface BarChartProps {
  data: MonthlyDataPoint[];
  title: string;
}

export function BarChart({ data, title }: BarChartProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>

      <div className="flex-grow min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#6b7280',
                fontSize: 12,
                fontFamily: 'Inter',
              }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#6b7280',
                fontSize: 12,
                fontFamily: 'Inter',
              }}
            />

            <Tooltip
              cursor={{
                fill: '#f9fafb',
              }}
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontFamily: 'Inter',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                padding: '8px 12px',
              }}
              labelStyle={{
                color: '#374151',
                fontWeight: 600,
                marginBottom: '4px',
              }}
            />

            <Bar dataKey="players" fill="#f97316" radius={[4, 4, 0, 0]} barSize={32} />
          </ReBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

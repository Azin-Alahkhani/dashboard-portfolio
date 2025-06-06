// components/Chart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jan", value: 1200 },
  { date: "Feb", value: 2100 },
  { date: "Mar", value: 800 },
  { date: "Apr", value: 1600 },
];

export function Chart() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

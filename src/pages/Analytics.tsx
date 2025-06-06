// pages/Analytics.tsx
import Layout from "../components/Layout";
import {
  kpis,
  followerGrowthData,
  engagementByPlatform,
} from "../data/socialMediaData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#f87171", "#60a5fa", "#34d399", "#fbbf24"]; // red, blue, green, yellow

export default function Analytics() {
  return (
    <Layout>
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-semibold">Social Media Analytics</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow"
            >
              <div className="text-sm text-gray-500">{kpi.label}</div>
              <div className="text-xl font-bold">{kpi.value}</div>
              <div
                className={`text-sm ${
                  kpi.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {kpi.change}
              </div>
            </div>
          ))}
        </div>

        {/* Follower Growth (Multi-line Chart) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">
            Follower Growth Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={followerGrowthData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="instagram"
                stroke="#f87171"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="twitter"
                stroke="#60a5fa"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="facebook"
                stroke="#34d399"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="linkedin"
                stroke="#fbbf24"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Breakdown (Pie Chart) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-2">Engagement by Platform</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={engagementByPlatform}
                dataKey="engagement"
                nameKey="platform"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {engagementByPlatform.map((_entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}

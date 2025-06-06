import Layout from "../components/Layout";
import { StatCard } from "../components/StatCard";
import { Chart } from "../components/Chart";
import { DataTable } from "../components/DataTable";
import { Users, DollarSign, ShoppingCart } from "lucide-react";

import { mainKPIs, followerGrowthData } from "../data/socialMediaData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainKPIs.map((kpi) => (
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

        {/* Combined Follower Growth */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">
            Follower Growth (Combined)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={followerGrowthData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={(data) =>
                  data.instagram + data.twitter + data.facebook + data.linkedin
                }
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
}

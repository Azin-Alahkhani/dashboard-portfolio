import { useState } from "react";
import { influencers } from "../data/influencersData";
import Layout from "../components/Layout";

export default function Influencers() {
  const [platformFilter, setPlatformFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = influencers.filter((inf) => {
    if (platformFilter !== "All" && inf.platform !== platformFilter)
      return false;
    if (statusFilter !== "All" && inf.status !== statusFilter) return false;
    if (!inf.username.toLowerCase().includes(searchTerm.toLowerCase()))
      return false;
    return true;
  });

  return (
    <Layout>
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Influencers</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
            className="border rounded p-2 dark:bg-gray-800 dark:text-white"
          >
            <option>All</option>
            <option>Instagram</option>
            <option>Twitter</option>
            <option>LinkedIn</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded p-2 dark:bg-gray-800 dark:text-white"
          >
            <option>All</option>
            <option>Contacted</option>
            <option>Pending</option>
            <option>Not Contacted</option>
          </select>

          <input
            type="text"
            placeholder="Search username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded p-2 dark:bg-gray-800 dark:text-white flex-1"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="text-left p-2 border">Username</th>
                <th className="text-left p-2 border">Platform</th>
                <th className="text-right p-2 border">Followers</th>
                <th className="text-right p-2 border">Engagement</th>
                <th className="text-left p-2 border">Category</th>
                <th className="text-left p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((inf) => (
                <tr
                  key={inf.id}
                  className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800"
                >
                  <td className="p-2 border">{inf.username}</td>
                  <td className="p-2 border">{inf.platform}</td>
                  <td className="p-2 border text-right">
                    {inf.followers.toLocaleString()}
                  </td>
                  <td className="p-2 border text-right">
                    {inf.engagementRate}
                  </td>
                  <td className="p-2 border">{inf.category}</td>
                  <td className="p-2 border">{inf.status}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center p-4 text-gray-500">
                    No influencers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

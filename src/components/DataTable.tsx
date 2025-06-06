// components/DataTable.tsx
export function DataTable() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-200 dark:border-gray-700">
            <th className="py-2">User</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {["Jane Doe", "John Smith", "Alice"].map((name, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-100 dark:border-gray-700"
            >
              <td className="py-2">{name}</td>
              <td>2025-06-06</td>
              <td>$123.45</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

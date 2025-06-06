import Layout from "../components/Layout";
import { StatCard } from "../components/StatCard";
import { Chart } from "../components/Chart";
import { DataTable } from "../components/DataTable";
import { Users, DollarSign, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard label="Total Users" value="1,245" icon={<Users />} />
        <StatCard label="Revenue" value="$34,120" icon={<DollarSign />} />
        <StatCard label="Orders" value="732" icon={<ShoppingCart />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart />
        <DataTable />
      </div>
    </Layout>
  );
}

import Layout from "../components/Layout";
import { Chart } from "../components/Chart";

export default function Analytics() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart />
        <Chart />
        <Chart />
        <Chart />
      </div>
    </Layout>
  );
}

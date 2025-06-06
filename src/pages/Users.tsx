import Layout from "../components/Layout";
import { DataTable } from "../components/DataTable";

export default function Users() {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <DataTable />
    </Layout>
  );
}

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

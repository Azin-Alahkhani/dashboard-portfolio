import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useState } from "react";
import { useIsMobile } from "../hooks/IsMobile"; // adjust path if needed

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMCollapsed, setIsMCollapsed] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isMobile={isMobile} isMobileMenuOpen={isMCollapsed} />
      <div className="flex flex-col flex-1">
        <Header setIsCollapsed={setIsMCollapsed} isMobile={isMobile} />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}

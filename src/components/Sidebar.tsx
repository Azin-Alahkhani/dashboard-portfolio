// components/Sidebar.tsx
import {
  Home,
  BarChart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

export function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart /> },
    { name: "Users", path: "/users", icon: <Users /> },
    { name: "Settings", path: "/settings", icon: <Settings /> },
  ];

  return (
    <aside
      className={clsx(
        "transition-all duration-300 bg-white dark:bg-gray-800 border-r dark:border-gray-700 h-full flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Sidebar Header with toggle */}
      <div className="flex items-center justify-between px-4 py-4">
        <span className="text-xl font-bold text-primary">
          {collapsed ? <Menu /> : "MyDash"}
        </span>
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          title="Toggle Sidebar"
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              "flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition",
              location.pathname === item.path
                ? "bg-gray-100 dark:bg-gray-700"
                : ""
            )}
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

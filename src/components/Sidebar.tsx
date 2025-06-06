import { Home, BarChart, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: <Home />, path: "/" },
  { name: "Analytics", icon: <BarChart />, path: "/analytics" },
  { name: "Users", icon: <Users />, path: "/users" },
  { name: "Settings", icon: <Settings />, path: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-4 text-xl font-bold">MyDash</div>
      <nav className="mt-4">
        {navItems.map(({ name, icon, path }) => (
          <Link
            key={name}
            to={path}
            className={`flex items-center px-4 py-2 gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              location.pathname === path
                ? "font-semibold bg-gray-200 dark:bg-gray-700"
                : ""
            }`}
          >
            {icon}
            {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BarChart,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import clsx from "clsx";

export function Sidebar({
  isMobileMenuOpen,
  isMobile,
}: {
  isMobileMenuOpen?: boolean;
  isMobile: boolean;
}) {
  const location = useLocation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart /> },
    { name: "Influencers", path: "/users", icon: <Users /> },
    { name: "Settings", path: "/settings", icon: <Settings /> },
  ];

  // When screen switches from mobile to desktop, close mobile menu
  // (optional, but good UX)

  return (
    <>
      {/* Mobile hamburger header 
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-3">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <div /> 
        </div>
      )}*/}

      {/* Sidebar */}
      <aside
        onMouseEnter={() => isMobile && !isCollapsed && setIsCollapsed(false)}
        onMouseLeave={() => isMobile && isCollapsed && setIsCollapsed(true)}
        className={clsx(
          "fixed top-0 left-0 h-full bg-white dark:bg-gray-800 border-r dark:border-gray-700 flex flex-col transition-all duration-300 z-40",
          "md:static md:h-auto md:top-auto md:left-auto",
          // Mobile sidebar overlay toggle
          isMobile
            ? isMobileMenuOpen
              ? "w-64 translate-x-0"
              : "-translate-x-full w-64"
            : isCollapsed
            ? "md:w-16"
            : "md:w-64",
          "transform md:transform-none"
        )}
        style={{ transitionProperty: "width, transform" }}
      >
        {/* Desktop header with collapse toggle */}

        <div className="flex items-center justify-between px-4 py-4 border-b dark:border-gray-700">
          <button
            title="Toggle Sidebar"
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="text-xl font-bold text-primary">
              {isCollapsed ? <Menu /> : "MyDash"}
            </span>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mt-2 flex-1 space-y-1 px-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                "flex items-center gap-3 py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition",
                location.pathname === item.path
                  ? "bg-gray-100 dark:bg-gray-700"
                  : ""
              )}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile menu */}
    </>
  );
}

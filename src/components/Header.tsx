// components/Header.tsx
import { Menu, Moon, Sun } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function Header({
  setIsCollapsed,
  isMobile,
}: {
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
}) {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white dark:bg-gray-800">
      {isMobile && (
        // Mobile hamburger header
        <div className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-3">
          <button
            onClick={() => setIsCollapsed((prev: any) => !prev)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <div />
        </div>
      )}
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          title="Toggle Dark Mode"
          onClick={() => setDark((prev) => !prev)}
          className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {dark ? <Sun /> : <Moon />}
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}

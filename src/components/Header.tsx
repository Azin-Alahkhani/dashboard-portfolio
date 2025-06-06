// components/Header.tsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white dark:bg-gray-800">
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

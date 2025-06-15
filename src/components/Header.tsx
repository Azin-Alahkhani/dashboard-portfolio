// components/Header.tsx
import { Menu, Moon, Sun } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Avatar from "boring-avatars";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

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
  const { name } = useUserStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="flex justify-between items-center px-4 py-4 border-b bg-white dark:bg-gray-800">
      {isMobile && (
        // Mobile hamburger header
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-3">
          <button
            onClick={() => setIsCollapsed((prev: any) => !prev)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
          <div className="flex flex-1 justify-end gap-4">
            <button
              title="Toggle Dark Mode"
              onClick={() => setDark((prev) => !prev)}
              className="p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {dark ? <Sun /> : <Moon />}
            </button>

            <Link
              title={`User Profile: ${name}`}
              to="/account-settings"
              className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <Avatar
                size={32}
                name={name}
                variant="beam"
                colors={["#FFDDC1", "#FCA5A5", "#FCD34D", "#A7F3D0", "#93C5FD"]}
              />
            </Link>
          </div>
          <div />
        </div>
      )}
      <h1 className="hidden md:flex text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          title="Toggle Dark Mode"
          onClick={() => setDark((prev) => !prev)}
          className="p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {dark ? <Sun /> : <Moon />}
        </button>
        <Link
          title={`User Profile: ${name}`}
          to="/account-settings"
          className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <Avatar
            size={32}
            name={name}
            variant="beam"
            colors={["#FFDDC1", "#FCA5A5", "#FCD34D", "#A7F3D0", "#93C5FD"]}
          />
        </Link>
      </div>
    </header>
  );
}

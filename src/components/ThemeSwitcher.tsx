"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute right-1 md:relative md:flex md:flex-row md:justify-between toggle">
      <div className="relative">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "light" ? (
            <div>
              <div className="w-14 h-8 block border-[2px] border-gray-500 hover:border-gray-900 rounded-full">
                <div className="w-6 h-6 dot absolute left-1 top-1 bg-gray-600 rounded-full transition"></div>
              </div>
            </div>
          ) : (
            <div>
              <div className="w-14 h-8 block border-[2px] dark:border-white dark:hover:border-gray-400 rounded-full">
                <div className="w-6 h-6 dot absolute left-1 top-1 dark:bg-white rounded-full transition translate-x-full"></div>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

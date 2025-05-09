'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDarkMode = theme === 'dark';

  return (
    <nav className="py-4 px-6 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-white">SoftSell</div>
        <button
          aria-label="Toggle Dark Mode"
          onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-600 dark:text-white" />
          )}
        </button>
      </div>
    </nav>
  );
}

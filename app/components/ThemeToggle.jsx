"use client";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

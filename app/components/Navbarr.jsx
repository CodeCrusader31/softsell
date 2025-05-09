'use client'

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <nav className="py-4 px-6 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">SoftSell</div>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  )
} 
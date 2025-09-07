import React from 'react';
import { Search, Bell, Moon, Sun } from 'lucide-react';
import { User } from '../../types';

interface HeaderProps {
  user: User;
  brandName: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, brandName, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="mb-8">
      {/* Mobile brand header */}
      <div className="lg:hidden mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {brandName}
        </h1>
      </div>

      {/* Welcome section and controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Welcome back, {user.name}! 👋
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">
            Here's what's happening with your finances today.
          </p>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-8 lg:pl-10 pr-3 lg:pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 w-48 lg:w-64 text-sm"
              aria-label="Search transactions"
            />
          </div>

          {/* Dark mode toggle - mobile only */}
          <button
            onClick={toggleDarkMode}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>

          {/* Notifications */}
          <button
            className="relative p-1.5 sm:p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* User avatar */}
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl object-cover ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-blue-500 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden mt-3 sm:mt-4">
        <div className="relative">
          <Search className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            aria-label="Search transactions"
          />
        </div>
      </div>
    </header>
  );
};
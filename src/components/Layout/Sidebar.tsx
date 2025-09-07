import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Wrench, 
  Settings, 
  MessageCircle, 
  BarChart3, 
  HelpCircle,
  Crown,
  Moon,
  Sun
} from 'lucide-react';
import { NavigationItem } from '../../types';

interface SidebarProps {
  brandName: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', icon: 'LayoutDashboard', label: 'Dashboard', path: '/' },
  { id: 'profile', icon: 'User', label: 'Profile', path: '/profile' },
  { id: 'utilities', icon: 'Wrench', label: 'Utilities', path: '/utilities' },
  { id: 'settings', icon: 'Settings', label: 'Settings', path: '/settings' },
  { id: 'messages', icon: 'MessageCircle', label: 'Messages', path: '/messages' },
  { id: 'analytics', icon: 'BarChart3', label: 'Analytics', path: '/analytics' },
  { id: 'support', icon: 'HelpCircle', label: 'Support', path: '/support' },
];

const iconMap = {
  LayoutDashboard,
  User,
  Wrench,
  Settings,
  MessageCircle,
  BarChart3,
  HelpCircle,
};

export const Sidebar: React.FC<SidebarProps> = ({ brandName, isDarkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors duration-300 h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-xl xl:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {brandName}
        </h1>
      </div>
      
      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id}>
                <a
                  href={item.path}
                  className={`w-full flex items-center px-3 py-3 rounded-xl text-left transition-all duration-300 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-label={item.label}
                >
                  <Icon 
                    className={`mr-3 h-4 w-4 lg:h-5 lg:w-5 transition-transform duration-300 ${
                      isActive ? 'text-white' : 'group-hover:scale-110'
                    }`} 
                  />
                  <span className="font-medium text-sm lg:text-base">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 space-y-3">
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center px-3 py-3 rounded-xl text-left transition-all duration-300 group text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="mr-3 h-4 w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <Moon className="mr-3 h-4 w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
          )}
          <span className="font-medium text-sm lg:text-base">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
        
        <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 lg:px-4 py-2 lg:py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center">
          <Crown className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
          <span className="text-sm lg:text-base">Upgrade to Pro</span>
        </button>
      </div>
    </aside>
  );
};
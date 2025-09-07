import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Wrench, 
  Settings, 
  BarChart3 
} from 'lucide-react';
import { NavigationItem } from '../../types';

const navigationItems: NavigationItem[] = [
  { id: 'dashboard', icon: 'LayoutDashboard', label: 'Dashboard', path: '/' },
  { id: 'profile', icon: 'User', label: 'Profile', path: '/profile' },
  { id: 'utilities', icon: 'Wrench', label: 'Utilities', path: '/utilities' },
  { id: 'analytics', icon: 'BarChart3', label: 'Analytics', path: '/analytics' },
  { id: 'settings', icon: 'Settings', label: 'Settings', path: '/settings' },
];

const iconMap = {
  LayoutDashboard,
  User,
  Wrench,
  BarChart3,
  Settings,
};

export const MobileNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2 transition-colors duration-300 z-50">
      <div className="flex items-center justify-around">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive = location.pathname === item.path;
          return (
            <a
              key={item.id}
              href={item.path}
              className={`flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl transition-all duration-300 min-w-0 flex-1 max-w-[80px] ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
              aria-label={item.label}
            >
              <Icon 
                className={`h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 ${
                  isActive ? 'text-blue-600 scale-110' : ''
                }`} 
              />
              <span className={`text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium transition-all duration-300 truncate ${
                isActive ? 'text-blue-600' : ''
              }`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
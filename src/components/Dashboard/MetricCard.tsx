import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  amount: string;
  Icon: LucideIcon;
  gradient: string;
  description: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  amount, 
  Icon, 
  gradient, 
  description 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${gradient}`}>
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
      </div>
      
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
        {amount}
      </h3>
      
      <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300 leading-tight">
        {title}
      </p>
      
      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 leading-tight">
        {description}
      </p>
    </div>
  );
};
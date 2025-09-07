import React from 'react';

interface ProgressCardProps {
  progress: number;
  year: number;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({ progress, year }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Plan for {year}</h3>
      
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#progressGradient)"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold">{progress}%</div>
              <div className="text-xs sm:text-sm text-gray-300">Complete</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-300">Target</span>
          <span className="font-medium">$50,000</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-300">Achieved</span>
          <span className="font-medium">${(50000 * progress / 100).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm">
          <span className="text-gray-300">Remaining</span>
          <span className="font-medium">${(50000 * (100 - progress) / 100).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
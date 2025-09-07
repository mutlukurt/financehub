import React, { useState } from 'react';
import { TimePeriod } from '../../types';

interface SavingsChartProps {
  savedAmount: string;
  chartData: { period: string; amount: number }[];
}

const timePeriods: TimePeriod[] = ['Day', 'Week', 'Month', 'Year'];

export const SavingsChart: React.FC<SavingsChartProps> = ({ savedAmount, chartData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('Month');

  const maxValue = Math.max(...chartData.map(d => d.amount));
  const chartWidth = 600;
  const chartHeight = 160;
  const padding = 30;

  const pathData = chartData.map((point, index) => {
    const x = padding + (index * (chartWidth - 2 * padding)) / (chartData.length - 1);
    const y = chartHeight - padding - ((point.amount / maxValue) * (chartHeight - 2 * padding));
    return { x, y, value: point.amount, period: point.period };
  }).reduce((path, point, index) => {
    const command = index === 0 ? 'M' : 'L';
    return `${path} ${command} ${point.x} ${point.y}`;
  }, '');

  const gradientPath = `${pathData} L ${chartWidth - padding} ${chartHeight - padding} L ${padding} ${chartHeight - padding} Z`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
            Saved This Month
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
            {savedAmount}
          </p>
        </div>
        
        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg sm:rounded-xl p-1 transition-colors duration-300 w-full lg:w-auto">
          {timePeriods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`flex-1 lg:flex-none px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedPeriod === period
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-label={`View ${period.toLowerCase()} data`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-32 sm:h-40 lg:h-48 w-full overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={percent}
              x1={padding}
              y1={chartHeight - padding - (percent / 100) * (chartHeight - 2 * padding)}
              x2={chartWidth - padding}
              y2={chartHeight - padding - (percent / 100) * (chartHeight - 2 * padding)}
              stroke="currentColor"
              className="text-gray-200 dark:text-gray-600"
              strokeWidth="0.5"
              strokeDasharray="2,2"
            />
          ))}
          
          {/* Area fill */}
          <path
            d={gradientPath}
            fill="url(#chartGradient)"
          />
          
          {/* Line */}
          <path
            d={pathData}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Data points */}
          {chartData.map((point, index) => {
            const x = padding + (index * (chartWidth - 2 * padding)) / (chartData.length - 1);
            const y = chartHeight - padding - ((point.amount / maxValue) * (chartHeight - 2 * padding));
            
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="#3B82F6"
                stroke="white"
                strokeWidth="1.5"
                className="hover:r-6 transition-all duration-300 cursor-pointer"
              >
                <title>{`${point.period}: $${point.amount}`}</title>
              </circle>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
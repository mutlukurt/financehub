import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity, PieChart, BarChart3 } from 'lucide-react';
import { mockAnalytics } from '../data/mockData';

export const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');
  const [selectedChart, setSelectedChart] = useState<'trends' | 'categories'>('trends');

  const { totalTransactions, totalAmount, monthlyGrowth, categoryBreakdown, monthlyTrends } = mockAnalytics;

  const maxTrendValue = Math.max(...monthlyTrends.map(t => Math.max(t.income, t.expenses)));

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Detailed insights into your financial patterns and trends
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
              +{monthlyGrowth}%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {totalTransactions.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Transactions</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            ${totalAmount.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Volume</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
              +{monthlyGrowth}%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            ${(totalAmount * monthlyGrowth / 100).toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Growth</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
              <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            ${(totalAmount * 0.68).toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Average Monthly</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6 sm:mb-8">
        {/* Main Chart */}
        <div className="xl:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Financial Trends
              </h3>
              <div className="flex gap-2">
                {[
                  { key: 'trends', label: 'Trends', icon: TrendingUp },
                  { key: 'categories', label: 'Categories', icon: PieChart }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedChart(key as any)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedChart === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {selectedChart === 'trends' ? (
              <div className="h-64 sm:h-80">
                <svg width="100%" height="100%" viewBox="0 0 800 300" className="overflow-visible">
                  <defs>
                    <linearGradient id="incomeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="expenseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((percent) => (
                    <line
                      key={percent}
                      x1="60"
                      y1={50 + (percent / 100) * 200}
                      x2="740"
                      y2={50 + (percent / 100) * 200}
                      stroke="currentColor"
                      className="text-gray-200 dark:text-gray-600"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                    />
                  ))}
                  
                  {/* Income line */}
                  <path
                    d={monthlyTrends.map((trend, index) => {
                      const x = 60 + (index * 680) / (monthlyTrends.length - 1);
                      const y = 250 - ((trend.income / maxTrendValue) * 200);
                      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Expense line */}
                  <path
                    d={monthlyTrends.map((trend, index) => {
                      const x = 60 + (index * 680) / (monthlyTrends.length - 1);
                      const y = 250 - ((trend.expenses / maxTrendValue) * 200);
                      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')}
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  {monthlyTrends.map((trend, index) => {
                    const x = 60 + (index * 680) / (monthlyTrends.length - 1);
                    const incomeY = 250 - ((trend.income / maxTrendValue) * 200);
                    const expenseY = 250 - ((trend.expenses / maxTrendValue) * 200);
                    
                    return (
                      <g key={index}>
                        <circle cx={x} cy={incomeY} r="4" fill="#10B981" stroke="white" strokeWidth="2" />
                        <circle cx={x} cy={expenseY} r="4" fill="#EF4444" stroke="white" strokeWidth="2" />
                        <text x={x} y="280" textAnchor="middle" className="text-xs fill-gray-600 dark:fill-gray-400">
                          {trend.month}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Legend */}
                  <g transform="translate(60, 20)">
                    <circle cx="0" cy="0" r="4" fill="#10B981" />
                    <text x="12" y="4" className="text-sm fill-gray-700 dark:fill-gray-300">Income</text>
                    <circle cx="80" cy="0" r="4" fill="#EF4444" />
                    <text x="92" y="4" className="text-sm fill-gray-700 dark:fill-gray-300">Expenses</text>
                  </g>
                </svg>
              </div>
            ) : (
              <div className="h-64 sm:h-80 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg width="100%" height="100%" viewBox="0 0 200 200">
                    {categoryBreakdown.map((category, index) => {
                      const angle = (category.percentage / 100) * 360;
                      const startAngle = categoryBreakdown.slice(0, index).reduce((sum, cat) => sum + (cat.percentage / 100) * 360, 0);
                      const endAngle = startAngle + angle;
                      
                      const x1 = 100 + 80 * Math.cos((startAngle - 90) * Math.PI / 180);
                      const y1 = 100 + 80 * Math.sin((startAngle - 90) * Math.PI / 180);
                      const x2 = 100 + 80 * Math.cos((endAngle - 90) * Math.PI / 180);
                      const y2 = 100 + 80 * Math.sin((endAngle - 90) * Math.PI / 180);
                      
                      const largeArcFlag = angle > 180 ? 1 : 0;
                      
                      const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#6B7280'];
                      
                      return (
                        <path
                          key={category.category}
                          d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={colors[index % colors.length]}
                          opacity="0.8"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Breakdown */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Spending by Category
            </h3>
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => {
                const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-gray-500'];
                return (
                  <div key={category.category} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${colors[index % colors.length]}`}></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {category.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        ${category.amount.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">
                        {category.percentage}%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Period Selector */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Time Period Analysis
          </h3>
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
            {[
              { key: 'week', label: 'Week' },
              { key: 'month', label: 'Month' },
              { key: 'year', label: 'Year' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedPeriod(key as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPeriod === key
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
              ${(totalAmount * 0.6).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average Income</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <p className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
              ${(totalAmount * 0.4).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average Expenses</p>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              ${(totalAmount * 0.2).toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Net Savings</p>
          </div>
        </div>
      </div>
    </div>
  );
};
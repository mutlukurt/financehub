import React, { useState } from 'react';
import { Calculator, ArrowLeftRight, PieChart, TrendingUp, Play, Settings } from 'lucide-react';
import { mockUtilities } from '../data/mockData';
import * as Icons from 'lucide-react';

export const Utilities: React.FC = () => {
  const [activeUtility, setActiveUtility] = useState<string | null>(null);
  const [loanAmount, setLoanAmount] = useState('100000');
  const [interestRate, setInterestRate] = useState('5.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('1000');

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Calculator;
    return IconComponent;
  };

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;
    
    const monthlyPayment = (principal * rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    const totalPayment = monthlyPayment * payments;
    const totalInterest = totalPayment - principal;
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  };

  const convertCurrency = () => {
    // Mock conversion rate - in real app, you'd fetch from API
    const rates: { [key: string]: number } = {
      'USD': 1,
      'EUR': 0.85,
      'GBP': 0.73,
      'JPY': 110
    };
    
    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];
    const convertedAmount = (parseFloat(amount) / fromRate) * toRate;
    
    return convertedAmount.toFixed(2);
  };

  const renderUtilityContent = (utilityId: string) => {
    switch (utilityId) {
      case 'util-001': // Loan Calculator
        const loanResults = calculateLoan();
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Loan Amount ($)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Loan Term (years)
                </label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monthly Payment</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">${loanResults.monthlyPayment}</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">Total Payment</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">${loanResults.totalPayment}</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">Total Interest</p>
                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">${loanResults.totalInterest}</p>
              </div>
            </div>
          </div>
        );

      case 'util-002': // Currency Converter
        const convertedAmount = convertCurrency();
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  From
                </label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  To
                </label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white text-center">
              <p className="text-lg font-medium mb-2">Converted Amount</p>
              <p className="text-3xl font-bold">{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-300">This utility is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Financial Utilities
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Powerful tools to help you make better financial decisions
        </p>
      </div>

      {!activeUtility ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUtilities.map((utility) => {
            const IconComponent = getIcon(utility.icon);
            return (
              <div
                key={utility.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                  !utility.isActive ? 'opacity-60' : ''
                }`}
                onClick={() => utility.isActive && setActiveUtility(utility.id)}
              >
                <div className={`p-3 rounded-xl mb-4 w-fit ${
                  utility.category === 'Calculator' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                  utility.category === 'Converter' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                  utility.category === 'Tracker' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                  'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                }`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {utility.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {utility.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    utility.category === 'Calculator' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                    utility.category === 'Converter' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                    utility.category === 'Tracker' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                    'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                  }`}>
                    {utility.category}
                  </span>
                  {utility.isActive ? (
                    <Play className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Settings className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setActiveUtility(null)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Utilities
            </button>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {mockUtilities.find(u => u.id === activeUtility)?.name}
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            {renderUtilityContent(activeUtility)}
          </div>
        </div>
      )}
    </div>
  );
};
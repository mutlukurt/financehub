import React from 'react';
import { Transfer } from '../../types';

interface TransfersListProps {
  transfers: Transfer[];
}

export const TransfersList: React.FC<TransfersListProps> = ({ transfers }) => {
  const formatAmount = (amount: number) => {
    const formattedAmount = Math.abs(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return amount >= 0 ? `+$${formattedAmount}` : `-$${formattedAmount}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
        Your Transfers
      </h3>
      
      <div className="space-y-2 sm:space-y-4">
        {transfers.map((transfer) => {
          const isPositive = transfer.amount >= 0;
          
          return (
            <div
              key={transfer.id}
              className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <img
                  src={transfer.avatar}
                  alt={`${transfer.recipient}'s avatar`}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl object-cover ring-2 ring-gray-200 dark:ring-gray-600 group-hover:ring-blue-500 transition-all duration-300 flex-shrink-0"
                />
                
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white transition-colors duration-300 text-sm sm:text-base truncate">
                    {transfer.recipient}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 truncate">
                    {transfer.date}
                  </p>
                </div>
              </div>
              
              <div className={`text-right transition-colors duration-300 flex-shrink-0 ml-2 ${
                isPositive 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                <span className="font-semibold text-sm sm:text-base">
                  {formatAmount(transfer.amount)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 sm:mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-center py-2 transition-colors duration-300 text-sm sm:text-base">
        View All Transfers
      </button>
    </div>
  );
};
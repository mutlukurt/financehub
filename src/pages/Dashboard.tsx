import React from 'react';
import { Header } from '../components/Dashboard/Header';
import { MetricsGrid } from '../components/Dashboard/MetricsGrid';
import { SavingsChart } from '../components/Dashboard/SavingsChart';
import { GoalsCard } from '../components/Dashboard/GoalsCard';
import { TransactionsList } from '../components/Dashboard/TransactionsList';
import { TransfersList } from '../components/Dashboard/TransfersList';
import { ProgressCard } from '../components/Dashboard/ProgressCard';
import { mockData } from '../data/mockData';

interface DashboardProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
      <Header 
        user={mockData.user}
        brandName={mockData.brandName}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <MetricsGrid metrics={mockData.metrics} />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="xl:col-span-2">
          <SavingsChart 
            savedAmount={mockData.savedThisMonth}
            chartData={mockData.savingsChart}
          />
        </div>
        <div>
          <ProgressCard 
            progress={mockData.planProgress}
            year={new Date().getFullYear()}
          />
        </div>
      </div>
      
      <div className="mb-6 sm:mb-8">
        <GoalsCard cardDetails={mockData.cardDetails} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <TransactionsList transactions={mockData.transactions} />
        <TransfersList transfers={mockData.transfers} />
      </div>
    </div>
  );
};
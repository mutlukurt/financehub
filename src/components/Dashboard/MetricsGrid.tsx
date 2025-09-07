import React from 'react';
import { CreditCard, Building2, ArrowLeftRight } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { Metrics } from '../../types';

interface MetricsGridProps {
  metrics: Metrics;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <MetricCard
        title="Transfer via Card Number"
        amount={metrics.cardTransfer}
        Icon={CreditCard}
        gradient="bg-gradient-to-br from-blue-500 to-purple-600"
        description="Card-to-card transfers this month"
      />
      <MetricCard
        title="Transfer to other Banks"
        amount={metrics.bankTransfer}
        Icon={Building2}
        gradient="bg-gradient-to-br from-green-500 to-teal-600"
        description="Inter-bank transfers completed"
      />
      <MetricCard
        title="Transfer to same Bank"
        amount={metrics.sameBank}
        Icon={ArrowLeftRight}
        gradient="bg-gradient-to-br from-orange-500 to-red-600"
        description="Internal transfers processed"
      />
    </div>
  );
};
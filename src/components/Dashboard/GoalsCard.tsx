import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CardDetails } from '../../types';

interface GoalsCardProps {
  cardDetails: CardDetails;
}

export const GoalsCard: React.FC<GoalsCardProps> = ({ cardDetails }) => {
  const formatCardNumber = (number: string) => {
    return number.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 sm:gap-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            Reach financial goals faster
          </h3>
          <p className="text-blue-100 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
            Upgrade to our premium card and unlock exclusive benefits, cashback rewards, 
            and advanced financial tools to accelerate your savings journey.
          </p>
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center text-sm sm:text-base">
            Learn More
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </button>
        </div>
        
        <div className="flex-shrink-0">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 w-full max-w-sm xl:w-80 mx-auto xl:mx-0">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg p-3 sm:p-4 text-white shadow-lg">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="text-[10px] sm:text-xs opacity-80">PREMIUM CARD</div>
                <div className="w-6 h-4 sm:w-8 sm:h-6 bg-white/20 rounded"></div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <div className="text-sm sm:text-lg font-mono tracking-wider break-all sm:break-normal">
                  {formatCardNumber(cardDetails.number)}
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] sm:text-xs opacity-80 mb-1">CARD HOLDER</div>
                  <div className="text-xs sm:text-sm font-medium">{cardDetails.holder}</div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs opacity-80 mb-1">EXPIRES</div>
                  <div className="text-xs sm:text-sm font-medium">{cardDetails.expiry}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
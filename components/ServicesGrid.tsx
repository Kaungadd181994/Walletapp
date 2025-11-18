
import React from 'react';
import Icon from './Icon';
import type { Feature } from '../types';

const SectionHeader: React.FC<{title: string}> = ({ title }) => (
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <a href="#" className="text-sm font-medium text-green-600">More</a>
    </div>
);

const ServicesGrid: React.FC = () => {
  // FIX: Changed `services` to store icon names as strings instead of React elements to fix typing errors with React.cloneElement and improve component design.
  const services: Feature[] = [
    { name: 'Top Up', icon: 'topUp' },
    { name: 'History', icon: 'history' },
    { name: 'Loan', icon: 'loan' },
    { name: 'Pay Bills', icon: 'bill' },
    { name: 'Vouchers', icon: 'vouchers' },
    { name: 'Games', icon: 'games' },
    { name: 'Insurance', icon: 'insurance' },
    { name: 'Invest', icon: 'invest' },
    { name: 'Charity', icon: 'heart' },
    { name: 'Transport', icon: 'bus' },
  ];

  return (
    <div>
      <SectionHeader title="Services" />
      <div>
        <div className="grid grid-cols-5 gap-y-4 gap-x-2">
            {services.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center space-y-2 text-center cursor-pointer group">
                <div className="flex items-center justify-center w-12 h-12 text-green-600 transition-transform duration-200 group-hover:scale-110">
                <Icon name={feature.icon} className="w-8 h-8" />
                </div>
                <span className="text-xs text-gray-600 font-medium">{feature.name}</span>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;

import React from 'react';
import Icon from './Icon';

const CoreFeatureButton: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
    <button className="flex flex-col items-center justify-center space-y-1 w-20 h-20 bg-gray-800 text-white rounded-3xl shadow-lg shadow-gray-900/30 hover:bg-gray-700 transition-all transform hover:scale-105 duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
        <Icon name={icon} className="w-7 h-7" />
        <span className="text-xs font-bold tracking-wide uppercase">{name}</span>
    </button>
);

const CoreFeatures: React.FC = () => {
  return (
    <div>
        <div className="flex justify-center items-center gap-x-3 sm:gap-x-4">
            <CoreFeatureButton name="Send" icon="send" />
            <CoreFeatureButton name="Request" icon="request" />
            <CoreFeatureButton name="Cash In" icon="cashIn" />
            <CoreFeatureButton name="Cash Out" icon="cashOut" />
        </div>
    </div>
  );
};

export default CoreFeatures;
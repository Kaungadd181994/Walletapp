
import React from 'react';
import Icon from './Icon';

const CoreFeature: React.FC<{ name: string; icon: string }> = ({ name, icon }) => (
    <button className="flex flex-col items-center space-y-2 text-center group w-full">
        <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200 shadow-md">
            <Icon name={icon} className="w-7 h-7 text-white" />
        </div>
        <span className="text-xs font-semibold text-gray-700">{name}</span>
    </button>
);

const CoreFeatures: React.FC = () => {
  return (
    <div className="px-4">
        <div className="grid grid-cols-4 gap-4">
            <CoreFeature name="Send" icon="send" />
            <CoreFeature name="Request" icon="request" />
            <CoreFeature name="Cash In" icon="cashIn" />
            <CoreFeature name="Cash Out" icon="cashOut" />
        </div>
    </div>
  );
};

export default CoreFeatures;

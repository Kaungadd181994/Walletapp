
import React from 'react';
import { NavTab } from '../types';
import Icon from './Icon';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

const tabs: { label: string; tab: NavTab }[] = [
  { label: 'Wallet', tab: 'wallet' },
  { label: 'Bank', tab: 'bank' },
  { label: 'Card', tab: 'card' },
];

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const activeIndex = tabs.findIndex(t => t.tab === activeTab);
  
  return (
    <header className="flex-shrink-0 bg-white z-10 px-4 pt-4 border-b border-gray-100">
      <div className="flex justify-between items-center mb-4 pt-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Icon name="menu" className="w-6 h-6 text-gray-700" />
        </button>
        
        {/* Slider Navigation */}
        <div className="relative flex items-center bg-gray-100 rounded-full p-1">
          <span
            className="absolute top-1 bottom-1 left-1 bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out"
            style={{
              width: `calc(33.333% - 4px)`,
              transform: `translateX(${activeIndex * 100}%)`
            }}
          ></span>
          {tabs.map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`relative z-10 py-1.5 px-6 text-sm font-semibold transition-colors duration-300 rounded-full ${
                activeTab === item.tab ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100">
            <Icon name="notification" className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
};

export default Header;
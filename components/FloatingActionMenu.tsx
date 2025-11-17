import React, { useState } from 'react';
import Icon from './Icon';

const FloatingActionMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Community', icon: 'users' },
    { name: 'Message', icon: 'message' },
    { name: 'Help', icon: 'help' },
  ];

  return (
    <div className="absolute bottom-24 right-4 z-30 flex flex-col items-end gap-3">
      {/* Animated Menu Items */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {menuItems.map((item, index) => (
           <div 
             key={item.name} 
             className="flex items-center justify-end gap-3"
             style={{ transitionDelay: `${isOpen ? index * 40 : 0}ms` }}
            >
                <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg">
                    {item.name}
                </span>
                <button
                    className="w-12 h-12 bg-white/80 backdrop-blur-md text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    aria-label={item.name}
                >
                    <Icon name={item.icon} className="w-6 h-6" />
                </button>
            </div>
        ))}
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white/80 backdrop-blur-lg text-gray-800 rounded-2xl flex items-center justify-center shadow-xl hover:bg-white transition-all transform hover:scale-110 hover:rounded-3xl"
        aria-expanded={isOpen}
        aria-label="Open action menu"
      >
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            <Icon name="more-vertical" className="w-7 h-7" />
        </div>
      </button>
    </div>
  );
};

export default FloatingActionMenu;
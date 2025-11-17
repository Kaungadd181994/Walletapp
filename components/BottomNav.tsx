
import React from 'react';
import Icon from './Icon';

type BottomTab = 'home' | 'nearby' | 'history' | 'profile';

interface BottomNavProps {
  activeTab: BottomTab;
  setTab: (tab: BottomTab) => void;
}

interface NavItemProps {
  iconName: string;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ iconName, label, isActive = false, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center space-y-1 transition-colors w-16 ${isActive ? 'text-green-600' : 'text-gray-500 hover:text-gray-700'}`}>
    <Icon name={iconName} className="w-6 h-6" />
    <span className="text-xs font-medium">{label}</span>
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setTab }) => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg z-20 border-t border-gray-200/50">
      <div className="flex justify-around items-center px-2 pt-2 pb-2 sm:pb-4">
        <NavItem iconName="home" label="Home" isActive={activeTab === 'home'} onClick={() => setTab('home')} />
        <NavItem iconName="nearby" label="Nearby" isActive={activeTab === 'nearby'} onClick={() => setTab('nearby')} />
        <a href="#" className="p-4 bg-green-600 text-white rounded-full -mt-8 shadow-lg shadow-green-500/30 transform hover:scale-105 transition-transform">
          <Icon name="scan" className="w-7 h-7" />
        </a>
        <NavItem iconName="history" label="History" isActive={activeTab === 'history'} onClick={() => setTab('history')} />
        <NavItem iconName="user" label="Profile" isActive={activeTab === 'profile'} onClick={() => setTab('profile')} />
      </div>
    </footer>
  );
};

export default BottomNav;

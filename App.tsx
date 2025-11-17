
import React, { useState } from 'react';
import { NavTab } from './types';
import Header from './components/Header';
import WalletScreen from './screens/WalletScreen';
import BankScreen from './screens/BankScreen';
import CardScreen from './screens/CardScreen';
import BottomNav from './components/BottomNav';
import FloatingActionMenu from './components/FloatingActionMenu';
import HistoryScreen from './screens/HistoryScreen';

type BottomTab = 'home' | 'nearby' | 'history' | 'profile';

const App: React.FC = () => {
  const [activeBottomTab, setActiveBottomTab] = useState<BottomTab>('home');
  const [activeWalletTab, setActiveWalletTab] = useState<NavTab>('wallet');

  const renderWalletContent = () => {
    switch (activeWalletTab) {
      case 'wallet':
        return <WalletScreen onBalanceClick={() => setActiveBottomTab('history')} />;
      case 'bank':
        return <BankScreen />;
      case 'card':
        return <CardScreen />;
      default:
        return <WalletScreen onBalanceClick={() => setActiveBottomTab('history')} />;
    }
  };

  const renderScreenContent = () => {
    switch (activeBottomTab) {
      case 'history':
        return <HistoryScreen />;
      case 'home':
      default:
        return (
          <>
            <Header activeTab={activeWalletTab} setActiveTab={setActiveWalletTab} />
            <main className="flex-1 overflow-y-auto pb-24 bg-gray-50">
              {renderWalletContent()}
            </main>
            <FloatingActionMenu />
          </>
        );
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-200 p-0 sm:p-4">
      <div className="relative w-full max-w-md h-screen sm:h-[844px] bg-white flex flex-col shadow-2xl sm:rounded-3xl overflow-hidden">
        {renderScreenContent()}
        <BottomNav activeTab={activeBottomTab} setTab={setActiveBottomTab} />
      </div>
    </div>
  );
};

export default App;

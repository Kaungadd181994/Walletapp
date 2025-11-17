
import React from 'react';
import Icon from './Icon';

const BalanceCard: React.FC = () => (
  <div className="p-6 rounded-3xl bg-gray-800 text-white shadow-lg shadow-gray-800/30">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-gray-300">Total Balance</p>
        <p className="text-3xl font-bold mt-1">$1,234.56</p>
      </div>
       <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
            <Icon name="qr" className="w-5 h-5" />
       </button>
    </div>
    <div className="mt-6 flex justify-between items-center">
      <p className="text-sm font-mono tracking-widest text-gray-400">**** **** **** 1234</p>
      <p className="text-sm">John Doe</p>
    </div>
  </div>
);

export default BalanceCard;

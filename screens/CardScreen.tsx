
import React, { useState } from 'react';
import Icon from '../components/Icon';

const CardCarousel: React.FC = () => {
    const cards = [
        { type: 'visa', number: '1234', expiry: '12/26', color: 'from-blue-500 to-blue-700' },
        { type: 'mastercard', number: '5678', expiry: '08/25', color: 'from-gray-700 to-gray-900' }
    ];

    return (
        <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
            {cards.map(card => (
                <div key={card.number} className={`flex-shrink-0 w-4/5 h-48 rounded-2xl p-5 text-white shadow-lg flex flex-col justify-between bg-gradient-to-br ${card.color}`} style={{ scrollSnapAlign: 'start' }}>
                    <div className="flex justify-between items-start">
                        <span className="font-semibold text-lg">E-Wallet</span>
                        <Icon name={card.type as any} className="w-12 h-auto" />
                    </div>
                    <div>
                        <p className="text-xl font-mono tracking-widest">**** **** **** {card.number}</p>
                        <div className="flex justify-between items-end mt-2">
                            <p className="text-sm">John Doe</p>
                            <p className="text-sm"><span className="opacity-70">EXP</span> {card.expiry}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ActionButton: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
    <button className="flex flex-col items-center space-y-2 text-center group">
        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <Icon name={icon} className="w-7 h-7 text-gray-700" />
        </div>
        <span className="text-xs text-gray-600 font-medium">{label}</span>
    </button>
);


const CardScreen: React.FC = () => {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="p-4 bg-gray-50 h-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My Cards</h1>
        <CardCarousel />

        <div className="my-6">
            <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Icon name={isLocked ? 'lock' : 'unlock'} className={`w-6 h-6 ${isLocked ? 'text-red-500' : 'text-green-500'}`} />
                    <div>
                        <h3 className="font-semibold text-gray-800">Card Security</h3>
                        <p className="text-xs text-gray-500">{isLocked ? 'Card is locked' : 'Card is active'}</p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsLocked(!isLocked)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-full ${isLocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                >
                    {isLocked ? 'Unlock' : 'Lock'}
                </button>
            </div>
        </div>

        <div className="grid grid-cols-4 gap-y-4 gap-x-2">
            <ActionButton icon="bill" label="Repayment" />
            <ActionButton icon="history" label="History" />
            <ActionButton icon="settings" label="Settings" />
            <ActionButton icon="cashIn" label="Top Up" />
        </div>
        
        <button className="mt-8 w-full flex items-center justify-center space-x-2 py-3 px-4 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors">
            <Icon name="plus-circle" className="w-5 h-5" />
            <span className="font-semibold">Add a New Card</span>
        </button>
    </div>
  );
};

export default CardScreen;

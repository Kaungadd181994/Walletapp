
import React, { useState } from 'react';
import Icon from './Icon';

interface WalletHeroProps {
    onBalanceClick: () => void;
}

const WalletHero: React.FC<WalletHeroProps> = ({ onBalanceClick }) => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering onBalanceClick
        setIsBalanceVisible(!isBalanceVisible);
    };

    return (
        <div className="p-4 bg-white text-gray-800 shadow-sm">
            <button onClick={onBalanceClick} className="w-full text-left">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center space-x-2">
                            <p className="text-sm text-gray-500">Total Balance</p>
                            <button onClick={toggleBalanceVisibility} className="text-gray-400 hover:text-gray-600">
                                <Icon name={isBalanceVisible ? 'eye-off' : 'eye'} className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-3xl font-bold mt-1">
                            {isBalanceVisible ? '1,234.56' : '******'} 
                            <span className="text-xl font-medium"> MMK</span>
                        </p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-full shadow-sm">
                        <Icon name="qr" className="w-5 h-5 text-gray-700" />
                    </div>
                </div>
            </button>
        </div>
    );
};

export default WalletHero;


import React, { useState } from 'react';
import Icon from './Icon';

interface WalletHeroProps {
    onBalanceClick: () => void;
}

const WalletHero: React.FC<WalletHeroProps> = ({ onBalanceClick }) => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const points = 5820;
    const pointsForNextTier = 8000;
    const progress = (points / pointsForNextTier) * 100;


    const toggleBalanceVisibility = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering onBalanceClick
        setIsBalanceVisible(!isBalanceVisible);
    };
    
    const handleQrClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        console.log('QR Code button clicked');
    };

    return (
        <div className="m-4 p-6 rounded-3xl bg-gray-800 text-white shadow-lg shadow-gray-900/30">
             <div className="flex justify-between items-start">
                <div onClick={onBalanceClick} className="flex-1 cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-300">Total Balance</p>
                        <button onClick={toggleBalanceVisibility} className="text-gray-400 hover:text-gray-200">
                            <Icon name={isBalanceVisible ? 'eye-off' : 'eye'} className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="text-3xl font-bold mt-1">
                        {isBalanceVisible ? '1,234.56' : '******'} 
                        <span className="text-xl font-medium text-gray-300"> MMK</span>
                    </p>
                </div>
                <button onClick={handleQrClick} className="p-3 bg-white/20 rounded-full shadow-sm hover:bg-white/30 transition-colors">
                    <Icon name="qr" className="w-5 h-5 text-white" />
                </button>
            </div>
            {/* Loyalty Section Integrated */}
            <div className="mt-4 pt-4 border-t border-white/10">
                 <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-semibold text-gray-200">🏅 Gold Member</p>
                    <p className="text-xs text-gray-300 font-medium">
                        {points.toLocaleString()} / {pointsForNextTier.toLocaleString()} pts
                    </p>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5">
                    <div
                        className="bg-yellow-400 h-1.5 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default WalletHero;

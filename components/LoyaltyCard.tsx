
import React from 'react';
import Icon from './Icon';

const LoyaltyCard: React.FC = () => {
    const points = 5820;
    const pointsForNextTier = 8000;
    const progress = (points / pointsForNextTier) * 100;

    return (
        <button className="w-full p-4 rounded-2xl bg-white text-left shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-yellow-500">Gold Member</p>
                    <p className="text-sm text-gray-800 font-semibold">{points.toLocaleString()} pts</p>
                </div>
                <Icon name="chevron-right" className="w-5 h-5 text-gray-400" />
            </div>
            <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                        className="bg-yellow-400 h-1.5 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">{(pointsForNextTier - points).toLocaleString()} pts to Platinum</p>
            </div>
        </button>
    );
};

export default LoyaltyCard;

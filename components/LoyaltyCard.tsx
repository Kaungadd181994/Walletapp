
import React from 'react';

const LoyaltyCard: React.FC = () => {
    const points = 5820;
    const pointsForNextTier = 8000;
    const progress = (points / pointsForNextTier) * 100;

    return (
        <div className="w-full p-3 rounded-2xl bg-white text-left shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-semibold text-gray-500">🏅 Gold Member</p>
                <p className="text-xs text-gray-500 font-medium">
                    {points.toLocaleString()} / {pointsForNextTier.toLocaleString()} pts
                </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                    className="bg-yellow-400 h-1.5 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default LoyaltyCard;

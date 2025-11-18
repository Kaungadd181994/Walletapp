
import React from 'react';

const HorizontalBanner: React.FC = () => {
  const banners = [
    { title: 'Get 30% Cashback', subtitle: 'On your first transaction', bgColor: 'bg-teal-500' },
    { title: 'Invite Friends, Earn Rewards', subtitle: 'Share your code now', bgColor: 'bg-indigo-500' },
    { title: 'Pay Bills, Win Prizes', subtitle: 'Chance to win a new phone', bgColor: 'bg-orange-500' },
  ];

  const firstBanner = banners[0];

  return (
    <div>
      <div className={`w-full h-40 rounded-2xl p-5 flex flex-col justify-center text-white ${firstBanner.bgColor} shadow-lg`}>
        <h3 className="font-bold text-xl">{firstBanner.title}</h3>
        <p className="text-sm opacity-90 mt-1">{firstBanner.subtitle}</p>
      </div>
    </div>
  );
};

export default HorizontalBanner;

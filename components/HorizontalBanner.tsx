
import React from 'react';

const HorizontalBanner: React.FC = () => {
  const banners = [
    { title: 'Get 30% Cashback', subtitle: 'On your first transaction', bgColor: 'bg-teal-500' },
    { title: 'Invite Friends, Earn Rewards', subtitle: 'Share your code now', bgColor: 'bg-indigo-500' },
    { title: 'Pay Bills, Win Prizes', subtitle: 'Chance to win a new phone', bgColor: 'bg-orange-500' },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
      {banners.map((banner, index) => (
        <div key={index} className={`flex-shrink-0 w-4/5 rounded-2xl p-4 text-white ${banner.bgColor} shadow-lg`} style={{ scrollSnapAlign: 'start' }}>
          <h3 className="font-bold text-lg">{banner.title}</h3>
          <p className="text-sm opacity-90">{banner.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default HorizontalBanner;
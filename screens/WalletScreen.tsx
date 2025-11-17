
import React from 'react';
import WalletHero from '../components/WalletHero';
import CoreFeatures from '../components/CoreFeatures';
import ServicesGrid from '../components/ServicesGrid';
import PromoClaimsSection from '../components/PromoClaimsSection';
import HorizontalBanner from '../components/HorizontalBanner';
import LoyaltyCard from '../components/LoyaltyCard';

interface WalletScreenProps {
    onBalanceClick: () => void;
}

const SectionHeader: React.FC<{title: string}> = ({ title }) => (
    <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <a href="#" className="text-sm font-medium text-green-600">See all</a>
    </div>
);

const RewardsSection: React.FC = () => {
    const rewards = [
        { name: "Coffee Shop", img: "https://picsum.photos/seed/coffee/200" },
        { name: "Bookstore", img: "https://picsum.photos/seed/books/200" },
        { name: "Cinema", img: "https://picsum.photos/seed/cinema/200" },
    ];
    return (
        <div>
            <SectionHeader title="Rewards" />
            <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4">
                {rewards.map(reward => (
                    <div key={reward.name} className="flex-shrink-0 w-28 text-center">
                        <img src={reward.img} alt={reward.name} className="w-28 h-28 rounded-2xl object-cover shadow-md" />
                        <p className="mt-2 text-sm font-semibold text-gray-700">{reward.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

const NewsCard: React.FC = () => (
    <div>
        <SectionHeader title="News" />
        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center space-x-4 border border-gray-100">
            <img src="https://picsum.photos/seed/news/200" alt="News" className="w-20 h-20 rounded-xl object-cover" />
            <div>
                <p className="text-xs text-gray-500">Finance</p>
                <h4 className="font-bold text-gray-800">New security features are now live</h4>
                <a href="#" className="text-xs text-green-600 font-semibold mt-1 inline-block">Read more</a>
            </div>
        </div>
    </div>
);


const WalletScreen: React.FC<WalletScreenProps> = ({ onBalanceClick }) => {
  return (
    <div className="bg-gray-50">
      {/* Sticky Hero section */}
      <div className="sticky top-0 z-10 bg-gray-50 pt-1">
         <WalletHero onBalanceClick={onBalanceClick} />
      </div>

      <div className="p-4">
        <CoreFeatures />
      </div>

      <div className="bg-white rounded-t-3xl p-4 space-y-6">
        <LoyaltyCard />
        <ServicesGrid />
        <HorizontalBanner />
        <PromoClaimsSection />
        <RewardsSection />
        <NewsCard />
      </div>
    </div>
  );
};

export default WalletScreen;

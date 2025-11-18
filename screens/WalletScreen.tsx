
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
        { name: "Coffee Shop", img: "https://picsum.photos/seed/coffee/200/300", overlay: "20% Off" },
        { name: "Bookstore", img: "https://picsum.photos/seed/books/200/300", overlay: "Exchange 1,000 Pts" },
        { name: "Cinema", img: "https://picsum.photos/seed/cinema/200/300", overlay: "$5 Coupon" },
        { name: "Groceries", img: "https://picsum.photos/seed/grocery/200/300", overlay: "5% eMoney Cashback" },
    ];
    return (
        <div>
            <SectionHeader title="Rewards" />
            <div className="flex space-x-4 overflow-x-auto pb-2 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
                {rewards.map(reward => (
                    <div key={reward.name} className="relative flex-shrink-0 w-36 group" style={{ scrollSnapAlign: 'start' }}>
                        <img src={reward.img} alt={reward.name} className="w-full h-48 rounded-2xl object-cover shadow-md brightness-75 group-hover:brightness-90 transition-all" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-3 text-white">
                            <h3 className="font-bold text-md leading-tight">{reward.name}</h3>
                             <div className="mt-1 bg-white/20 backdrop-blur-sm rounded-md px-2 py-1 text-center">
                                <p className="text-white text-xs font-bold">{reward.overlay}</p>
                            </div>
                        </div>
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
      {/* Combined Wallet and Loyalty Card */}
      <WalletHero onBalanceClick={onBalanceClick} />

      {/* Core Features */}
      <div className="py-4">
          <CoreFeatures />
      </div>

      {/* Scrollable Content */}
      <div className="p-4 space-y-6 bg-white rounded-t-3xl">
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


import React from 'react';
import Icon from './Icon';

const SectionHeader: React.FC<{title: string}> = ({ title }) => (
    <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <a href="#" className="text-sm font-medium text-green-600">See all</a>
    </div>
);

interface ClaimItemProps {
    icon: string;
    title: string;
    subtitle: string;
    iconBgColor: string;
    buttonText: string;
}

const ClaimItem: React.FC<ClaimItemProps> = ({ icon, title, subtitle, iconBgColor, buttonText }) => (
    <div className="bg-gray-50 rounded-2xl p-3 flex items-center space-x-4 border border-gray-100">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgColor}`}>
            <Icon name={icon} className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
            <h4 className="font-bold text-sm text-gray-800">{title}</h4>
            <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <button className="text-sm font-bold text-white bg-green-600 px-5 py-2 rounded-full hover:bg-green-700 transition-colors shadow-sm shadow-green-500/20">
            {buttonText}
        </button>
    </div>
);

const PromoClaimsSection: React.FC = () => {
    return (
        <div>
            <SectionHeader title="Daily Mission" />
             <ClaimItem 
                icon="gift" 
                title="Daily Login" 
                subtitle="Progress: 2/7 days"
                iconBgColor="bg-blue-500"
                buttonText="Claim"
            />
        </div>
    );
};

export default PromoClaimsSection;

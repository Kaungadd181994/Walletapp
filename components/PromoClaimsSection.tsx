
import React from 'react';
import Icon from './Icon';

const ClaimItem: React.FC<{ icon: string; subtitle: string; iconBgColor: string; buttonText: string; }> = ({ icon, subtitle, iconBgColor, buttonText }) => (
    <div className="bg-white rounded-2xl p-3 flex items-center space-x-4 border border-gray-100 shadow-sm">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgColor}`}>
            <Icon name={icon} className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
             <p className="text-sm font-semibold text-gray-800">{subtitle}</p>
        </div>
        <button className="text-sm font-bold text-white bg-green-600 px-5 py-2 rounded-full hover:bg-green-700 transition-colors shadow-sm shadow-green-500/20">
            {buttonText}
        </button>
    </div>
);

const PromoClaimsSection: React.FC = () => {
    return (
        <div>
             <ClaimItem 
                icon="gift" 
                subtitle="Daily Claim: 2/7 days"
                iconBgColor="bg-blue-500"
                buttonText="Claim"
            />
        </div>
    );
};

export default PromoClaimsSection;


import React from 'react';
import Icon from '../components/Icon';

const BankAccountItem: React.FC<{ name: string; number: string; balance: string; logo: string; }> = ({ name, number, balance, logo }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-green-400 transition-colors">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={logo} alt={`${name} logo`} className="w-10 h-10 rounded-full bg-gray-100 p-1" />
                <div>
                    <h3 className="font-bold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500 font-mono">{number}</p>
                </div>
            </div>
            <p className="font-bold text-lg text-gray-800">{balance}</p>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end space-x-3">
            <button className="text-xs font-semibold text-gray-500 hover:text-gray-800">Details</button>
            <button className="text-xs font-semibold text-red-500 hover:text-red-700">Unlink</button>
        </div>
    </div>
);

const BankScreen: React.FC = () => {
    return (
        <div className="p-4 bg-gray-50 h-full">
            <div className="text-center mb-6">
                 <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <Icon name="bank" className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">Linked Accounts</h1>
                <p className="text-gray-500 mt-1">Inspired by a classic deposit book.</p>
            </div>

            <div className="space-y-4">
                <BankAccountItem 
                    name="Chase Bank"
                    number="**** 2843"
                    balance="$2,105.77"
                    logo="https://logo.clearbit.com/chase.com"
                />
                 <BankAccountItem 
                    name="Bank of America"
                    number="**** 8812"
                    balance="$10,530.12"
                    logo="https://logo.clearbit.com/bankofamerica.com"
                />
            </div>
            
            <button className="mt-6 w-full flex items-center justify-center space-x-2 py-3 px-4 bg-green-600 text-white rounded-xl shadow-lg shadow-green-500/20 hover:bg-green-700 transition-colors">
                <Icon name="link" className="w-5 h-5" />
                <span className="font-semibold">Link a New Account</span>
            </button>
        </div>
    );
};

export default BankScreen;

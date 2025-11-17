import React from 'react';
import Icon from '../components/Icon';

const BalanceSummary: React.FC = () => (
    <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
        <p className="text-sm text-gray-500">Total Balance</p>
        <p className="text-3xl font-bold mt-1">1,234.56 <span className="text-xl font-medium">MMK</span></p>
    </div>
);

const TransactionItem: React.FC<{ type: 'in' | 'out', title: string, details: string, amount: string }> = ({ type, title, details, amount }) => {
    const isIncome = type === 'in';
    return (
        <div className="flex items-center space-x-4 py-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isIncome ? 'bg-green-100' : 'bg-red-100'}`}>
                <Icon name={isIncome ? 'plus-circle' : 'minus-circle'} className={isIncome ? 'text-green-600' : 'text-red-600'} />
            </div>
            <div className="flex-1">
                <p className="font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-500">{details}</p>
            </div>
            <p className={`font-bold ${isIncome ? 'text-green-600' : 'text-gray-800'}`}>
                {isIncome ? '+' : '-'} {amount} MMK
            </p>
        </div>
    );
};

const HistoryScreen: React.FC = () => {
    // FIX: Explicitly type the transactions array to prevent TypeScript from inferring the `type` property as a generic string.
    const transactions: { type: 'in' | 'out', title: string, details: string, amount: string }[] = [
        { type: 'out', title: 'Sent to John Doe', details: 'Payment', amount: '100.00' },
        { type: 'in', title: 'Received from Jane', details: 'Friend Transfer', amount: '50.00' },
        { type: 'out', title: 'Starbucks Coffee', details: 'Food & Drink', amount: '5.50' },
        { type: 'in', title: 'Cash In', details: 'From Linked Bank', amount: '500.00' },
        { type: 'out', title: 'Netflix Subscription', details: 'Entertainment', amount: '15.99' },
    ];

    return (
        <div className="flex flex-col h-full">
            <header className="flex-shrink-0 p-4 border-b border-gray-200">
                <h1 className="text-xl font-bold text-center text-gray-800">Transaction History</h1>
            </header>
            <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
                <BalanceSummary />

                <div className="flex items-center space-x-2 my-4">
                    <div className="relative flex-1">
                        <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Search transactions..." className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <button className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
                        <Icon name="filter" className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-gray-500 my-2">Today</h3>
                    <div className="bg-white rounded-2xl p-2 divide-y divide-gray-100">
                       {transactions.map((tx, i) => <TransactionItem key={i} {...tx} />)}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HistoryScreen;

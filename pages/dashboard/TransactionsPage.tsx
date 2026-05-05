import React, { useState, useMemo } from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { Search, Globe, ChevronUp, ChevronDown, ArrowUpDown } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Flagged';
}

const mockTransactions: Transaction[] = [
    { id: 'TXN-GLD-001', date: '2024-07-22', description: 'Gold Payment Settlement', category: 'Gold Assets', amount: 4200000.00, status: 'Completed' },
    { id: 'T002', date: '2024-07-21', description: 'Verification Maintenance Fee', category: 'Banking', amount: -250.00, status: 'Completed' },
    { id: 'TXN-WRE-882', date: '2024-07-21', description: 'International Wire Credit', category: 'Income', amount: 850000.00, status: 'Completed' },
    { id: 'T004', date: '2024-07-20', description: 'Security Audit Hold', category: 'Compliance', amount: 0.00, status: 'Flagged' },
    { id: 'T005', date: '2024-07-18', description: 'Account Initialization', category: 'Transfer', amount: 1000.00, status: 'Completed' },
];

const TransactionsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

    const handleSortAmount = () => {
        if (sortDirection === null) setSortDirection('desc');
        else if (sortDirection === 'desc') setSortDirection('asc');
        else setSortDirection(null);
    };

    const toggleGoogleSearch = () => {
        if (searchTerm) {
            const query = encodeURIComponent(`${searchTerm} financial news`);
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        } else {
            window.open(`https://www.google.com/search?q=latest+financial+market+news`, '_blank');
        }
    };

    const filteredTransactions = useMemo(() => {
        let result = mockTransactions.filter(t => {
            const matchesSearch = t.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = filterCategory === 'All' || t.category === filterCategory;
            return matchesSearch && matchesCategory;
        });

        if (sortDirection) {
            result = [...result].sort((a, b) => {
                if (sortDirection === 'asc') return a.amount - b.amount;
                return b.amount - a.amount;
            });
        }

        return result;
    }, [searchTerm, filterCategory, sortDirection]);

    return (
        <AnimatedSection>
            <div className="space-y-8 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-white tracking-tight">Audit & Telemetry Log</h1>
                        <p className="text-white/40 text-sm mt-1">Real-time settlement surveillance and immutable transaction ledger.</p>
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <button 
                            onClick={toggleGoogleSearch}
                            className="bg-white/5 border border-white/10 hover:border-electric-blue hover:text-electric-blue transition-all px-4 py-2 rounded-xl flex items-center gap-2 group text-white/60"
                        >
                            <Globe size={18} className="group-hover:animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Market Intel</span>
                        </button>
                    </div>
                </div>

                <div className="dashboard-card p-1">
                    <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search historical records..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-black/40 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all"
                            />
                        </div>
                        
                        <div className="flex gap-3 w-full md:w-auto">
                            <select 
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-white text-xs font-bold uppercase tracking-widest focus:ring-1 focus:ring-electric-blue focus:outline-none appearance-none cursor-pointer"
                            >
                                 <option value="All">All Entities</option>
                                 <option value="Gold Assets">Gold Assets</option>
                                 <option value="Income">Income</option>
                                 <option value="Banking">Banking</option>
                                 <option value="Compliance">Compliance</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="p-6 text-white/20 font-bold uppercase text-[10px] tracking-[0.3em]">Reference</th>
                                    <th className="p-6 text-white/20 font-bold uppercase text-[10px] tracking-[0.3em]">Description</th>
                                    <th className="p-6 text-white/20 font-bold uppercase text-[10px] tracking-[0.3em]">Classification</th>
                                    <th className="p-6 text-white/20 font-bold uppercase text-[10px] tracking-[0.3em]">State</th>
                                    <th 
                                        className="p-6 text-white/20 font-bold uppercase text-[10px] tracking-[0.3em] text-right cursor-pointer hover:text-white transition-colors"
                                        onClick={handleSortAmount}
                                    >
                                        <div className="flex items-center justify-end gap-2">
                                            {sortDirection === 'asc' && <ChevronUp size={14} className="text-electric-blue" />}
                                            {sortDirection === 'desc' && <ChevronDown size={14} className="text-electric-blue" />}
                                            {sortDirection === null && <ArrowUpDown size={14} />}
                                            Quantum Value
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.02]">
                                {filteredTransactions.map(t => (
                                    <tr key={t.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="p-6 text-white/20 font-mono text-[10px] tracking-tight">{t.id}</td>
                                        <td className="p-6 font-bold text-white tracking-tight">{t.description}</td>
                                        <td className="p-6">
                                            <span className="bg-white/5 text-white/60 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/5">
                                                {t.category}
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${
                                                t.status === 'Completed' ? 'text-success-emerald bg-success-emerald/10 border-success-emerald/20' : 
                                                t.status === 'Flagged' ? 'text-danger-rose bg-danger-rose/10 border-danger-rose/20 animate-pulse' :
                                                'text-warning-amber bg-warning-amber/10 border-warning-amber/20'
                                            }`}>
                                                {t.status}
                                            </span>
                                        </td>
                                        <td className={`p-6 text-right font-bold font-mono text-base ${t.amount > 0 ? 'text-success-emerald' : t.amount < 0 ? 'text-danger-rose' : 'text-white/20'}`}>
                                            {t.amount === 0 ? '--' : (t.amount > 0 ? '+' : '') + t.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredTransactions.length === 0 && (
                        <div className="p-20 text-center">
                            <p className="text-white/20 font-mono text-xs uppercase tracking-widest">No matching telemetry records found</p>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default TransactionsPage;
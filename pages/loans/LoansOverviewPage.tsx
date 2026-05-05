
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/AnimatedSection';

const LoanCard: React.FC<{ 
    type: string; 
    balance: string; 
    total: string; 
    nextPayment?: string; 
    date?: string; 
    progress?: number; 
    id: string;
    status: 'Approved' | 'Rejected' | 'Under Review' | 'Active';
}> = ({ type, balance, total, nextPayment, date, progress, id, status }) => {
    const statusColors = {
        'Approved': 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
        'Active': 'bg-electric-blue/10 text-electric-blue border border-electric-blue/20',
        'Rejected': 'bg-rose-500/10 text-rose-500 border border-rose-500/20',
        'Under Review': 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
    };

    const borderColors = {
        'Approved': 'border-emerald-500',
        'Active': 'border-electric-blue',
        'Rejected': 'border-rose-500',
        'Under Review': 'border-amber-500',
    };

    return (
        <div className={`bg-white dark:bg-primary-gray rounded-lg shadow-md p-6 border-l-4 ${borderColors[status]} hover:shadow-lg transition-shadow`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-light-text dark:text-white">{type} Loan</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${statusColors[status]}`}>
                            {status}
                        </span>
                    </div>
                    <p className="text-sm text-light-text-secondary dark:text-gray-400">ID: {id}</p>
                </div>
                <Link to={`/dashboard/loans/${id}`} className="text-sm font-semibold text-blue-500 hover:underline">View Details</Link>
            </div>
            
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                    <span className="text-light-text-secondary dark:text-gray-400">
                        {status === 'Under Review' || status === 'Rejected' ? 'Requested Amount' : 'Outstanding Balance'}
                    </span>
                    <span className="font-bold text-light-text dark:text-white">{balance}</span>
                </div>
                {progress !== undefined && (
                    <>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="bg-electric-blue h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="text-xs text-right mt-1 text-light-text-secondary dark:text-gray-500">of {total} Principal</p>
                    </>
                )}
            </div>

            {nextPayment && date && (
                <div className="bg-electric-blue/5 dark:bg-electric-blue/10 p-3 rounded-md flex justify-between items-center border border-electric-blue/10">
                    <div>
                        <p className="text-xs text-electric-blue font-semibold">Next Payment</p>
                        <p className="text-sm font-bold text-light-text dark:text-white uppercase tracking-tighter">{nextPayment}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-light-text-secondary dark:text-gray-400">Due Date</p>
                        <p className="text-sm font-medium text-light-text dark:text-white">{date}</p>
                    </div>
                </div>
            )}
            
            {status === 'Under Review' && (
                <div className="mt-4 p-3 bg-amber-500/5 dark:bg-amber-500/10 rounded-lg border border-amber-500/10">
                    <p className="text-xs text-amber-500">
                        Your application is currently being processed by our credit team. Expect a decision within 24-48 hours.
                    </p>
                </div>
            )}

            {status === 'Rejected' && (
                <div className="mt-4 p-3 bg-rose-500/5 dark:bg-rose-500/10 rounded-lg border border-rose-500/10">
                    <p className="text-xs text-rose-400">
                        Unfortunately, your application was not approved at this time. You can re-apply in 90 days.
                    </p>
                </div>
            )}
        </div>
    );
};

const LoansOverviewPage: React.FC = () => {
    return (
        <AnimatedSection>
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-light-text dark:text-white">Loans & Lending</h1>
                        <p className="text-light-text-secondary dark:text-gray-400">Manage your existing loans or apply for new financing.</p>
                    </div>
                    <Link to="/dashboard/loans/apply" className="bg-electric-blue text-white font-bold py-3 px-8 rounded-xl hover:bg-electric-blue/80 transition-all shadow-lg shadow-electric-blue/20 transform hover:scale-[1.02] active:scale-[0.98]">
                        Apply for New Loan
                    </Link>
                </div>

                <section>
                    <h2 className="text-lg font-bold text-light-text dark:text-white mb-4 flex items-center">
                        <span className="w-2 h-6 bg-electric-blue rounded-full mr-3"></span>
                        Active Loans
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <LoanCard 
                            id="LN-2023-882"
                            type="Personal" 
                            balance="$8,250.00" 
                            total="$10,000.00" 
                            nextPayment="$245.50" 
                            date="Aug 15, 2024"
                            progress={17.5}
                            status="Active"
                        />
                        <LoanCard 
                            id="LN-2021-004"
                            type="Auto" 
                            balance="$12,400.00" 
                            total="$25,000.00" 
                            nextPayment="$412.00" 
                            date="Aug 01, 2024"
                            progress={50.4}
                            status="Active"
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-light-text dark:text-white mb-4 flex items-center">
                        <span className="w-2 h-6 bg-amber-500 rounded-full mr-3"></span>
                        Recent Applications
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <LoanCard 
                            id="APP-2024-012"
                            type="Business" 
                            balance="$50,000.00" 
                            total="$50,000.00" 
                            status="Under Review"
                        />
                        <LoanCard 
                            id="APP-2024-015"
                            type="Equipment" 
                            balance="$12,000.00" 
                            total="$12,000.00" 
                            status="Approved"
                        />
                        <LoanCard 
                            id="APP-2024-009"
                            type="Home Improvement" 
                            balance="$15,000.00" 
                            total="$15,000.00" 
                            status="Rejected"
                        />
                    </div>
                </section>

                <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg shadow-xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Need Quick Cash?</h2>
                    <p className="mb-6 opacity-90 max-w-2xl mx-auto">Get approved for a personal loan up to $50,000 in minutes. Low interest rates starting from 5.99% APR.</p>
                    <Link to="/dashboard/loans/apply" className="inline-block bg-white text-black font-bold py-2 px-8 rounded-full hover:bg-gray-200 transition-colors">
                        Check Your Rate
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default LoansOverviewPage;

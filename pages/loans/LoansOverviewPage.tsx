
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
        'Approved': 'bg-success-emerald/10 text-success-emerald border border-success-emerald/20',
        'Active': 'bg-electric-blue/10 text-electric-blue border border-electric-blue/20',
        'Rejected': 'bg-danger-rose/10 text-danger-rose border border-danger-rose/20',
        'Under Review': 'bg-warning-amber/10 text-warning-amber border border-warning-amber/20',
    };

    const borderColors = {
        'Approved': 'border-success-emerald',
        'Active': 'border-electric-blue',
        'Rejected': 'border-danger-rose',
        'Under Review': 'border-warning-amber',
    };

    return (
        <div className={`dashboard-card p-8 border-l-4 ${borderColors[status]} group`}>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{type} Loan</h3>
                        <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${statusColors[status]}`}>
                            {status}
                        </span>
                    </div>
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">ID: {id}</p>
                </div>
                <Link to={`/dashboard/loans/${id}`} className="text-xs font-bold text-electric-blue hover:text-white uppercase tracking-widest transition-colors">Details</Link>
            </div>
            
            <div className="mb-6">
                <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/40 uppercase tracking-widest font-medium">
                        {status === 'Under Review' || status === 'Rejected' ? 'Requested Principal' : 'Outstanding Balance'}
                    </span>
                    <span className="font-bold text-white text-lg">{balance}</span>
                </div>
                {progress !== undefined && (
                    <>
                        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                            <div className="bg-electric-blue h-full rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="text-[10px] text-right mt-2 text-white/20 font-mono">OF {total} PRINCIPAL</p>
                    </>
                )}
            </div>

            {nextPayment && date && (
                <div className="bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/5">
                    <div>
                        <p className="text-[10px] text-electric-blue font-bold uppercase tracking-widest mb-1">Next Payment</p>
                        <p className="text-lg font-bold text-white tracking-tight">{nextPayment}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-1">Due Date</p>
                        <p className="text-sm font-medium text-white">{date}</p>
                    </div>
                </div>
            )}
            
            {status === 'Under Review' && (
                <div className="mt-6 p-4 bg-warning-amber/5 rounded-2xl border border-warning-amber/10">
                    <p className="text-xs text-warning-amber/80 leading-relaxed">
                        Sovereign verification in progress. Our credit committee will finalize the decision within 24 standard business hours.
                    </p>
                </div>
            )}

            {status === 'Rejected' && (
                <div className="mt-6 p-4 bg-danger-rose/5 rounded-2xl border border-danger-rose/10">
                    <p className="text-xs text-danger-rose/80 leading-relaxed">
                        Institutional criteria not met for this specific instrument. Re-application eligibility resets in 90 days.
                    </p>
                </div>
            )}
        </div>
    );
};

const LoansOverviewPage: React.FC = () => {
    return (
        <AnimatedSection>
            <div className="space-y-12 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Debt Capital Markets</h1>
                        <p className="text-white/40 text-sm mt-1">Manage active credit facilities or initiate high-leverage financing sessions.</p>
                    </div>
                    <Link to="/dashboard/loans/apply" className="btn-primary px-8 py-3 rounded-xl text-sm">
                        Initiate Application
                    </Link>
                </div>

                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-electric-blue rounded-full"></div>
                        <h2 className="text-xl font-bold text-white tracking-tight uppercase tracking-[0.2em]">Active Facilities</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1.5 h-8 bg-warning-amber rounded-full"></div>
                        <h2 className="text-xl font-bold text-white tracking-tight uppercase tracking-[0.2em]">Pending Requests</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

                <div className="bg-[#0B0E14] rounded-[2.5rem] p-12 border border-white/5 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-[100px] rounded-full"></div>
                    <h2 className="text-3xl font-display font-bold mb-4 tracking-tight">Institutional Credit Reserve</h2>
                    <p className="text-white/40 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Unlock access up to $5.0M in debt capital with preferential rates starting at 4.25% APR for sovereign members.</p>
                    <Link to="/dashboard/loans/apply" className="btn-primary px-12 py-4 rounded-full text-lg">
                        Check Eligibility
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default LoansOverviewPage;

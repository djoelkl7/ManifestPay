import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';
import FeedbackForm from '../../components/FeedbackForm';
import { useUser } from '../../contexts/UserContext';
import { 
  ShieldAlert, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  Search,
  MessageSquare,
  CreditCard,
  Send,
  Plus,
  X,
  Bell,
  FileText
} from 'lucide-react';

const DashboardOverview: React.FC = () => {
  const { user } = useUser();
  const [showFeedback, setShowFeedback] = useState(false);

  const accounts = [
    { type: 'Checking Account', number: '**** 8821', balance: 1200000.00, change: '+12.4%', color: 'from-electric-blue/20 to-electric-blue/5' },
    { type: 'Savings Account', number: '**** 4432', balance: 3000000.00, change: '+4.2%', color: 'from-neon-purple/20 to-neon-purple/5' },
    { type: 'Total Net Worth', number: 'Combined Balance', balance: 4200000.00, change: 'Stable', color: 'from-soft-cyan/20 to-soft-cyan/5' },
  ];

  const recentActivity = [
    { id: 1, desc: 'Gold Payment Settlement', date: 'Today, 11:20 AM', amount: 4200000.00, type: 'credit', icon: <TrendingUp className="text-success-emerald" /> },
    { id: 2, desc: 'Account Verification Fee', date: 'Yesterday, 4:45 PM', amount: -250.00, type: 'debit', icon: <CreditCard className="text-danger-rose" /> },
    { id: 3, desc: 'International Wire Transfer', date: 'Jul 21, 10:15 AM', amount: 850000.00, type: 'credit', icon: <ArrowUpRight className="text-success-emerald" /> },
    { id: 4, desc: 'Security Compliance Audit', date: 'Jul 20, 09:00 AM', amount: 0.00, type: 'transfer', icon: <ShieldAlert className="text-electric-blue" /> },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Account Locked Alert - Premium Version */}
      <AnimatedSection>
        <div className="glass-morphism p-5 rounded-2xl flex items-start space-x-5 border-electric-blue/20 overflow-hidden relative group">
          <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="bg-electric-blue/20 p-3 rounded-xl border border-electric-blue/30">
            <ShieldAlert className="w-6 h-6 text-electric-blue" />
          </div>
          <div className="flex-grow">
            <h3 className="font-display font-bold text-electric-blue text-lg">Verification Required</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
              To ensure the highest level of security for your high-net-worth portfolio, we've temporarily paused withdrawals. 
              Please connect with your <span className="text-white font-medium">designated account strategist</span> to complete the Tier 3 verification.
            </p>
          </div>
          <button className="hidden sm:block absolute right-5 top-1/2 -translate-y-1/2 btn-primary !py-2 !px-5 !text-xs !rounded-full">
            Complete Audit
          </button>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-display font-bold text-white tracking-tighter">
              Private Portfolio: {user?.name}
            </h1>
            <p className="text-white/40 mt-1 font-light tracking-wide text-sm flex items-center">
              Account Identifier: <span className="text-white ml-2 font-mono">{user?.email}</span>
            </p>
          </div>
          <div className="flex items-center space-x-3">
             <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                <Search size={20} className="text-white/40" />
             </button>
             <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors relative">
                <Bell size={20} className="text-white/40" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-electric-blue rounded-full border-2 border-black"></span>
             </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Account Cards - Virtual Card Look */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accounts.map((acc, idx) => (
          <AnimatedSection key={idx} delay={idx * 150}>
            <div className={`relative overflow-hidden group dashboard-card p-6 rounded-2xl border-white/5 bg-gradient-to-br ${acc.color}`}>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em]">{acc.type}</p>
                  <CreditCard size={18} className="text-white/20" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-8">
                  ${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest leading-none mb-1">Card Ref</p>
                    <p className="text-sm text-white/70 font-mono tracking-tighter">{acc.number}</p>
                  </div>
                  <div className={`flex items-center px-2 py-1 rounded-full text-[10px] font-bold ${
                    acc.change === 'Stable' ? 'bg-soft-cyan/10 text-soft-cyan' : 'bg-green-500/10 text-green-400'
                  }`}>
                    {acc.change === 'Stable' ? <Clock size={10} className="mr-1" /> : <TrendingUp size={10} className="mr-1" />}
                    {acc.change}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500"></div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatedSection delay={500}>
            <div className="dashboard-card rounded-2xl p-6 border-white/5 h-full">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-xl font-display font-bold text-white">Asset & Gold Movements</h2>
                  <p className="text-white/40 text-xs mt-1">Real-time verification logs</p>
                </div>
                <Link to="/dashboard/transactions" className="btn-secondary !py-2 !px-4 !text-xs !rounded-lg flex items-center">
                   Audit Trail <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </div>
              
              <div className="space-y-3">
                {recentActivity.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 600 + (i * 100) }}
                    key={item.id} 
                    className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/[0.08] hover:border-white/10 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <div className={`w-11 h-11 rounded-xl glass-morphism flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                         {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-white tracking-tight">{item.desc}</p>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-display font-bold text-lg ${item.amount > 0 ? 'text-green-400' : item.amount < 0 ? 'text-red-500' : 'text-electric-blue'}`}>
                        {item.amount > 0 ? '+' : ''}{item.amount === 0 ? 'Audit' : item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-4 text-white/30 hover:text-white/60 transition-colors text-xs font-medium uppercase tracking-[0.2em] border-t border-white/5">
                Load Historical Data
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Action Center - Premium Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <AnimatedSection delay={700}>
            <div className="dashboard-card rounded-2xl p-6 border-white/5 h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-xl font-display font-bold text-white">Quantum Operations</h2>
                <p className="text-white/40 text-xs mt-1">Institutional grade execution</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Transfer', icon: <Send size={24} />, path: '/transfers/send' },
                  { name: 'Assets', icon: <ArrowUpRight size={24} />, path: '/dashboard/accounts' },
                  { name: 'Statements', icon: <FileText size={24} />, path: '/dashboard/statements' },
                  { name: 'Feedback', icon: <MessageSquare size={24} />, onClick: () => setShowFeedback(true) },
                ].map((action) => (
                  <button 
                    key={action.name}
                    onClick={action.onClick}
                    className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-electric-blue hover:border-electric-blue transition-all duration-500 group"
                  >
                    {action.path ? (
                      <Link to={action.path} className="flex flex-col items-center">
                        <div className="mb-3 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                          {action.icon}
                        </div>
                        <span className="font-display font-bold text-xs uppercase tracking-widest text-white/40 group-hover:text-white">
                          {action.name}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <div className="mb-3 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                          {action.icon}
                        </div>
                        <span className="font-display font-bold text-xs uppercase tracking-widest text-white/40 group-hover:text-white">
                          {action.name}
                        </span>
                      </>
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence>
                {showFeedback && (
                  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setShowFeedback(false)}
                      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      className="relative w-full max-w-lg z-10"
                    >
                      <FeedbackForm onClose={() => setShowFeedback(false)} />
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
              
              <div className="mt-8 bg-black/40 rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                   <ShieldAlert size={40} className="text-soft-cyan/10" />
                </div>
                <p className="text-[10px] text-soft-cyan font-bold uppercase tracking-[0.2em] mb-2">Notice of Compliance</p>
                <p className="text-sm text-white/60 leading-relaxed font-light mb-4">
                  Institutional accounts require periodic biometric authentication. 
                </p>
                <button className="btn-primary w-full !py-3 !rounded-xl text-xs uppercase tracking-widest overflow-hidden relative group">
                  <span className="relative z-10">Authenticate Identity</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
              
              <button className="mt-8 group flex items-center justify-center space-x-2 text-white/40 hover:text-white transition-colors">
                 <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-electric-blue transition-colors">
                   <Plus size={16} />
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest">Manage Custom Widgets</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

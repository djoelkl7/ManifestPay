import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { BrainCircuit, TrendingUp, ShieldAlert, Cpu, Sparkles, BarChart3, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const IntelligencePage: React.FC = () => {
    return (
        <div className="space-y-8 pb-20">
            <AnimatedSection>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                            <BrainCircuit className="text-electric-blue" size={32} />
                            Manifest Intelligence
                        </h1>
                        <p className="text-white/40 text-sm mt-1">Autonomous financial engine synthesizing 40M+ data points daily.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full">
                        <span className="w-2 h-2 bg-electric-blue rounded-full animate-pulse shadow-[0_0_10px_rgba(255,102,0,0.5)]"></span>
                        <span className="text-[10px] font-bold text-electric-blue uppercase tracking-widest">Neural Layer Active</span>
                    </div>
                </div>
            </AnimatedSection>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Risk Vector', value: 'Low-B+', change: '-2.4%', icon: <ShieldAlert size={20} />, color: 'text-soft-cyan' },
                    { label: 'Execution Efficiency', value: '99.98%', change: '+0.12%', icon: <Zap size={20} />, color: 'text-electric-blue' },
                    { label: 'Proprietary Yield Index', value: '14.2%', change: '+1.4%', icon: <TrendingUp size={20} />, color: 'text-success-emerald' }
                ].map((stat, i) => (
                    <AnimatedSection key={i} delay={i * 100}>
                        <div className="dashboard-card p-8 group">
                           <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-2xl bg-white/5 ${stat.color} border border-white/5`}>
                                    {stat.icon}
                                </div>
                                <span className={`text-[10px] font-mono font-bold ${stat.change.startsWith('+') ? 'text-success-emerald' : 'text-danger-rose'}`}>
                                    {stat.change}
                                </span>
                           </div>
                           <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] mb-2">{stat.label}</p>
                           <h3 className="text-3xl font-bold text-white font-mono tracking-tighter">{stat.value}</h3>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            {/* Main AI Insight Card */}
            <AnimatedSection delay={300}>
                <div className="bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Sparkles className="text-electric-blue animate-bounce" size={24} />
                                <h2 className="text-2xl font-bold text-white tracking-tight">Strategy Synthesis Alpha-01</h2>
                            </div>
                            <p className="text-white/60 leading-relaxed font-light">
                                Our neural architecture has detected a localized liquidity anomaly within the Emerging Alpha pools. Standard protocols suggest a 14% capital reallocation to maintain our hyper-growth trajectory.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-electric-blue hover:text-white transition-all transform hover:scale-105">
                                    Finalize Synthesis
                                </button>
                                <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all">
                                    Download Full Telemetry
                                </button>
                            </div>
                        </div>
                        <div className="bg-black/40 rounded-2xl p-6 border border-white/5 font-mono text-xs space-y-4">
                            <div className="flex justify-between items-center text-white/20 border-b border-white/5 pb-2">
                                <span>TELEMETRY FEED</span>
                                <span className="animate-pulse">REC</span>
                            </div>
                            <div className="space-y-2">
                                <p className="text-electric-blue">{" >> "} [23:42:01] SYNTHESIZING POOL_A2_BETA</p>
                                <p className="text-white/40">{" >> "} [23:42:04] NOISE_CANCELING DISCARDED_PACKETS: 4,021</p>
                                <p className="text-soft-cyan">{" >> "} [23:42:08] PATTERN_RECOGNITION: ANOMALY_DETECTED</p>
                                <p className="text-white/40">{" >> "} [23:42:15] CALCULATING RISK_CORRECTION_VECTORS...</p>
                                <p className="text-green-500">{" >> "} [23:42:22] SYNC COMPLETE. ACTION_REQUIRED: TRUE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Sub-features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection delay={400}>
                    <div className="bg-primary-gray p-8 rounded-3xl border border-white/5 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-2xl">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Autonomous Rebalancing</h3>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Every 12 minutes, the system evaluates global capital flow and adjusts your sub-profiles to hedge against volatility.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-white/60">Last Auto-Rebalance</span>
                                <span className="text-white font-mono">14s ago</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <motion.div 
                                    className="bg-neon-purple h-full"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "65%" }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={500}>
                    <div className="bg-primary-gray p-8 rounded-3xl border border-white/5 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-soft-cyan/10 text-soft-cyan rounded-2xl">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Predictive Modeling</h3>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Simulate market conditions. Our predictive engine runs 10,000 Monte Carlo simulations per second to forecast your 5-year outlook.
                        </p>
                        <button className="w-full py-4 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest hover:border-soft-cyan/50 hover:text-soft-cyan transition-all">
                            Run Global Simulation
                        </button>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default IntelligencePage;

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Smartphone, Zap, ShieldCheck, Globe, CreditCard, RefreshCw, Layers } from 'lucide-react';

const DigitalBankingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-blue/5 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <AnimatedSection>
                        <div className="max-w-4xl mx-auto">
                            <h4 className="text-electric-blue font-mono text-sm uppercase tracking-[0.4em] mb-6">Core Infrastructure</h4>
                            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10">
                                Digital <br />
                                <span className="text-white/20 italic">Intelligence </span>
                                Banking
                            </h1>
                            <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                                The Manifest Core is a proprietary settlement layer designed for the high-velocity, global economy. No delays, no legacy friction.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-24 border-t border-white/5 bg-primary-gray/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Zap className="text-electric-blue" />,
                                title: "Instant Settlement",
                                desc: "Internal transfers settle in sub-millisecond cycles. Global rails optimized for 24/7/365 availability."
                            },
                            {
                                icon: <ShieldCheck className="text-neon-purple" />,
                                title: "Biometric Governance",
                                desc: "Hardware-level security and multi-party computation (MPC) protect every asset within the vault."
                            },
                            {
                                icon: <Layers className="text-soft-cyan" />,
                                title: "Modular Architecture",
                                desc: "Connect your existing ERP, treasury software, or proprietary tools via our robust REST and gRPC APIs."
                            }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                    <p className="text-white/40 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <AnimatedSection>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-electric-blue/20 to-neon-purple/20 aspect-square rounded-[3rem] border border-white/10 flex items-center justify-center p-12">
                                    <div className="bg-black/40 backdrop-blur-xl w-full h-full rounded-[2rem] border border-white/10 shadow-2xl p-8 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className="w-10 h-6 bg-white/10 rounded-md"></div>
                                                <p className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Institutional Card</p>
                                            </div>
                                            <Globe size={20} className="text-electric-blue" />
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-2xl font-mono tracking-[0.2em]">•••• •••• •••• 8824</p>
                                            <div className="flex justify-between items-center">
                                                <p className="text-xs font-bold uppercase tracking-widest">Global Ops Entity</p>
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 rounded-full bg-electric-blue/40 border border-white/20"></div>
                                                    <div className="w-6 h-6 rounded-full bg-neon-purple/40 border border-white/20"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Badges */}
                                <div className="absolute -top-6 -right-6 bg-black border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                                    <RefreshCw className="text-electric-blue animate-spin-slow" size={20} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Real-time FX</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-10">
                            <AnimatedSection delay={200}>
                                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">The Modern <br />Ledger.</h2>
                                <p className="text-white/60 text-lg leading-relaxed font-light">
                                    Why wait 3 days for a wire? Manifest provides real-time visibility into every transaction, with automated tagging and reconciliation built-in.
                                </p>
                            </AnimatedSection>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: <Smartphone size={18} />, label: "Omni-channel Access" },
                                    { icon: <RefreshCw size={18} />, label: "Auto-Reconciliation" },
                                    { icon: <CheckCircle className="text-green-500" size={18} />, label: "Regulatory Ready" },
                                    { icon: <CreditCard size={18} />, label: "Unlimited Issuance" }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/40 group">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:text-electric-blue transition-colors">
                                            {feature.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest">{feature.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-primary-gray/30 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-5xl font-display font-bold tracking-tighter mb-10">Upgrade Your <br />Financial Rails.</h2>
                        <button className="bg-electric-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
                           Open Core Account
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

const CheckCircle = ({ size, className }: { size: number, className: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
)

export default DigitalBankingPage;

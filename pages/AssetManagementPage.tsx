import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { BarChart3, PieChart, TrendingUp, Shield, Globe, Briefcase, ChevronRight } from 'lucide-react';

const AssetManagementPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-electric-blue/5 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-soft-cyan/5 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
                                <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Active Asset Management</span>
                            </div>
            <h1 className="text-7xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-10">
                Strategic <br />
                <span className="text-white/20">Capital </span>
                Engine
            </h1>
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-2xl">
                Precision orchestration of global capital. Our management suite integrates high-frequency data with proprietary quantitative models for the institutional elite.
            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Asset Classes */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Public Equities", desc: "Global exposure with algorithmic risk-parity adjustments.", icon: <TrendingUp className="text-electric-blue" /> },
                            { title: "Private Equity", desc: "Access to exclusive late-stage venture and buyout opportunities.", icon: <Briefcase className="text-neon-purple" /> },
                            { title: "Digital Assets", desc: "High-conviction exposure to the programmatic economy.", icon: <Globe className="text-soft-cyan" /> },
                            { title: "Real Assets", desc: "Inflation-protected investments in infrastructure and real estate.", icon: <Shield className="text-white/40" /> }
                        ].map((asset, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="p-8 rounded-3xl bg-primary-gray/40 border border-white/5 hover:border-white/20 transition-all group">
                                    <div className="mb-6 w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-white/10 group-hover:bg-electric-blue/10 transition-colors">
                                        {asset.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{asset.title}</h3>
                                    <p className="text-sm text-white/40 font-light leading-relaxed">{asset.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section className="py-32 bg-primary-gray/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <AnimatedSection>
                                <h2 className="text-4xl font-display font-bold tracking-tight">The Management Interface</h2>
                                <p className="text-white/60 font-light leading-relaxed">
                                    Our proprietary dashboard consolidates global asset holdings into a single, real-time telemetry feed. Monitor heatmaps, correlation matrices, and automated rebalancing triggers.
                                </p>
                            </AnimatedSection>

                            <div className="space-y-6">
                                {[
                                    { title: "Real-time Attribution", desc: "See exactly what is driving performance at a granular level." },
                                    { title: "Automated Rebalancing", desc: "Set drift thresholds for automatic portfolio optimization." },
                                    { title: "Tax-Loss Harvesting", desc: "Algo-driven strategies to maximize after-tax returns." }
                                ].map((feature, i) => (
                                    <AnimatedSection key={i} delay={200 + i * 100}>
                                        <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                            <div className="mt-1">
                                                <ChevronRight className="text-electric-blue" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-widest">{feature.title}</h4>
                                                <p className="text-white/40 text-sm font-light">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>

                        <AnimatedSection delay={400}>
                            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]">
                                <div className="bg-black rounded-[1.8rem] p-8 aspect-video flex items-center justify-center overflow-hidden">
                                     <PieChart size={120} className="text-electric-blue opacity-20 absolute scale-150 rotate-12" />
                                     <div className="relative z-10 text-center space-y-4">
                                         <BarChart3 size={48} className="mx-auto text-electric-blue" />
                                         <p className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em]">Proprietary Engine v8.0</p>
                                     </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-12">Take Control of Your <br /><span className="text-electric-blue">Capital Destiny</span>.</h2>
                        <button className="btn-primary px-10 py-5 !rounded-full text-lg">
                           Start Management Session
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default AssetManagementPage;

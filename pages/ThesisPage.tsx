import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { ShieldCheck, Target, Zap, Globe, Lock, Cpu } from 'lucide-react';

const ThesisPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-electric-blue selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-electric-blue/10 blur-[180px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-neon-purple/10 blur-[150px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <AnimatedSection>
                        <div className="max-w-4xl">
                            <h4 className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.6em] mb-8">Strategic Manifesto</h4>
                            <h1 className="text-7xl md:text-9xl font-display font-bold leading-[0.85] tracking-tighter mb-10">
                                The Future <br />
                                <span className="text-white/20">is </span>
                                <span className="italic">Automated.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl">
                                We operate on the foundational belief that capital systems should be as fluid, transparent, and resilient as the algorithmic foundations they inhabit.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Principles Grid */}
            <section className="py-24 border-t border-white/5 bg-primary-gray/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <ShieldCheck className="text-electric-blue" />,
                                title: "Immutable Security",
                                desc: "Traditional trust is broken. We replace institutional promises with cryptographic certainty. Every transaction is a mathematical proof."
                            },
                            {
                                icon: <Cpu className="text-neon-purple" />,
                                title: "Autonomous Capital",
                                desc: "Money should work while you sleep. Our programmatic architecture optimizes for hyper-growth with zero human intervention."
                            },
                            {
                                icon: <Globe className="text-soft-cyan" />,
                                title: "Zero Borders",
                                desc: "Wealth knows no geography. We build tools that treat the global economy as a single, unified settlement layer."
                            }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="space-y-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-electric-blue/50 transition-colors">
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

            {/* Deep Dive Section */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <AnimatedSection>
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                                <img 
                                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832" 
                                    alt="Technology Abstract" 
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-12">
                            <AnimatedSection delay={200}>
                                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">The Manifest Protocol</h2>
                                <p className="text-white/60 text-lg leading-relaxed font-light">
                                    We don't just manage assets; we orchestrate intelligence. By leveraging private, low-latency networks and proprietary risk-assessment models, we provide our clients with an unfair advantage in an increasingly volatile world.
                                </p>
                            </AnimatedSection>

                            <div className="space-y-8">
                                {[
                                    { step: "01", label: "Synthesis", value: "Merging real-time global telemetry with private liquidity pools." },
                                    { step: "02", label: "Execution", value: "Latency-optimized settlement cycles that outperform traditional rails by 10,000x." },
                                    { step: "03", label: "Self-Custody", value: "You maintain total control. We provide the infrastructure." }
                                ].map((item, i) => (
                                    <AnimatedSection key={i} delay={300 + (i * 100)}>
                                        <div className="flex gap-6 pb-8 border-b border-white/5 last:border-0">
                                            <span className="text-electric-blue font-mono font-bold text-sm tracking-widest">{item.step}</span>
                                            <div>
                                                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{item.label}</h4>
                                                <p className="text-white/40 text-sm font-light leading-relaxed">{item.value}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-electric-blue text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <AnimatedSection>
                        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-10">Wealth, <br />Reimagined.</h2>
                        <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                            Initialize Your Portfolio
                        </button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default ThesisPage;

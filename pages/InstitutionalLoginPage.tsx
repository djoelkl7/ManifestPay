import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Globe, Key, ArrowRight, Server, Database } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const InstitutionalLoginPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [credentials, setCredentials] = useState({ entityId: '', accessKey: '' });
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            setIsAuthenticating(true);
            setTimeout(() => {
                alert("Institutional Access requires hardware key verification. Please insert your physical security module.");
                setIsAuthenticating(false);
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0A55FF08,transparent_50%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-white/5 rounded-full animate-pulse-slow"></div>
                {/* Hardware Key Visual Hint */}
                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-electric-blue/5 blur-[100px] rounded-full"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="text-center mb-16">
                    <Link to="/" className="inline-block transform hover:scale-105 transition-transform duration-500">
                        <Logo />
                    </Link>
                    <div className="mt-10 space-y-3">
                        <h1 className="text-3xl font-display font-bold tracking-tighter">Institutional Terminal</h1>
                        <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-mono">Secure Access Gateway v6.0_BETA</p>
                    </div>
                </div>

                <div className="bg-[#0B0E14] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group backdrop-blur-xl">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric-blue to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <form onSubmit={handleNext} className="space-y-8">
                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.div 
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Entity Identifier</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Globe className="h-5 w-5 text-white/20" />
                                            </div>
                                            <input 
                                                type="text" 
                                                required
                                                placeholder="MP-INST-XXXXX"
                                                className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-all font-mono uppercase tracking-widest text-sm"
                                                value={credentials.entityId}
                                                onChange={(e) => setCredentials({ ...credentials, entityId: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-white/30 text-xs leading-relaxed italic">
                                        If your institution is not yet onboarded to the Manifest Protocol, please contact our relationship management team.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="step2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-4">
                                        <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Master Access Key</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Key className="h-5 w-5 text-white/20" />
                                            </div>
                                            <input 
                                                type="password" 
                                                required
                                                placeholder="••••••••••••••••"
                                                className="block w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-2xl text-white placeholder-white/20 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/20 transition-all font-mono tracking-widest text-sm"
                                                value={credentials.accessKey}
                                                onChange={(e) => setCredentials({ ...credentials, accessKey: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
                                        <ShieldCheck className="text-soft-cyan h-4 w-4 shrink-0" />
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Encrypted Session Layer Active</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button 
                            type="submit"
                            disabled={isAuthenticating}
                            className="btn-primary w-full py-5 rounded-2xl group shadow-2xl shadow-electric-blue/10"
                        >
                            {isAuthenticating ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>{step === 1 ? 'Verify Entity' : 'Authenticate Terminal'}</span>
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 flex justify-center gap-12 border-t border-white/5 pt-8">
                    <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                        <Server size={20} />
                        <span className="text-[10px] font-mono tracking-tighter">EU-CENTER-1</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                        <Database size={20} />
                        <span className="text-[10px] font-mono tracking-tighter">DB-CLUSTER-ALPHA</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
                        <Lock size={20} />
                        <span className="text-[10px] font-mono tracking-tighter">AES-256-GCM</span>
                    </div>
                </div>
            </motion.div>

            {/* Footer Navigation */}
            <div className="absolute bottom-8 left-0 w-full px-6 flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-widest">
                <Link to="/contact" className="hover:text-white transition-colors">Support Request</Link>
                <span>© 2026 Manifest Protocol</span>
                <Link to="/login" className="hover:text-white transition-colors">Standard Login</Link>
            </div>
        </div>
    );
};

export default InstitutionalLoginPage;

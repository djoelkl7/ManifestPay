import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { ShieldCheck, FileText, Lock, AlertTriangle, CheckCircle2, History, Scale, Download } from 'lucide-react';

const ComplianceHub: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    <ShieldCheck className="text-soft-cyan" size={32} />
                    Compliance Hub
                </h1>
                <p className="text-white/40 text-sm mt-1">Real-time regulatory status and institutional verification layer.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">Global Standing</p>
                    <p className="text-sm font-bold text-green-400 uppercase tracking-widest">Fully Compliant</p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-green-500/20 flex items-center justify-center bg-green-500/10 text-green-400">
                    <CheckCircle2 size={24} />
                </div>
            </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Verification Status Cards */}
        <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={100}>
                <div className="bg-primary-gray rounded-3xl border border-white/5 overflow-hidden">
                    <div className="p-8 border-b border-white/5">
                        <h3 className="font-bold text-lg text-white tracking-tight">Active Verifications</h3>
                    </div>
                    <div className="divide-y divide-white/5">
                        {[
                            { name: "Identity & Biometrics", status: "Verified", date: "Expiry: Oct 2027", icon: <CheckCircle2 className="text-green-500" size={20} /> },
                            { name: "Source of Wealth (SOW)", status: "Verified", date: "Updated: 2 days ago", icon: <CheckCircle2 className="text-green-500" size={20} /> },
                            { name: "AML/KYC Threshold", status: "Review Required", date: "Action recommended", icon: <AlertTriangle className="text-soft-cyan" size={20} /> }
                        ].map((v, i) => (
                            <div key={i} className="p-6 flex justify-between items-center group hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-black/40 rounded-xl border border-white/5 group-hover:border-electric-blue/30 transition-colors">
                                        <Lock size={18} className="text-white/40" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm tracking-tight">{v.name}</h4>
                                        <p className="text-[10px] text-white/30 tracking-widest uppercase font-mono mt-0.5">{v.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${v.status === 'Verified' ? 'text-green-400' : 'text-soft-cyan'}`}>
                                        {v.status}
                                    </span>
                                    {v.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
                <div className="bg-primary-gray rounded-3xl border border-white/5 overflow-hidden">
                    <div className="p-8 border-b border-white/5 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-white tracking-tight">Document Vault</h3>
                        <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest text-white transition-all flex items-center gap-2">
                           <Download size={12} />
                           Audit Selection
                        </button>
                    </div>
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Tax Residency Certificate", size: "2.4 MB", ext: "PDF" },
                            { title: "Corporate Charter v4", size: "12.1 MB", ext: "PDF" },
                            { title: "Certified Bank Reference", size: "0.8 MB", ext: "DOCX" },
                            { title: "AML Declarations 2024", size: "4.2 MB", ext: "PDF" }
                        ].map((doc, i) => (
                            <div key={i} className="p-4 bg-black/40 rounded-2xl border border-white/5 hover:border-soft-cyan/30 transition-all flex justify-between items-center group">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-white/20 group-hover:text-soft-cyan transition-colors" size={20} />
                                    <div>
                                        <h4 className="text-xs font-bold text-white tracking-tight line-clamp-1">{doc.title}</h4>
                                        <p className="text-[9px] text-white/30 font-mono mt-0.5">{doc.size} • {doc.ext}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-white/20 hover:text-white transition-colors">
                                    <Download size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>

        {/* Sidebar Features */}
        <div className="space-y-8">
            <AnimatedSection delay={300}>
                <div className="bg-gradient-to-br from-soft-cyan/10 to-electric-blue/10 rounded-3xl p-8 border border-white/5 space-y-6">
                    <div className="p-3 bg-white/5 rounded-2xl w-fit">
                        <Scale className="text-soft-cyan" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Legislative Telemetry</h3>
                    <p className="text-white/40 text-sm leading-relaxed font-light">
                        Automated tracking of jurisdictional shifts affecting your specific portfolio structure.
                    </p>
                    <div className="pt-4 border-t border-white/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Active Monitors</span>
                            <span className="text-white font-mono text-xs">08</span>
                        </div>
                        <div className="space-y-2">
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-soft-cyan w-4/5"></div>
                            </div>
                            <p className="text-[9px] text-white/20 font-mono italic">Syncing with INTERPOL and FATF databases...</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
                <div className="bg-primary-gray p-8 rounded-3xl border border-white/5 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/5 rounded-xl text-white/40">
                            <History size={20} />
                        </div>
                        <h3 className="font-bold text-white tracking-tight">Audit Trail</h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            { action: "Document Downloaded", info: "Tax Certificate", time: "2h ago" },
                            { action: "Settings Modified", info: "KYC Priority", time: "1d ago" }
                        ].map((log, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-white tracking-tight">{log.action}</span>
                                    <span className="text-[10px] text-white/20 font-mono tracking-tighter">{log.time}</span>
                                </div>
                                <span className="text-[10px] text-white/40">{log.info}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-4 bg-white/5 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/5">
                        Request Full History
                    </button>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ComplianceHub;

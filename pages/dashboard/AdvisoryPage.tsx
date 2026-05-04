import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import { UserCheck, MessageCircle, Calendar, Video, Stars, ArrowUpRight, GraduationCap, ShieldCheck } from 'lucide-react';

const AdvisoryPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <AnimatedSection>
        <div className="relative p-12 rounded-[3rem] bg-gradient-to-br from-primary-gray to-black border border-white/5 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20">
                <GraduationCap size={120} className="text-electric-blue" />
            </div>
            <div className="relative z-10 max-w-2xl space-y-6">
                <span className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-electric-blue/20">
                    Priority Access
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                    Expert Advisory <br />
                    <span className="text-white/40">Portal.</span>
                </h1>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                    Direct access to our senior capital architects and tax strategy specialists. Turn global volatility into a calculated advantage.
                </p>
            </div>
        </div>
      </AnimatedSection>

      {/* Advisory Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Capital Architecture",
            expert: "Dr. Elena Vance",
            specialty: "Macro Hedging & Yield Optimization",
            icon: <Stars size={24} className="text-neon-purple" />,
            status: "Available"
          },
          {
            title: "Compliance & Estate",
            expert: "Marcus Thorne",
            specialty: "International Tax Shells & Succession",
            icon: <ShieldCheck size={24} className="text-soft-cyan" />,
            status: "Active Session"
          },
          {
            title: "Emerging Markets",
            expert: "Sasha Petrova",
            specialty: "Alpha Generation in Volatile Corridors",
            icon: <ArrowUpRight size={24} className="text-electric-blue" />,
            status: "Away until 09:00"
          }
        ].map((advisor, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <div className="bg-primary-gray p-8 rounded-3xl border border-white/5 space-y-6 hover:border-electric-blue/30 transition-all group">
                <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-2xl">
                        {advisor.icon}
                    </div>
                    <div className={`flex items-center gap-2 px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                        advisor.status === 'Available' ? 'bg-green-500/10 text-green-400' : 
                        advisor.status === 'Active Session' ? 'bg-electric-blue/10 text-electric-blue' :
                        'bg-white/5 text-white/40'
                    }`}>
                        <span className={`w-1 h-1 rounded-full ${
                             advisor.status === 'Available' ? 'bg-green-400' : 
                             advisor.status === 'Active Session' ? 'bg-electric-blue animate-pulse' :
                             'bg-white/20'
                        }`}></span>
                        {advisor.status}
                    </div>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-2">{advisor.title}</h3>
                    <h2 className="text-xl font-bold text-white tracking-tight group-hover:text-electric-blue transition-colors">{advisor.expert}</h2>
                    <p className="text-sm text-white/60 mt-2 font-light">{advisor.specialty}</p>
                </div>
                <div className="flex gap-2 pt-4">
                    <button className="flex-1 bg-white/5 hover:bg-white/10 p-3 rounded-xl flex items-center justify-center transition-all">
                        <MessageCircle size={18} />
                    </button>
                    <button className="flex-1 bg-white/5 hover:bg-white/10 p-3 rounded-xl flex items-center justify-center transition-all">
                        <Calendar size={18} />
                    </button>
                    <button className="flex-1 bg-electric-blue text-white p-3 rounded-xl flex items-center justify-center hover:bg-electric-blue/80 transition-all font-bold text-xs uppercase tracking-widest">
                        Join
                    </button>
                </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Advisory History / Schedule */}
      <AnimatedSection delay={400}>
        <div className="bg-primary-gray rounded-3xl border border-white/5 overflow-hidden">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h3 className="font-bold text-lg text-white tracking-tight">Recent Strategic Consultations</h3>
                <button className="text-xs font-bold text-electric-blue uppercase tracking-widest hover:underline">View All Records</button>
            </div>
            <div className="divide-y divide-white/5">
                {[
                    { date: "Oct 24, 2024", subject: "Review of Q4 Yield Shells", type: "Video Call", expert: "Elena Vance" },
                    { date: "Sep 28, 2024", subject: "Succession Portability Analysis", type: "Secure Chat", expert: "Marcus Thorne" }
                ].map((session, i) => (
                    <div key={i} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/5 transition-colors">
                        <div className="flex gap-6 items-center">
                            <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex flex-col items-center justify-center">
                                <span className="text-[10px] font-bold text-white/30 uppercase">{session.date.split(' ')[0]}</span>
                                <span className="text-sm font-bold text-white leading-none">{session.date.split(' ')[1]}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{session.subject}</h4>
                                <p className="text-xs text-white/40 mt-1">Lead: {session.expert} • {session.type}</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/10 border border-white/5 transition-all">
                            Review Transcript
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AdvisoryPage;

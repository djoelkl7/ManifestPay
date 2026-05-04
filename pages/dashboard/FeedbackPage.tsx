
import React from 'react';
import AnimatedSection from '../../components/AnimatedSection';
import FeedbackForm from '../../components/FeedbackForm';
import { MessageSquare, Heart, Sparkles } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 pb-20">
      <AnimatedSection>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-electric-blue/20 transform rotate-3 hover:rotate-0 transition-transform">
            <MessageSquare className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white font-display">Feedback & Evolution</h1>
          <p className="text-white/40 max-w-lg mx-auto text-lg leading-relaxed">
            ManifestPay is built on the voices of our clients. Your feedback directly shapes the precision financial instruments we build.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="glass-morphism rounded-3xl p-1 shadow-2xl">
          <FeedbackForm />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-soft-cyan/10 flex items-center justify-center text-soft-cyan">
              <Sparkles size={20} />
            </div>
            <h3 className="font-bold text-white uppercase text-xs tracking-widest">Direct Impact</h3>
            <p className="text-white/40 text-sm">Every piece of feedback is reviewed by our core product architecture team.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple">
              <Heart size={20} />
            </div>
            <h3 className="font-bold text-white uppercase text-xs tracking-widest">Client Obsession</h3>
            <p className="text-white/40 text-sm">We provide updates on feature requests directly through your notifications portal.</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FeedbackPage;

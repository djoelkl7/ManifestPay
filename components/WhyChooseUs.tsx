
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, BarChart3, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Institutional Grade Security',
      description: 'Military-grade encryption with multi-sig cold storage for all digital assets.',
      className: 'md:col-span-2 md:row-span-1',
      bg: 'bg-gradient-to-br from-zinc-900 to-black'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quantum Execution',
      description: 'Sub-millisecond order processing with zero-latency liquidity routing.',
      className: 'md:col-span-1 md:row-span-1',
      bg: 'bg-electric-blue/10 border-electric-blue/20'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Borderless Finance',
      description: 'Access 40+ global markets and 150+ currency pairs from a single hub.',
      className: 'md:col-span-1 md:row-span-2',
      bg: 'bg-zinc-900/50'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Algorithmic Optimization',
      description: 'Self-correcting AI models that adapt to market volatility in real-time.',
      className: 'md:col-span-2 md:row-span-1',
      bg: 'bg-zinc-900'
    }
  ];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              The Engine of <br />
              <span className="text-electric-blue">Hyper-Growth</span>
            </h2>
            <p className="text-white/40 text-lg sm:text-xl font-light leading-relaxed">
              We've re-engineered the financial stack from the ground up. ManifestPay isn't just a bank; it's a high-performance instrument for capital expansion.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 100 }}
              className={`p-8 rounded-3xl border border-white/5 flex flex-col justify-between group hover:border-white/20 transition-all duration-500 ${feature.className} ${feature.bg}`}
            >
              <div className="p-3 w-fit rounded-2xl bg-white/5 text-electric-blue group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

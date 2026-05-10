
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Wallet, GraduationCap, Microscope } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServiceCard: React.FC<{ 
  icon: React.ReactElement; 
  title: string; 
  description: string; 
  link?: string;
  delay: number;
}> = ({ icon, title, description, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group bg-[#0B0E14]/40 p-10 rounded-[2.5rem] border border-white/5 hover:border-electric-blue/30 hover:bg-[#0B0E14]/80 transition-all duration-700 h-full flex flex-col relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-48 h-48 bg-electric-blue/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-electric-blue/10 transition-colors duration-700"></div>
    
    <div className="mb-10 w-16 h-16 rounded-2xl flex items-center justify-center text-electric-blue group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 border shadow-2xl relative z-10" style={{ backgroundColor: 'var(--site-bg)', borderColor: 'var(--card-border)' }}>
      {icon}
    </div>
    
    <div className="relative z-10 flex-grow">
      <h3 className="text-3xl font-bold mb-5 tracking-tight group-hover:text-electric-blue transition-colors" style={{ color: 'var(--site-text)' }}>{title}</h3>
      <p className="leading-relaxed font-light mb-10 group-hover:opacity-80 transition-opacity text-lg" style={{ color: 'var(--site-text-muted)' }}>{description}</p>
    </div>
    
    {link && (
      <div className="mt-auto relative z-10">
        <Link to={link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-electric-blue hover:text-white transition-colors group/link">
          Access Suite 
          <ArrowUpRight size={18} className="ml-2 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    )}
  </motion.div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wallet size={24} />,
      title: 'Precision Portfolios',
      description: 'Hyper-personalized investment structures engineered for specific liquidity profiles and risk tolerances.',
      link: '/investment-plans',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Asset Management',
      description: 'Dynamic asset allocation utilizing high-frequency data and quantitative fundamental analysis.',
      link: '/asset-management',
    },
    {
      icon: <Microscope size={24} />,
      title: 'Quantum Portfolios',
      description: 'Leverage our proprietary AI models to identify market inefficiencies before they become common knowledge.',
      link: '/dashboard/intelligence',
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Priority Access',
      description: 'One-on-one consulting with institutional-grade analysts for complex wealth management needs.',
      link: '/dashboard/advisory',
    },
  ];

  return (
    <section id="services" className="py-24 relative transition-colors duration-500" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-electric-blue mb-4">Ecosystem Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: 'var(--site-text)' }}>
              Sophisticated Wealth <br />
              <span style={{ color: 'var(--site-text)', opacity: 0.2 }}>Instruments</span>
            </h3>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

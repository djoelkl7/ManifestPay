
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
    className="group bg-zinc-900/40 p-8 rounded-[2rem] border border-white/5 hover:border-primary-red/50 hover:bg-zinc-900/60 transition-all duration-500 h-full flex flex-col relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-red/20 transition-colors duration-500"></div>
    
    <div className="mb-8 w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-primary-red group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/5 shadow-2xl relative z-10">
      {icon}
    </div>
    
    <div className="relative z-10 flex-grow">
      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary-red transition-colors">{title}</h3>
      <p className="text-white/40 leading-relaxed font-light mb-8 group-hover:text-white/60 transition-colors">{description}</p>
    </div>
    
    {link && (
      <div className="mt-auto relative z-10">
        <Link to={link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary-red hover:text-white transition-colors group/link">
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
      title: 'Active Alpha',
      description: 'Dynamic asset management utilizing high-frequency data and quantitative fundamental analysis.',
    },
    {
      icon: <Microscope size={24} />,
      title: 'Quantum Strategy',
      description: 'Leverage our proprietary AI models to identify market inefficiencies before they become common knowledge.',
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Elite Advisory',
      description: 'One-on-one consulting with institutional-grade analysts for complex wealth management needs.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary-red mb-4">Ecosystem Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Sophisticated Wealth <br />
              <span className="text-white/20">Instruments</span>
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

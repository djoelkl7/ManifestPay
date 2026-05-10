
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--site-bg)' }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-blue/5 blur-[150px] rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6 tracking-tighter leading-none" style={{ color: 'var(--site-text)' }}>
            Join the <span className="text-electric-blue">Elite</span> <br />
            Financial Network
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-lg sm:text-xl font-light" style={{ color: 'var(--site-text-muted)' }}>
            Don't settle for legacy banking. Step into the future with ManifestPay and experience precision finance designed for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/signup" className="btn-primary px-10 py-5 group">
              Get Started Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary px-10 py-5">
              Talk to a Specialist
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;

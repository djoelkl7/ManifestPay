import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-red/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-red/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></span>
              <span className="text-xs font-medium text-white/60 uppercase tracking-widest">Next-Gen Banking is Live</span>
              <ChevronRight size={14} className="text-white/40" />
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              Banking for the <br />
              <span className="text-primary-red">Hyper-Growth</span> Economy
            </h1>
            
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Experience the power of precision finance. ManifestPay empowers your global journey with high-performance accounts and elite security.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/signup" className="btn-primary w-full sm:w-auto px-10 py-5 group">
                Open Your Account
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-secondary w-full sm:w-auto px-10 py-5">
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

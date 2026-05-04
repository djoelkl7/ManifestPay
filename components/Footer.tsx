
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Phone, Globe, Shield, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <AnimatedSection>
              <Logo />
            </AnimatedSection>
            <p className="text-white/40 font-light leading-relaxed max-w-xs">
              Re-engineering the future of global finance. Precision instruments for capital expansion and wealth management.
            </p>
            <div className="flex space-x-4">
              {[Globe, Shield, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary-red hover:border-primary-red transition-all group">
                   <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Core Platform</h4>
            <ul className="space-y-4 text-white/40 font-light text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Digital Banking</Link></li>
              <li><Link to="/investment-plans" className="hover:text-white transition-colors">Quantum Portfolios</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Asset Management</Link></li>
              <li><Link to="/signup" className="hover:text-white transition-colors">Priority Access</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Intelligence</h4>
            <ul className="space-y-4 text-white/40 font-light text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Thesis</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Expert Advisory</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition-colors">Compliance Hub</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Institutional Login</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4 text-white/40 font-light text-sm">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-red" />
                <span>contact@manifestpay.online</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-red" />
                <span>123 Finance Square, NY</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-red" />
                <span>+1 (888) MANIFEST</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-mono tracking-widest">
            &copy; {new Date().getFullYear()} MANIFESTPAY ARCHITECTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-white/20 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

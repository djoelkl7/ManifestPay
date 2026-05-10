
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import AnimatedSection from './AnimatedSection';
import { Mail, MapPin, Phone, Globe, Shield, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t transition-colors duration-500" style={{ backgroundColor: 'var(--site-bg)', borderColor: 'var(--card-border)' }}>
      <div className="container mx-auto px-4 py-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <AnimatedSection>
              <Logo />
            </AnimatedSection>
            <p className="font-light leading-relaxed max-w-xs" style={{ color: 'var(--site-text-muted)' }}>
              Re-engineering the future of global finance. Precision instruments for capital expansion and wealth management.
            </p>
            <div className="flex space-x-4">
              {[Globe, Shield, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border flex items-center justify-center transition-all group" style={{ color: 'var(--site-text-muted)', borderColor: 'var(--card-border)' }}>
                   <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs" style={{ color: 'var(--site-text)' }}>Core Platform</h4>
            <ul className="space-y-4 font-light text-sm" style={{ color: 'var(--site-text-muted)' }}>
              <li><Link to="/" className="hover:text-electric-blue transition-colors">Digital Banking</Link></li>
              <li><Link to="/investment-plans" className="hover:text-electric-blue transition-colors">Quantum Portfolios</Link></li>
              <li><Link to="/#services" className="hover:text-electric-blue transition-colors">Asset Management</Link></li>
              <li><Link to="/signup" className="hover:text-electric-blue transition-colors">Priority Access</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs" style={{ color: 'var(--site-text)' }}>Intelligence</h4>
            <ul className="space-y-4 font-light text-sm" style={{ color: 'var(--site-text-muted)' }}>
              <li><Link to="/about" className="hover:text-electric-blue transition-colors">Our Thesis</Link></li>
              <li><Link to="/contact" className="hover:text-electric-blue transition-colors">Expert Advisory</Link></li>
              <li><Link to="/#faq" className="hover:text-electric-blue transition-colors">Compliance Hub</Link></li>
              <li><Link to="/admin" className="hover:text-electric-blue transition-colors">Institutional Login</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs" style={{ color: 'var(--site-text)' }}>Connect</h4>
            <ul className="space-y-4 font-light text-sm" style={{ color: 'var(--site-text-muted)' }}>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-electric-blue" />
                <span>contact@manifestpay.online</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-electric-blue" />
                <span>123 Finance Square, NY</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-electric-blue" />
                <span>+1 (888) MANIFEST</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderColor: 'var(--card-border)' }}>
          <p className="text-xs font-mono tracking-widest" style={{ color: 'var(--site-text-muted)', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} MANIFESTPAY ARCHITECTURE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--site-text-muted)', opacity: 0.5 }}>
            <a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-electric-blue transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

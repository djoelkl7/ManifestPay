
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center group">
      <div className="relative mr-2.5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-auto transform transition-all group-hover:scale-110 duration-500"
          aria-hidden="true"
        >
          <path d="M12 8L24 20L12 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--card-border)' }} />
          <path d="M20 8L32 20L20 32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red" />
          <path d="M28 8L36 16M28 32L36 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--site-text-muted)' }} />
        </svg>
      </div>
      <span className="font-display font-bold text-xl tracking-tight group-hover:text-electric-blue transition-colors duration-300" style={{ color: 'var(--site-text)' }}>
        Manifest<span className="text-electric-blue transition-colors duration-300">Pay</span>
      </span>
    </div>
  );
};

export default Logo;
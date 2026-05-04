
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center group">
      <div className="relative mr-2.5">
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-auto transform transition-transform group-hover:rotate-12 duration-500"
          aria-hidden="true"
        >
          <path
            d="M20 2L38 34H2L20 2Z"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-white/20"
          />
          <path
            d="M20 8L32 29H8L20 8Z"
            fill="currentColor"
            className="text-primary-red"
          />
          <circle cx="20" cy="23" r="3" fill="white" />
        </svg>
      </div>
      <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary-red transition-colors duration-300">
        Manifest<span className="text-primary-red group-hover:text-white transition-colors duration-300">Pay</span>
      </span>
    </div>
  );
};

export default Logo;
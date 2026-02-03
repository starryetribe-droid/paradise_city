import React from 'react';

export const LogoLotte = ({ className = "h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30C25.523 30 30 25.523 30 20C30 14.477 25.523 10 20 10Z" fill="#DA291C"/>
    <path d="M18 15L22 25H16L18 15Z" fill="white"/> 
    <text x="40" y="28" fill="#333" fontFamily="sans-serif" fontWeight="bold" fontSize="18">LOTTE INNOVATE</text>
  </svg>
);

export const LogoParadise = ({ className = "h-16", color = "#8C735A" }: { className?: string; color?: string }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <svg height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 mb-2">
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="3" />
      <path d="M40 25 H60 C75 25 75 55 60 55 H50 V75 H40 V25 Z M50 35 V45 H58 C65 45 65 35 58 35 H50 Z" fill={color}/>
    </svg>
    <span className="font-serif text-3xl tracking-widest uppercase" style={{ color }}>Paradise City</span>
  </div>
);

export const LogoParadiseSimple = ({ className = "h-8", color = "#8C735A" }: { className?: string; color?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="5" />
      <path d="M40 25 H60 C75 25 75 55 60 55 H50 V75 H40 V25 Z M50 35 V45 H58 C65 45 65 35 58 35 H50 Z" fill={color}/>
    </svg>
    <span className="font-serif text-lg tracking-widest uppercase" style={{ color }}>PARADISE CITY</span>
  </div>
);
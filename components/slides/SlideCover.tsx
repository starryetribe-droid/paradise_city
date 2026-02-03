import React from 'react';
import { LogoParadise, LogoLotte } from '../Icons';

const SlideCover: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-cream overflow-hidden">
      {/* Top Decoration Bar */}
      <div className="absolute top-0 left-0 w-1/3 h-6 bg-[#8C735A]"></div>
      
      {/* Header Logo */}
      <div className="absolute top-8 right-12">
        <LogoLotte className="h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-24">
        <div className="mb-8">
           <LogoParadise className="items-start" />
        </div>
        
        <h1 className="text-7xl font-bold text-brown-dark leading-tight mb-4 tracking-tight">
          파라다이스시티<br />
          홈페이지 리뉴얼 제안서
        </h1>
      </div>

      {/* Footer Info */}
      <div className="px-24 pb-12 text-[#8C735A] font-medium">
        <p className="text-xl font-bold mb-1">롯데이노베이트</p>
        <p className="text-lg">2026.02.08</p>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-lg">
        1
      </div>
    </section>
  );
};

export default SlideCover;
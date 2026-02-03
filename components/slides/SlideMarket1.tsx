import React from 'react';
import { LogoLotte } from '../Icons';

const SlideMarket1: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-cream">
       {/* Header */}
       <div className="flex justify-between items-start px-12 py-8">
        <span className="text-lg text-gray-500">02. 제안개요 / 01. 마켓의 이해</span>
        <LogoLotte className="h-4" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <h2 className="text-5xl font-light text-[#8C735A] tracking-tight">
          하이앤드 럭셔리 5성급 호텔&리조트...
        </h2>
      </div>
    </section>
  );
};

export default SlideMarket1;
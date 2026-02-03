import React from 'react';
import { LogoLotte } from '../Icons';

const SlideMarket2: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-grey-cool">
       {/* Header */}
       <div className="flex justify-between items-start px-12 py-8 text-white opacity-70">
        <span className="text-lg">02. 제안개요 / 01. 마켓의 이해</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <h1 className="text-[10rem] font-serif italic font-bold text-white mb-4 leading-none">
          Luxury
        </h1>
        <p className="text-3xl font-light text-white opacity-90">
          "비싸지만 돈 값을 하는 곳"
        </p>
      </div>
    </section>
  );
};

export default SlideMarket2;
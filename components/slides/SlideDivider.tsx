import React from 'react';
import { LogoLotte } from '../Icons';

interface SlideDividerProps {
  number: string;
  title: string;
}

const SlideDivider: React.FC<SlideDividerProps> = ({ number, title }) => {
  return (
    <section className="relative h-[1080px] w-full flex flex-col bg-[#9E8B78] text-white">
      {/* Header */}
      <div className="absolute top-8 right-12 opacity-80">
        <div className="text-white font-bold text-lg tracking-widest">LOTTE INNOVATE</div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-24">
        <h2 className="text-6xl font-light">
          <span className="font-bold mr-4">{number}.</span> {title}
        </h2>
      </div>
    </section>
  );
};

export default SlideDivider;
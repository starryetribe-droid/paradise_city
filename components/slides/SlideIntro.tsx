import React from 'react';
import { LogoParadise, LogoLotte } from '../Icons';

const SlideIntro: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-cream">
       {/* Header */}
       <div className="flex justify-between items-start px-12 py-8">
        <span className="text-lg text-black">01. Executive Summary</span>
        <LogoLotte className="h-4" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <div className="mb-16 transform scale-150">
          <LogoParadise />
        </div>
        
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <p className="text-2xl font-light text-brown-dark leading-relaxed break-keep">
            파라다이스시티 고객의 Digital Experience 개선을 위한 첫 과제로
          </p>
          <p className="text-2xl font-light text-brown-dark leading-relaxed break-keep">
            고객 디지털 최접점인 P-city 닷컴의 고도화에 초대해 주셔서 감사합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SlideIntro;
import React from 'react';
import { LogoLotte } from '../Icons';

const SlideTOC: React.FC = () => {
  const items = [
    { id: '01', text: 'Executive Summary' },
    { id: '02', text: '제안사 소개' },
    { id: '03', text: '제안 개요' },
    { id: '04', text: '현황 분석 및 개선 방안' },
    { id: '05', text: '사업 수행 방안' },
    { id: '06', text: '관리 방안' },
    { id: '07', text: '지원 방안' },
    { id: '#', text: '추가 제안' },
    { id: '#', text: '별첨' },
  ];

  return (
    <section className="relative h-[1080px] w-full flex flex-col bg-white">
      {/* Header */}
      <div className="flex justify-between items-start p-12">
        <span className="text-lg font-bold text-gray-500 tracking-wider">TABLE OF CONTENTS</span>
        <LogoLotte className="h-4" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-end pr-32 pb-20">
        <div className="space-y-6 text-right">
          {items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer transition-colors duration-300 hover:text-brown-primary">
              <span className={`inline-block w-10 font-bold mr-4 ${item.id === '#' ? 'text-brown-light' : 'text-black'} group-hover:text-brown-primary text-2xl`}>
                {item.id}
              </span>
              <span className={`text-2xl font-light text-[#8C735A] tracking-tight group-hover:text-brown-dark`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideTOC;
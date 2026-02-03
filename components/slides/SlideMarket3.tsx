import React from 'react';

const SlideMarket3: React.FC = () => {
  return (
    <section className="relative h-[1080px] w-full flex flex-col bg-grey-cool">
      {/* Header */}
      <div className="flex justify-between items-start px-12 py-8 text-white opacity-70">
        <span className="text-lg">02. 제안개요 / 01. 마켓의 이해</span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <p className="text-5xl font-light text-white opacity-95">
          "아이와 함께 가기 최고의 호텔"
        </p>
      </div>
    </section>
  );
};

export default SlideMarket3;
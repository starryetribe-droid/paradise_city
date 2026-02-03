import React from 'react';

const SlideReady: React.FC = () => {
  return (
    <section className="relative h-[1080px] w-full flex flex-col bg-cream items-center justify-center text-center px-4">

      <div className="mb-16 space-y-2">
        <p className="text-lg text-brown-dark font-medium">이와 같은 Critical Success Factor는</p>
        <p className="text-lg text-brown-dark font-medium">
          <span className="font-bold">'이를 명확히 이해하고 경험해본 자만이 할 수 있는 일'</span>이라 감히 정의하고자 합니다.
        </p>
      </div>

      <div className="relative py-8 my-8 w-full max-w-4xl">
        {/* Top Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#4A3B32]"></div>

        <h1 className="text-8xl font-bold text-[#4A3B32] py-8">
          We are Ready !
        </h1>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#4A3B32]"></div>
      </div>

      <div className="mt-12 space-y-2">
        <p className="text-lg text-brown-dark">이 관점에서</p>
        <p className="text-lg text-brown-dark">
          저희는 <span className="font-bold">'We Are Ready'</span>라고 자신 있게 말할 수 있습니다.
        </p>
      </div>

    </section>
  );
};

export default SlideReady;
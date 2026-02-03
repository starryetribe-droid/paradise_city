import React from 'react';

const CircleItem = ({ title, className }: { title: React.ReactNode; className?: string }) => (
  <div className={`rounded-full flex items-center justify-center text-center p-4 shadow-lg border-4 border-white/20 backdrop-blur-sm ${className}`}>
    <div className="text-white font-medium text-lg leading-tight">
      {title}
    </div>
  </div>
);

const SlideSuccess: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-cream overflow-hidden">
      {/* Header Content */}
      <div className="w-full text-center mt-20 mb-12 px-4">
        <p className="text-xl text-brown-dark mb-2">본 사업의 성공적인 런칭을 위하여...</p>
        <p className="text-xl text-brown-dark">
          당 제안사는 다음과 같은 Critical Success Factor를 정의하고자 합니다.
        </p>
      </div>

      {/* Diagram Container */}
      <div className="flex-1 relative flex items-center justify-center w-full px-12">
        {/* Horizontal Dashed Line Background */}
        <div className="absolute w-full top-1/2 -translate-y-1/2 h-[1px] border-t-2 border-dashed border-gray-400 z-0"></div>
        <div className="absolute w-full top-[35%] -translate-y-1/2 h-[1px] border-t-2 border-dashed border-gray-300 z-0 opacity-50"></div>
        <div className="absolute w-full top-[65%] -translate-y-1/2 h-[1px] border-t-2 border-dashed border-gray-300 z-0 opacity-50"></div>

        {/* Circles Container - Flex Row */}
        <div className="relative z-10 flex items-center gap-4 lg:gap-8 max-w-7xl mx-auto">
            
            {/* Left 1 */}
            <div className="w-48 h-48 rounded-full bg-[#A89684] flex items-center justify-center text-center text-white shadow-xl transform translate-y-0">
               <p className="px-4 text-lg">Global<br/>Experience</p>
            </div>

            {/* Left 2 */}
            <div className="w-48 h-48 rounded-full bg-[#A89684] flex items-center justify-center text-center text-white shadow-xl transform translate-y-0 opacity-90">
               <p className="px-4 text-lg">Travel<br/>&<br/>Hospitality<br/>Experience</p>
            </div>

            {/* CENTER MAIN */}
            <div className="relative w-72 h-72">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-[#E6DCCF] transform scale-125 opacity-50"></div>
                <div className="absolute inset-0 rounded-full bg-[#D6C4B0] transform scale-110 opacity-60"></div>
                {/* Core */}
                <div className="absolute inset-0 rounded-full bg-[#5E4B35] flex items-center justify-center text-center text-white shadow-2xl border-8 border-[#D6C4B0]">
                    <div className="text-2xl font-serif">
                        Build a<br/>
                        <span className="text-3xl font-bold">Customer</span><br/>
                        eXperience
                    </div>
                </div>
            </div>

             {/* Right 1 */}
             <div className="w-48 h-48 rounded-full bg-[#A89684] flex items-center justify-center text-center text-white shadow-xl transform translate-y-0 opacity-90">
               <p className="px-4 text-lg">Adobe<br/>CMS<br/>Capability</p>
            </div>

             {/* Right 2 */}
             <div className="w-48 h-48 rounded-full bg-[#A89684] flex items-center justify-center text-center text-white shadow-xl transform translate-y-0">
               <p className="px-4 text-lg">Booking<br/>System<br/>Capability</p>
            </div>

        </div>

        {/* Direction Arrows (Visual Only - simulated with text/icons for simplicity) */}
        <div className="absolute top-[38%] left-[20%] text-gray-400 text-3xl">▶</div>
        <div className="absolute bottom-[38%] right-[20%] text-gray-400 text-3xl rotate-180">▶</div>

      </div>
    </section>
  );
};

export default SlideSuccess;
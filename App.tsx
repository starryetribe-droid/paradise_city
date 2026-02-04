import React from 'react';
import SlideCover from './components/slides/SlideCover';
import SlideTOC from './components/slides/SlideTOC';
import SlideDivider from './components/slides/SlideDivider';
import SlideIntro from './components/slides/SlideIntro';
import SlideMarket1 from './components/slides/SlideMarket1';
import SlideMarket2 from './components/slides/SlideMarket2';
import SlideMarket3 from './components/slides/SlideMarket3';
import SlideSuccess from './components/slides/SlideSuccess';
import SlideReady from './components/slides/SlideReady';
import SlideArchitecture from './components/slides/SlideArchitecture';

const App: React.FC = () => {
  return (
    <main className="w-full font-sans selection:bg-brown-light selection:text-white">
      {/* Slide 1: Cover */}
      <SlideCover />

      {/* Slide 2: Table of Contents */}
      <SlideTOC />

      {/* Slide 3: Divider - Executive Summary */}
      <SlideDivider number="01" title="Executive Summary" />

      {/* Slide 4: Intro Message */}
      <SlideIntro />

      {/* Slide 5: Market Understanding 1 */}
      <SlideMarket1 />

      {/* Slide 6: Market Understanding 2 (Luxury) */}
      <SlideMarket2 />

      {/* Slide 7: Market Understanding 3 (Kids) */}
      <SlideMarket3 />

      {/* Slide 8: Success Factors */}
      <SlideSuccess />

      {/* Slide 9: Conclusion */}
      <SlideReady />

      {/* Slide 10: Architecture */}
      <SlideArchitecture />

      {/* Simple Navigation Helper (Optional, for demo purposes) */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 opacity-30 hover:opacity-100 transition-opacity">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-black text-white p-2 rounded-full text-xs"
        >
          TOP
        </button>
      </div>
    </main>
  );
};

export default App;
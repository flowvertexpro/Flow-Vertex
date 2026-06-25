import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TimelineShowcase from "./components/TimelineShowcase";
import TalkingHead from "./components/TalkingHead";
import Showroom from "./components/Showroom";
import Cafe from "./components/Cafe";
import MotionGraphics from "./components/MotionGraphics";
import Typography from "./components/Typography";
import SocialHub from "./components/SocialHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-root-container" className="relative min-h-screen bg-[#04342C] bg-gradient-to-b from-[#04342C] via-[#02231e] to-[#010e0c] text-white overflow-hidden font-sans select-none">
      
      {/* Structured Minimal Single-Page Layout */}
      <Header />
      
      <main className="relative overflow-visible z-10">
        <Hero />
        <About />
        <TimelineShowcase />
        
        {/* Unified Creative Portfolio Section */}
        <section id="portfolio" className="relative scroll-mt-20 border-t border-zinc-200 bg-transparent">
          {/* Portfolio Header Block */}
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 text-center">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-[0.2em] uppercase mb-4 inline-block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-6 uppercase">
              CREATIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5bc] to-[#00fa75]">PRODUCTION WORK</span>
            </h2>
            <p className="max-w-2xl mx-auto text-zinc-300 font-sans font-light text-sm sm:text-base leading-relaxed">
              Explore our diverse masterworks across high-retention video formats. Each segment represents maximum aesthetic craft, state-of-the-art color grading, and hyper-kinetic motion graphics designed to grip the modern digital audience.
            </p>
          </div>

          <MotionGraphics />
          <Typography />
          <Cafe />
          <TalkingHead />
          <Showroom />
        </section>

        <SocialHub />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

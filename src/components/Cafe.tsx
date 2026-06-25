import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Coffee, Music, Wind, Smile, ShieldCheck } from "lucide-react";

export default function Cafe() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-into-a-cup-of-coffee-31853-large.mp4";
  const thumbnailUrl = "/src/assets/images/boc_coffee_thumbnail_1782303929683.jpg";

  const keyfeatures = [
    { icon: Coffee, label: "Matte Latte Grade", desc: "Warm cozy espresso tones with creamy soft matte highlights." },
    { icon: Music, label: "Jazz Lo-fi Ambient", desc: "Low-fidelity warm backing tracks paired with real-life sound design." },
    { icon: Wind, label: "Porcelain Foley", desc: "Steaming coffee cups, clinking porcelain, and milk pouring sounds." },
    { icon: Smile, label: "Destination Spec", desc: "Built to inspire intense aesthetic appeal and physical visits." },
  ];

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log("Video play failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="cafe" className="relative py-28 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Desc */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block self-start">
              Segment 03: Cozy Brand Trailer
            </span>
            
            <h2 className="font-display font-black tracking-tight text-zinc-900 mb-6 leading-tight">
              <span className="block text-3xl sm:text-4xl lg:text-5xl uppercase mb-2">CINEMATIC VIDEO</span>
              <span className="block text-sm sm:text-base lg:text-lg font-medium text-zinc-500 tracking-wide uppercase">
                WE DON'T SHOOT CAFES. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5bc] to-[#00fa75] font-black">WE CAPTURE FEELINGS.</span>
              </span>
            </h2>

            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
              The warmth, the ambience, the first sip - we turn your cafe's soul and aesthetic atmosphere into high-end visual content that captures attention and consistently fills seats.
            </p>

            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
              Click on the preview to the right to watch the warm aesthetic brand edit. See how matte grading combines with acoustic jazz tracks to generate instant digital comfort.
            </p>

            {/* Quick stats / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-200 pt-8">
              {keyfeatures.map((feat, i) => {
                const IconComp = feat.icon;
                return (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 text-[#00e5bc]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[10px] font-bold text-zinc-800 uppercase tracking-wider">{feat.label}</span>
                      <span className="text-[10px] text-zinc-500 font-light mt-0.5">{feat.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Mockup Player */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[9/16] rounded-3xl p-1.5 bg-white border border-zinc-200 overflow-hidden shadow-lg group">
              
              {/* Kinetic edge light bezel highlight */}
              <div className="absolute top-0 inset-x-12 h-[1.8px] bg-gradient-to-r from-transparent via-[#04342C]/40 to-transparent z-20" />
              <div className="absolute bottom-0 inset-x-12 h-[1.8px] bg-gradient-to-r from-transparent via-[#04342C]/40 to-transparent z-20" />

              {/* Interactive Player Box */}
              <a 
                href="https://www.instagram.com/reel/DZhJkUzRwZj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative rounded-[22px] overflow-hidden bg-black z-10 cursor-pointer group/player"
              >
                {/* Thumbnail Image representing 1st Frame */}
                <img
                  src={thumbnailUrl}
                  alt="No Studio. Just iPhone + AI"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/player:scale-105"
                />

                {/* Dark Vignette Overlay on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021b17]/95 via-transparent to-black/45 transition-opacity duration-300 pointer-events-none z-10" />

                {/* Vertical safe area margin lines mimicking video editor / camera frame overlays */}
                <div className="absolute inset-4 border border-white/[0.08] rounded-[18px] pointer-events-none z-15" />
                
                {/* Tech overlay info parameters */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[8px] text-zinc-300 font-bold z-20 tracking-widest select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e5bc] animate-pulse" />
                    <span>WATCH ON INSTAGRAM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Coffee className="w-3 h-3 text-[#00e5bc]" />
                    <span>FLOW VERTEX ORIGINAL</span>
                  </div>
                </div>

                {/* Middle Action Ring and play button indicator */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-3">
                  <div className="w-16 h-16 rounded-full bg-white/95 border border-zinc-200 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover/player:scale-110 shadow-lg">
                    <Play className="w-6 h-6 fill-[#04342C] text-[#04342C] ml-1" />
                  </div>
                  
                  <span className="font-mono text-[9px] font-bold text-zinc-800 tracking-widest uppercase bg-white border border-zinc-200 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md max-w-[200px] text-center">
                    <span>PLAY INSTAGRAM REEL</span>
                  </span>
                </div>

                {/* Float Controls Layer always present */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col text-left">
                  <div className="flex items-center justify-between items-end mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[8px] font-extrabold text-white bg-[#00e5bc] text-zinc-950 px-1.5 py-0.5 rounded tracking-widest uppercase">
                        IPHONE + AI
                      </span>
                      <span className="font-mono text-[8px] font-bold text-zinc-300 bg-black/60 px-1.5 py-0.5 border border-white/10 rounded tracking-wider">
                        REEL: DZhJkUz
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-white leading-tight mb-1">
                    No Studio. Just iPhone + AI
                  </h3>
                  <p className="text-zinc-300 text-[11px] font-light leading-relaxed mb-4">
                    Watch our viral high-end aesthetic cafe case study on Instagram. Created entirely on mobile with smart production techniques.
                  </p>
                  
                  {/* Mock player control dashboard */}
                  <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-[8px] text-zinc-400 font-bold uppercase tracking-wider">
                    <span>TAP TO PLAY</span>
                    <span>VIRAL REEL</span>
                    <span className="text-[#00e5bc] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#00e5bc]" /> 98% RETENTION RATE
                    </span>
                  </div>
                </div>

              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

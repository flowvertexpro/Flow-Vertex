import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Sparkles, User, MessageSquare, Mic, Flame, ShieldCheck } from "lucide-react";

export default function TalkingHead() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-microphone-talking-at-a-podcast-41710-large.mp4";
  const thumbnailUrl = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800";

  const keyfeatures = [
    { icon: Sparkles, label: "Zoom Loops", desc: "Subconscious frame scaling to prevent visual fatigue." },
    { icon: MessageSquare, label: "Kinetic Emojis", desc: "Dynamic graphic text mapping synchronized to speech." },
    { icon: Mic, label: "Voice Gate", desc: "Studio-grade vocal compression and clean ambient ducking." },
    { icon: Flame, label: "Retention Hook", desc: "Engineered first 3 seconds to spike average watch time." },
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
    <section id="talking-head" className="relative py-28 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Desc */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block self-start">
              Segment 01: Talking Head
            </span>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 mb-6 leading-tight">
              YOUR FACE. YOUR VOICE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5bc] to-[#00fa75]">OUR EDIT. VIRAL RESULT.</span>
            </h2>

            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
              We take your raw talking head footage and transform it into high-retention, binge-worthy reels that grow your personal brand fast. Features dynamic zooming, retention hooks, and custom animated kinetic subtitles.
            </p>

            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
              Click on the preview to the right to toggle the live active studio player. Observe how we sync dynamic pacing indicators with professional sound gating and color theory.
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
              <div 
                onClick={handlePlayToggle}
                className="block w-full h-full relative rounded-[22px] overflow-hidden bg-black z-10 cursor-pointer"
              >
                {/* Embedded Video Element */}
                <video
                  ref={videoRef}
                  src={videoUrl}
                  loop
                  muted={isMuted}
                  playsInline
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-40"}`}
                />

                {/* Thumbnail Image representing 1st Frame when paused */}
                {!isPlaying && (
                  <img
                    src={thumbnailUrl}
                    alt="Talking Head segment first frame"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                )}

                {/* Dark Vignette Overlay on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40 transition-opacity duration-300 pointer-events-none z-10" />

                {/* Vertical safe area margin lines mimicking video editor / camera frame overlays */}
                <div className="absolute inset-4 border border-white/[0.03] rounded-[18px] pointer-events-none z-15" />
                
                {/* Tech overlay info parameters */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[8px] text-zinc-400 font-bold z-20 tracking-widest select-none">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-zinc-500"}`} />
                    <span>REC: {isPlaying ? "TALKING_HEAD_LIVE" : "TALKING_HEAD_STBY"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#00e5bc]" />
                    <span>INFLUENCER SERIES</span>
                  </div>
                </div>

                {/* Middle Action Ring and play button indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-3">
                    <div className="w-16 h-16 rounded-full bg-white/95 border border-zinc-200 flex items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="w-6 h-6 fill-[#04342C] text-[#04342C] ml-1" />
                    </div>
                    
                    <span className="font-mono text-[10px] font-bold text-zinc-800 tracking-widest uppercase bg-white border border-zinc-200 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md max-w-[200px] text-center">
                      <span>ACTIVATE STUDIO</span>
                    </span>
                  </div>
                )}

                {/* Float Controls Layer always present */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col text-left">
                  <div className="flex items-center justify-between items-end mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[8px] font-extrabold text-white bg-[#04342C] px-1.5 py-0.5 rounded tracking-widest uppercase">
                        RETAINER GRADE
                      </span>
                      <span className="font-mono text-[8px] font-bold text-zinc-400 bg-black/50 px-1.5 py-0.5 border border-zinc-800 rounded tracking-wider">
                        SEC_ID: TH_41710
                      </span>
                    </div>

                    {/* Quick audio toggle */}
                    <button
                      onClick={handleMuteToggle}
                      className="p-2 rounded-full bg-black/60 text-white border border-white/10 hover:bg-black/80 transition-all cursor-pointer"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-[#00e5bc]" />}
                    </button>
                  </div>

                  <h3 className="font-display font-medium text-base text-white leading-tight mb-1">
                    Talking Head Optimization Setup
                  </h3>
                  <p className="text-zinc-350 text-[11px] font-light leading-relaxed mb-4">
                    Warm portrait grade calibrated for Rec.709 rendering spaces. Perfect for speaking coaches, founders, and content authorities.
                  </p>
                  
                  {/* Mock player control dashboard */}
                  <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider">
                    <span>LENGTH: 15S</span>
                    <span>FPS: 60.00</span>
                    <span className="text-[#00e5bc] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" /> 3.2M REACH POTENTIAL
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

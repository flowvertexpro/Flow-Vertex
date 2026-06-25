import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, FastForward, Info, Layers, Music, Film, Sliders, Scissors, ChevronRight } from "lucide-react";

interface TimelineTrack {
  id: string;
  name: string;
  type: "video" | "audio" | "vfx";
  color: string;
  borderColor: string;
  clips: {
    title: string;
    startPct: number;
    widthPct: number;
    colorClass: string;
  }[];
}

export default function TimelineShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [playheadPos, setPlayheadPos] = useState(25); // current percent position
  const [speed, setSpeed] = useState(1);

  // Animate the playhead smoothly
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPlayheadPos((prev) => {
        if (prev >= 92) return 10; // loop back to start area
        return prev + 0.18 * speed;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const tracks: TimelineTrack[] = [
    {
      id: "vtrack1",
      name: "V2 - VFX OVERLAYS",
      type: "vfx",
      color: "rgba(168, 85, 247, 0.08)",
      borderColor: "rgba(168, 85, 247, 0.45)",
      clips: [
        { title: "GLITCH_VFX_OVERLAY.mp4", startPct: 15, widthPct: 25, colorClass: "from-purple-950/20 to-purple-800/20 border-purple-500/40" },
        { title: "ANAMORPHIC_LIGHT_FLARE.mov", startPct: 65, widthPct: 22, colorClass: "from-pink-950/20 to-pink-800/20 border-pink-500/40" },
      ],
    },
    {
      id: "vtrack2",
      name: "V1 - MAIN FOOTAGE",
      type: "video",
      color: "rgba(56, 189, 248, 0.08)",
      borderColor: "rgba(56, 189, 248, 0.45)",
      clips: [
        { title: "01_AETHER_INTRO_RAW.mov", startPct: 10, widthPct: 32, colorClass: "from-sky-950/20 to-sky-800/20 border-sky-500/40" },
        { title: "02_CARS_MACRO_GRADE.mp2", startPct: 45, widthPct: 45, colorClass: "from-blue-950/20 to-blue-800/20 border-blue-500/40" },
      ],
    },
    {
      id: "atrack1",
      name: "A1 - SFX & REVERBS",
      type: "audio",
      color: "rgba(16, 185, 129, 0.06)",
      borderColor: "rgba(16, 185, 129, 0.35)",
      clips: [
        { title: "SFX_WHOOSH_CINEMATIC.wav", startPct: 10, widthPct: 18, colorClass: "from-emerald-950/20 to-emerald-800/20 border-emerald-500/40" },
        { title: "TRAILER_BOOM_IMPACT.wav", startPct: 52, widthPct: 20, colorClass: "from-emerald-950/20 to-emerald-800/20 border-emerald-500/40" },
      ],
    },
    {
      id: "atrack2",
      name: "A2 - MASTER STEREO",
      type: "audio",
      color: "rgba(16, 185, 129, 0.06)",
      borderColor: "rgba(16, 185, 129, 0.35)",
      clips: [
        { title: "B_THEME_RESONANCE.wav", startPct: 10, widthPct: 82, colorClass: "from-teal-950/20 to-teal-800/20 border-teal-500/40" },
      ],
    },
  ];

  // Procedural audio waveform graphic helper 
  const WaveformBarStack = ({ count = 28 }) => {
    return (
      <div className="flex items-end gap-[2px] h-6 opacity-60 self-center">
        {Array.from({ length: count }).map((_, i) => {
          const h = [20, 45, 10, 60, 90, 30, 80, 50, 95, 40, 70, 85, 60, 40, 75, 30, 65, 80, 20, 50, 15, 35, 10, 40, 60, 30, 50, 20][i % 28];
          return (
            <div
              key={i}
              className="w-[1.8px] bg-emerald-500/50 rounded-full transition-all duration-300"
              style={{ height: `${isPlaying ? Math.max(10, h * (0.8 + Math.sin(Date.now() * 0.01 + i) * 0.2)) : h}%` }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <section id="timeline-showcase" className="relative py-28 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,52,44,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#04342C]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
         {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">
              VISUAL WORKFLOW
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 leading-tight">
              Crafted Millisecond <br />
              By Millisecond.
            </h2>
          </div>
          <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm mt-4 md:mt-0 font-light leading-relaxed">
            Take a look behind the lens. Our surgical post-production pipeline combines advanced sound synthesis, multi-track nesting, and high-frequency keyframe choreography.
          </p>
        </div>

        {/* Video Editor Shell Console */}
        <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6 shadow-2xl relative text-white">
          
          {/* Bezel Top glowing neon accent line */}
          <div className="absolute top-0 inset-x-32 h-[1px] bg-gradient-to-r from-transparent via-[#00e5bc]/60 to-transparent" />

          {/* Editor Header Navigation/Tools */}
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-900 pb-4 mb-6 gap-4 text-left">
            <div className="flex items-center gap-3">
              {/* Fake red orange green close triggers */}
              <div className="flex items-center gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <span className="font-sans text-[10px] text-zinc-400 tracking-wider font-bold">
                TIMELINE // SEQ_SHOW_PRO_V3 [Aéther Horology Commercial Edit]
              </span>
            </div>

            {/* Playback Action panel buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors hover:bg-zinc-900 rounded border border-zinc-800 bg-zinc-900/30 font-sans text-[10px] flex items-center gap-1.5 cursor-pointer"
                title={isPlaying ? "Pause Timeline" : "Play Timeline"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#00e5bc]" />}
                <span className="hidden sm:inline font-bold uppercase">{isPlaying ? "Pause" : "Play"}</span>
              </button>



              <div className="hidden md:flex items-center gap-1 bg-zinc-900/20 border border-zinc-900 px-3 py-1 rounded font-sans text-[10px] text-zinc-400">
                <span className="text-zinc-600 font-bold">TC</span>
                <span className="text-[#00e5bc] font-black">
                  00:03:{Math.floor((playheadPos / 100) * 59).toString().padStart(2, "0")}:14
                </span>
              </div>
            </div>
          </div>

          {/* Active Tracks board */}
          <div className="relative border border-zinc-900 px-1 py-4 sm:px-3 rounded-lg overflow-hidden bg-black/60">
            
            {/* Realtime vertical scrolling playhead needle line */}
            <div
              className="absolute top-0 bottom-0 z-30 transition-all duration-300 pointer-events-none"
              style={{
                left: `${playheadPos}%`,
                width: "1.2px",
                background: "linear-gradient(to bottom, #00e5bc, rgba(0, 229, 188, 0.4) 60%, transparent)"
              }}
            >
              {/* Numeric indicator tooltip */}
              <div className="absolute -top-1 -left-16 text-[9px] font-sans font-bold text-zinc-950 bg-[#00e5bc] px-1.5 py-0.5 rounded leading-none select-none shadow">
                00:03:{Math.floor((playheadPos / 100) * 59).toString().padStart(2, "0")}
              </div>
              
              {/* Playhead arrow head tag */}
              <div className="w-0 h-0 border-t-6 border-t-[#00e5bc] border-l-4 border-l-transparent border-r-4 border-r-transparent absolute top-5 -left-1" />
            </div>

            {/* Time code bar rulers along the top */}
            <div className="flex h-6 border-b border-zinc-900 pb-2 relative mb-3">
              {Array.from({ length: 8 }).map((_, idx) => {
                const tickPct = 10 + idx * 11.5;
                return (
                  <div
                    key={idx}
                    className="absolute -bottom-[1px] font-sans text-[8px] text-zinc-500 font-bold border-l border-zinc-800 h-2.5"
                    style={{ left: `${tickPct}%` }}
                  >
                    <span className="pl-1.5 select-none text-[8px]">00:03:{10 + idx * 5}f</span>
                  </div>
                );
              })}
            </div>

            {/* Render lanes with nested timeline chips */}
            <div className="flex flex-col gap-3 min-w-[500px]">
              {tracks.map((track) => (
                <div key={track.id} className="relative flex items-center h-14 w-full text-left">
                  
                  {/* Track info title block on the far left */}
                  <div className="w-32 bg-zinc-950/90 border border-zinc-900/80 rounded-md px-3 py-1 flex flex-col justify-center h-full mr-3 z-10 text-[9px] font-bold font-sans text-zinc-400 shadow-lg">
                    <span className="tracking-wider uppercase text-zinc-500 mb-0.5">{track.name}</span>
                    <span className="text-[8px] text-zinc-600 font-normal">LOCK • CHANNEL</span>
                  </div>

                  {/* Main lane rail background */}
                  <div className="flex-1 bg-zinc-950/40 border border-zinc-900/80 rounded-md h-full relative overflow-hidden flex items-center shadow-inner">
                    
                    {/* Render sub track clips */}
                    {track.clips.map((clip, cidx) => {
                      return (
                        <div
                          key={cidx}
                          className={`absolute h-[88%] rounded border-l-2 py-1.5 px-3 select-none flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300 hover:brightness-105 bg-gradient-to-r ${clip.colorClass}`}
                          style={{
                            left: `${clip.startPct}%`,
                            width: `${clip.widthPct}%`,
                          }}
                        >
                          <div className="flex items-center justify-between pointer-events-none gap-2">
                            <span className="font-sans text-[8px] sm:text-[9px] text-[#fafafa] font-bold tracking-tight truncate">
                              {clip.title}
                            </span>
                          </div>

                          {/* Render custom waveforms for audio clips */}
                          {track.type === "audio" && (
                            <WaveformBarStack count={15} />
                          )}
                          
                          {track.type === "vfx" && (
                            <span className="text-[7px] font-sans text-purple-400 font-bold leading-none select-none tracking-widest uppercase">
                              REZZ_VFX
                            </span>
                          )}
                        </div>
                      );
                    })}

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* Subtext info indicators */}
          <div className="flex flex-wrap items-center justify-between text-zinc-500 font-sans text-[9px] mt-4 pt-4 border-t border-zinc-900 text-left gap-2.5">
            <span className="flex items-center gap-1">
              <Info className="w-3 h-3 text-[#00e5bc]" />
              Hover clips to preview speed adjustments. Current active render: A-Grade RED Cinema.
            </span>
            <span className="font-bold text-[#00e5bc]">
              ● PRO TIMELINE INTERACTIVES ACTIVE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Sparkles, Monitor, Award, Layers, Hash, Instagram, ExternalLink, ChevronDown, CheckCircle2, Sliders } from "lucide-react";

interface Segment {
  id: string;
  name: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  duration: string;
  client: string;
  description: string;
  colorGrade: string;
  audioSpec: string;
  metric: string;
}

export default function Typography() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSegmentId, setActiveSegmentId] = useState("typography");
  const [showDrawer, setShowDrawer] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const instagramUrl = "https://www.instagram.com/flowvertexsent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const segments: Segment[] = [
    {
      id: "typography",
      name: "Bespoke Kinetic Typography Reel",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-matrix-style-falling-green-code-32731-large.mp4",
      thumbnailUrl: "https://lh3.googleusercontent.com/d/1jxn5FgO-5Dq67__hHo1oBF28o1Nnd2_V",
      category: "KINETIC MOTION",
      duration: "12s",
      client: "Flow Vertex Original",
      description: "Our core typography systems are built frame-by-frame with precise micro-spacing, luminous gradient highlights, and syllable-matched text triggers designed to hold viewports indefinitely.",
      colorGrade: "Luminous Cyberpunk Emerald & Matte Dark Gray",
      audioSpec: "Sub-harmonic Impact Textures & High-frequency Swooshes",
      metric: "98.4% Average Completion Ratio"
    },
    {
      id: "talking-head",
      name: "Talking Head Optimization Hook",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-microphone-talking-at-a-podcast-41710-large.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
      category: "TALKING HEAD",
      duration: "15s",
      client: "Founder Series",
      description: "Auto captions with kinetic sizing, dynamic frame zoom loops, and noise gating calibrated for direct consumer confidence.",
      colorGrade: "Warm Skin-Tone Preservation (Rec.709)",
      audioSpec: "Bilateral Vocal Compressing & Gated Expansion",
      metric: "3.2M+ Viral Reach Target"
    },
    {
      id: "showroom",
      name: "Luxury Automotive Showroom Spec",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-red-sports-car-parked-outside-a-mansion-42797-large.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
      category: "PRODUCT SPEC ADS",
      duration: "20s",
      client: "Apex Motors",
      description: "Speed ramping with custom lens reflections and sound-gated ignition revs engineered to spark premium conversions.",
      colorGrade: "Anamorphic Teal-Crimson Matte Signature",
      audioSpec: "Custom Mechanical Foley & Exhaust Bass Riser",
      metric: "+42% Conversion Uplift"
    },
    {
      id: "cafe",
      name: "Cozy Destination Brand Trailer",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-into-a-cup-of-coffee-31853-large.mp4",
      thumbnailUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
      category: "BRANDED PROMOTION",
      duration: "30s",
      client: "BOC Cafe Group",
      description: "Cozy warm matte styling with ambient acoustic jazz foley designed to turn local footfall into digital brand loyalty.",
      colorGrade: "Organic Creamy Espresso Matte Wash",
      audioSpec: "Soft Jazz Mix & Real Pouring Foley Elements",
      metric: "94% Audience Retention Metric"
    }
  ];

  const currentSegment = segments.find(s => s.id === activeSegmentId) || segments[0];

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log("Playback error:", err));
      }
      setIsPlaying(!isPlaying);
      setShowDrawer(true); // Automatically expand specifications under the player on play
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const selectSegment = (id: string) => {
    setActiveSegmentId(id);
    setIsPlaying(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Autoplay segment failed:", err));
      }
    }, 50);
  };

  const keyfeatures = [
    { icon: Hash, label: "Kinetic Alignment", desc: "Syllable-precise custom timing mapping." },
    { icon: Monitor, label: "Studio-Grade Gradients", desc: "Luminous dark-mode text style matching." },
    { icon: Award, label: "High retention hook", desc: "Engineered to capture viewport interest in <1s." },
    { icon: Layers, label: "Bespoke sound design", desc: "Dynamic impact textures and synthetic swooshes." },
  ];

  return (
    <section id="typography" className="relative py-28 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column Desc */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block self-start">
              Branded Kinetic Motion
            </span>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5bc] to-[#00fa75]">TYPOGRAPHY REELS</span>
            </h2>

            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
              Our typography systems are not generic templates. We build custom kinetic text models, calibrated for maximum retention metrics on vertical screen layouts (reels, shorts, tiktok format).
            </p>

            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
              Click the **Activate Studio** frame to open our direct in-app interactive reel player. You can seamlessly switch between all 4 creative segments right below the screen.
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

          {/* Right Column: Live Interactive Reel Showcase Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-lg aspect-[9/16] rounded-3xl p-1.5 bg-white border border-zinc-200 overflow-hidden shadow-lg group">
              
              {/* Kinetic edge light bezel highlight */}
              <div className="absolute top-0 inset-x-12 h-[1.8px] bg-gradient-to-r from-transparent via-[#04342C]/40 to-transparent z-20" />
              <div className="absolute bottom-0 inset-x-12 h-[1.8px] bg-gradient-to-r from-transparent via-[#04342C]/40 to-transparent z-20" />

              {/* Clickable box container */}
              <div 
                onClick={handlePlayToggle}
                className="block w-full h-full relative rounded-[22px] overflow-hidden bg-black z-10 cursor-pointer"
              >
                {/* Embedded Video Player */}
                <video
                  ref={videoRef}
                  src={currentSegment.videoUrl}
                  loop
                  muted={isMuted}
                  playsInline
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-40"}`}
                />

                {/* Thumbnail Image representing 1st Frame when paused */}
                {!isPlaying && (
                  <img
                    src={currentSegment.thumbnailUrl}
                    alt={`${currentSegment.name} Thumbnail Preview`}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                )}

                {/* Dark Vignette Overlay on the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40 transition-opacity duration-300 pointer-events-none z-10" />

                {/* Vertical safe area margin lines */}
                <div className="absolute inset-4 border border-white/[0.03] rounded-[18px] pointer-events-none z-15" />
                
                {/* Tech overlay info parameters */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[8px] text-zinc-400 font-bold z-20 tracking-widest select-none">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-zinc-500"}`} />
                    <span>REC: {isPlaying ? "ACTIVE_STUDIO" : "STUDIO_STANDBY"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#00e5bc]" />
                    <span>{currentSegment.category}</span>
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

                {/* Bottom Video metadata layout */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col text-left">
                  <div className="flex items-center justify-between items-end mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[8px] font-extrabold text-white bg-[#04342C] px-1.5 py-0.5 rounded tracking-widest uppercase">
                        {currentSegment.client.toUpperCase()}
                      </span>
                      <span className="font-mono text-[8px] font-bold text-zinc-400 bg-black/50 px-1.5 py-0.5 border border-zinc-800 rounded tracking-wider">
                        SEG_ID: {currentSegment.id.toUpperCase()}
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
                    {currentSegment.name}
                  </h3>
                  <p className="text-zinc-300 text-[11px] font-light leading-relaxed mb-4">
                    {currentSegment.description}
                  </p>
                  
                  {/* Mock player control dashboard */}
                  <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider">
                    <span>DURATION: {currentSegment.duration}</span>
                    <span>FPS: 60.00</span>
                    <span className="text-[#00e5bc] font-bold">{currentSegment.metric}</span>
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

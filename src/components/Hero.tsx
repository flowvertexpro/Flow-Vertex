import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, Star, ChevronRight, Play, Pause, Volume2, VolumeX, Upload, RefreshCw } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState("https://assets.mixkit.co/videos/preview/mixkit-lens-of-a-camera-with-reflections-and-flares-34406-large.mp4");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<"intro" | "player">("intro");
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Restart video playback when source changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.log("Autoplay blocked or load issue: ", e);
        setIsPlaying(false);
      });
    }
  }, [videoSrc]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const handleMuteUnmute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsMuted(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsMuted(false);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const brandLogos = [
    { name: "district", label: "District by Zomato" },
    { name: "trippyway", label: "Trippy Way" },
    { name: "rapido", label: "Rapido" },
    { name: "nutrabay", label: "Nutrabay" },
    { name: "cashfree", label: "Cashfree Payments" },
    { name: "kunsquad", label: "Kunsquad" },
  ];

  const renderLogo = (lg: typeof brandLogos[0], i: number, suffix: string) => {
    if (lg.name === "district") {
      return (
        <div key={`${lg.name}-${i}-${suffix}`} className="flex items-center select-none group hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0">
          {/* district BY ZOMATO SVG */}
          <svg className="h-8 w-auto" viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Chunky lowercase district */}
            <text x="5" y="28" className="font-display" fontStyle="normal" fontWeight="900" fontSize="27" letterSpacing="-0.02em" fill="#ffffff">district</text>
            {/* Subtitle: BY ZOMATO */}
            <text x="7" y="44" className="font-sans" fontWeight="800" fontSize="9.5" letterSpacing="0.28em" fill="#00e5bc">BY ZOMATO</text>
          </svg>
        </div>
      );
    }
    if (lg.name === "trippyway") {
      return (
        <div key={`${lg.name}-${i}-${suffix}`} className="flex items-center gap-2.5 select-none group hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0">
          {/* Custom Stylized SVG Logo of Trippy Way */}
          <svg className="h-7 w-auto" viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left Text: Trippy */}
            <text x="5" y="34" className="font-display font-black text-[23px] tracking-tight" fill="#00e5bc">
              Trippy
            </text>
            
            {/* Middle Icon: Stylized Top Hat with rotation */}
            <g transform="translate(86, 4) rotate(-8 18 18)">
              {/* Hat Crown */}
              <path d="M 10,24 L 7,8 C 7,6.5 8,5 10,5 L 26,5 C 28,5 29,6.5 29,8 L 26,24 Z" fill="#8b5cf6" stroke="#a855f7" strokeWidth="1" />
              {/* Hat Ribbon */}
              <path d="M 9.5,21 L 26.5,21 L 26,24 L 10,24 Z" fill="#00e5bc" />
              {/* Hat Brim */}
              <path d="M 3,24 C 3,23 5,23 7,23 L 29,23 C 31,23 33,23 33,24 C 33,25.5 31,26 29,26 L 7,26 C 5,26 3,25.5 3,24 Z" fill="#8b5cf6" stroke="#a855f7" strokeWidth="0.5" />
              {/* Trippy flourish feather/ribbon */}
              <path d="M 24,12 C 28,10 30,13 28,17 C 26,20 23,18 25,23" stroke="#00e5bc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Right Text: Way */}
            <text x="124" y="34" className="font-display font-black text-[23px] tracking-tight" fill="#00e5bc">
              Way
            </text>
          </svg>
        </div>
      );
    }
    if (lg.name === "rapido") {
      return (
        <div key={`${lg.name}-${i}-${suffix}`} className="flex items-center select-none group hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0">
          {/* Rapido Custom SVG Logo */}
          <svg className="h-9 w-auto" viewBox="0 0 115 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Yellow Scooter positioned above the "pi" area */}
            <g transform="translate(32, 2)">
              {/* Scooter Body Shield */}
              <path d="M 2,16 C 2,12 5,10 9,10 L 15,10 C 19,10 22,12 22,16 L 22,23 L 2,23 Z" fill="#facc15" />
              {/* Headlight */}
              <circle cx="12" cy="7" r="3" fill="#facc15" />
              {/* Handlebars */}
              <path d="M 4,8 L 8,8" stroke="#facc15" strokeWidth="1.8" strokeLinecap="round" />
              {/* Handlebar Right */}
              <path d="M 16,8 L 20,8" stroke="#facc15" strokeWidth="1.8" strokeLinecap="round" />
              {/* Mirrors Left */}
              <line x1="7" y1="7" x2="3" y2="3" stroke="#facc15" strokeWidth="1" />
              <circle cx="2.5" cy="2.5" r="1.5" fill="#facc15" />
              {/* Mirrors Right */}
              <line x1="17" y1="7" x2="21" y2="3" stroke="#facc15" strokeWidth="1" />
              <circle cx="21.5" cy="2.5" r="1.5" fill="#facc15" />
            </g>

            {/* Lowercase sleek "rapido" wordmark */}
            <text x="5" y="44" className="font-sans" fontWeight="900" fontSize="22" letterSpacing="-0.04em" fill="#ffffff">rapido</text>
          </svg>
        </div>
      );
    }
    if (lg.name === "nutrabay") {
      return (
        <div key={`${lg.name}-${i}-${suffix}`} className="flex items-center select-none group hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0">
          {/* Nutrabay bold italic style */}
          <svg className="h-6 w-auto" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="28" className="font-display" fontStyle="italic" fontWeight="900" fontSize="23" letterSpacing="0.04em" fill="#ffffff">NUTRABAY</text>
          </svg>
        </div>
      );
    }
    if (lg.name === "cashfree") {
      return (
        <div key={`${lg.name}-${i}-${suffix}`} className="flex items-center select-none group hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0">
          {/* Cashfree Payments */}
          <svg className="h-8 w-auto" viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cashfree overlapping curved F icon */}
            <g transform="translate(2, 4)">
              <path d="M 4,28 L 4,18 C 4,15 6,13 9,13 L 22,13" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 10,20 L 21,20" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 10,28 L 10,20" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            {/* Text */}
            <text x="32" y="20" className="font-sans" fontWeight="700" fontSize="14" fill="#ffffff">Cashfree</text>
            <text x="32" y="32" className="font-sans" fontWeight="500" fontSize="9" letterSpacing="0.08em" fill="#a1a1aa">Payments</text>
          </svg>
        </div>
      );
    }
    if (lg.name === "kunsquad") {
      return (
        <div key={`${lg.name}-${i}-${suffix}`} className="flex items-center select-none group hover:opacity-100 transition-opacity duration-300 cursor-default shrink-0">
          {/* Kunsquad */}
          <svg className="h-7 w-auto" viewBox="0 0 140 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rounded border */}
            <rect x="2" y="5" width="136" height="34" rx="5" ry="5" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            {/* Text */}
            <text x="70" y="27" textAnchor="middle" className="font-sans" fontWeight="850" fontSize="15" letterSpacing="0.18em" fill="#ffffff">KUNSQUAD</text>
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-36 pb-20 overflow-hidden bg-transparent"
    >
      {/* Absolute Simple Airy Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-zinc-100/50 blur-[120px] opacity-60" />
      </div>

      {/* Content Container - Beautifully bordered minimalist design card */}
      <div className="relative max-w-5xl mx-auto px-6 w-full z-10 flex flex-col items-center">
        
        {/* Headline & Subheadline */}
        <div className="max-w-4xl text-center flex flex-col items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-zinc-900 text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] font-display"
          >
            Where Vision Meets Motion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-zinc-500 font-sans text-xs sm:text-sm md:text-base font-light max-w-2xl mt-6 leading-relaxed"
          >
            Premium editing, motion graphics, brand storytelling, and content production designed to capture attention and drive results.
          </motion.p>
        </div>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {/* Primary Solid Dark Button */}
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-white font-bold text-xs bg-zinc-900 hover:bg-zinc-800 hover:scale-103 transition-all duration-300 shadow-sm select-none uppercase tracking-widest"
          >
            Get A Quote
          </a>

          {/* Secondary Semi-transparent Outlined Button */}
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full text-zinc-700 font-bold text-xs bg-white border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 hover:scale-103 transition-all duration-300 select-none uppercase tracking-widest shadow-sm"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Large featured Premium Mock-up Video Screen exactly like in photographic reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`relative w-full aspect-[16/9] max-w-4xl rounded-2xl p-1 bg-white border transition-all duration-300 overflow-hidden shadow-lg group/player ${
            isDragging ? "border-[#04342C] scale-[1.01] shadow-md" : "border-zinc-200/80"
          }`}
          id="featured-video-showcase-frame"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {/* Bezel Top line highlight */}
          <div className="absolute top-0 inset-x-20 h-[1.8px] bg-gradient-to-r from-transparent via-[#04342C]/40 to-transparent z-25" />

          {/* Premium Modern Tab Selector Pill - switches between Who we are and Live Player */}
          <div className="absolute top-4 right-4 z-40 flex items-center bg-black/75 backdrop-blur-md rounded-full border border-white/10 p-[3px] text-[10px] font-sans font-bold shadow-lg">
            <button
              onClick={(e) => { e.stopPropagation(); setActiveTab("intro"); }}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeTab === "intro"
                  ? "bg-[#04342C] text-[#00e5bc] shadow-sm font-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Who We Are
            </button>
          </div>

          {/* Innermost visual representing actual video layer */}
          <div className="w-full h-full rounded-xl overflow-hidden bg-black relative">
            
            {activeTab === "intro" ? (
              /* WHO IS FLOW VERTEX SCREEN - matches attached reference video exactly */
              <div 
                className="w-full h-full bg-[#04342C] bg-gradient-to-b from-[#04342C] to-[#02231e] relative flex flex-col items-center justify-between p-6 sm:p-8 md:p-10 select-none overflow-hidden"
                onClick={() => setActiveTab("player")}
                title="Click to view live player"
              >
                {/* Visual grid line overlay for cinematic tech atmosphere */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-40 z-0" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#021815]/80 pointer-events-none z-0" />
                
                {/* Ambient glowing radial lights */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00e5bc]/5 rounded-full blur-[100px] pointer-events-none z-0" />
                <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#00e5bc]/8 rounded-full blur-[70px] pointer-events-none z-0" />

                {/* Left/Center Header Info matching the video */}
                <div className="w-full flex flex-col items-center text-center z-10 max-w-xl mt-3 sm:mt-5 md:mt-8">
                  <motion.h3 
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black font-sans tracking-tight leading-none mb-3 sm:mb-4"
                  >
                    Who is Flow Vertex?
                  </motion.h3>
                  
                  {/* Staggered progressive typewriter animation */}
                  <motion.p 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-emerald-100/90 text-[10px] sm:text-xs md:text-sm font-light leading-relaxed max-w-lg mx-auto px-4"
                  >
                    {"We are a video editing & social media agency that turns brands into viral content – to creatively build a visual identity your business deserves.".split(" ").map((word, wIdx) => (
                      <motion.span 
                        key={wIdx} 
                        variants={wordVariants} 
                        className="inline-block mr-[4px] sm:mr-[5px]"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </div>

                {/* Sleek CSS Laptop Mockup showing moving timeline workspace */}
                <motion.div 
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="relative w-44 sm:w-56 md:w-72 aspect-[16/10] flex flex-col items-center mt-2 z-10"
                >
                  {/* Laptop Screen outer bezel */}
                  <div className="w-full h-[85%] rounded-t-xl bg-zinc-800 border-t border-x border-zinc-700/60 p-1 sm:p-1.5 shadow-2xl flex flex-col relative">
                    {/* Tiny web-camera point at the top */}
                    <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-900" />
                    
                    {/* Screen Inner Display */}
                    <div className="w-full h-full bg-[#08080c] rounded-md relative overflow-hidden flex flex-col border border-zinc-900">
                      
                      {/* Mini Timeline Interface Header */}
                      <div className="h-2 sm:h-3 border-b border-zinc-900/80 bg-zinc-950 flex items-center justify-between px-1.5 select-none">
                        <div className="flex items-center gap-[2px] sm:gap-1">
                          <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-red-500/80" />
                          <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-yellow-500/80" />
                          <span className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[3.5px] sm:text-[5px] font-mono text-zinc-500 font-bold uppercase tracking-widest">
                          SEQ_SHOW_PRO_V3
                        </span>
                        <div className="w-1.5 sm:w-3 h-[2px] bg-zinc-800 rounded-sm" />
                      </div>

                      {/* Timeline lanes representation inside laptop */}
                      <div className="flex-1 bg-zinc-950/80 p-1 sm:p-1.5 flex flex-col justify-between relative overflow-hidden">
                        
                        {/* Audio track Waveform dynamic simulation */}
                        <div className="flex items-end justify-center gap-[1px] sm:gap-[1.5px] h-6 sm:h-8 px-1 mt-0.5">
                          {Array.from({ length: 28 }).map((_, idx) => {
                            const waveVal = Math.abs(Math.sin(idx * 0.4 + 1.2)) * 100;
                            return (
                              <motion.div
                                key={idx}
                                animate={{ height: [`${waveVal * 0.25}%`, `${waveVal * 0.85}%`, `${waveVal * 0.25}%`] }}
                                transition={{ duration: 1 + (idx % 4) * 0.15, repeat: Infinity, ease: "easeInOut" }}
                                className="w-[1px] sm:w-[1.5px] bg-[#00e5bc]/85 rounded-t-full"
                              />
                            );
                          })}
                        </div>

                        {/* Miniature track clips blocks */}
                        <div className="space-y-[2px] sm:space-y-[3px] mb-0.5">
                          {/* Track Row 1 */}
                          <div className="h-2 sm:h-2.5 bg-zinc-900/70 border border-zinc-900/40 rounded p-[1px] relative overflow-hidden flex items-center gap-1">
                            {/* Scanning neon playhead bar */}
                            <motion.div 
                              animate={{ left: ["4%", "96%"] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                              className="absolute top-0 bottom-0 w-[0.8px] bg-[#00e5bc] z-10 shadow-[0_0_6px_#00e5bc]"
                            />
                            <div className="w-[45%] h-full bg-purple-500/25 border border-purple-500/35 rounded-sm" />
                            <div className="w-[30%] h-full bg-[#00e5bc]/25 border border-[#00e5bc]/35 rounded-sm" />
                          </div>
                          
                          {/* Track Row 2 */}
                          <div className="h-2 sm:h-2.5 bg-zinc-900/70 border border-zinc-900/40 rounded p-[1px] relative overflow-hidden flex items-center gap-1">
                            {/* Scanning playhead synced */}
                            <motion.div 
                              animate={{ left: ["4%", "96%"] }}
                              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                              className="absolute top-0 bottom-0 w-[0.8px] bg-[#00e5bc] z-10"
                            />
                            <div className="w-[15%] h-full bg-blue-500/20 border border-blue-500/30 rounded-sm" />
                            <div className="w-[50%] h-full bg-emerald-500/25 border border-emerald-500/35 rounded-sm animate-pulse" />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Laptop Base keyboard deck */}
                  <div className="w-[114%] h-[10%] bg-zinc-700/90 rounded-b-lg border-b-[2px] border-zinc-600/90 relative shadow-md flex justify-center">
                    {/* Dark trackpad groove */}
                    <div className="w-[20%] h-[55%] bg-zinc-850/70 border border-zinc-700/40 rounded-t-sm mt-[1px]" />
                  </div>
                  
                  {/* Subtle shadow below laptop */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[112%] h-2.5 bg-black/50 blur-[7px] rounded-full pointer-events-none" />
                </motion.div>


              </div>
            ) : (
              /* ACTIVE VIDEO PLAYER VIEW (The advanced interactive player) */
              <>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-cover opacity-90"
                  onClick={handlePlayPause}
                />

                {/* Dark gradient gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40 pointer-events-none z-10" />

                {/* Drag & Drop Overlay */}
                {isDragging && (
                  <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center border-2 border-dashed border-[#00e5bc]/40 rounded-xl z-20">
                    <Upload className="w-10 h-10 text-[#00e5bc] animate-bounce mb-3" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-widest">
                      DROP VIDEO TO TRANSMIT
                    </span>
                    <span className="font-sans text-[10px] text-zinc-500 mt-1">
                      Supports MP4, WEBM, and MOV formats
                    </span>
                  </div>
                )}

                {/* Large Center Play State Overlay (shown if video is manually paused) */}
                {!isPlaying && !isDragging && (
                  <div className="absolute inset-0 flex items-center justify-center z-15">
                    <button
                      onClick={handlePlayPause}
                      className="w-16 h-16 rounded-full bg-[#04342C] text-[#00e5bc] border border-[#00e5bc]/30 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 shadow-[#04342C]/40"
                      aria-label="Play video showcase"
                    >
                      <Play className="w-6 h-6 fill-[#00e5bc] ml-1 text-[#00e5bc]" />
                    </button>
                  </div>
                )}

                {/* Custom Premium Bottom Control Toolbar Panel -- slides up on player hover */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 flex flex-col gap-3 transition-opacity duration-300 opacity-100 sm:opacity-0 sm:group-hover/player:opacity-100 z-20">
                  
                  {/* Timeline Seek Area */}
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00e5bc] focus:outline-none"
                      style={{
                        background: `linear-gradient(to right, #00e5bc 0%, #00e5bc ${(currentTime / (duration || 100)) * 100}%, #27272a ${(currentTime / (duration || 100)) * 100}%, #27272a 100%)`
                      }}
                    />
                  </div>

                  {/* Bottom Row controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* PlayPause Toggle */}
                      <button
                        onClick={handlePlayPause}
                        className="text-white hover:text-[#00e5bc] transition-colors p-1 cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>

                      {/* Volume Toggle */}
                      <button
                        onClick={handleMuteUnmute}
                        className="text-white hover:text-[#00e5bc] transition-colors p-1 cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-zinc-400" /> : <Volume2 className="w-4 h-4 text-[#00e5bc]" />}
                      </button>

                      {/* Time Indicator */}
                      <span className="font-mono text-[10px] text-zinc-400 font-bold tracking-wider select-none">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Drag-Drop and Upload Prompt Label */}
                      <span className="hidden lg:inline-block font-mono text-[9px] text-zinc-500 font-extrabold uppercase tracking-widest">
                        Drag & Drop video file or upload raw files to preview
                      </span>

                      {/* Direct upload selector */}
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#04342C]/40 border border-[#00e5bc]/20 rounded-lg font-mono text-[9px] text-[#00e5bc] hover:text-white hover:bg-[#04342C]/80 hover:border-[#00e5bc]/50 transition-all cursor-pointer"
                      >
                        <Upload className="w-3 h-3 text-[#00e5bc]" />
                        <span>PREVIEW YOUR EDIT</span>
                      </button>

                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="video/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                </div>
              </>
            )}

          </div>
        </motion.div>

        {/* Brands worked with ribbon section */}
        <div className="w-full mt-24 text-center">
          <p className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] text-zinc-500 uppercase mb-8 select-none">
            BRANDS WE'VE WORKED WITH
          </p>

          <div className="relative w-full overflow-hidden opacity-85 py-2">
            {/* Left & Right gradient overlays to blend seamlessly with the dark green-teal theme */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#04342C] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#04342C] to-transparent z-10 pointer-events-none" />

            {/* Sliding Track with duplicate sets of logos for seamless infinite looping */}
            <motion.div
              className="flex items-center gap-16 sm:gap-24 w-max px-8"
              animate={{ x: [0, "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {/* Set 1 */}
              <div className="flex items-center gap-16 sm:gap-24">
                {brandLogos.map((lg, i) => renderLogo(lg, i, "first"))}
              </div>
              {/* Set 2 (Identical duplicate for seamless transition) */}
              <div className="flex items-center gap-16 sm:gap-24">
                {brandLogos.map((lg, i) => renderLogo(lg, i, "second"))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Accent separator line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-200" />
    </section>
  );
}

import React from "react";
import { Play, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#timeline-showcase" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer id="footer" className="bg-white text-zinc-500 py-16 border-t border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-12">
        
        {/* Row 1: Logo & Nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-100">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#04342C]/10 border border-[#04342C]/20 flex items-center justify-center p-[1px]">
              <Play className="w-3.5 h-3.5 text-[#04342C] fill-[#04342C]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-black tracking-wider text-zinc-900 text-sm leading-tight">
                FLOW VERTEX
              </span>
              <span className="font-mono text-[8px] text-zinc-400 tracking-[0.2em] font-bold">
                POST-PRODUCTION STUDIO
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-zinc-500 hover:text-[#04342C] transition-colors block"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action: To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 hover:border-[#04342C] text-zinc-500 hover:text-[#04342C] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
          >
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Row 2: Copyright policies */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] font-mono gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-400">
            <span>© 2026 Flow Vertex. All Rights Reserved.</span>
            <span>•</span>
            <a href="#privacy" className="hover:text-zinc-650 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#license" className="hover:text-zinc-650 transition-colors">Licensing</a>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-400 font-bold">
            <span>STUDIO RESOLUTION:</span>
            <span className="text-zinc-800">ULTRA-PREMIUM RETINA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

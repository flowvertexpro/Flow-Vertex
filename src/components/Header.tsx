import { useState, useEffect } from "react";
import { Menu, X, Play } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#timeline-showcase" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo container: Flow Vertex Premium Logo */}
          <a href="#" className="flex items-center gap-2.5 group" id="logo-flow-vertex">
            <div className="relative w-7 h-7 rounded-lg bg-[#04342C] flex items-center justify-center p-[1px] shadow-[0_2px_10px_rgba(4,52,44,0.15)] transition-transform duration-500 group-hover:scale-105">
              <Play className="w-3.5 h-3.5 text-[#00e5bc] fill-[#00e5bc] ml-0.5" />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-lg tracking-tighter text-white">
                  flow
                </span>
                <span className="font-display font-light text-lg tracking-tighter text-[#00e5bc]">
                  vertex
                </span>
              </div>
              <span className="font-mono text-[7px] text-zinc-400 tracking-[0.25em] font-extrabold uppercase -mt-1 leading-none">
                CREATIVE STUDIO
              </span>
            </div>
          </a>

          {/* Centered Desktop Nav Menu */}
          <nav className="hidden md:flex items-center gap-8 bg-zinc-950/60 px-7 py-2.5 rounded-full border border-white/10 shadow-sm backdrop-blur-sm">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-sans font-bold uppercase tracking-widest text-zinc-300 hover:text-[#00e5bc] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Pill Outlined Book A Call / Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="relative px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-widest text-zinc-950 hover:scale-105 bg-[#00e5bc] hover:bg-[#00ccaa] transition-all duration-300 uppercase shadow-sm"
            >
              Book A Call
            </a>
          </div>

          {/* Mobile Menu Action Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-[#00e5bc] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#02201b]/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 shadow-2xl z-40">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-medium text-white hover:text-[#00e5bc] transition-colors py-1 border-b border-white/5 text-left"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-full font-sans text-xs font-bold tracking-widest text-zinc-950 bg-[#00e5bc] hover:bg-[#00ccaa] transition-colors uppercase shadow-md shadow-[#00e5bc]/20"
            >
              Book A Call
            </a>
          </div>
        )}
      </header>
    </>
  );
}

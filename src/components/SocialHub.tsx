import React from "react";
import { motion } from "motion/react";
import { Instagram, Youtube, Linkedin, Film, Send, ArrowUpRight } from "lucide-react";

export default function SocialHub() {
  const socials = [
    {
      name: "Instagram",
      handle: "@flowvertexsent",
      icon: Instagram,
      color: "hover:border-pink-500/40 hover:text-pink-400 group-hover:glow-blue",
      href: "https://www.instagram.com/flowvertexsent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "YouTube",
      handle: "Flow Vertex Cinema",
      icon: Youtube,
      color: "hover:border-red-500/40 hover:text-red-400",
      href: "#",
    },
    {
      name: "LinkedIn",
      handle: "Flow Vertex Studio",
      icon: Linkedin,
      color: "hover:border-blue-500/40 hover:text-blue-400",
      href: "#",
    },
    {
      name: "Behance",
      handle: "flow_vertex",
      icon: Film, // Film acts as Behance portfolio representation beautifully
      color: "hover:border-[#00ff00]/40 hover:text-[#00ff00]",
      href: "#",
    },
  ];

  return (
    <section id="social-hub" className="relative py-24 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">
            STAY CONNECTED
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-zinc-900 mb-4">
            Follow Our Creative Feed
          </h2>
          <p className="text-zinc-550 font-sans text-xs sm:text-sm font-light">
            We share motion breakdowns, raw overlays, premium presets, and behind-the-scenes post-production grading tutorials.
          </p>
        </div>

        {/* Social Platforms Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group border border-zinc-200 p-6 rounded-2xl bg-white hover:shadow-md transition-all duration-300 text-left flex items-center justify-between ${platform.color}`}
              >
                <div className="flex items-center gap-4">
                  {/* Icon container */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-current group-hover:border-current/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors">
                      {platform.name}
                    </h3>
                    <p className="font-mono text-[10px] text-zinc-400">
                      {platform.handle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-current group-hover:border-current/30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

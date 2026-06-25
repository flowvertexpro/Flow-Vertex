import React from "react";
import { motion } from "motion/react";
import { Check, Star, Users, Briefcase, Award, TrendingUp } from "lucide-react";

export default function About() {
  const specialties = [
    "Talking Head Videos",
    "Brand Promotions",
    "Commercial Advertisements",
    "Corporate Films",
    "Product Showcase Videos",
    "Motion Graphics Videos",
    "YouTube Content",
    "Podcast & Interview Edits",
    "Documentary Style Editing",
    "Social Media Reels & Shorts",
  ];

  const stats = [
    { value: "100+", label: "Projects Delivered", detail: "High-end corporate & viral content", icon: Briefcase },
    { value: "50+", label: "Happy Clients", detail: "Global developers, creators & brands", icon: Users },
    { value: "95%", label: "Client Retention", detail: "Long-term visual collaboration", icon: TrendingUp },
    { value: "4.9★", label: "Studio Rating", detail: "Uncompromising premium standard", icon: Award },
  ];

  return (
    <section id="about" className="relative py-28 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column Description */}
          <div className="lg:col-span-6 text-left">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block">
              THE STUDIO
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 mb-6 leading-tight">
              A Premium Post-Production Studio <br />
              For Ambitious Brands.
            </h2>
            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
              Flow Vertex is an elite, detail-driven digital agency. We operate at the intersection of commercial television-grade color science, high-retention cinematic editing, and bespoke kinetic motion design.
            </p>
            <p className="text-zinc-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-8">
              Whether you are a global enterprise launching a flagship product or an individual creator looking to define your visual language, we deliver pristine, attention-grabbing content that commands authority.
            </p>

            {/* Micro Rating Indicator removed */}
          </div>

          {/* Right Column Core Specialties */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm self-center">
            <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase mb-6 text-left font-bold">
              OUR CORE SPECIALTIES
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.map((spec, index) => (
                <div key={index} className="flex items-center gap-3 text-left group">
                  <div className="w-5 h-5 rounded-full bg-[#00e5bc]/10 border border-[#00e5bc]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00e5bc]/20 transition-all duration-300">
                    <Check className="w-3 h-3 text-[#00e5bc]" />
                  </div>
                  <span className="text-xs font-sans font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

         </div>

        {/* Dynamic Premium Metrics Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-zinc-200 p-6 rounded-xl bg-white text-left group hover:border-[#00e5bc]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-500 group-hover:text-[#00e5bc] border border-zinc-200 mb-5 transition-colors">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-zinc-900 mb-1 tracking-tight">
                  {st.value}
                </h3>
                <p className="font-mono text-[10px] text-[#00e5bc] font-bold tracking-widest uppercase mb-1.5">
                  {st.label}
                </p>
                <p className="text-zinc-500 text-[11px] leading-relaxed font-light">
                  {st.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

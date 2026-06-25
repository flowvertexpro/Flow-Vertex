import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Talking Head Editing",
    budget: "$2,500 - $5,000",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    "Talking Head Editing",
    "Brand Promotion Videos",
    "Product Commercials",
    "Motion Graphics Videos",
    "Social Media Reels & Shorts",
    "Podcast Editing",
    "Documentary Videos",
    "Corporate Videos",
    "YouTube Editing",
  ];

  const budgetRanges = [
    "Below $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Talking Head Editing",
        budget: "$2,500 - $5,000",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 bg-transparent text-zinc-900 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="font-mono text-[10px] font-bold text-[#00e5bc] bg-[#00e5bc]/10 border border-[#00e5bc]/25 px-3 py-1 rounded-full tracking-widest uppercase mb-4 inline-block self-start">
              ACQUISITIONS
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-zinc-900 mb-6 leading-tight">
              Start Your <br />
              Project Today.
            </h2>
            <p className="text-zinc-500 font-sans text-xs sm:text-sm font-light leading-relaxed mb-10 max-w-sm">
              Ready to command premium attention? Fill out our intake briefs to reserve post-production pipeline access. Our visual team replies within 12 business hours.
            </p>

            {/* Core Info panels */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-white border border-zinc-200 rounded-xl p-4 hover:border-[#00e5bc]/30 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#00e5bc]/10 border border-[#00e5bc]/25 flex items-center justify-center text-[#00e5bc]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Email Inbox</span>
                  <a href="mailto:flowvertexproduction@gmail.com" className="font-sans text-xs sm:text-sm text-zinc-700 hover:text-[#00e5bc] transition-colors font-medium">
                    flowvertexproduction@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-zinc-200 rounded-xl p-4 hover:border-[#00e5bc]/30 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Direct Call</span>
                  <a href="tel:+919425280752" className="font-sans text-xs sm:text-sm text-zinc-700 font-medium hover:text-[#00e5bc] transition-colors">
                    +91 9425280752
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-zinc-200 rounded-xl p-4 hover:border-[#00e5bc]/30 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Location</span>
                  <span className="font-sans text-xs sm:text-sm text-zinc-700">
                    India
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-zinc-200 rounded-xl p-4 hover:border-[#04342C]/20 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Working Hours</span>
                  <span className="font-sans text-xs sm:text-sm text-zinc-700">
                    Mon – Sat (9:00 AM – 7:00 PM IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimal Form */}
          <div className="lg:col-span-7">
            <div className="relative border border-zinc-200 bg-white p-6 sm:p-8 rounded-3xl text-left shadow-sm">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Form row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                          What is your name? *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Alexander Mercer"
                          className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-[#04342C] focus:outline-none font-sans text-xs sm:text-sm text-zinc-900 placeholder-zinc-400"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                          Email address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g., alexander@aether.co"
                          className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-[#04342C] focus:outline-none font-sans text-xs sm:text-sm text-zinc-900 placeholder-zinc-400"
                        />
                      </div>
                    </div>

                    {/* Form row 2: Company */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g., Aéther Horology"
                        className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-[#04342C] focus:outline-none font-sans text-xs sm:text-sm text-zinc-900 placeholder-zinc-400"
                      />
                    </div>

                    {/* Form row 3: Category Select */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider mb-1">
                        Service Needed
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-[#04342C] focus:outline-none font-sans text-xs sm:text-sm text-zinc-900 appearance-none cursor-pointer"
                        >
                          {servicesList.map((srv) => (
                            <option key={srv} value={srv} className="bg-white text-zinc-900">
                              {srv}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#04342C] text-[10px]">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Form row 4: Budget Range */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider mb-1">
                        Select Project Budget
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`px-3.5 py-2 rounded-lg font-mono text-[9.5px] transition-all duration-300 cursor-pointer ${
                              formData.budget === range
                                ? "bg-[#04342C] border-[#04342C] text-white font-bold shadow-sm"
                                : "bg-zinc-50 border border-zinc-200 text-zinc-500 hover:text-zinc-900"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form row 5: Message */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                        Specifications / Brief details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail raw codec, runtimes, audio expectations or specific milestone dates..."
                        className="px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:border-[#04342C] focus:outline-none font-sans text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 resize-none"
                      />
                    </div>

                    {/* Big Launch button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full font-sans text-xs font-bold tracking-widest text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 uppercase shadow-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Start Your Project</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Form Success */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#04342C]/10 border border-[#04342C]/20 flex items-center justify-center text-[#04342C] mb-6">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <span className="font-mono text-[9px] text-[#04342C] font-bold tracking-widest uppercase mb-2">
                      TRANSMISSION COMPLETED
                    </span>

                    <h3 className="font-display font-black text-2xl text-zinc-900 mb-4">
                      Brief Received Successfully
                    </h3>

                    <p className="text-zinc-500 font-sans text-xs sm:text-sm max-w-sm mb-8 leading-relaxed font-light">
                      Visual Producers have received your brief details. Check your email. We will reach back with a project itinerary proposal within 12 hours.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-full font-mono text-[10px] font-bold text-zinc-500 bg-zinc-100 hover:text-zinc-800 border border-zinc-200 transition-colors"
                    >
                      SUBMIT NEW DISPATCH
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

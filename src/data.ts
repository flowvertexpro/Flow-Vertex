/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PricingPackage, PortfolioItem, TestimonialItem, TimelineClip } from './types';

// Specializations / Expertise tags for Flow Vertex
export const SPECIALIZATIONS = [
  "Cinematic Video Editing",
  "Brand Promotions",
  "Commercial Ads",
  "Talking Head Videos",
  "Motion Graphics",
  "YouTube Content Production",
  "Reels & Shorts",
  "Product Showcase Videos",
  "Social Media Ads",
  "Documentary Style Edits",
  "Podcast Editing",
  "Corporate Films"
];

// Key stats
export const AGENCY_STATS = [
  { value: "100+", label: "Projects Delivered", detail: "High-end corporate & viral content" },
  { value: "50+", label: "Clients Worldwide", detail: "Creators, agencies, and Fortune 500s" },
  { value: "10M+", label: "Combined Video Views", detail: "Generating massive organic engagement" }
];

// 10 Detailed Services
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ser-1",
    title: "Basic Video Editing",
    description: "Flawless multi-cam alignment, clean precise cuts, background rhythm balancing, and basic typography enhancements.",
    deliveryTime: "3-5 Days",
    startingPrice: "$499",
    iconName: "Scissors"
  },
  {
    id: "ser-2",
    title: "Talking Head Editing",
    description: "Highly engaging fast-paced talking head edits optimized for modern retention. Dynamic zoom-ins, typography pops, and B-Roll.",
    deliveryTime: "2-3 Days",
    startingPrice: "$299",
    iconName: "User"
  },
  {
    id: "ser-3",
    title: "Brand Promotion Videos",
    description: "Aesthetic narrative-driven promotional films combining advanced timeline pacing, custom sound scaling, and dramatic visual mood-setting.",
    deliveryTime: "5-7 Days",
    startingPrice: "$1,299",
    iconName: "Sparkles"
  },
  {
    id: "ser-4",
    title: "Motion Graphics Videos",
    description: "Stunning 2D/3D kinetic animation, vector maps, digital overlays, kinetic text, and highly customized premium intros/outros.",
    deliveryTime: "4-6 Days",
    startingPrice: "$899",
    iconName: "Activity"
  },
  {
    id: "ser-5",
    title: "Commercial Advertisement Editing",
    description: "Elite television & web-commercial grade cuts, advanced color theory, licensed premium tracks, and highly engaging pacing.",
    deliveryTime: "7-10 Days",
    startingPrice: "$2,499",
    iconName: "Film"
  },
  {
    id: "ser-6",
    title: "Social Media Reels",
    description: "High-retention mobile short-form edits (9:16) with viral-style auto-generated animated subtitles, sound effects, and fast-paced hooks.",
    deliveryTime: "1-2 Days",
    startingPrice: "$149",
    iconName: "Tv"
  },
  {
    id: "ser-7",
    title: "YouTube Documentary Style Videos",
    description: "In-depth storytelling reminiscent of Vox, Johnny Harris, or Netflix. Full archival curation, custom maps, deep soundscapes.",
    deliveryTime: "5-8 Days",
    startingPrice: "$1,499",
    iconName: "Monitor"
  },
  {
    id: "ser-8",
    title: "Podcast & Interview Editing",
    description: "Multi-mic vocal enhancement, automatic smart speaker framing, speaker graphic overlays, highlight reels, and clean noise removal.",
    deliveryTime: "3-4 Days",
    startingPrice: "$599",
    iconName: "Volume2"
  },
  {
    id: "ser-9",
    title: "Cinematic Product Showcase",
    description: "Ultra-luxury pacing, dynamic motion graphics simulation, dramatic particle sweeps, cinematic sound design, dynamic speed ramping, and pristine grading.",
    deliveryTime: "4-6 Days",
    startingPrice: "$1,199",
    iconName: "Sliders"
  },
  {
    id: "ser-10",
    title: "Advanced VFX & Transitions",
    description: "Prism reflections, cinematic whip pans, multi-layer green screen tracking, 3D viewport tracking projections, and hand-crafted transitions.",
    deliveryTime: "3-5 Days",
    startingPrice: "$799",
    iconName: "Layers"
  }
];

// 3 Pricing Packages
export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "price-starter",
    name: "STARTER PACK",
    price: "$599",
    description: "Perfect for content creators wishing to establish a highly polished, aesthetic base online.",
    features: [
      "Basic creative editing & seamless cuts",
      "Sleek minimalist transitions",
      "Background sound design & licensed music",
      "1080p Ultra-crisp export",
      "3 Rounds of design revisions",
      "Turnaround in 3 to 5 business days"
    ],
    accentColor: "blue"
  },
  {
    id: "price-pro",
    name: "PROFESSIONAL PACK",
    price: "$1,499",
    description: "Our signature package. Designed for modern brand commercials and elite marketing content.",
    features: [
      "Skins & environment cinematic color grading",
      "Custom premium motion graphics & typography",
      "Atmospheric rich sound design & foley",
      "Advanced flow speed ramping and lens flare edits",
      "Social media optimization (9:16 hook cut)",
      "4K Master cinema-grade export",
      "Custom animation & visual tracking assets",
      "5 Rounds of detailed revisions"
    ],
    isPopular: true,
    accentColor: "purple"
  },
  {
    id: "price-elite",
    name: "ELITE CINEMATIC PACK",
    price: "$3,499",
    description: "Hollywood trailer-style narrative excellence. Full-service director aesthetics and luxury VFX workflow.",
    features: [
      "Full premium storytelling script & sequence strategy",
      "High-end custom motion graphics & 3D titles",
      "Advanced complex VFX & digital matte enhancements",
      "Trailer-level high-impact editing with custom sound cues",
      "Bespoke audio mixing & master cinematic foley",
      "Unlimited social short-form viral cuts & hooks",
      "Personal dedicated editor & video engineer",
      "Unlimited creative revisions"
    ],
    accentColor: "cyan"
  }
];

// Fictional Elite Brands for Portfolio and Client Logo Section
export const CLIENT_LOGOS = [
  { name: "AÉTHER HOROLOGY", logoChar: "Æ" },
  { name: "NOVA HYPERCARS", logoChar: "N" },
  { name: "VANGUARD LABELS", logoChar: "V" },
  { name: "APEX ATHLETICS", logoChar: "A" },
  { name: "ZENITH SINGLE MALT", logoChar: "Z" }
];

// Portfolio Items
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "The Horizon Shift - Chronos Edition",
    category: "Brand Commercials",
    thumbnailUrl: "https://picsum.photos/seed/watch3/800/450",
    duration: "1:30",
    ratio: "16:9",
    client: "Aéther Horology",
    tags: ["Cinematic", "Luxury Product", "Color Grading", "Foley"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port-2",
    title: "Velocity One - Silent Speed",
    category: "Product Ads",
    thumbnailUrl: "https://picsum.photos/seed/supercar1/800/450",
    duration: "0:45",
    ratio: "16:9",
    client: "Nova Hypercars",
    tags: ["Speed Ramping", "VFX Overlays", "Sound Design", "Ad"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port-3",
    title: "Mindset Over Matter - Masterclass",
    category: "Talking Head Videos",
    thumbnailUrl: "https://picsum.photos/seed/masterclass1/800/450",
    duration: "12:15",
    ratio: "16:9",
    client: "Creator Academy",
    tags: ["Interactive Zoom", "Animated Popups", "Multi-cam"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port-4",
    title: "Concrete Reverie - Autumn Fashion",
    category: "Reels & Shorts",
    thumbnailUrl: "https://picsum.photos/seed/fashionreel1/450/800",
    duration: "0:15",
    ratio: "9:16",
    client: "Vanguard Labels",
    tags: ["Dynamic Transitions", "Lo-Fi Beats", "Color Grade"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=450"
  },
  {
    id: "port-5",
    title: "The Solitude of Everest - Alpine Ascent",
    category: "Documentary Edits",
    thumbnailUrl: "https://picsum.photos/seed/everestDoc/800/450",
    duration: "8:40",
    ratio: "16:9",
    client: "Peak Ascent Films",
    tags: ["Pristine Grading", "Symphonical Mix", "B-Roll Flow"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port-6",
    title: "Hyperkinetic Kineticism - Kinetic Typography",
    category: "Motion Graphics",
    thumbnailUrl: "https://picsum.photos/seed/typographyMotion/800/450",
    duration: "0:30",
    ratio: "16:9",
    client: "Futura Media",
    tags: ["After Effects", "Sound Foley", "3D Camera Sync"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port-7",
    title: "Pure Alchemy - Single Malt Launch",
    category: "Product Ads",
    thumbnailUrl: "https://picsum.photos/seed/whiskeyA/800/450",
    duration: "1:00",
    ratio: "16:9",
    client: "Zenith Spirits",
    tags: ["Macro Fluidics", "Gold Lighting", "Atmospheric Foley"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port-8",
    title: "Apex Speed - Limitless Performance",
    category: "Reels & Shorts",
    thumbnailUrl: "https://picsum.photos/seed/athleticsReel/450/800",
    duration: "0:25",
    ratio: "9:16",
    client: "Apex Athletics",
    tags: ["Heavy Sound FX", "Aggressive Cuts", "Overlay Graphics"],
    videoPlaceholderUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=450"
  }
];

// Fictional Testimonials with Luxurious visual ratings
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Alexander Mercer",
    role: "Global Marketing Director",
    company: "Aéther Horology",
    quote: "Flow Vertex Production doesn't just cut clips; they perform structural alchemy. Our product launch video felt like a luxury feature film. The cinematic grading and timing resulted in a 3x conversion uplift.",
    avatarUrl: "https://picsum.photos/seed/melvin/100/100",
    rating: 5
  },
  {
    id: "test-2",
    name: "Celeste Sterling",
    role: "Lead Creative Designer",
    company: "Nova Hypercars",
    quote: "Their edits command total authority. The speed ramping sequence matched with the mechanical foley design was immaculate. Flow Vertex is undoubtedly the elite standard for automotive video.",
    avatarUrl: "https://picsum.photos/seed/celeste/100/100",
    rating: 5
  },
  {
    id: "test-3",
    name: "Julian Woods",
    role: "Independent Digital Creator",
    company: "Woods Interactive",
    quote: "I handed them 5 hours of messy footage, and they extracted an absolute storytelling masterpiece. The documentary graphics are Vox-caliber, extremely crisp, and timed perfectly with audio.",
    avatarUrl: "https://picsum.photos/seed/julian/100/100",
    rating: 5
  }
];

// Default Timeline Clips for Editing Software Simulation
export const TIMELINE_CLIPS_DEFAULT: TimelineClip[] = [
  { id: "clip-intro", title: "01_AETHER_INTRO_RAW", track: 1, start: 0, width: 25, color: "bg-blue-600/65 border-blue-400", type: "video" },
  { id: "clip-car", title: "02_CARS_MACRO_GRADE", track: 1, start: 26, width: 35, color: "bg-purple-600/65 border-purple-400", type: "video" },
  { id: "clip-outtro", title: "03_BRAND_CTA_LOGO", track: 1, start: 62, width: 38, color: "bg-cyan-600/65 border-cyan-400", type: "video" },
  
  { id: "clip-gfx1", title: "D_OVERLAY_GLOW_LUT", track: 2, start: 15, width: 22, color: "bg-emerald-600/65 border-emerald-400", type: "vfx" },
  { id: "clip-vfx3d", title: "3D_KINETIC_TEXT_ANIM", track: 2, start: 40, width: 18, color: "bg-yellow-600/65 border-yellow-400", type: "text" },
  { id: "clip-flares", title: "ANAMORPHIC_LIGHT_FLARE", track: 2, start: 65, width: 20, color: "bg-pink-600/65 border-pink-400", type: "vfx" },

  { id: "clip-aud-intro", title: "F_AMBIENT_CYPHER_SFX", track: 3, start: 0, width: 20, color: "bg-indigo-600/50 border-indigo-400", type: "audio" },
  { id: "clip-aud-sub", title: "B_THEME_CINEMATIC_RESONANCE", track: 3, start: 18, width: 62, color: "bg-indigo-600/50 border-indigo-400", type: "audio" },
  { id: "clip-aud-whoosh", title: "SFX_TRAILER_BOOM_RISER", track: 3, start: 80, width: 20, color: "bg-rose-600/50 border-rose-400", type: "audio" },
];

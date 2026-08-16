import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Sparkles, Compass, Heart, CircleDot, Hexagon, Layers, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";
import { DisintegratingImage } from "./DisintegratingImage";

const IMPRINTS_DATA = [
  {
    name: "Ouida Books",
    focus: "Literary Fiction",
    desc: "Ouida Books is the flagship imprint that publishes high-quality literary fiction.",
    badge: "FLAGSHIP",
    code: "_001",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    icon: <BookOpen className="w-5 h-5 text-black" />
  },
  {
    name: "Ouida Poetry",
    focus: "Verse & Poetry",
    desc: "Ouida Poetry publishes a maximum of two books of poems in any given year.",
    badge: "POETRY",
    code: "_002",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop",
    icon: <Sparkles className="w-5 h-5 text-black" />
  },
  {
    name: "Cognix",
    focus: "Non-Fiction & Record",
    desc: "Cognix is where Ouida Books turns to the real: ideas, arguments, the record of things as they happened.",
    badge: "NON-FICTION",
    code: "_003",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    icon: <Compass className="w-5 h-5 text-black" />
  },
  {
    name: "Tanja",
    focus: "Youngest Readers",
    desc: "Tanja exists for the youngest readers by publishing picturebooks that are built to be read aloud and enjoyed by both children and adults.",
    badge: "PICTUREBOOKS",
    code: "_004",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    icon: <CircleDot className="w-5 h-5 text-black" />
  },
  {
    name: "Adole",
    focus: "Young Adult",
    desc: "Adole speaks to the years between childhood and adulthood, the ones that ask the hardest questions.",
    badge: "YOUNG ADULT",
    code: "_005",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    icon: <Zap className="w-5 h-5 text-black" />
  },
  {
    name: "Book of Phoenix",
    focus: "Speculative Fiction",
    desc: "Book of Phoenix publishes speculative fiction that is not bound by the constraints of the world as it is.",
    badge: "SPECULATIVE",
    code: "_006",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    icon: <Layers className="w-5 h-5 text-black" />
  },
  {
    name: "Tevani",
    focus: "Bespoke Imprint",
    desc: "Tevani is Ouida Books' bespoke imprint, working directly with authors who want a hand-crafted path to publication, from manuscript to finished book.",
    badge: "BESPOKE",
    code: "_007",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    icon: <Hexagon className="w-5 h-5 text-black" />
  },
  {
    name: "Lufu",
    focus: "Romance & Commercial",
    desc: "Lufu publishes romance and commercial fiction.",
    badge: "ROMANCE",
    code: "_008",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    icon: <Heart className="w-5 h-5 text-black" />
  }
];

// Continuous Marquee Book Covers
const MARQUEE_COVERS = [
  { title: "Baba Segi's Wives", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg" },
  { title: "Sitting on an Egg", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg" },
  { title: "Song of a Riverbird", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.18.54.jpeg" },
  { title: "For the Love of Flight", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.20.13.jpeg" },
  { title: "Setto Saves the Trees", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg" },
  { title: "Anyibo & Mother Hen", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/anyibo.png" },
  { title: "Hassan & Hussaina", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png" },
  { title: "Mayowa & Masquerades", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.32.23.jpeg" },
  { title: "Iyaji the House Girl", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/iyaji.png" },
  { title: "Jamila's Clever Plan", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/jamila.png" },
  { title: "Pwada Can Do Anything", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/pwada.png" },
  { title: "Do As You're Told Baji", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/baji.jpg" }
];

export default function OuidaBooksPage() {
  const location = useLocation();

  // Duplicating marquee array for endless seamless scrolling
  const marqueeItems = [...MARQUEE_COVERS, ...MARQUEE_COVERS, ...MARQUEE_COVERS];

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 overflow-x-hidden selection:bg-rose-600 selection:text-white font-sans">
      
      {/* 1. INTRO / HERO SUB PAGE */}
      <section id="intro" className="relative min-h-[75vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-20 scroll-mt-28">
        
        {/* Floating Flat Card 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.8, type: "spring", bounce: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="hidden md:block absolute top-12 left-10 lg:left-20 w-44 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/80 transform -rotate-6 pointer-events-none z-10 bg-white"
        >
          <div className="aspect-[3/4.2] w-full overflow-hidden bg-neutral-100">
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg"
              alt="The Secret Lives of Baba Segi's Wives"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-3 bg-white text-left">
            <span className="font-mono text-[9px] font-bold text-rose-600 uppercase tracking-widest block">FLAGSHIP NOVEL</span>
            <p className="font-sans font-bold text-xs text-neutral-900 truncate">Baba Segi's Wives</p>
          </div>
        </motion.div>

        {/* Floating Flat Card 2 - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.15 },
            scale: { duration: 0.8, delay: 0.15, type: "spring", bounce: 0.4 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="hidden md:block absolute top-16 right-10 lg:right-20 w-44 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/80 transform rotate-6 pointer-events-none z-10 bg-white"
        >
          <div className="aspect-[3/4.2] w-full overflow-hidden bg-neutral-100">
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg"
              alt="Setto Saves the Trees"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-3 bg-white text-left">
            <span className="font-mono text-[9px] font-bold text-rose-600 uppercase tracking-widest block">CHILDREN'S BOOK</span>
            <p className="font-sans font-bold text-xs text-neutral-900 truncate">Setto Saves Trees</p>
          </div>
        </motion.div>

        {/* Floating Flat Card 3 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, 7, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="hidden lg:block absolute bottom-12 left-16 w-40 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/80 transform rotate-3 pointer-events-none z-10 bg-white"
        >
          <div className="aspect-[3/4.2] w-full overflow-hidden bg-neutral-100">
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg"
              alt="Sitting on an Egg"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-2.5 bg-white text-left">
            <span className="font-mono text-[9px] font-bold text-rose-600 uppercase tracking-widest block">POETRY</span>
            <p className="font-sans font-bold text-xs text-neutral-900 truncate">Sitting on an Egg</p>
          </div>
        </motion.div>

        {/* Floating Flat Card 4 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.45 },
            scale: { duration: 0.8, delay: 0.45, type: "spring", bounce: 0.4 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
          className="hidden lg:block absolute bottom-10 right-16 w-40 rounded-2xl overflow-hidden shadow-lg border border-neutral-200/80 transform -rotate-3 pointer-events-none z-10 bg-white"
        >
          <div className="aspect-[3/4.2] w-full overflow-hidden bg-neutral-100">
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png"
              alt="Hassan & Hussaina"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-2.5 bg-white text-left">
            <span className="font-mono text-[9px] font-bold text-rose-600 uppercase tracking-widest block">ADVENTURE</span>
            <p className="font-sans font-bold text-xs text-neutral-900 truncate">Hassan & Hussaina</p>
          </div>
        </motion.div>

        {/* Center Content Text Box */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6 relative z-20"
        >
          <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full">
            <BookOpen size={14} className="text-rose-600" />
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-rose-700 font-bold">
              PUBLISHING
            </span>
          </div>

          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight uppercase leading-[1.02]">
            Intro
          </h1>

          {/* EXACT VERBATIM INTRO COPY */}
          <div className="space-y-4 text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal">
            <p>
              Nigeria has never lacked talent. What has been missing is the infrastructure that allows local voices to flourish on their own terms. Too many Nigerian writers measure their success by whether the West published them first. Ouida Books was founded in 2016 to disrupt that trend, to prove that a Nigerian publishing house could take a Nigerian voice to the world.
            </p>
            <p className="font-medium text-neutral-900">
              Eight imprints carry that mission forward, each with its own shelf, its own reader, its own reason for being.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center">
            <button
              onClick={() => {
                const imprintsEl = document.getElementById("imprints");
                if (imprintsEl) imprintsEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center space-x-2 group"
            >
              <span>Explore Imprints</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </section>

      {/* 2. INFINITE MARQUEE SNEAK PEEK */}
      <section className="py-14 space-y-6 overflow-hidden bg-[#f7f4ee] border-y border-neutral-200/70">
        <div className="text-center space-y-2 px-6">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 mb-1">
            <BookOpen size={16} />
          </div>
          <h2 className="font-serif italic text-2xl sm:text-3xl text-neutral-900 font-medium">
            Sneak peek of our catalogue
          </h2>
        </div>

        {/* ULTRA SMOOTH MARQUEE TRACK */}
        <div className="relative w-full overflow-hidden py-4">
          <div 
            className="flex items-center space-x-6 w-max animate-marquee-smooth hover:[animation-play-state:paused]"
            style={{
              display: "flex",
              width: "max-content",
              animation: "marqueeSmooth 32s linear infinite",
              willChange: "transform",
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="w-44 h-60 sm:w-56 sm:h-76 shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.04] cursor-pointer"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPRINTS SUB PAGE / SECTION (EXACT CONTENT) */}
      <section id="imprints" className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-200 space-y-12 scroll-mt-28">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600">
            OUIDA BOOKS
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
            Imprints
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Eight imprints carry that mission forward, each with its own shelf, its own reader, its own reason for being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {IMPRINTS_DATA.map((imp, idx) => (
            <motion.div
              key={imp.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                delay: idx * 0.08
              }}
              className="group cursor-pointer flex flex-col space-y-3"
            >
              {/* Card Image Container - Taller portrait ratio with Disintegrating Particle / Hover */}
              <div className="relative w-full aspect-[4/5] min-h-[360px] sm:min-h-[390px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                <DisintegratingImage
                  src={imp.image}
                  alt={imp.name}
                  roundedClassName="rounded-[28px] sm:rounded-[32px]"
                />

                {/* Top Badge Floating Pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {imp.badge}
                  </span>
                </div>

                {/* Hover Overlay with Center Logo */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                    {imp.icon}
                    <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                      {imp.name}
                    </span>
                  </div>
                </div>

                {/* Overlay details at bottom of image */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1">
                  <h3 className="font-serif italic font-extrabold text-xl sm:text-2xl text-white">
                    {imp.name}
                  </h3>
                  <p className="font-mono text-[11px] font-bold text-rose-300 uppercase tracking-wider">
                    {imp.focus}
                  </p>
                </div>
              </div>

              {/* Imprint Text Content Below Image - Full Description Visible */}
              <div className="space-y-1.5 px-1 pt-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-base text-neutral-950 tracking-tight group-hover:text-rose-600 transition-colors">
                    {imp.name}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-neutral-400">
                    {imp.code}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  {imp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Embedded inline keyframes for 100% zero-lag marquee */}
      <style>{`
        @keyframes marqueeSmooth {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

    </div>
  );
}

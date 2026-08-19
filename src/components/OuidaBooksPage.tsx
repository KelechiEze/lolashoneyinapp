import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Zap } from "lucide-react";
import { useLocation } from "react-router-dom";

const IMPRINTS_DATA = [
  {
    name: "Ouida Books",
    focus: "Literary Fiction",
    desc: "Ouida Books is the flagship imprint that publishes high-quality literary fiction.",
    badge: "FLAGSHIP",
    code: "_001",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/ouida-logo.png"
  },
  {
    name: "Ouida Poetry",
    focus: "Verse & Poetry",
    desc: "Ouida Poetry publishes a maximum of two books of poems in any given year.",
    badge: "POETRY",
    code: "_002",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/ouida-poetry.png"
  },
  {
    name: "Cognix",
    focus: "Non-Fiction & Record",
    desc: "Cognix is where Ouida Books turns to the real: ideas, arguments, the record of things as they happened.",
    badge: "NON-FICTION",
    code: "_003",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/cognix-logo.png"
  },
  {
    name: "Tanja",
    focus: "Youngest Readers",
    desc: "Tanja exists for the youngest readers by publishing picturebooks built to be read aloud and enjoyed by both children and adults.",
    badge: "PICTUREBOOKS",
    code: "_004",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/tanja-logo.png"
  },
  {
    name: "Adole",
    focus: "Young Adult",
    desc: "Adole speaks to the years between childhood and adulthood, the ones that ask the hardest questions.",
    badge: "YOUNG ADULT",
    code: "_005",
    icon: <Zap className="w-5 h-5 text-purple-600" />
  },
  {
    name: "Book of Phoenix",
    focus: "Speculative Fiction",
    desc: "Book of Phoenix publishes speculative fiction that is not bound by the constraints of the world as it is.",
    badge: "SPECULATIVE",
    code: "_006",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/phoenix-logo.png"
  },
  {
    name: "Tevani",
    focus: "Bespoke Imprint",
    desc: "Tevani works directly with authors who want a hand-crafted path to publication, from manuscript to finished book.",
    badge: "BESPOKE",
    code: "_007",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/tevani-1.png"
  },
  {
    name: "Lufu",
    focus: "Romance & Commercial",
    desc: "Lufu publishes vibrant romance and commercial fiction.",
    badge: "ROMANCE",
    code: "_008",
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/lufu-logo.png"
  }
];

// Continuous Marquee Book Covers with new images
const MARQUEE_COVERS = [
  { title: "Ouida Book 1", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book1.jpg" },
  { title: "Ouida Book 2", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book2.png" },
  { title: "Ouida Book 3", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book3.jpeg" },
  { title: "Ouida Book 4", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book4.jpg" },
  { title: "Ouida Book 5", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book5.jpg" },
  { title: "Ouida Book 6", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-18-at-13.39.23-1.jpeg" }
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
      
      {/* 1. HERO / OUIDA BOOKS INTRO */}
      <section id="intro" className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-24 scroll-mt-28">
        
        {/* Floating Book 1 - Top Left (Pure Cover Only, No Text Box Underneath) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.8, type: "spring", bounce: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="hidden md:block absolute top-6 left-8 lg:left-14 w-36 sm:w-40 lg:w-44 rounded-none overflow-hidden shadow-2xl border border-neutral-200/90 pointer-events-none z-10 bg-white aspect-[3/4.7]"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book1.jpg"
            alt="Ouida Publication"
            className="w-full h-full object-cover rounded-none block"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Book 2 - Top Right (Pure Cover Only, No Text Box Underneath) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.15 },
            scale: { duration: 0.8, delay: 0.15, type: "spring", bounce: 0.4 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="hidden md:block absolute top-6 right-8 lg:right-14 w-36 sm:w-40 lg:w-44 rounded-none overflow-hidden shadow-2xl border border-neutral-200/90 pointer-events-none z-10 bg-white aspect-[3/4.7]"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book2.png"
            alt="Ouida Publication"
            className="w-full h-full object-cover rounded-none block"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Book 3 - Bottom Left (Pure Cover Only, Generous Vertical Space from Top) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, 7, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="hidden lg:block absolute bottom-6 left-10 lg:left-16 w-32 sm:w-36 lg:w-40 rounded-none overflow-hidden shadow-2xl border border-neutral-200/90 pointer-events-none z-10 bg-white aspect-[3/4.7]"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book3.jpeg"
            alt="Ouida Publication"
            className="w-full h-full object-cover rounded-none block"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Book 4 - Bottom Right (Pure Cover Only, Generous Vertical Space from Top) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.45 },
            scale: { duration: 0.8, delay: 0.45, type: "spring", bounce: 0.4 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
          className="hidden lg:block absolute bottom-6 right-10 lg:right-16 w-32 sm:w-36 lg:w-40 rounded-none overflow-hidden shadow-2xl border border-neutral-200/90 pointer-events-none z-10 bg-white aspect-[3/4.7]"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/book4.jpg"
            alt="Ouida Publication"
            className="w-full h-full object-cover rounded-none block"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Center Content Box: Heading "OUIDA BOOKS" */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6 relative z-20"
        >
          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight uppercase leading-[1.02]">
            Ouida Books
          </h1>

          {/* EXACT INTRO COPY */}
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

      {/* 2. INFINITE MARQUEE SNEAK PEEK (NO BORDER RADIUS ON BOOKS) */}
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
                className="w-44 h-60 sm:w-56 sm:h-76 shrink-0 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer bg-neutral-100 border border-neutral-200/60"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPRINTS: COMPACT LOGO MARKS WITH BRIEF DESCRIPTIONS UNDERNEATH */}
      <section id="imprints" className="max-w-7xl mx-auto px-6 py-20 border-t border-neutral-200 space-y-12 scroll-mt-28">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
            Imprints
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Eight dedicated imprints carry our publishing vision forward, each catering to specific literary traditions, ages, and readers.
          </p>
        </div>

        {/* COMPACT LOGO-CENTRIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPRINTS_DATA.map((imp, idx) => (
            <motion.div
              key={imp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group bg-neutral-50/80 hover:bg-white p-6 rounded-xl border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 hover:shadow-lg flex flex-col justify-between space-y-4"
            >
              {/* Top Header with Logo Image / Mark & Code */}
              <div className="flex items-center justify-between min-h-[50px]">
                {imp.logo ? (
                  <div className="h-12 flex items-center justify-start max-w-[140px]">
                    <img
                      src={imp.logo}
                      alt={`${imp.name} Logo`}
                      className={`${imp.name === "Lufu" ? "max-h-7" : "max-h-11"} max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-lg bg-white border border-neutral-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {imp.icon}
                  </div>
                )}
                <span className="font-mono text-[10px] font-bold text-neutral-400">
                  {imp.code}
                </span>
              </div>

              {/* Imprint Logo & Name */}
              <div className="space-y-1">
                <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-rose-600 block">
                  {imp.badge}
                </span>
                <h3 className="font-sans font-black text-lg text-neutral-950 group-hover:text-rose-600 transition-colors">
                  {imp.name}
                </h3>
                <p className="font-serif italic text-xs text-neutral-500 font-medium">
                  {imp.focus}
                </p>
              </div>

              {/* Concise Description */}
              <div className="pt-2 border-t border-neutral-200/60">
                <p className="font-sans text-xs text-neutral-600 leading-relaxed font-normal">
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

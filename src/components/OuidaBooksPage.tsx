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
    logo: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.27.24.jpeg"
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
      
      {/* 1. INFINITE MARQUEE SNEAK PEEK ON TOP */}
      <section className="pt-4 pb-14 space-y-5 overflow-hidden bg-white border-b border-neutral-200/70">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif italic text-xl sm:text-2xl text-neutral-800 font-medium">
            Sneak peek of our catalogue
          </h2>
        </div>

        {/* ULTRA SMOOTH MARQUEE TRACK */}
        <div className="relative w-full overflow-hidden py-2">
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
                className="w-44 h-60 sm:w-56 sm:h-76 shrink-0 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer bg-neutral-50 border border-neutral-200/60"
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* 2. OUIDA BOOKS INTRO & DESCRIPTION */}
        <section id="intro" className="relative pt-16 scroll-mt-28">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tight text-neutral-950">
              Ouida Books
            </h1>

            {/* EXACT INTRO COPY */}
            <div className="space-y-4 text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed select-text font-normal">
              <p>
                Nigeria has never lacked talent. What has been missing is the infrastructure that allows local voices to flourish on their own terms. Too many Nigerian writers measure their success by whether the West published them first. Ouida Books was founded in 2016 to disrupt that trend, to prove that a Nigerian publishing house could take a Nigerian voice to the world.
              </p>
              <p className="font-medium text-neutral-900">
                Imprints carry that mission forward, each with its own shelf, its own reader, its own reason for being.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 3. IMPRINTS */}
        <section id="imprints" className="pt-16 pb-24 border-t border-neutral-200 space-y-10 scroll-mt-28">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Imprints
            </h2>
            <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
              Dedicated imprints carry our publishing vision forward, each catering to specific literary traditions, ages, and readers.
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
                      <BookOpen size={20} className="text-neutral-700" />
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
      </div>

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

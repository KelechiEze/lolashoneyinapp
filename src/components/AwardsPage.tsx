import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowUpRight, Trophy, Sparkles, X, CheckCircle2, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HonorItem {
  year: string;
  title: string;
  organization: string;
  summary: string;
  image: string;
  code: string;
  location?: string;
}

export default function AwardsPage() {
  const navigate = useNavigate();
  const [selectedHonor, setSelectedHonor] = useState<HonorItem | null>(null);

  const majorHonors: HonorItem[] = [
    {
      year: "2026",
      title: "Royal Society of Literature Fellow",
      organization: "Royal Society of Literature, UK",
      summary: "Elected as a Fellow of the Royal Society of Literature (RSL), signing the historic Roll Book in London with George Eliot's dip pen in recognition of enduring creative excellence.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      code: "_RSL2026",
      location: "London, United Kingdom"
    },
    {
      year: "2023",
      title: "Financial Times 25 Most Influential Women",
      organization: "Financial Times",
      summary: "Listed among the Financial Times 25 most influential women worldwide, recognized alongside visionary global leaders for creating sovereign platforms for African authors, publishers, and illustrators.",
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png",
      code: "_FT25",
      location: "Global / London"
    },
    {
      year: "2023",
      title: "Inaugural Aficionado Award",
      organization: "Frankfurt Book Fair & Salone del Libro Turin",
      summary: "Awarded to Aké Arts and Book Festival for outstanding, highly original publishing and literary initiatives improving the reach and impact of African literature worldwide.",
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_22_31-pm.png",
      code: "_AFICIONADO",
      location: "Frankfurt & Turin"
    },
    {
      year: "2017",
      title: "African Literary Person of the Year",
      organization: "Brittle Paper & African Literary Press",
      summary: "Conferred for groundbreaking impact across African literature, publishing infrastructure, and festival curation through Aké Festival, Book Buzz Foundation, and Ouida Books.",
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_35_24-pm.png",
      code: "_ALPOTY",
      location: "Continental Africa"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* PAGE HEADER */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Awards
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-2xl leading-relaxed">
            Major literary prizes, nominations, and international fellowships honoring Lola Shoneyin's creative and cultural contributions.
          </p>
        </div>

        {/* PRIMARY AWARDS BULLET POINTS CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-50 border-2 border-neutral-900 p-8 sm:p-12 rounded-2xl shadow-lg space-y-8"
        >
          <div className="flex items-center space-x-3 pb-6 border-b border-neutral-200">
            <div className="p-3 bg-neutral-950 text-white rounded-xl">
              <Trophy size={28} className="text-amber-400" />
            </div>
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-950">
                Awards
              </h2>
            </div>
          </div>

          {/* BULLET POINTS AS REQUESTED */}
          <ul className="space-y-5 text-neutral-900">
            <li className="flex items-start space-x-4">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 mt-2.5 shrink-0" />
              <div className="space-y-0.5">
                <span className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 block">
                  Nominated, Orange Prize for Fiction, 2011
                </span>
                <span className="font-sans text-xs sm:text-sm text-neutral-600 block">
                  Longlisted for her debut novel, <span className="italic">The Secret Lives of Baba Segi's Wives</span>.
                </span>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 mt-2.5 shrink-0" />
              <div className="space-y-0.5">
                <span className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 block">
                  Winner, PEN Oakland Josephine Miles Literary Award
                </span>
                <span className="font-sans text-xs sm:text-sm text-neutral-600 block">
                  Recognizing outstanding multicultural literary excellence.
                </span>
              </div>
            </li>

            <li className="flex items-start space-x-4">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 mt-2.5 shrink-0" />
              <div className="space-y-0.5">
                <span className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950 block">
                  Winner, Ken Saro-Wiwa Prose Prize
                </span>
                <span className="font-sans text-xs sm:text-sm text-neutral-600 block">
                  Conferred by the Association of Nigerian Authors (ANA) for exceptional prose writing.
                </span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* FELLOWSHIPS & GLOBAL CITATIONS SECTION (STYLED LIKE INTERNATIONAL STAGES & RESIDENCIES) */}
        <div id="fellowships" className="border-t border-neutral-200 pt-16 space-y-12 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-neutral-950">
                Fellowships & Global Citations
              </h2>
              <p className="text-neutral-600 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
                Archival citations, lifetime fellowships, and global impact honors celebrating cultural leadership across the world.
              </p>
            </div>

            <div className="font-mono text-xs text-neutral-500 font-bold bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-full self-start md:self-auto">
              {majorHonors.length} Global Honors
            </div>
          </div>

          {/* GALLERY GRID (MATCHING INTERNATIONAL STAGES & RESIDENCIES) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
            {majorHonors.map((item, idx) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  delay: idx * 0.08
                }}
                onClick={() => setSelectedHonor(item)}
                className="group cursor-pointer flex flex-col"
              >
                {/* Card Image Container */}
                <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft dark vignette */}
                  <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-rose-600 shadow-md">
                      <Globe2 size={12} />
                      <span className="font-mono text-[10px] font-bold uppercase text-neutral-900 truncate max-w-[140px]">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 space-y-1.5">
                    <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                      {item.organization}
                    </span>
                    <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-200 line-clamp-3 leading-relaxed opacity-90 pt-1">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta Bar */}
                <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                  <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[260px]">
                    {item.title}
                  </span>
                  <span className="font-mono text-neutral-400 font-medium">
                    {item.code}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM NAVIGATION CTA */}
        <div className="border-t border-neutral-200 pt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/books#prose")}
            className="w-full sm:w-auto px-6 py-3.5 bg-neutral-950 hover:bg-rose-600 text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xl transition-all text-center"
          >
            ← Back to Prose & Works
          </button>
          <button
            onClick={() => navigate("/press")}
            className="w-full sm:w-auto px-6 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-mono text-xs uppercase tracking-widest font-bold rounded-xl transition-all text-center"
          >
            View Press & Media Coverage →
          </button>
        </div>

      </div>

      {/* POPUP MODAL DIALOG */}
      <AnimatePresence>
        {selectedHonor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedHonor(null)}
                className="absolute top-4 right-4 z-30 p-2.5 bg-white/90 hover:bg-white text-neutral-900 rounded-full shadow-lg transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Photo Area */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-950">
                <img
                  src={selectedHonor.image}
                  alt={selectedHonor.title}
                  className="w-full h-full object-cover object-top select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider bg-neutral-900 px-3 py-1 rounded-full border border-white/20">
                    {selectedHonor.year}
                  </span>
                  <span className="font-mono text-xs text-neutral-300 uppercase">
                    {selectedHonor.location}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <span className="font-mono text-xs uppercase font-bold text-neutral-500 tracking-widest block">
                  {selectedHonor.organization}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-950">
                  {selectedHonor.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {selectedHonor.summary}
                </p>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-400">
                    Reference ID: {selectedHonor.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-800 uppercase">
                    <CheckCircle2 size={16} />
                    <span>Official Citation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

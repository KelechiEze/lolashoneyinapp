import React from "react";
import { motion } from "framer-motion";

const awards = [
  { name: "FT Woman of the Year", year: "2023", logo: "FT" },
  { name: "Aké Arts & Book Festival Curator", year: "14 Yrs", logo: "AKÉ" },
  { name: "Caine Prize Shortlist", year: "Honor", logo: "CP" },
  { name: "Lagos Intl Festival of Illustrations", year: "2024", logo: "LIFI" },
  { name: "Ouida Books Independent Publishing", year: "Founder", logo: "OUIDA" },
  { name: "Royal Society of Literature Fellow", year: "Honor", logo: "RSL" },
  { name: "BBC National Short Story Award", year: "Finalist", logo: "BBC" },
  { name: "Abuja Festival of Lit & Ideas", year: "Curator", logo: "AFIL" },
];

const Pacman = () => (
  <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transform-gpu">
    <div className="relative w-full h-full">
      {/* Top Jaw */}
      <motion.div 
        animate={{ rotate: [-35, 0, -35] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-rose-600 rounded-t-full origin-bottom shadow-[0_0_20px_rgba(225,29,72,0.5)] transform-gpu"
      />
      {/* Bottom Jaw */}
      <motion.div 
        animate={{ rotate: [35, 0, 35] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-rose-600 rounded-b-full origin-top shadow-[0_0_20px_rgba(225,29,72,0.5)] transform-gpu"
      />
    </div>
  </div>
);

export const AwardsMarquee: React.FC = () => {
  return (
    <section className="relative w-full bg-neutral-950 py-5 md:py-8 overflow-hidden z-30 border-y border-white/10">
      <div className="flex items-center min-h-[70px] md:min-h-[80px]">
        
        {/* Pac-Man Fixed on Left */}
        <div className="absolute left-3 sm:left-4 md:left-8 z-30 pointer-events-none">
          <Pacman />
        </div>
        
        {/* Swallowing Mask Layer (Behind Pacman) */}
        <div className="absolute left-0 top-0 bottom-0 w-36 sm:w-48 md:w-64 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent z-20 pointer-events-none" />

        {/* Marquee Content */}
        <motion.div 
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap pl-36 sm:pl-48 md:pl-64 transform-gpu will-change-transform"
        >
          {[...awards, ...awards, ...awards].map((award, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-10 px-4 sm:px-8 md:px-12 group">
              <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-white/15 rounded-full flex items-center justify-center text-[7px] sm:text-[8px] md:text-[9px] font-black tracking-tighter text-white/40 group-hover:text-rose-500 group-hover:border-rose-500 transition-colors duration-300">
                    {award.logo}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[8px] sm:text-[9px] md:text-[10px] uppercase font-black tracking-[0.2em] font-mono">Recognitions — {award.year}</span>
                    <span className="text-white/80 group-hover:text-white text-xs sm:text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300">
                      {award.name}
                    </span>
                  </div>
              </div>
              
              {/* Separator */}
              <div className="w-1.5 h-1.5 bg-rose-600/50 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

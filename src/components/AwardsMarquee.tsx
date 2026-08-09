import React from "react";
import { motion } from "framer-motion";

const awards = [
  { name: "The Secret Lives of Baba Segi's Wives", year: "Novel", logo: "SLBSW" },
  { name: "Aké Arts and Book Festival. Fourteen years.", year: "14 Yrs", logo: "AKÉ" },
  { name: "FT Woman of 2023.", year: "2023", logo: "FT" },
  { name: "The Secret Lives of Baba Segi's Wives", year: "Novel", logo: "SLBSW" },
  { name: "Aké Arts and Book Festival. Fourteen years.", year: "14 Yrs", logo: "AKÉ" },
  { name: "FT Woman of 2023.", year: "2023", logo: "FT" },
];

export const AwardsMarquee: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-5 md:py-7 overflow-hidden z-30 border-y border-neutral-200">
      <div className="flex items-center min-h-[60px] md:min-h-[70px]">
        {/* Marquee Content */}
        <motion.div 
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap transform-gpu will-change-transform"
        >
          {[...awards, ...awards, ...awards, ...awards].map((award, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-6 md:gap-10 px-4 sm:px-8 md:px-12 group">
              <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 border border-neutral-300 rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-black tracking-tighter text-neutral-600 bg-neutral-100 group-hover:text-rose-600 group-hover:border-rose-600 transition-colors duration-300">
                    {award.logo}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-rose-600 text-[8px] sm:text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] font-mono">Recognitions: {award.year}</span>
                    <span className="text-neutral-900 group-hover:text-rose-600 text-xs sm:text-xs md:text-sm font-extrabold uppercase tracking-widest transition-colors duration-300">
                      {award.name}
                    </span>
                  </div>
              </div>
              
              {/* Separator */}
              <div className="w-1.5 h-1.5 bg-rose-600/70 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


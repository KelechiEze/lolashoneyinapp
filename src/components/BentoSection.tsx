import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Layers } from "lucide-react";

export const BentoSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-10 md:mb-14 space-y-3">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            CULTURAL ECOSYSTEM & FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 font-sans">
            Literary Curation & Independent Publishing
          </h2>
          <p className="text-neutral-600 font-serif italic text-base md:text-lg max-w-2xl">
            Empowering African storytellers through world-class festival platforms, independent publishing initiatives, and creative spaces.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Left Card: Literary Initiatives */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white flex flex-col justify-between min-h-[440px] md:min-h-[500px] rounded-[16px] border border-neutral-200/80 shadow-none hover:shadow-none transition-shadow duration-300 group overflow-hidden transform-gpu"
          >
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-3 h-3 rounded-full border-[2px] border-rose-600 mt-1.5 shrink-0" />
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 uppercase leading-none font-sans">
                  Literary Initiatives
                </h3>
              </div>
              <p className="text-sm md:text-base font-medium text-neutral-600 max-w-sm leading-relaxed">
                Comprehensive, yearly festival programming, publishing incubators, and residency programs for emerging voices.
              </p>
            </div>
            
            <div className="mt-auto relative w-full h-[280px] md:h-[340px] overflow-hidden bg-white">
              <img 
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg" 
                alt="Literary Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Middle Column: Two Stacked Blocks */}
          <div className="flex flex-col gap-4 md:gap-6">
            
            {/* Top Block: Vision/Creativity */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-white p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[240px] md:min-h-[260px] rounded-[16px] border border-neutral-200/80 shadow-none transform-gpu"
            >
              <div className="mb-4 px-3.5 py-1 border border-neutral-200 rounded-full text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-neutral-500">
                Your Story, Our Canvas
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Heart size={28} className="text-rose-600 fill-rose-600" strokeWidth={1} />
                <span className="text-xl font-light text-neutral-300">+</span>
                <BookOpen size={28} className="text-rose-600" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-neutral-950 max-w-[280px]">
                Great African literature born on visionary terms
              </h3>
            </motion.div>

            {/* Bottom Block: Cultural Hub Dashboard */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-rose-600 p-6 sm:p-8 md:p-10 flex flex-col items-center text-center min-h-[280px] md:min-h-[300px] rounded-[16px] text-white relative overflow-hidden shadow-none transform-gpu"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
                Ouida Books Hub
              </h3>
              <p className="text-xs sm:text-sm font-medium opacity-90 mb-6 max-w-xs">
                Monitor releases, festival ticketing & author events effortlessly
              </p>
              
              <div className="w-full mt-auto transform translate-y-3 shadow-2xl">
                 <div className="bg-neutral-950 rounded-lg p-4 w-full h-[150px] flex flex-col gap-3 text-left border border-white/10">
                    <div className="flex justify-between items-center">
                      <div className="h-3 w-1/3 bg-white/20 rounded" />
                      <span className="text-[9px] font-mono text-rose-400 font-bold uppercase tracking-wider">LIVE CURATION</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 flex-1">
                       <div className="bg-white/10 rounded p-2 flex flex-col justify-between">
                         <span className="text-[8px] font-mono text-neutral-400">Festival Attendees</span>
                         <span className="text-sm font-black text-white">10,000+</span>
                       </div>
                       <div className="bg-rose-500/20 rounded p-2 flex flex-col justify-between border border-rose-500/30">
                         <span className="text-[8px] font-mono text-rose-300">Published Authors</span>
                         <span className="text-sm font-black text-white">150+</span>
                       </div>
                    </div>
                    <div className="h-7 w-full bg-rose-600 rounded text-center text-[10px] font-bold uppercase tracking-widest flex items-center justify-center text-white">
                      Explore Publications
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Card: Independent Publishing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-white flex flex-col justify-between min-h-[440px] md:min-h-[500px] rounded-[16px] border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden transform-gpu"
          >
            <div className="relative w-full h-[220px] md:h-[250px] overflow-hidden">
              <img 
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg" 
                alt="Independent Publishing"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-6 sm:p-8 md:p-10 mt-auto">
               <div className="flex items-start gap-3 mb-4">
                <div className="w-3 h-3 rounded-full border-[2px] border-rose-600 mt-1.5 shrink-0" />
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-neutral-950 leading-none uppercase font-sans">
                  Independent<br />Publishing
                </h3>
              </div>
              <p className="text-sm md:text-base font-medium text-neutral-600 max-w-sm leading-relaxed">
                Enjoy transparent author contracts, premium editorial standards, and wide regional distribution with Ouida Books.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Zap, Settings, Star, Layers } from "lucide-react";

export const BentoSectionTwo: React.FC = () => {
  return (
    <section className="bg-neutral-100 py-12 md:py-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-6">
        
        {/* ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Row 1, Item 1: Real-time Festival Tracking */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 bg-white p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-[320px] rounded-[16px] border border-neutral-200/80 shadow-sm relative overflow-hidden transform-gpu"
          >
            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="mb-6 relative flex justify-center w-full">
                <div className="w-52 sm:w-60 h-32 bg-neutral-950 text-white shadow-2xl p-4 flex flex-col justify-between rounded-xl border border-white/10 transform -rotate-2">
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-1/3 bg-white/20 rounded" />
                    <span className="text-[9px] font-mono text-rose-400 font-bold uppercase tracking-widest">AKÉ FEST</span>
                  </div>
                  <div className="h-10 w-full bg-white/5 rounded flex items-center px-3 justify-between border border-white/10">
                     <div className="w-3 h-3 bg-rose-600 rounded-full" />
                     <div className="text-[10px] font-mono text-white/80 font-bold uppercase">10,000+ Guests</div>
                  </div>
                  <div className="h-6 w-full bg-rose-600/20 rounded flex items-center justify-center text-[9px] font-mono text-rose-300 font-bold uppercase tracking-wider">
                     Live Programming Schedule
                  </div>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 uppercase leading-tight font-sans">
                Real-Time Festival<br />& Event Tracking
              </h3>
            </div>
          </motion.div>

          {/* Row 1, Item 2: Cultural Network */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-2 bg-white p-6 flex flex-col items-center justify-center text-center min-h-[240px] md:min-h-[320px] rounded-[16px] border border-neutral-200/80 shadow-sm transform-gpu"
          >
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-4">Cultural Network</span>
            <Users size={32} className="text-rose-600 mb-3" strokeWidth={1.5} />
            <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-1 font-sans">150+</span>
            <p className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest leading-tight">
              African & Diaspora<br />Authors Joined
            </p>
          </motion.div>

          {/* Row 1, Item 3: Festival Curation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 bg-white p-6 flex flex-col items-center justify-center text-center min-h-[240px] md:min-h-[320px] rounded-[16px] border border-neutral-200/80 shadow-sm transform-gpu"
          >
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-4">Festival Impact</span>
            <Rocket size={32} className="text-rose-600 mb-3" strokeWidth={1.5} />
            <span className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 mb-1 font-sans">14 Yrs</span>
            <p className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest leading-tight">
              Continuous Annual<br />Cultural Festivals
            </p>
          </motion.div>

          {/* Row 1, Item 4: Publishing & Distribution */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-4 bg-white p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[280px] md:min-h-[320px] rounded-[16px] border border-neutral-200/80 shadow-sm transform-gpu"
          >
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 uppercase mb-3 font-sans">
              Publishing & Distribution
            </h3>
            <p className="text-xs sm:text-sm font-medium text-neutral-500 max-w-[220px] mb-6 leading-relaxed">
              Modern regional print networks and international digital distribution
            </p>
            <div className="flex gap-6 text-rose-600/60">
               <Settings size={24} />
               <Zap size={24} />
               <Star size={24} />
            </div>
          </motion.div>

        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Row 2, Item 1: Critical Acclaim */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 bg-white p-8 sm:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[400px] rounded-[16px] border border-neutral-200/80 shadow-sm relative overflow-hidden transform-gpu"
          >
            <div>
              <h3 className="text-lg font-mono font-bold tracking-tight text-neutral-400 uppercase mb-1">Critical Acclaim</h3>
              <div className="text-6xl sm:text-7xl font-black text-rose-600 tracking-tighter leading-none mb-3 font-sans">98%</div>
              <p className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest">Positive Global Press Reviews</p>
            </div>
            <div className="absolute right-0 bottom-0 w-3/5 h-3/5 opacity-90">
               <img 
                 src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" 
                 alt="Library or Studio" 
                 className="w-full h-full object-cover object-bottom rounded-tl-2xl border-t border-l border-neutral-200"
                 referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>

          {/* Row 2, Item 2: Flexible & Scalable Residencies */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-4 bg-white p-8 sm:p-10 flex flex-col justify-center min-h-[360px] md:min-h-[400px] rounded-[16px] border border-neutral-200/80 shadow-sm relative overflow-hidden transform-gpu"
          >
            <div className="relative z-10">
              <div className="flex gap-2 mb-4">
                 <Settings size={18} className="text-rose-600/40" />
                 <Zap size={18} className="text-rose-600/40" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-rose-600 uppercase mb-3 leading-none font-sans">
                Flexible & Scalable Residencies
              </h3>
              <p className="text-sm md:text-base font-medium text-neutral-600 max-w-xs leading-relaxed">
                Tailored mentorship and residency programs for poets, novelists, and children's book illustrators.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
               <div className="w-[350px] h-[350px] border border-neutral-900 rounded-full" />
               <div className="absolute w-[250px] h-[250px] border border-neutral-900 rounded-full" />
               <div className="absolute w-[150px] h-[150px] border border-neutral-900 rounded-full" />
            </div>
          </motion.div>

          {/* Row 2, Item 3: Dedicated Cultural Support */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4 bg-neutral-950 flex flex-col justify-between min-h-[360px] md:min-h-[400px] rounded-[16px] border border-neutral-800 shadow-md overflow-hidden relative group transform-gpu"
          >
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" 
              alt="Dedicated Assistance" 
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
            
            <div className="p-8 sm:p-10 relative z-10 text-white space-y-3">
              <div className="flex gap-1 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-rose-500 fill-rose-500" />)}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none font-sans">
                Dedicated Cultural Leadership
              </h3>
              <div className="bg-rose-600 text-white px-3 py-1 inline-block font-mono font-bold text-[10px] uppercase tracking-widest rounded-sm">
                100% African Narrative Ownership
              </div>
            </div>
            
            <div className="p-8 sm:p-10 relative z-10 text-white">
              <p className="text-xs sm:text-sm font-medium leading-relaxed max-w-xs text-neutral-300">
                Round-the-clock editorial curation, festival logistics, and international publishing support.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface PoetryItem {
  id: string;
  title: string;
  year: string;
  image: string;
  desc: string;
  tag: string;
}

export const POETRY_COLLECTIONS: PoetryItem[] = [
  {
    id: "egg",  
    title: "So All the Time I Was Sitting on an Egg",
    year: "1997",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg",
    desc: "A ground-breaking debut exploration of personal autonomy, motherhood, and Nigerian womanhood.",
    tag: "DEBUT COLLECTION"
  },
  {
    id: "riverbird",
    title: "Song of a Riverbird",
    year: "2002",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.18.54.jpeg",
    desc: "A poignant verse anthology capturing memories of Nigeria, riverine life, and deep emotional longing.",
    tag: "LYRICAL VERSE"
  },
  {
    id: "flight",
    title: "For the Love of Flight",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.20.13.jpeg",
    desc: "A masterful, highly lyrical reflection on liberty, personal boundaries, and creative flight.",
    tag: "FEATURED ANTHOLOGY"
  }
];

interface PoetrySectionProps {
  theme?: "dark" | "light";
}

export default function PoetrySection({ theme = "light" }: PoetrySectionProps) {
  const navigate = useNavigate();
  const isDark = theme === "dark";
  const [activeModalItem, setActiveModalItem] = useState<PoetryItem | null>(null);

  return (
    <section className={`py-16 md:py-20 px-6 md:px-12 ${isDark ? "bg-neutral-950 text-white border-t border-neutral-800" : "bg-white text-neutral-900"}`}>
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-8 ${isDark ? "border-white/10" : "border-neutral-200"}`}>
          <div className="space-y-3">
            <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full ${isDark ? "bg-rose-950/80 border border-rose-800/50" : "bg-rose-50 border border-rose-200"}`}>
              <Sparkles size={13} className="text-rose-600 animate-pulse" />
              <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${isDark ? "text-rose-300" : "text-rose-700"}`}>
                VERSE & POETRY ANTHOLOGIES
              </span>
            </div>
            <h2 className={`font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight ${isDark ? "text-white" : "text-neutral-950"}`}>
              Poetry Anthologies
            </h2>
            <p className={`font-sans text-xs md:text-sm max-w-xl leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
              Resonant, deeply lyrical verse exploring themes of female autonomy, heritage, intimacy, and the rhythms of contemporary African life.
            </p>
          </div>
        </div>

        {/* Poetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-2">
          {POETRY_COLLECTIONS.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              onClick={() => setActiveModalItem(p)}
              className="relative group cursor-pointer flex flex-col space-y-4"
            >
              {/* CLEAN BOOK COVER IMAGE */}
              <div className="relative w-full aspect-[3/4.2] rounded-[6px] overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 ease-out group-hover:-translate-y-2 bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* CONTENT STRICTLY UNDERNEATH THE BOOK */}
              <div className="space-y-2 text-left pt-1">
                
                {/* Year & Tag Badge */}
                <div className="flex items-center space-x-2">
                  <span className={`font-mono text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-[2px] ${
                    isDark ? "bg-rose-950 text-rose-300 border border-rose-800/60" : "bg-rose-100 text-rose-800 font-bold"
                  }`}>
                    {p.year}
                  </span>
                  <span className={`font-mono text-[10px] font-bold tracking-wider uppercase ${
                    isDark ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-serif font-extrabold text-lg sm:text-xl md:text-2xl leading-snug group-hover:text-rose-600 transition-colors ${
                  isDark ? "text-white" : "text-neutral-950"
                }`}>
                  {p.title}
                </h3>

                {/* Author */}
                <p className={`font-sans text-xs sm:text-sm font-semibold ${isDark ? "text-rose-400" : "text-neutral-500"}`}>
                  By Lola Shoneyin
                </p>

                {/* Description */}
                <p className={`font-sans text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                  isDark ? "text-neutral-300" : "text-neutral-600"
                }`}>
                  {p.desc}
                </p>

                {/* CTA Link */}
                <div className="pt-2 flex items-center text-xs font-mono text-rose-600 group-hover:text-rose-700 uppercase tracking-wider font-bold">
                  <span>View Details</span>
                  <ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* FULL COVER MODAL FOR POETRY */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 z-50 bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900 border border-white/15 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center text-left"
              >
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-30 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* FULL COVER IMAGE DISPLAY - NO CROPPING */}
                <div className="w-full md:w-1/2 min-h-[260px] max-h-[50vh] md:max-h-[60vh] relative shrink-0 rounded-lg overflow-hidden bg-neutral-950 border border-white/10 flex items-center justify-center p-2">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-contain max-h-[48vh] rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BOOK DETAILS */}
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-rose-950/80 border border-rose-800/50 px-3 py-1 rounded-full text-rose-300 font-mono text-xs uppercase font-bold tracking-wider">
                    <Sparkles size={12} />
                    <span>{activeModalItem.tag} • {activeModalItem.year}</span>
                  </div>

                  <div>
                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                      {activeModalItem.title}
                    </h3>
                    <p className="text-sm font-sans font-semibold text-rose-400 pt-1">
                      By Lola Shoneyin
                    </p>
                  </div>

                  <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
                    {activeModalItem.desc}
                  </p>

                  <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 font-mono">
                    <span>Genre: </span>
                    <span className="text-neutral-200 font-bold">Poetry Collection</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}


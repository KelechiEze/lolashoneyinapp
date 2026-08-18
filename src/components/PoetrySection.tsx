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
    tag: "POETRY"
  },
  {
    id: "riverbird",
    title: "Song of a Riverbird",
    year: "2002",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.18.54.jpeg",
    desc: "A poignant verse work capturing memories of Nigeria, riverine life, and deep emotional longing.",
    tag: "POETRY"
  },
  {
    id: "flight",
    title: "For the Love of Flight",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.20.13.jpeg",
    desc: "A masterful, highly lyrical reflection on liberty, personal boundaries, and creative flight.",
    tag: "POETRY"
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
            <h2 className={`font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight ${isDark ? "text-white" : "text-neutral-950"}`}>
              Poetry
            </h2>
            <p className={`font-sans text-xs md:text-sm max-w-xl leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
              Resonant, deeply lyrical verse exploring themes of female autonomy, heritage, intimacy, and the rhythms of contemporary African life.
            </p>
          </div>
        </div>

        {/* Poetry Grid - Constrained to 5 columns / matching prose book size */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 pt-2">
          {POETRY_COLLECTIONS.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
              onClick={() => setActiveModalItem(p)}
              className="relative group cursor-pointer flex flex-col space-y-3"
            >
              {/* BOOK COVER IMAGE - MATCHING PROSE BOOKS SIZE & ASPECT RATIO */}
              <div className="relative aspect-[3/4.7] w-full rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1 bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* CONTENT STRICTLY UNDERNEATH THE BOOK: JUST YEAR, TITLE & AUTHOR */}
              <div className="space-y-1.5 text-left pt-1">
                
                {/* Year & Tag Badge */}
                <div className="flex items-center space-x-2">
                  <span className={`font-mono text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md ${
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
                <h3 className={`font-serif font-extrabold text-base sm:text-lg leading-snug group-hover:text-rose-600 transition-colors ${
                  isDark ? "text-white" : "text-neutral-950"
                }`}>
                  {p.title}
                </h3>

                {/* Author */}
                <p className={`font-sans text-xs font-semibold ${isDark ? "text-rose-400" : "text-neutral-500"}`}>
                  By Lola Shoneyin
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* FULL COVER MODAL FOR POETRY - WHITE BACKGROUND */}
        <AnimatePresence>
          {activeModalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch text-left"
              >
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-600 hover:text-neutral-900 bg-white/80 hover:bg-white rounded-full transition-colors z-30 cursor-pointer shadow-md"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* FULL COVER IMAGE DISPLAY - NO CROPPING */}
                <div className="w-full md:w-2/5 min-h-[300px] md:min-h-[400px] relative shrink-0 rounded-lg overflow-hidden bg-neutral-100 flex items-center justify-center p-3">
                  <img
                    src={activeModalItem.image}
                    alt={activeModalItem.title}
                    className="w-full h-full object-contain max-h-[50vh] drop-shadow-md"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BOOK DETAILS - WHITE BACKGROUND */}
                <div className="w-full md:w-3/5 space-y-4 flex flex-col justify-center text-left">
                  <div>
                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-neutral-900 tracking-tight leading-snug">
                      {activeModalItem.title}
                    </h3>
                    <p className="text-sm font-sans font-medium text-neutral-600 pt-1">
                      By Lola Shoneyin
                    </p>
                  </div>

                  <p className="text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
                    {activeModalItem.desc}
                  </p>

                  <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-500 font-mono flex items-center justify-between">
                    <span>Genre: <strong className="text-neutral-800 font-bold">Poetry Collection</strong></span>
                    <span>Year: <strong className="text-neutral-800 font-bold">{activeModalItem.year}</strong></span>
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


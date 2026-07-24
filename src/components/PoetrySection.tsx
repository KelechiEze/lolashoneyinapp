import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, ArrowUpRight } from "lucide-react";
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

export default function PoetrySection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 md:px-12 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-rose-950/80 border border-rose-800/50 px-3.5 py-1.5 rounded-full">
              <Sparkles size={13} className="text-rose-400 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-rose-300 font-bold">
                VERSE & POETRY ANTHOLOGIES
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Poetry Anthologies
            </h2>
            <p className="text-neutral-400 font-sans text-xs md:text-sm max-w-xl leading-relaxed">
              Resonant, deeply lyrical verse exploring themes of female autonomy, heritage, intimacy, and the rhythms of contemporary African life.
            </p>
          </div>

          <button
            onClick={() => {
              navigate("/books");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-2 bg-white hover:bg-rose-600 text-neutral-950 hover:text-white text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 shadow-md cursor-pointer outline-none group shrink-0"
          >
            <span>VIEW ALL BOOKS & WRITING</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Poetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-4">
          {POETRY_COLLECTIONS.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              onClick={() => {
                navigate("/books");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative group cursor-pointer flex flex-col items-center"
            >
              {/* 3D Standing Book Container */}
              <div className="relative w-full aspect-[3/4.2] rounded-none overflow-hidden bg-neutral-900 border-l-[6px] border-l-rose-700 border-t border-b border-r border-neutral-800 shadow-[12px_18px_30px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[20px_26px_45px_rgba(244,63,94,0.25)] z-10 flex flex-col justify-between p-5 transform-gpu">
                
                {/* 3D Page Stack on right edge */}
                <div className="absolute top-1.5 bottom-1.5 -right-3 w-3 bg-gradient-to-r from-amber-50 via-neutral-100 to-amber-100 border-r border-y border-neutral-300 shadow-md transition-transform duration-300 group-hover:translate-x-1.5 flex flex-col justify-between py-2 px-[1px] z-0 rounded-r-sm">
                  <div className="w-full h-full border-r border-dashed border-neutral-400/50 flex flex-col justify-around">
                    <div className="w-full h-[1px] bg-neutral-300" />
                    <div className="w-full h-[1px] bg-neutral-300" />
                    <div className="w-full h-[1px] bg-neutral-300" />
                  </div>
                </div>

                {/* Spine Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />

                {/* Real Poetry Cover Image */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 z-10" />
                </div>

                {/* Header Badge */}
                <div className="flex items-center justify-between z-20 relative">
                  <span className="font-mono text-[9px] font-black tracking-widest text-white bg-black/80 px-2.5 py-0.5 border border-white/20 uppercase rounded-none">
                    {p.year}
                  </span>
                  <span className="font-mono text-[8px] font-bold tracking-wider text-rose-300 bg-rose-950/80 border border-rose-700/50 px-2 py-0.5 uppercase">
                    {p.tag}
                  </span>
                </div>

                {/* Title and Metadata */}
                <div className="z-20 relative mt-auto pt-4 space-y-1.5 text-left">
                  <span className="font-mono text-[9px] text-amber-300 uppercase tracking-widest font-bold block">
                    POETRY • LOLA SHONEYIN
                  </span>
                  <h3 className="font-sans font-black text-lg sm:text-xl text-white tracking-tight leading-snug group-hover:text-rose-200 transition-colors uppercase">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-2 leading-relaxed pt-1 font-sans">
                    {p.desc}
                  </p>

                  <div className="pt-2 flex items-center text-[10px] font-mono text-rose-400 uppercase tracking-wider font-bold">
                    <span>Explore Poetry</span>
                    <ArrowUpRight size={12} className="ml-1" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

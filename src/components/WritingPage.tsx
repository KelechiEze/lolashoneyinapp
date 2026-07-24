import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Award, ArrowUpRight, Plus, Minus, Film, Radio, Music, Play } from "lucide-react";

interface TranslationItem {
  lang: string;
  title: string;
  url: string;
}

const TRANSLATIONS: TranslationItem[] = [
  { lang: "French", title: "Les vies secrètes des épouses de Baba Segi", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" },
  { lang: "German", title: "Die geheimen Leben der Frauen des Baba Segi", url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80" },
  { lang: "Spanish", title: "Las vidas secretas de las esposas de Baba Segi", url: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80" },
  { lang: "Italian", title: "Le vite segrete delle mogli di Baba Segi", url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80" },
  { lang: "Portuguese", title: "As Vidas Secretas das Mulheres de Baba Segi", url: "https://images.unsplash.com/photo-1509840144521-16a307abc22c?auto=format&fit=crop&w=600&q=80" },
  { lang: "Dutch", title: "De geheime levens van de vrouwen van Baba Segi", url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" },
  { lang: "Polish", title: "Sekretne życia żon Baby Segiego", url: "https://images.unsplash.com/photo-1495562569060-2eec283d5391?auto=format&fit=crop&w=600&q=80" },
  { lang: "Yoruba", title: "Ìgbésí Ayé Àṣírí Àwọn Iyawo Baba Segi", url: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=600&q=80" },
  { lang: "Swedish", title: "Baba Segis hustrus hemliga liv", url: "https://images.unsplash.com/photo-1504829857797-ddff28127792?auto=format&fit=crop&w=600&q=80" },
  { lang: "Arabic", title: "الحيوات السرية لزوجات بابا سيجي", url: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80" },
  { lang: "Swahili", title: "Maisha ya Siri ya Wake wa Baba Segi", url: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=600&q=80" },
  { lang: "Turkish", title: "Baba Segi'nin Karılarının Gizli Hayatları", url: "https://images.unsplash.com/photo-1527838832700-50592524df75?auto=format&fit=crop&w=600&q=80" },
  { lang: "Japanese", title: "ババ・セギの妻たちの秘密の生活", url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" }
];

export default function WritingPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Initially show 6 covers, load remaining 7 on click
  const visibleCovers = showAll ? TRANSLATIONS : TRANSLATIONS.slice(0, 6);

  const poetryCollections = [
    { title: "So All the Time I Was Sitting on an Egg", year: "1997", desc: "A ground-breaking debut exploration of personal autonomy, motherhood, and Nigerian womanhood." },
    { title: "Song of a Riverbird", year: "2002", desc: "A poignant verse anthology capturing memories of Nigeria, riverine life, and longing." },
    { title: "For the Love of Flight", year: "2010", desc: "A masterful, highly lyrical reflection on liberty, personal boundaries, and creative flight." }
  ];

  const childrenBooks = [
    { title: "Mayowa and the Masquerades", year: "2010" },
    { title: "Iyaji the House Girl", year: "2021" },
    { title: "Do As You're Told, Baji", year: "2022" },
    { title: "Jamila's Clever Plan", year: "2022" },
    { title: "A Durbar for Hassan and Hussaina", year: "2023" },
    { title: "Anyibo and the Mother Hen", year: "2023" },
    { title: "Pwada Can Do Anything", year: "2024" },
    { title: "Setto Saves the Trees", year: "2025" },
    { title: "Tunde Onakoya, The Chess Champion", year: "2025" },
    { title: "Dunoma the Brave", year: "2025" }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* HEADER SECTION */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            THE WRITING OF LOLA SHONEYIN
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Writing & Novels
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-2xl leading-relaxed">
            Empathetic, layered literature that places African perspectives and female voices at the core of the global imagination.
          </p>
        </div>

        {/* THE NOVEL CORE MODULE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-neutral-200 pt-16">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">THE NOVEL</span>
              <h2 className="font-sans font-black text-4xl md:text-5xl tracking-tight uppercase leading-none text-neutral-950">
                The Secret Lives of Baba Segi's Wives
              </h2>
            </div>
            
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">
              Lola Shoneyin's debut novel, published in 2010. When Baba Segi takes a fourth wife, the careful arrangements of his household begin to unravel. What follows is a story of women — their secrets, their survival, and the extraordinary lengths they will go to protect what little power they have.
            </p>

            {/* Awards list */}
            <div className="space-y-4 border-t border-b border-neutral-150 py-6">
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-500">Accolades & Nominations</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start space-x-3">
                  <Award size={18} className="text-rose-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-neutral-700 font-medium leading-normal">
                    Nominated for the <strong className="text-neutral-950">Orange Prize for Fiction</strong> (2011)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Award size={18} className="text-rose-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-neutral-700 font-medium leading-normal">
                    Winner of the <strong className="text-neutral-950">PEN Oakland Josephine Miles Literary Award</strong>
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Award size={18} className="text-rose-600 mt-0.5 shrink-0" />
                  <span className="text-xs text-neutral-700 font-medium leading-normal">
                    Winner of the <strong className="text-neutral-950">Ken Saro-Wiwa Prose Prize</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Adaptation section */}
            <div className="space-y-5 bg-neutral-50 p-8 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs uppercase tracking-wider text-neutral-900">Stage, Audio & Screen Adaptations</h4>
              
              <div className="space-y-4 font-sans text-xs text-neutral-700">
                <div className="flex items-start space-x-3">
                  <Play size={14} className="text-rose-600 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong className="text-neutral-950">Arcola Theatre, London:</strong> A full ensemble stage adaptation directed by Femi Elufowoju Jr played to sold-out audiences.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Play size={14} className="text-rose-600 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong className="text-neutral-950">One-Woman Show:</strong> Adapted & performed globally in both English and Spanish by Maimouna Jallow.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Radio size={14} className="text-rose-600 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong className="text-neutral-950">BBC Radio Play:</strong> Adapted as a highly acclaimed radio play.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Film size={14} className="text-rose-600 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">
                    <strong className="text-neutral-950">EbonyLife Film Adaptation:</strong> Scheduled for release on <strong className="text-rose-600 font-bold">4 December 2026</strong>.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right column: 13 translation covers styled as vertical standing books with open fanned pages */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h3 className="font-sans font-black text-xs uppercase tracking-widest text-neutral-400">Translation Covers</h3>
              <p className="text-xs text-neutral-500 font-sans">
                A visual showcase of the book's global footprint across thirteen vertical editions with open-page spreads.
              </p>
            </div>

            {/* 3 per grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
              <AnimatePresence mode="popLayout">
                {visibleCovers.map((item, idx) => (
                  <motion.div
                    key={item.lang}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 15,
                      delay: idx * 0.05 
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative group cursor-pointer"
                  >
                    {/* 3D Standing Book - Fanned Open Pages Layer (Right side page stack) */}
                    <div className="absolute top-1 bottom-1 -right-3 w-3 bg-gradient-to-r from-amber-50 via-neutral-100 to-amber-100 border-r border-y border-neutral-300/80 shadow-md transition-transform duration-300 group-hover:translate-x-1.5 flex flex-col justify-between py-1.5 px-[1px] z-0">
                      <div className="w-full h-full border-r border-dashed border-neutral-400/40 flex flex-col justify-around">
                        <div className="w-full h-[1px] bg-neutral-300/80" />
                        <div className="w-full h-[1px] bg-neutral-300/80" />
                        <div className="w-full h-[1px] bg-neutral-300/80" />
                        <div className="w-full h-[1px] bg-neutral-300/80" />
                        <div className="w-full h-[1px] bg-neutral-300/80" />
                      </div>
                    </div>

                    {/* Secondary fanned page layer for 3D depth */}
                    <div className="absolute top-2 bottom-2 -right-1.5 w-2 bg-neutral-200 border-r border-neutral-300 transition-transform duration-300 group-hover:translate-x-0.5 z-0" />

                    {/* Main Book Object - STRICTLY NO BORDER RADIUS (rounded-none) */}
                    <div className="relative aspect-[3/4.3] w-full rounded-none overflow-hidden bg-neutral-900 border-l-[6px] border-l-neutral-950 border-t border-b border-r border-neutral-800 shadow-[12px_16px_28px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[20px_24px_40px_rgba(0,0,0,0.45)] z-10">
                      
                      {/* Vertical Spine Crease Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-30 pointer-events-none border-r border-white/10" />

                      {/* Cover Photo */}
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={item.url}
                          alt={`${item.lang} Translation`}
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 group-hover:bg-black/55 transition-colors duration-500" />
                      </div>

                      {/* Cover Content / Typography Layout */}
                      <div className="absolute inset-0 p-5 pl-7 flex flex-col justify-between z-20">
                        {/* Top: Language Edition Badge */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] font-black tracking-[0.2em] text-rose-400 bg-neutral-950/80 border border-rose-500/30 px-2.5 py-1 rounded-none uppercase inline-block shadow-sm">
                            {item.lang}
                          </span>
                          <BookOpen size={13} className="text-white/60" />
                        </div>

                        {/* Center/Bottom Title */}
                        <div className="space-y-1.5">
                          <span className="font-mono text-[8px] text-rose-300 uppercase tracking-widest block font-bold">
                            LOLA SHONEYIN
                          </span>
                          <h4 className="font-sans font-black text-sm sm:text-base text-white tracking-tight leading-snug drop-shadow-md select-none group-hover:text-rose-200 transition-colors duration-300">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {/* Pop-up Red Arrow Hover Indicator */}
                      <AnimatePresence>
                        {hoveredIdx === idx && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0, rotate: -45 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="absolute inset-0 m-auto w-11 h-11 bg-rose-600 rounded-none flex items-center justify-center text-white shadow-xl pointer-events-none z-30 border border-white/20"
                          >
                            <ArrowUpRight size={20} className="stroke-[2.5]" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button - Pill Shaped Black with White Hover (from video!) */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group relative inline-flex items-center space-x-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 shadow-md cursor-pointer outline-none"
              >
                <span>{showAll ? "Show Less" : "Load More"}</span>
                {showAll ? (
                  <Minus size={14} className="stroke-[2.5]" />
                ) : (
                  <Plus size={14} className="stroke-[2.5]" />
                )}
              </button>
            </div>

          </div>

        </div>

        {/* POETRY SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-neutral-200 pt-16 space-y-8 transform-gpu"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">VERSE COLLECTION</span>
            <h2 className="font-sans font-black text-4xl tracking-tight uppercase text-neutral-950">
              Poetry Anthologies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {poetryCollections.map((p, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="relative group cursor-pointer"
              >
                {/* 3D Standing Book - Fanned Open Pages Layer (Right side page stack) */}
                <div className="absolute top-1 bottom-1 -right-3 w-3 bg-gradient-to-r from-amber-50 via-neutral-100 to-amber-100 border-r border-y border-neutral-300/80 shadow-md transition-transform duration-300 group-hover:translate-x-1.5 flex flex-col justify-between py-1.5 px-[1px] z-0">
                  <div className="w-full h-full border-r border-dashed border-neutral-400/40 flex flex-col justify-around">
                    <div className="w-full h-[1px] bg-neutral-300/80" />
                    <div className="w-full h-[1px] bg-neutral-300/80" />
                    <div className="w-full h-[1px] bg-neutral-300/80" />
                  </div>
                </div>

                {/* Main Vertical Poetry Book - STRICTLY NO BORDER RADIUS (rounded-none) */}
                <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-950 to-black border-l-[6px] border-l-rose-700 border-t border-b border-r border-neutral-800 p-7 shadow-[12px_16px_28px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[20px_24px_40px_rgba(0,0,0,0.45)] z-10 flex flex-col justify-between">
                  {/* Spine Crease */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <span className="font-mono text-[10px] font-black tracking-widest text-rose-400 bg-rose-950/60 border border-rose-800/40 px-2.5 py-1 rounded-none uppercase">
                      {p.year}
                    </span>
                    <BookOpen size={16} className="text-rose-400" />
                  </div>

                  <div className="space-y-3 z-10 my-auto py-2">
                    <span className="text-[9px] font-mono text-rose-300 uppercase tracking-widest font-bold block">
                      POETRY COLLECTION • LOLA SHONEYIN
                    </span>
                    <h3 className="font-sans font-black text-xl text-white tracking-tight leading-snug group-hover:text-rose-200 transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[9px] font-mono tracking-widest text-rose-400 uppercase font-black z-10">
                    LOLA SHONEYIN VERSE
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CHILDREN'S BOOKS SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-neutral-200 pt-16 space-y-8 transform-gpu"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">YOUNG READER INITIATIVES</span>
            <h2 className="font-sans font-black text-4xl tracking-tight uppercase text-neutral-950">
              Children's Books
            </h2>
            <p className="text-neutral-600 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
              Whimsical, instructive stories placing Nigerian children at the center of their own adventures, reinforcing agency, cultural appreciation, and creative pride.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-4">
            {childrenBooks.map((b, idx) => {
              const palettes = [
                { bg: "bg-gradient-to-b from-rose-950 via-rose-900 to-neutral-950", border: "border-rose-500/30", text: "text-rose-300", accent: "text-rose-400" },
                { bg: "bg-gradient-to-b from-amber-950 via-amber-900 to-neutral-950", border: "border-amber-500/30", text: "text-amber-300", accent: "text-amber-400" },
                { bg: "bg-gradient-to-b from-emerald-950 via-emerald-900 to-neutral-950", border: "border-emerald-500/30", text: "text-emerald-300", accent: "text-emerald-400" },
                { bg: "bg-gradient-to-b from-indigo-950 via-indigo-900 to-neutral-950", border: "border-indigo-500/30", text: "text-indigo-300", accent: "text-indigo-400" },
                { bg: "bg-gradient-to-b from-purple-950 via-purple-900 to-neutral-950", border: "border-purple-500/30", text: "text-purple-300", accent: "text-purple-400" },
                { bg: "bg-gradient-to-b from-teal-950 via-teal-900 to-neutral-950", border: "border-teal-500/30", text: "text-teal-300", accent: "text-teal-400" },
                { bg: "bg-gradient-to-b from-neutral-900 via-stone-900 to-neutral-950", border: "border-amber-500/40", text: "text-amber-200", accent: "text-amber-400" },
                { bg: "bg-gradient-to-b from-red-950 via-red-900 to-neutral-950", border: "border-red-500/30", text: "text-red-300", accent: "text-red-400" },
                { bg: "bg-gradient-to-b from-blue-950 via-blue-900 to-neutral-950", border: "border-blue-500/30", text: "text-blue-300", accent: "text-blue-400" },
                { bg: "bg-gradient-to-b from-orange-950 via-amber-950 to-neutral-950", border: "border-amber-500/30", text: "text-amber-300", accent: "text-amber-400" },
              ];
              const theme = palettes[idx % palettes.length];

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                  className="relative group cursor-pointer"
                >
                  {/* 3D Standing Book - Fanned Open Pages Layer (Right side page stack) */}
                  <div className="absolute top-1 bottom-1 -right-2.5 w-2.5 bg-gradient-to-r from-amber-50 via-neutral-100 to-amber-100 border-r border-y border-neutral-300/80 shadow-md transition-transform duration-300 group-hover:translate-x-1 flex flex-col justify-between py-1.5 px-[1px] z-0">
                    <div className="w-full h-full border-r border-dashed border-neutral-400/40 flex flex-col justify-around">
                      <div className="w-full h-[1px] bg-neutral-300/80" />
                      <div className="w-full h-[1px] bg-neutral-300/80" />
                      <div className="w-full h-[1px] bg-neutral-300/80" />
                      <div className="w-full h-[1px] bg-neutral-300/80" />
                    </div>
                  </div>

                  {/* Main Standing Vertical Hardcover Book - STRICTLY NO BORDER RADIUS (rounded-none) */}
                  <div className={`relative aspect-[3/4.2] w-full rounded-none overflow-hidden ${theme.bg} border-l-[5px] border-l-black border-t border-b border-r ${theme.border} shadow-[10px_14px_24px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[16px_20px_34px_rgba(0,0,0,0.45)] z-10 flex flex-col justify-between p-4 pl-6`}>
                    
                    {/* Spine crease line */}
                    <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

                    {/* Book Top Header / Year */}
                    <div className="flex items-center justify-between z-10">
                      <span className="font-mono text-[9px] font-black tracking-widest text-white/80 bg-black/40 px-2 py-0.5 border border-white/10 uppercase rounded-none">
                        {b.year}
                      </span>
                      <BookOpen size={12} className={theme.accent} />
                    </div>

                    {/* Center Cover Title */}
                    <div className="my-auto py-2 z-10 space-y-1">
                      <div className="w-6 h-[1.5px] bg-white/30 mb-2" />
                      <h4 className="font-sans font-black text-xs sm:text-sm text-white uppercase tracking-tight leading-snug drop-shadow-md group-hover:text-amber-200 transition-colors">
                        {b.title}
                      </h4>
                      <p className={`font-mono text-[8px] uppercase tracking-wider font-bold ${theme.accent}`}>
                        Lola Shoneyin
                      </p>
                    </div>

                    {/* Book Bottom Foundation Crest */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between z-10">
                      <span className="text-[8px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                        Book Buzz
                      </span>
                      <span className="text-[8px] font-mono text-white/40">
                        CHILDREN
                      </span>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

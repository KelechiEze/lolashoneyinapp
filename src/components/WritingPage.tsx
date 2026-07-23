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

          {/* Right column: 13 translation covers styled EXACTLY like the Norell Works page in the video */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h3 className="font-sans font-black text-xs uppercase tracking-widest text-neutral-400">Translation Covers</h3>
              <p className="text-xs text-neutral-500 font-sans">
                A visual showcase of the book's global footprint across thirteen editions.
              </p>
            </div>

            {/* 3 per grid - matches 'you can make it three per grid' perfectly! */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-neutral-100"
                  >
                    {/* Background image which blurs and zooms on hover */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={item.url}
                        alt={`${item.lang} Translation`}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 group-hover:blur-[2px] transition-all duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dark overlay with dynamic opacity change */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:bg-black/60 transition-colors duration-500" />
                    </div>

                    {/* Content inside the card */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-15">
                      
                      {/* Top label / Language */}
                      <div>
                        <span className="font-mono text-[9px] font-black tracking-widest text-rose-500 bg-black/40 px-2.5 py-1 rounded-full uppercase inline-block border border-white/5">
                          {item.lang}
                        </span>
                      </div>

                      {/* Center branding/title styled exactly as the video (white logo text overlay style) */}
                      <div className="space-y-2 text-center md:text-left">
                        <h4 className="font-sans font-black text-lg md:text-xl text-white tracking-tight leading-snug drop-shadow-md select-none group-hover:text-rose-300 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="font-mono text-[9px] text-neutral-400 tracking-wider uppercase font-bold">
                          Lola Shoneyin
                        </p>
                      </div>

                    </div>

                    {/* Pop-up Red Diagonal Arrow Circle Hover Indicator (Norell design!) */}
                    <AnimatePresence>
                      {hoveredIdx === idx && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotate: -45 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0, rotate: -45 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute inset-0 m-auto w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-lg pointer-events-none z-20"
                        >
                          <ArrowUpRight size={20} className="stroke-[2.5]" />
                        </motion.div>
                      )}
                    </AnimatePresence>

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
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-neutral-50 border border-neutral-200 rounded-[20px] p-8 flex flex-col justify-between space-y-8 hover:shadow-md hover:border-neutral-300 transition-all duration-300 group cursor-pointer transform-gpu"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-rose-50 rounded-full text-rose-600 group-hover:scale-110 transition-transform">
                      <BookOpen size={18} />
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">{p.year}</span>
                  </div>
                  <h3 className="font-sans font-extrabold text-xl text-neutral-900 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="text-[10px] font-mono tracking-widest text-rose-600 uppercase font-black">
                  Published Work
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {childrenBooks.map((b, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-neutral-50 hover:bg-neutral-100/60 border border-neutral-200 rounded-[16px] p-6 flex flex-col justify-between h-40 transition-all duration-300 shadow-sm group cursor-pointer transform-gpu"
              >
                <span className="font-mono text-[10px] text-neutral-500 font-bold group-hover:text-rose-600 transition-colors">
                  {b.year}
                </span>
                <div className="space-y-1">
                  <h4 className="font-sans font-black text-xs md:text-sm text-neutral-800 uppercase tracking-tight group-hover:text-neutral-950 transition-colors">
                    {b.title}
                  </h4>
                  <p className="text-[9px] font-sans text-neutral-400 uppercase tracking-wider">
                    Book Buzz Edition
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

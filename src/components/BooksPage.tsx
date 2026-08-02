import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Award, ArrowUpRight, Film, Radio, Play, X, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import HorizontalScrollSection, { CHILDREN_BOOKS_DATA, ChildrenBookItem } from "./HorizontalScrollSection";
import PoetrySection, { POETRY_COLLECTIONS } from "./PoetrySection";
import BibliographyGridSection from "./BibliographyGridSection";

interface TranslationItem {
  lang: string;
  title: string;
  url: string;
}

const TRANSLATIONS: TranslationItem[] = [
  { lang: "French", title: "Les vies secrètes des épouses de Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38.jpeg" },
  { lang: "English (Edition)", title: "The Secret Lives of Baba Segi's Wives", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg" },
  { lang: "Spanish", title: "Las vidas secretas de las esposas de Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_02_32-pm.png" },
  { lang: "German", title: "Die geheimen Leben der Frauen des Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_08_04-pm.png" },
  { lang: "Yoruba", title: "Ìgbésí Ayé Àṣírí Àwọn Iyawo Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_11_34-pm.png" },
  { lang: "Arabic", title: "الحيوات السرية لزوجات بابا سيجي", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_14_17-pm.png" },
  { lang: "Italian", title: "Le vite segrete delle mogli di Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg" },
  { lang: "Portuguese", title: "As Vidas Secretas das Mulheres de Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38.jpeg" },
  { lang: "Dutch", title: "De geheime levens van de vrouwen van Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_02_32-pm.png" },
  { lang: "Polish", title: "Sekretne życia żon Baby Segiego", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_08_04-pm.png" },
  { lang: "Swedish", title: "Baba Segis hustrus hemliga liv", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_02_32-pm.png" },
  { lang: "Swahili", title: "Maisha ya Siri ya Wake wa Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_14_17-pm.png" }
];

export default function BooksPage() {
  const location = useLocation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeModalBook, setActiveModalBook] = useState<ChildrenBookItem | null>(null);

  useEffect(() => {
    if (location.state && (location.state as { selectedBookId?: string }).selectedBookId) {
      const bookId = (location.state as { selectedBookId?: string }).selectedBookId;
      const found = CHILDREN_BOOKS_DATA.find((b) => b.id === bookId);
      if (found) {
        setActiveModalBook(found);
      }
      setTimeout(() => {
        const elem = document.getElementById("childrens-books-section");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.state]);

  const visibleCovers = TRANSLATIONS;

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* HEADER SECTION */}
        <div className="space-y-2 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            BOOKS & FICTION BY LOLA SHONEYIN
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Books
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-2xl leading-relaxed">
            Exploring polygamy, female power, identity, and African childhood through award-winning fiction, poetry, and children's literature.
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

          {/* Right column: 12 translation covers styled as clean, flat book covers */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h3 className="font-sans font-black text-xs uppercase tracking-widest text-neutral-400">Translation Covers</h3>
              <p className="text-xs text-neutral-500 font-sans">
                A visual showcase of the book's global footprint across international translation editions.
              </p>
            </div>

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
                    className="relative group cursor-pointer flex flex-col space-y-3"
                  >
                    {/* Clean Flat Book Cover */}
                    <div className="relative aspect-[3/4.7] w-full rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1">
                      {/* Vivid Image without container frames */}
                      <img
                        src={item.url}
                        alt={`${item.lang} Translation`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* CONTENT STRICTLY UNDERNEATH THE BOOK */}
                    <div className="space-y-1.5 text-left pt-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] font-black tracking-wider text-rose-800 bg-rose-100 px-2 py-0.5 uppercase rounded-sm font-bold">
                          {item.lang}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                          TRANSLATION
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-base text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <p className="font-sans text-xs font-semibold text-neutral-500">
                        By Lola Shoneyin
                      </p>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* BIBLIOGRAPHY & FEATURED WORKS SECTION */}
        <div className="border-t border-neutral-200 pt-12">
          <BibliographyGridSection />
        </div>

        {/* POETRY SECTION */}
        <div className="border-t border-neutral-200 pt-8">
          <PoetrySection theme="light" />
        </div>

        {/* CHILDREN'S BOOKS SECTION */}
        <motion.div 
          id="childrens-books-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-neutral-200 pt-16 space-y-8 transform-gpu"
        >
          <div className="space-y-2">
            <h2 className="font-sans font-black text-4xl tracking-tight uppercase text-neutral-950">
              Children's Literature
            </h2>
            <p className="text-neutral-600 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
              Whimsical, instructive stories placing African children at the center of their own adventures — reinforcing agency, cultural appreciation, and creative pride. Click any book to inspect details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
            {CHILDREN_BOOKS_DATA.map((b, idx) => (
              <motion.div 
                key={b.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                onClick={() => setActiveModalBook(b)}
                className="relative group cursor-pointer flex flex-col space-y-3"
              >
                {/* Square Children's Book Cover Picture */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 ease-out group-hover:-translate-y-2 z-10">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* CONTENT STRICTLY UNDERNEATH */}
                <div className="space-y-1.5 text-left pt-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[10px] font-black tracking-widest text-rose-800 bg-rose-100 px-2 py-0.5 uppercase rounded-md font-bold">
                      {b.year}
                    </span>
                  </div>

                  <h4 className="font-serif font-extrabold text-base md:text-lg text-neutral-950 tracking-tight leading-snug group-hover:text-rose-600 transition-colors">
                    {b.title}
                  </h4>

                  <p className="font-sans text-xs font-semibold text-neutral-500">
                    By Lola Shoneyin
                  </p>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {b.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOOK MODAL */}
        <AnimatePresence>
          {activeModalBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalBook(null)}
              className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900 border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden flex flex-col md:flex-row gap-6 items-center"
              >
                <button
                  onClick={() => setActiveModalBook(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-black/40 hover:bg-black/80 rounded-full transition-colors z-30 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="w-full md:w-1/2 aspect-[3/4.2] relative shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-neutral-950">
                  <img
                    src={activeModalBook.image}
                    alt={activeModalBook.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="w-full md:w-1/2 space-y-4 text-left">
                  <div className="inline-flex items-center space-x-2 bg-rose-950/80 border border-rose-800/50 px-3 py-1 rounded-full text-rose-300 font-mono text-[10px] uppercase font-bold tracking-wider">
                    <Sparkles size={12} />
                    <span>{activeModalBook.tag} • {activeModalBook.year}</span>
                  </div>

                  <div>
                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight">
                      {activeModalBook.title}
                    </h3>
                    <p className="text-xs font-mono text-rose-400 font-bold uppercase tracking-widest pt-1">
                      Author: Lola Shoneyin
                    </p>
                  </div>

                  <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
                    {activeModalBook.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>Publisher: Book Buzz Foundation</span>
                    <span className="text-amber-400 font-bold">Children's Series</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

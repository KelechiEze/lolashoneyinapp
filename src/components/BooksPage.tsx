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

interface GenericModalBook {
  id: string;
  title: string;
  author: string;
  image: string;
  tag?: string;
  year?: string;
  description: string;
  publisher?: string;
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
  const [activeModalBook, setActiveModalBook] = useState<GenericModalBook | null>(null);

  useEffect(() => {
    if (location.state && (location.state as { selectedBookId?: string }).selectedBookId) {
      const bookId = (location.state as { selectedBookId?: string }).selectedBookId;
      const found = CHILDREN_BOOKS_DATA.find((b) => b.id === bookId);
      if (found) {
        setActiveModalBook({
          id: found.id,
          title: found.title,
          author: "Lola Shoneyin",
          image: found.image,
          tag: found.tag,
          year: found.year,
          description: found.description,
          publisher: "Book Buzz Foundation / Ouida Books"
        });
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

        {/* THE NOVEL CORE MODULE - WITH STICKY LEFT COLUMN */}
        <div id="prose" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-neutral-200 pt-16 scroll-mt-28">
          
          {/* Left info column - Sticky on desktop */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-3">
              <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">THE NOVEL</span>
              <h2 className="font-sans font-black text-4xl md:text-5xl tracking-tight uppercase leading-none text-neutral-950">
                The Secret Lives of Baba Segi's Wives
              </h2>
            </div>
            
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text font-medium">
              The Secret Lives of Baba Segi's Wives is Lola Shoneyin's debut novel, published in 2010. When Baba Segi takes a fourth wife, the careful arrangements of his household begin to unravel. What follows is a story of women, their secrets, their survival, and the extraordinary lengths they will go to protect what little power they have.
            </p>

            {/* Accolades list */}
            <div className="space-y-4 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <div className="flex items-center space-x-3 text-neutral-950">
                <Award size={22} className="text-rose-600 shrink-0" />
                <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider leading-none">
                  Accolades, Awards & Stage Rights
                </h4>
              </div>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                The novel was nominated for the Orange Prize for Fiction in 2011 and won the PEN Oakland Josephine Miles Literary Award and the Ken Saro-Wiwa Prose Prize. Stage rights are held by Lola Shoneyin.
              </p>
            </div>

            {/* Adaptation section */}
            <div className="space-y-4 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950">
                Stage, Audio & Screen Adaptations
              </h4>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                The novel has had two stage adaptations. A full ensemble production directed by Femi Elufowoju Jr played to sold-out audiences at the Arcola Theatre in London. A one-woman show adapted and performed by Maimouna Jallow has been performed in both English and Spanish. The novel was also adapted as a BBC radio play. An EbonyLife film adaptation is set for release on 4 December 2026.
              </p>
            </div>

            {/* Fun Fact Block */}
            <div className="space-y-3 bg-rose-50/80 p-6 sm:p-7 rounded-[16px] border border-rose-200">
              <div className="flex items-center space-x-2 text-rose-800 font-mono text-xs uppercase font-bold tracking-wider">
                <Sparkles size={16} className="text-rose-600" />
                <span>Fun Fact</span>
              </div>
              <p className="text-neutral-800 font-serif italic text-xs sm:text-sm leading-relaxed">
                "In 2016, I got this message from Eva Erny, “Half a year ago I received your book from my husband as a present. It has made such a deep impression on me, that I actually dreamt about the characters. Thereafter I started painting them.” She had never been to Nigeria before, so all the paintings were from online research about the places and the people."
              </p>
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
                    onClick={() => setActiveModalBook({
                      id: `translation-${item.lang}`,
                      title: item.title,
                      author: "Lola Shoneyin",
                      image: item.url,
                      tag: `${item.lang} Edition`,
                      year: "2010+",
                      description: `The international ${item.lang} translation edition of Lola Shoneyin's bestselling novel 'The Secret Lives of Baba Segi's Wives'.`,
                      publisher: "HarperCollins / Serpent's Tail / Ouida Books"
                    })}
                    className="relative group cursor-pointer flex flex-col space-y-3"
                  >
                    {/* Clean Flat Book Cover */}
                    <div className="relative aspect-[3/4.7] w-full rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1 bg-neutral-100">
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

                      <h4 className="font-serif font-extrabold text-base sm:text-lg text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
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
        <div id="poetry" className="border-t border-neutral-200 pt-8 scroll-mt-28">
          <PoetrySection theme="light" />
        </div>

        {/* CHILDREN'S BOOKS SECTION */}
        <motion.div 
          id="children"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-neutral-200 pt-16 space-y-8 transform-gpu scroll-mt-28"
        >
          <div className="space-y-4">
            <h2 className="font-sans font-black text-4xl tracking-tight uppercase text-neutral-950">
              Children's Literature
            </h2>
            <blockquote className="border-l-4 border-rose-600 pl-4 py-1 italic font-serif text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
              “My children’s books place underserved Nigerian children at the centre of their own adventures. I give my characters agency, humour and imagination. It is crucial that these books exist because Nigerian children deserve to see themselves in the pages of picturebooks.”
              <span className="block font-sans font-bold not-italic text-xs text-rose-600 mt-1 uppercase tracking-wider">— Lola Shoneyin</span>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
            {CHILDREN_BOOKS_DATA.map((b, idx) => (
              <motion.div 
                key={b.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
                onClick={() => setActiveModalBook({
                  id: b.id,
                  title: b.title,
                  author: "Lola Shoneyin",
                  image: b.image,
                  tag: b.tag,
                  year: b.year,
                  description: b.description,
                  publisher: "Book Buzz Foundation / Ouida Books"
                })}
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

                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {b.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BOOK MODAL - CENTERED PERFECTLY WITH FULL COVER DISPLAY */}
        <AnimatePresence>
          {activeModalBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalBook(null)}
              className="fixed inset-0 z-50 bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-neutral-900 border border-white/15 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center"
              >
                <button
                  onClick={() => setActiveModalBook(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors z-30 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* FULL COVER IMAGE DISPLAY - NO CROPPING */}
                <div className="w-full md:w-1/2 min-h-[260px] max-h-[50vh] md:max-h-[60vh] relative shrink-0 rounded-lg overflow-hidden bg-neutral-950 border border-white/10 flex items-center justify-center p-2">
                  <img
                    src={activeModalBook.image}
                    alt={activeModalBook.title}
                    className="w-full h-full object-contain max-h-[48vh] rounded"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BOOK DETAILS */}
                <div className="w-full md:w-1/2 space-y-4 text-left">
                  {activeModalBook.tag && (
                    <div className="inline-flex items-center space-x-2 bg-rose-950/80 border border-rose-800/50 px-3 py-1 rounded-full text-rose-300 font-mono text-xs uppercase font-bold tracking-wider">
                      <Sparkles size={12} />
                      <span>{activeModalBook.tag} {activeModalBook.year ? `• ${activeModalBook.year}` : ""}</span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                      {activeModalBook.title}
                    </h3>
                    <p className="text-sm font-sans font-semibold text-rose-400 pt-1">
                      By {activeModalBook.author}
                    </p>
                  </div>

                  <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
                    {activeModalBook.description}
                  </p>

                  {activeModalBook.publisher && (
                    <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 font-mono">
                      <span>Publisher: </span>
                      <span className="text-neutral-200 font-bold">{activeModalBook.publisher}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

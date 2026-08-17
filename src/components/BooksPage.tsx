import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { CHILDREN_BOOKS_DATA } from "./HorizontalScrollSection";
import PoetrySection from "./PoetrySection";
import EssaysAndArticlesSection from "./EssaysAndArticlesSection";

interface TranslationItem {
  lang: string;
  title: string;
  url: string;
  isComingSoon?: boolean;
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
  // First three intact: English, French, German
  { lang: "English", title: "The Secret Lives of Baba Segi's Wives", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-05-at-19.16.18-1.jpeg" },
  { lang: "French", title: "Les vies secrètes des épouses de Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_02_32-pm.png" },
  { lang: "German", title: "Die geheimen Leben der Frauen des Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_08_04-pm.png" },
  { lang: "Lithuanian", title: "Slaptas Baba Segio žmonų gyvenimas", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-05-at-19.15.38.jpeg" },
  { lang: "Turkish", title: "Baba Segi'nin Karılarının Gizli Yaşamları", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-05_11_34-pm.png" },
  { lang: "Arabic", title: "الحيوات السرية لزوجات بابا سيجي", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-01.00.29.jpeg"},
  { lang: "Hebrew", title: "החיים הסודיים של נשות באבא סגי", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-00.59.44.jpeg"},
  { lang: "Italian", title: "Le vite segrete delle mogli di Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-01.04.24.jpeg"},
  { lang: "Norwegian", title: "Baba Segis koners hemmelige liv", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-01.03.46.jpeg" },
  { lang: "Slovak", title: "Tajný život manželiek Babu Segiho", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-02.03.56.jpeg" },
  { lang: "Dutch", title: "De geheime levens van de vrouwen van Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-02.01.57-1.jpeg"},
  { lang: "Spanish", title: "Las vidas secretas de las esposas de Baba Segi", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-10-at-02.06.41-1.jpeg" },
  { lang: "Malayalam", title: "The Secret Lives of Baba Segi's Wives (Malayalam)", url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-16-at-18.17.25.jpeg" },
  { lang: "Czech", title: "Tajný život manželek Baby Segiho", url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800" }
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
        const elem = document.getElementById("children");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.state]);

  const visibleCovers = TRANSLATIONS;

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* HEADER SECTION */}
        <div className="space-y-2 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            BOOKS & FICTION BY LOLA SHONEYIN
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Books & Writing
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-2xl leading-relaxed">
            Exploring polygamy, female power, identity, and African childhood through award-winning fiction, poetry, children's books, and essays.
          </p>
        </div>

        {/* 1. PROSE SECTION (THE NOVEL CORE MODULE - WITH STICKY LEFT COLUMN) */}
        <div id="prose" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-neutral-200 pt-16 scroll-mt-28">
          
          {/* Left info column - Sticky on desktop */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-3">
              <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">THE NOVEL</span>
              <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase leading-tight text-neutral-950">
                THE SECRET LIVES OF BABA SEGI'S WIVES (2010)
              </h2>
            </div>
            
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text font-medium">
              When Baba Segi takes a fourth wife, the careful arrangements of his household begin to unravel. What follows is a story of women, their secrets, their survival, and the extraordinary lengths they will go to protect what little power they have.
            </p>

            {/* AWARDS */}
            <div className="space-y-3 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950">
                AWARDS
              </h4>
              <ul className="space-y-1.5 text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                <li>Nominated, Orange Prize for Fiction, 2011</li>
                <li>Winner, Pen Oakland Josephine Miles Literary Award, 2011</li>
                <li>Winner, Ken Saro-Wiwa Prose Prize, 2011</li>
              </ul>
            </div>

            {/* AUDIO ADAPTATION */}
            <div className="space-y-3 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950">
                AUDIO ADAPTATION
              </h4>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                In November 2019, BBC Radio 3 aired the radio adaptation of The Secret Lives of Baba Segi’s Wives.
              </p>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                Under the Musical Direction of Femi Elufowoju, jr., percussion is performed by Sola Akingbola (head percussionist in the British jazz funk band Jamiroquai), the flute by Patrice Naiambana, and the songs by Ayo-Dele Edwards and Kemi Durosinmi.
              </p>
            </div>

            {/* STAGE ADAPTATIONS */}
            <div className="space-y-3 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950">
                STAGE ADAPTATIONS
              </h4>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                The novel has had two stage adaptations. A full ensemble production directed by Femi Elufowoju Jr performed to sold-out audiences at the Arcola Theatre in London in 2018 and 2026. The theatrical production received glowing reviews, including 5 stars in the Guardian: "The play's energy never dips and the effect is nothing short of spectacular." Elufowoju subsequently won the Best Director Award for an Off West-End Production at The Offies in 2019.
              </p>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                A one-woman show, adapted and performed by storyteller Maimouna Jallow, was first performed on 15 June 2017 to a full house at Nairobi’s Goethe Institute. She has since performed the show in English and Spanish in Scotland, Spain, United Arab Emirates and Nigeria.
              </p>
            </div>

            {/* SCREEN ADAPTATION */}
            <div className="space-y-3 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950">
                SCREEN ADAPTATION
              </h4>
              <p className="text-neutral-700 font-sans text-xs sm:text-sm leading-relaxed">
                An EbonyLife adaptation of The Secret Lives of Baba Segi’s Wives is set for worldwide release on 4 December 2026.
              </p>
            </div>

            {/* GRAPHIC NOVEL (UNPUBLISHED) */}
            <div className="space-y-3 bg-neutral-50 p-6 sm:p-7 rounded-[16px] border border-neutral-200">
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider text-neutral-950">
                GRAPHIC NOVEL (UNPUBLISHED)
              </h4>
              <blockquote className="text-neutral-800 font-serif italic text-xs sm:text-sm leading-relaxed">
                “Half a year ago I received your book from my husband as a present. It has made such a deep impression on me, that I actually dreamt about the characters. Thereafter I started painting them.”
              </blockquote>
              <span className="block font-sans font-bold text-xs text-neutral-600">
                - Eva Erny
              </span>
            </div>

          </div>

          {/* Right column: 13 translation covers styled as clean, flat book covers */}
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
                      <img
                        src={item.url}
                        alt={`${item.lang} Translation`}
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.isComingSoon ? "opacity-60 grayscale" : ""}`}
                        referrerPolicy="no-referrer"
                      />
                      {item.isComingSoon && (
                        <div className="absolute inset-0 bg-neutral-950/60 flex flex-col items-center justify-center p-3 text-center">
                          <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider bg-rose-600 px-2.5 py-1 rounded-sm shadow-md">
                            Cover Coming Soon
                          </span>
                        </div>
                      )}
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
                        {item.isComingSoon && (
                          <span className="font-mono text-[9px] font-bold text-rose-600 uppercase tracking-wider italic">
                            (Cover not available yet)
                          </span>
                        )}
                      </div>

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

        {/* 2. POETRY SECTION */}
        <div id="poetry" className="border-t border-neutral-200 pt-8 scroll-mt-28">
          <PoetrySection theme="light" />
        </div>

        {/* 3. CHILDREN'S BOOKS SECTION */}
        <motion.div 
          id="children"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-neutral-200 pt-20 md:pt-28 space-y-8 transform-gpu scroll-mt-28"
        >
          <div className="space-y-4">
            <h2 className="font-sans font-black text-4xl tracking-tight uppercase text-neutral-950">
              Children's Books
            </h2>
            <blockquote className="border-l-4 border-rose-600 pl-4 py-1 italic font-serif text-sm md:text-base text-neutral-700 max-w-3xl leading-relaxed">
              “My children's books place underserved Nigerian children at the centre of their own adventures. I give my characters agency, humour and imagination. It is crucial that these books exist because Nigerian children deserve to see themselves in the pages of picturebooks.”
              <span className="block font-sans font-bold not-italic text-xs text-rose-600 mt-1 uppercase tracking-wider">— Lola Shoneyin</span>
            </blockquote>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 pt-6">
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
                {/* Book Cover Image with prose books aspect ratio */}
                <div className="relative aspect-[3/4.7] w-full rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1 bg-neutral-100">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

        {/* 4. ESSAYS AND ARTICLES SECTION */}
        <EssaysAndArticlesSection />

        {/* BOOK MODAL - WHITE BACKGROUND WITH FULL COVER DISPLAY */}
        <AnimatePresence>
          {activeModalBook && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalBook(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row gap-6 md:gap-8 items-stretch"
              >
                <button
                  onClick={() => setActiveModalBook(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-600 hover:text-neutral-900 bg-white/80 hover:bg-white rounded-full transition-colors z-30 cursor-pointer shadow-md"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* FULL COVER IMAGE - TAKES FULL HEIGHT OF LEFT SIDE */}
                <div className="w-full md:w-2/5 min-h-[320px] md:min-h-[420px] relative shrink-0 rounded-lg overflow-hidden bg-neutral-100 flex items-center justify-center">
                  <img
                    src={activeModalBook.image}
                    alt={activeModalBook.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* BOOK DETAILS - WHITE BACKGROUND */}
                <div className="w-full md:w-3/5 space-y-4 text-left flex flex-col justify-center">
                  {activeModalBook.tag && (
                    <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full text-rose-700 font-mono text-xs uppercase font-bold tracking-wider">
                      <Sparkles size={12} />
                      <span>{activeModalBook.tag} {activeModalBook.year ? `• ${activeModalBook.year}` : ""}</span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-neutral-900 tracking-tight leading-snug">
                      {activeModalBook.title}
                    </h3>
                    <p className="text-sm font-sans font-semibold text-rose-600 pt-1">
                      By {activeModalBook.author}
                    </p>
                  </div>

                  <p className="text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
                    {activeModalBook.description}
                  </p>

                  {activeModalBook.publisher && (
                    <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-500 font-mono">
                      <span>Publisher: </span>
                      <span className="text-neutral-800 font-bold">{activeModalBook.publisher}</span>
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

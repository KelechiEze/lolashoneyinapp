import React, { useState } from "react";
import { Filter, ArrowRight, Mail, Search, X, Sparkles, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export interface BibliographyItem {
  id: string;
  type: "Novel" | "Poetry" | "Children's Book" | "Series" | "Essay" | "Article";
  title: string;
  year: string;
  publisherOrOutlet?: string;
  summary: string;
  image: string;
  tag?: string;
  author: string;
  url?: string;
}

export const BIBLIOGRAPHY_ITEMS: BibliographyItem[] = [
  {
    id: "baba-segi",
    type: "Novel",
    title: "The Secret Lives of Baba Segi's Wives",
    year: "2010",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Serpent's Tail / HarperCollins / Ouida Books",
    summary: "The Secret Lives of Baba Segi's Wives is Lola Shoneyin's debut novel, published in 2010. When Baba Segi takes a fourth wife, the careful arrangements of his household begin to unravel. What follows is a story of women, their secrets, their survival, and the extraordinary lengths they will go to protect what little power they have.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg",
    tag: "Orange Prize Nominee",
  },
  {
    id: "poetry-egg",
    type: "Poetry",
    title: "So All the Time I Was Sitting on an Egg",
    year: "1997",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Poetry",
    summary: "Lola Shoneyin's debut collection of poems offering lyrical reflections on womanhood, sexuality, memory, and personal sovereignty.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg",
    tag: "Poetry",
  },
  {
    id: "poetry-riverbird",
    type: "Poetry",
    title: "Song of a Riverbird",
    year: "2002",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Ovalode Publications",
    summary: "Her second collection of verse capturing African landscapes, political observation, intimacy, and social critique.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.18.54.jpeg",
    tag: "Poetry",
  },
  {
    id: "poetry-flight",
    type: "Poetry",
    title: "For the Love of Flight",
    year: "2010",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Cassava Republic Press",
    summary: "A celebrated third collection of mature poetry dealing with freedom, flight, domestic tension, and emotional courage.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.20.13.jpeg",
    tag: "Poetry",
  },
  {
    id: "essay-picturebook",
    type: "Essay",
    title: "Building a Nigerian Picturebook Ecosystem",
    year: "2026",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Publishing Perspectives",
    summary: "An essay on the gap between African and European children's publishing, and the training pipeline she built to close it: Bookstorm, the Nigerian Picture Book Project, LIFI, and the Centre for Illustrations, Nigeria.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800",
    tag: "Essay",
    url: "https://publishingperspectives.com/2026/06/building-a-nigerian-picturebook-ecosystem/"
  },
  {
    id: "essay-redtape",
    type: "Essay",
    title: "Red Tape, Black Culture",
    year: "2024",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Decolonial Hacker",
    summary: "A commissioned essay tracing \"red tape\" from Henry VIII to Nigeria's cultural bureaucracy, indicting the officials who reduce culture to spectacle then smother real creativity with paperwork. Edited by Adania Shibli.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
    tag: "Commissioned Essay",
    url: "https://decolonialhacker.org/article/red-tape-black-culture"
  },
  {
    id: "essay-nostalgia",
    type: "Essay",
    title: "Nostalgia is an Extreme Sport",
    year: "2021",
    author: "Lola Shoneyin",
    publisherOrOutlet: "In Of This Our Country (The Borough Press / HarperCollins)",
    summary: "Her contribution to an anthology of 24 Nigerian writers on home, identity, and culture, edited by Nancy Adimora and Ore Agbaje-Williams, alongside Adichie, Habila, and Obioma.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    tag: "Anthology Essay"
  },
  {
    id: "article-golliwog",
    type: "Article",
    title: "What is wrong with calling someone a golliwog?",
    year: "2009",
    author: "Lola Shoneyin",
    publisherOrOutlet: "The Times, London",
    summary: "Written during the Carol Thatcher and Jo-Wilfried Tsonga \"golliwog\" row, on preparing her son for the racism she feared he would face at his new school.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    tag: "Opinion Article",
    url: "https://www.thetimes.com/travel/destinations/uk-travel/scotland-travel/edinburgh/what-is-wrong-with-calling-someone-a-golliwog-h6g8nxqdnrn"
  },
  {
    id: "child-mayowa",
    type: "Children's Book",
    title: "Mayowa and the Masquerades",
    year: "2010",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "An adventurous tale following young Mayowa as he uncovers the vibrant folklore of festival masquerades.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.32.23.jpeg",
    tag: "Children's Book"
  },
  {
    id: "child-baji",
    type: "Children's Book",
    title: "Do As You Are Told, Baji",
    year: "2022",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "A funny and engaging lesson on responsibility, listening, and growing up.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/baji.jpg",
    tag: "Children's Book"
  },
  {
    id: "child-iyaji",
    type: "Children's Book",
    title: "Iyaji the House Girl",
    year: "2021",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "An inspiring story of perseverance, education, dignity, and unyielding hope.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/iyaji.png",
    tag: "Children's Book"
  },
  {
    id: "child-durbar",
    type: "Children's Book",
    title: "A Durbar Festival for Hassan and Hussaina",
    year: "2023",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "A festive cultural adventure through the grand traditions and colors of Northern Nigeria.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png",
    tag: "Children's Book"
  },
  {
    id: "child-jamila",
    type: "Children's Book",
    title: "Jamila's Clever Plan",
    year: "2022",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "A tale of ingenuity and teamwork where young Jamila solves a community challenge.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/jamila.png",
    tag: "Children's Book"
  },
  {
    id: "child-anyibo",
    type: "Children's Book",
    title: "Anyibo and the Mother Hen",
    year: "2023",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "A heartwarming story celebrating curiosity, compassion, and the wonders of nature.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/anyibo.png",
    tag: "Children's Book"
  },
  {
    id: "child-pwada",
    type: "Children's Book",
    title: "Pwada Can Do Anything",
    year: "2024",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "Empowering young girls to break boundaries, believe in themselves, and reach high.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/pwada.png",
    tag: "Children's Book"
  },
  {
    id: "child-setto",
    type: "Children's Book",
    title: "Setto Saves the Trees",
    year: "2025",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "An eco-friendly journey teaching children the value of trees and environmental stewardship.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg",
    tag: "Children's Book"
  },
  {
    id: "child-tunde",
    type: "Children's Book",
    title: "Tunde Onakoya, The Chess Champion",
    year: "2025",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "An inspiring biography of chess master Tunde Onakoya, showing children the power of intellect and vision.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800",
    tag: "Children's Book"
  },
  {
    id: "child-dunoma",
    type: "Children's Book",
    title: "Dunoma the Brave",
    year: "2025",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "A thrilling tale of bravery, leadership, and moral strength set in ancient kingdom landscapes.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-06-at-21.17.37.jpeg",
    tag: "Children's Book"
  }
];

export default function BibliographyGridSection() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);
  const [activeModalItem, setActiveModalItem] = useState<BibliographyItem | null>(null);

  const filters = ["All", "Novel", "Poetry", "Children's Book", "Series", "Essay", "Article"];

  const filteredItems = BIBLIOGRAPHY_ITEMS.filter((item) => {
    const matchesFilter = selectedFilter === "All" || item.type === selectedFilter;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="bibliography-works-section" className="space-y-10 py-4 font-sans">
      
      {/* AUTHOR BANNER SECTION */}
      <div 
        onMouseEnter={() => setIsBannerHovered(true)}
        onMouseLeave={() => setIsBannerHovered(false)}
        className="bg-[#EAE8E1] rounded-[12px] overflow-hidden p-6 sm:p-10 relative flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-200/80 shadow-sm transition-all duration-300"
      >
        {/* Left Side: Person Photo */}
        <div className="flex items-center space-x-6 z-10 max-w-2xl">
          <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-[6px] overflow-hidden bg-neutral-300 shrink-0 shadow-md border border-white">
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-9-2026-08_20_20-pm.png"
              alt="Lola Shoneyin"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Center Content: About the Author */}
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-600 block">
              ACCLAIMED AUTHOR & PUBLISHER
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 tracking-tight">
              Lola Shoneyin: Storyteller & Cultural Catalyst
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-lg font-medium">
              Author of the celebrated bestseller <em className="font-serif font-medium">The Secret Lives of Baba Segi's Wives</em>, three poetry volumes, and founder of Aké Arts & Book Festival and Ouida Books.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-[4px] transition-all cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center space-x-2 mx-auto md:mx-0"
              >
                <Mail size={14} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: 3 Stacked Flat Books */}
        <div className="hidden lg:flex items-center justify-center relative h-48 w-88 shrink-0 cursor-pointer overflow-visible">
          {/* Book 1 */}
          <motion.div
            animate={
              isBannerHovered
                ? { x: -95, rotate: 0, scale: 1.05 }
                : { x: -32, rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-28 h-44 rounded-[4px] shadow-sm overflow-hidden border border-white/90 bg-rose-950 z-10"
          >
            <img src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg" className="w-full h-full object-cover" alt="Book 1" />
          </motion.div>

          {/* Book 2 */}
          <motion.div
            animate={
              isBannerHovered
                ? { x: 0, rotate: 0, scale: 1.05 }
                : { x: 0, rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-28 h-44 rounded-[4px] shadow-md overflow-hidden border border-white/90 bg-amber-900 z-20"
          >
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800" className="w-full h-full object-cover" alt="Book 2" />
          </motion.div>

          {/* Book 3 */}
          <motion.div
            animate={
              isBannerHovered
                ? { x: 95, rotate: 0, scale: 1.05 }
                : { x: 32, rotate: 0, scale: 1 }
            }
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-28 h-44 rounded-[4px] shadow-md overflow-hidden border border-white bg-emerald-950 z-30"
          >
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800" className="w-full h-full object-cover" alt="Book 3" />
          </motion.div>
        </div>
      </div>

      {/* SECTION HEADER + FILTER BAR */}
      <div className="space-y-6 pt-2">
        
        {/* TITLE ROW */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B3627] tracking-tight">
            Bibliography & Featured Works
          </h2>
        </div>

        {/* CONTROLS BAR: SEARCH + CATEGORY FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter size={14} className="text-neutral-400 shrink-0 mr-1" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === f
                    ? "bg-[#1B3627] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-950"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search works..."
              className="w-full bg-neutral-100 border-0 rounded-full pl-10 pr-4 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 font-sans"
            />
          </div>
        </div>

      </div>

      {/* 4-COLUMN RESPONSIVE BOOK GRID - NO PRICES, NO RATINGS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pt-2">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="flex flex-col group cursor-pointer space-y-3"
          >
            {/* BOOK COVER IMAGE */}
            <div className="relative aspect-[3/4.2] w-full rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1.5 bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {item.tag && (
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-neutral-950/90 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-sm shadow-sm">
                    {item.tag}
                  </span>
                </div>
              )}
            </div>

            {/* DETAILS STRICTLY BELOW COVER */}
            <div className="space-y-1.5 text-left pt-0.5">
              
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[11px] font-bold text-rose-800 bg-rose-100 px-2 py-0.5 rounded-sm uppercase">
                  {item.type} • {item.year}
                </span>
              </div>

              {/* TITLE (CLEAR, LEGIBLE FONT) */}
              <h3 className="font-serif font-extrabold text-base sm:text-lg md:text-xl text-[#1B3627] group-hover:text-rose-600 transition-colors leading-snug">
                {item.title}
              </h3>

              {/* AUTHOR */}
              <p className="font-sans text-xs sm:text-sm font-semibold text-neutral-600">
                By {item.author}
              </p>

              {/* SUMMARY */}
              <p className="font-sans text-xs text-neutral-500 leading-relaxed line-clamp-2">
                {item.summary}
              </p>

            </div>
          </div>
        ))}
      </div>

      {/* FULL COVER MODAL IN THE MIDDLE OF THE SCREEN */}
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
              className="bg-neutral-900 border border-white/15 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center"
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
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <div className="inline-flex items-center space-x-2 bg-rose-950/80 border border-rose-800/50 px-3 py-1 rounded-full text-rose-300 font-mono text-xs uppercase font-bold tracking-wider">
                  <Sparkles size={12} />
                  <span>{activeModalItem.type} • {activeModalItem.year}</span>
                </div>

                <div>
                  <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-sm font-sans font-semibold text-rose-400 pt-1">
                    By {activeModalItem.author}
                  </p>
                </div>

                <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
                  {activeModalItem.summary}
                </p>

                {activeModalItem.publisherOrOutlet && (
                  <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 font-mono">
                    <span>Publisher / Outlet: </span>
                    <span className="text-neutral-200 font-bold">{activeModalItem.publisherOrOutlet}</span>
                  </div>
                )}

                {activeModalItem.url && (
                  <div className="pt-2">
                    <a
                      href={activeModalItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white font-sans text-xs font-bold px-4 py-2 rounded-md transition-colors"
                    >
                      <span>Read Essay / Article</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}


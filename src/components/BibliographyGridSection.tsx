import React, { useState } from "react";
import { Filter, ArrowRight, Mail, Heart, Star, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export interface BibliographyItem {
  id: string;
  type: "Novel" | "Poetry" | "Children's Book" | "Series" | "Essay" | "Article";
  title: string;
  year: string;
  publisherOrOutlet?: string;
  summary: string;
  image: string;
  tag?: string;
  badge?: string;
  discount?: string;
  rating: number;
  ratingCount: number;
  originalPrice?: string;
  price: string;
  author: string;
}

export const BIBLIOGRAPHY_ITEMS: BibliographyItem[] = [
  {
    id: "baba-segi",
    type: "Novel",
    title: "The Secret Lives of Baba Segi's Wives",
    year: "2010",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Serpent's Tail / HarperCollins / Ouida Books",
    summary: "Award-winning debut novel exploring polygamy, female friendship, power dynamics, and secrets in contemporary Ibadan. Translated into 13 languages.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg",
    tag: "Orange Prize Nominee",
    badge: "Hot",
    discount: "-20%",
    rating: 5,
    ratingCount: 128,
    originalPrice: "$25.00",
    price: "$19.99"
  },
  {
    id: "poetry-egg",
    type: "Poetry",
    title: "So All the Time I Was Sitting on an Egg",
    year: "1998",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Poetry Anthology",
    summary: "Lola Shoneyin's debut collection of poems offering lyrical reflections on womanhood, sexuality, memory, and personal sovereignty.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg",
    tag: "Debut Poetry",
    badge: "Poetry",
    discount: "-15%",
    rating: 5,
    ratingCount: 42,
    originalPrice: "$18.00",
    price: "$14.99"
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
    tag: "Poetry Collection",
    badge: "Hot",
    rating: 5,
    ratingCount: 38,
    originalPrice: "$20.00",
    price: "$16.50"
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
    tag: "Poetry Collection",
    badge: "Bestseller",
    discount: "-10%",
    rating: 5,
    ratingCount: 56,
    originalPrice: "$22.00",
    price: "$18.00"
  },
  {
    id: "northern-lights",
    type: "Series",
    title: "Northern Lights Series",
    year: "2020",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation",
    summary: "A pioneering literary series crafted to inspire young readers across Northern Nigeria, fostering literacy and cultural pride.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png",
    tag: "Literary Series",
    badge: "Featured",
    rating: 5,
    ratingCount: 89,
    originalPrice: "$35.00",
    price: "$28.00"
  },
  {
    id: "children-series",
    type: "Children's Book",
    title: "Children's Literature Series (10 Vols)",
    year: "2014–Present",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Book Buzz Foundation / IBBY",
    summary: "Whimsical, instructive books placing African children at the center of their own adventures — reinforcing agency and creative pride.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg",
    tag: "Young Readers",
    badge: "Popular",
    discount: "-25%",
    rating: 5,
    ratingCount: 114,
    originalPrice: "$40.00",
    price: "$29.99"
  },
  {
    id: "essay-polygamy",
    type: "Essay",
    title: "Polygamy, Power and the Female Body",
    year: "2021",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Financial Times & Cultural Journals",
    summary: "A provocative essay examining how traditional marriage structures impact female economic independence in West Africa.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800",
    tag: "Cultural Essay",
    badge: "Essay",
    rating: 5,
    ratingCount: 67,
    price: "$5.00"
  },
  {
    id: "article-publishing",
    type: "Article",
    title: "Sovereignty in African Independent Publishing",
    year: "2023",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Frankfurt Book Fair Journal",
    summary: "An authoritative commentary on why African storytellers need local, durable publishing ecosystems rather than total reliance on Western presses.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
    tag: "Publishing & Policy",
    badge: "Article",
    rating: 5,
    ratingCount: 31,
    price: "$5.00"
  },
  {
    id: "essay-education",
    type: "Essay",
    title: "Why Young Readers Need Mirrors, Not Windows",
    year: "2022",
    author: "Lola Shoneyin",
    publisherOrOutlet: "Literary Hub",
    summary: "Exploring early childhood literacy and why seeing brown faces in children's books builds self-worth and intellectual confidence.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    tag: "Education & Literacy",
    badge: "Essay",
    rating: 5,
    ratingCount: 45,
    price: "$5.00"
  }
];

export default function BibliographyGridSection() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [isBannerHovered, setIsBannerHovered] = useState<boolean>(false);

  const filters = ["All", "Novel", "Poetry", "Children's Book", "Series", "Essay", "Article"];

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = BIBLIOGRAPHY_ITEMS.filter((item) => {
    const matchesFilter = selectedFilter === "All" || item.type === selectedFilter;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="bibliography-works-section" className="space-y-10 py-4 font-sans">
      
      {/* AUTHOR BANNER SECTION WITH SMOOTH HORIZONTAL BOOK SPREAD ANIMATION ON HOVER */}
      <div 
        onMouseEnter={() => setIsBannerHovered(true)}
        onMouseLeave={() => setIsBannerHovered(false)}
        className="bg-[#EAE8E1] rounded-[8px] overflow-hidden p-6 sm:p-10 relative flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-200/80 shadow-sm transition-all duration-300"
      >
        {/* Left Side: Person Photo (Lola Shoneyin Hero Photo) */}
        <div className="flex items-center space-x-6 z-10 max-w-2xl">
          <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-[4px] overflow-hidden bg-neutral-300 shrink-0 shadow-md border border-white">
            <img
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-9-2026-08_20_20-pm.png"
              alt="Lola Shoneyin"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Center Content: About the Author */}
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-500 block">
              ACCLAIMED AUTHOR & PUBLISHER
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-950 tracking-tight">
              Lola Shoneyin: Storyteller & Cultural Catalyst
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-lg">
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
        
        {/* TITLE & VIEW ALL ROW */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B3627] tracking-tight">
            Bibliography & Featured Works
          </h2>
          <button
            onClick={() => {
              setSelectedFilter("All");
              setSearchQuery("");
            }}
            className="font-sans text-xs sm:text-sm font-semibold text-[#1B3627] hover:text-red-600 transition-colors flex items-center space-x-1 cursor-pointer underline underline-offset-4"
          >
            <span>View all</span>
            <ArrowRight size={14} />
          </button>
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

      {/* 6-COLUMN BOOK GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6 pt-2">
        {filteredItems.map((item) => {
          const isFav = !!favorites[item.id];

          return (
            <div
              key={item.id}
              onClick={() => navigate("/books")}
              className="flex flex-col justify-between group cursor-pointer space-y-3"
            >
              {/* BOOK COVER IMAGE */}
              <div className="relative aspect-[3/4.2] w-full rounded-[4px] overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* TOP-LEFT BADGES */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 items-start z-10">
                  {item.badge && (
                    <span className="bg-amber-500 text-white font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-[2px] shadow-sm">
                      {item.badge}
                    </span>
                  )}
                  {item.discount && (
                    <span className="bg-red-500 text-white font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-[2px] shadow-sm">
                      {item.discount}
                    </span>
                  )}
                </div>

                {/* TOP-RIGHT HEART WISHLIST BUTTON */}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-neutral-600 flex items-center justify-center shadow-md transition-all cursor-pointer z-10 hover:scale-110"
                  aria-label="Save to wishlist"
                >
                  <Heart
                    size={13}
                    className={isFav ? "fill-red-500 text-red-500" : "text-neutral-500"}
                  />
                </button>
              </div>

              {/* DETAILS BELOW COVER */}
              <div className="space-y-1.5 text-center sm:text-left">
                
                {/* STAR RATINGS ROW */}
                <div className="flex items-center justify-center sm:justify-start space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                  <span className="text-[10px] font-mono text-neutral-400 pl-1 font-semibold">
                    ({item.ratingCount})
                  </span>
                </div>

                {/* AUTHOR */}
                <p className="font-sans text-[11px] text-neutral-500 font-medium">
                  By : <span className="text-neutral-700">{item.author}</span>
                </p>

                {/* PRICE ROW */}
                <div className="flex items-center justify-center sm:justify-start space-x-2 pt-0.5 font-mono text-xs font-bold">
                  {item.originalPrice && (
                    <span className="line-through text-neutral-400 text-[11px]">
                      {item.originalPrice}
                    </span>
                  )}
                  <span className="text-red-600 font-extrabold text-xs">
                    {item.price}
                  </span>
                </div>

                {/* TITLE (BIGGER & BOLD) */}
                <h3 className="font-serif font-extrabold text-sm sm:text-[15px] text-[#1B3627] group-hover:text-red-600 transition-colors line-clamp-2 leading-snug pt-0.5">
                  {item.title}
                </h3>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

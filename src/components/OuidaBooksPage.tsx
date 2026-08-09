import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Feather, Sparkles, Compass, Heart, Bookmark, Share2, X, CircleDot, Hexagon, Layers, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DisintegratingImage } from "./DisintegratingImage";

export interface PublishedBook {
  id: string;
  title: string;
  author: string;
  category: string;
  year: string;
  image: string;
  synopsis: string;
}

const CATALOG_BOOKS: PublishedBook[] = [
  {
    id: "baba-segi",
    title: "The Secret Lives of Baba Segi's Wives",
    author: "Lola Shoneyin",
    category: "Prose Fiction",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg",
    synopsis: "The definitive Nigerian edition of the award-winning bestseller capturing power dynamics, female agency, and familial secrets within a polygamous household."
  },
  {
    id: "sitting-on-an-egg",
    title: "So All the Time I Was Sitting on an Egg",
    author: "Lola Shoneyin",
    category: "Poetry Collection",
    year: "1997",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg",
    synopsis: "A ground-breaking debut poetry collection exploring personal autonomy, motherhood, sexuality, and Nigerian womanhood."
  },
  {
    id: "song-of-a-riverbird",
    title: "Song of a Riverbird",
    author: "Lola Shoneyin",
    category: "Poetry Collection",
    year: "2002",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.18.54.jpeg",
    synopsis: "A poignant verse anthology capturing memories of Nigeria, riverine life, political observation, and deep emotional longing."
  },
  {
    id: "for-the-love-of-flight",
    title: "For the Love of Flight",
    author: "Lola Shoneyin",
    category: "Poetry Collection",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.20.13.jpeg",
    synopsis: "A celebrated third collection of mature poetry dealing with freedom, flight, domestic tension, and emotional courage."
  },
  {
    id: "setto-saves-the-trees",
    title: "Setto Saves the Trees",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2025",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg",
    synopsis: "An eco-friendly journey teaching children the value of trees, environmental stewardship, and community action."
  },
  {
    id: "anyibo-mother-hen",
    title: "Anyibo and the Mother Hen",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/anyibo.png",
    synopsis: "A heartwarming story celebrating curiosity, compassion, and the wonders of nature for young readers."
  },
  {
    id: "hassan-hussaina",
    title: "A Durbar for Hassan and Hussaina",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png",
    synopsis: "A festive cultural adventure through the grand traditions, horsemanship, and vibrant colors of Northern Nigeria."
  },
  {
    id: "mayowa-masquerades",
    title: "Mayowa and the Masquerades",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.32.23.jpeg",
    synopsis: "An adventurous story following young Mayowa as he uncovers the vibrant folklore and rhythm of festival masquerades."
  },
  {
    id: "iyaji-house-girl",
    title: "Iyaji the House Girl",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2021",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/iyaji.png",
    synopsis: "An inspiring story of perseverance, education, dignity, and unyielding hope in West African youth."
  },
  {
    id: "jamila-clever-plan",
    title: "Jamila's Clever Plan",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2022",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/jamila.png",
    synopsis: "A tale of ingenuity and teamwork where young Jamila solves a community challenge through creative thinking."
  },
  {
    id: "pwada-can-do-anything",
    title: "Pwada Can Do Anything",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2024",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/pwada.png",
    synopsis: "Empowering young girls to break boundaries, believe in themselves, and reach high in every endeavor."
  },
  {
    id: "do-as-youre-told-baji",
    title: "Do As You're Told, Baji",
    author: "Lola Shoneyin",
    category: "Children's Literature",
    year: "2022",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/baji.jpg",
    synopsis: "A funny and engaging lesson on responsibility, listening, and growing up with a courageous spirit."
  }
];

// Continuous Marquee Book Covers with Actual Shared Images
const MARQUEE_COVERS = [
  { title: "Baba Segi's Wives", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg" },
  { title: "Sitting on an Egg", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg" },
  { title: "Song of a Riverbird", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.18.54.jpeg" },
  { title: "For the Love of Flight", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.20.13.jpeg" },
  { title: "Setto Saves the Trees", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg" },
  { title: "Anyibo & Mother Hen", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/anyibo.png" },
  { title: "Hassan & Hussaina", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png" },
  { title: "Mayowa & Masquerades", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.32.23.jpeg" },
  { title: "Iyaji the House Girl", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/iyaji.png" },
  { title: "Jamila's Clever Plan", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/jamila.png" },
  { title: "Pwada Can Do Anything", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/pwada.png" },
  { title: "Do As You're Told Baji", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/baji.jpg" }
];

export default function OuidaBooksPage() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [activeModalBook, setActiveModalBook] = useState<PublishedBook | null>(null);

  // Duplicating marquee array for endless seamless scrolling
  const marqueeItems = [...MARQUEE_COVERS, ...MARQUEE_COVERS, ...MARQUEE_COVERS];

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, CATALOG_BOOKS.length));
  };

  return (
    <div className="bg-[#fbf9f5] text-neutral-900 min-h-screen pt-24 pb-20 overflow-x-hidden selection:bg-rose-600 selection:text-white">
      
      {/* 1. HERO SECTION WITH FLAT FLOATING IMAGES */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-20">
        
        {/* Floating Flat Card 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0], rotate: 0 }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { type: "spring", stiffness: 220, damping: 20 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          className="hidden md:block absolute top-8 left-6 lg:left-16 w-40 h-56 lg:w-52 lg:h-72 rounded-2xl overflow-hidden shadow-md z-10 pointer-events-none"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg"
            alt="The Secret Lives of Baba Segi's Wives"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Flat Card 2 - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 8, 0], rotate: 0 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.1 },
            scale: { type: "spring", stiffness: 220, damping: 20, delay: 0.1 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          }}
          className="hidden md:block absolute top-6 right-6 lg:right-16 w-40 h-56 lg:w-52 lg:h-72 rounded-2xl overflow-hidden shadow-md z-10 pointer-events-none"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg"
            alt="Setto Saves the Trees"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Flat Card 3 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 6, 0], rotate: 0 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            scale: { type: "spring", stiffness: 220, damping: 20, delay: 0.2 },
            y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="hidden lg:block absolute bottom-10 left-12 lg:left-32 w-36 h-48 lg:w-44 lg:h-60 rounded-2xl overflow-hidden shadow-md z-10 pointer-events-none"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.26.14.jpeg"
            alt="So All the Time I Was Sitting on an Egg"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Floating Flat Card 4 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 50, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -7, 0], rotate: 0 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { type: "spring", stiffness: 220, damping: 20, delay: 0.3 },
            y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
          }}
          className="hidden lg:block absolute bottom-12 right-12 lg:right-32 w-36 h-48 lg:w-44 lg:h-60 rounded-2xl overflow-hidden shadow-md z-10 pointer-events-none"
        >
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png"
            alt="A Durbar for Hassan and Hussaina"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* HERO CENTER TEXT BLOCK */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-6 relative z-20 scroll-mt-28"
        >
          <span className="font-serif italic text-rose-800 text-lg sm:text-2xl font-medium block">
            This is Ouida Books
          </span>

          <h1 className="font-serif italic font-extrabold text-5xl sm:text-7xl lg:text-8xl text-neutral-950 tracking-tight leading-[1.04]">
            Bold & Unfiltered African Voices
          </h1>

          <p className="font-sans text-neutral-600 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed font-normal">
            Publishing stories that challenge, inspire and endure across global literary landscapes.
          </p>

          <div className="pt-4 flex items-center justify-center">
            <button
              onClick={() => {
                const catalogEl = document.getElementById("catalog-section");
                if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer inline-flex items-center space-x-2 group"
            >
              <span>Explore Our Catalog</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </section>

      {/* 2. INFINITE MARQUEE SECTION ("Sneak peek of our catalogue") */}
      <section className="py-16 space-y-8 overflow-hidden bg-[#f7f4ee]">
        
        <div className="text-center space-y-2 px-6">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 mb-1">
            <BookOpen size={16} />
          </div>
          <h2 className="font-serif italic text-2xl sm:text-4xl text-neutral-900 font-medium">
            Sneak peek of our catalogue
          </h2>
        </div>

        {/* ULTRA SMOOTH MARQUEE TRACK (NO CONTAINERS, NO BORDERS) */}
        <div className="relative w-full overflow-hidden py-4">
          <div 
            className="flex items-center space-x-6 w-max animate-marquee-smooth hover:[animation-play-state:paused]"
            style={{
              display: "flex",
              width: "max-content",
              animation: "marqueeSmooth 32s linear infinite",
              willChange: "transform",
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="w-44 h-60 sm:w-56 sm:h-76 shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.04] cursor-pointer"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. CATALOG GRID SECTION ("Publishing in action") */}
      <section id="catalog-section" className="max-w-6xl mx-auto px-6 py-24 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="font-serif italic font-extrabold text-4xl sm:text-6xl text-neutral-950 tracking-tight">
            Publishing in action
          </h2>
          <p className="font-sans text-neutral-600 text-sm sm:text-base font-normal">
            Crafting functional, stunning books with world-class African authors.
          </p>
        </div>

        {/* 2-COLUMN GRID (WITHOUT CARD CONTAINERS OR BORDERS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {CATALOG_BOOKS.slice(0, visibleCount).map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveModalBook(book)}
              className="flex flex-col space-y-5 group cursor-pointer"
            >
              {/* IMAGE CONTAINER WITHOUT CONTAINER BORDERS */}
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-neutral-200">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* DETAILS BELOW IMAGE */}
              <div className="space-y-3 px-1">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight group-hover:text-rose-600 transition-colors">
                  {book.title}
                </h3>
                <p className="font-mono text-xs font-bold text-rose-600 uppercase tracking-widest">
                  BY {book.author}
                </p>
                <p className="font-sans text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {book.synopsis}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="inline-block bg-neutral-200/70 font-mono text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full text-neutral-800">
                    {book.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center group-hover:bg-rose-600 transition-colors shadow-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE / VIEW LESS BUTTON */}
        <div className="flex justify-center pt-8">
          {visibleCount < CATALOG_BOOKS.length ? (
            <button
              onClick={() => setVisibleCount(CATALOG_BOOKS.length)}
              className="bg-rose-600 hover:bg-rose-700 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={() => {
                setVisibleCount(4);
                const catalogEl = document.getElementById("catalog-section");
                if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              View Less
            </button>
          )}
        </div>

      </section>

      {/* 3.5 DEDICATED IMPRINTS SECTION */}
      <section id="imprints" className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-200 space-y-12 scroll-mt-28">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600">
            OUR PUBLISHING IMPRINTS
          </span>
          <h2 className="font-serif italic font-extrabold text-4xl sm:text-5xl text-neutral-950 tracking-tight">
            Eight Specialized Imprints
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Nigeria has never lacked talent. What has been missing is the infrastructure that allows local voices to flourish on their own terms. Too many Nigerian writers measure their success by whether the West published them first. Ouida Books was founded in 2016 to disrupt that trend, to prove that a Nigerian publishing house could take a Nigerian voice to the world. Eight imprints carry that mission forward, each with its own shelf, its own reader, its own reason for being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {[
            {
              name: "Ouida Books",
              focus: "Literary Fiction",
              desc: "Ouida Books is the flagship imprint that publishes high-quality literary fiction.",
              badge: "FLAGSHIP",
              code: "_001",
              image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
              icon: <BookOpen className="w-5 h-5 text-black" />
            },
            {
              name: "Ouida Poetry",
              focus: "Verse & Poetry",
              desc: "Ouida Poetry publishes a maximum of two books of poems in any given year.",
              badge: "POETRY",
              code: "_002",
              image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop",
              icon: <Sparkles className="w-5 h-5 text-black" />
            },
            {
              name: "Cognix",
              focus: "Non-Fiction & Record",
              desc: "Cognix is where Ouida Books turns to the real: ideas, arguments, the record of things as they happened.",
              badge: "NON-FICTION",
              code: "_003",
              image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
              icon: <Compass className="w-5 h-5 text-black" />
            },
            {
              name: "Tanja",
              focus: "Youngest Readers",
              desc: "Tanja exists for the youngest readers by publishing picturebooks built to be enjoyed together.",
              badge: "PICTUREBOOKS",
              code: "_004",
              image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
              icon: <CircleDot className="w-5 h-5 text-black" />
            },
            {
              name: "Adole",
              focus: "Young Adult",
              desc: "Adole speaks to the years between childhood and adulthood, asking the hardest questions.",
              badge: "YOUNG ADULT",
              code: "_005",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
              icon: <Zap className="w-5 h-5 text-black" />
            },
            {
              name: "Book of Phoenix",
              focus: "Speculative Fiction",
              desc: "Book of Phoenix publishes speculative fiction not bound by the constraints of the world as it is.",
              badge: "SPECULATIVE",
              code: "_006",
              image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
              icon: <Layers className="w-5 h-5 text-black" />
            },
            {
              name: "Tevani",
              focus: "Bespoke Publishing",
              desc: "Tevani is a bespoke imprint, working directly with authors for a hand-crafted path to publication.",
              badge: "BESPOKE",
              code: "_007",
              image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
              icon: <Hexagon className="w-5 h-5 text-black" />
            },
            {
              name: "Lufu",
              focus: "Romance & Commercial",
              desc: "Lufu publishes high-energy romance and commercial fiction for broad readership.",
              badge: "ROMANCE",
              code: "_008",
              image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
              icon: <Heart className="w-5 h-5 text-black" />
            }
          ].map((imp, idx) => (
            <motion.div
              key={imp.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                delay: idx * 0.08
              }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Card Image Container - Taller portrait ratio with Disintegrating Particle / Hover */}
              <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                <DisintegratingImage
                  src={imp.image}
                  alt={imp.name}
                  roundedClassName="rounded-[28px] sm:rounded-[32px]"
                />

                {/* Top Badge Floating Pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {imp.badge}
                  </span>
                </div>

                {/* Hover Overlay with Center Logo */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                    {imp.icon}
                    <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                      {imp.name}
                    </span>
                  </div>
                </div>

                {/* Overlay details at bottom of image */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1">
                  <h3 className="font-serif italic font-extrabold text-xl sm:text-2xl text-white">
                    {imp.name}
                  </h3>
                  <p className="font-mono text-[11px] font-bold text-rose-300 uppercase tracking-wider">
                    {imp.focus}
                  </p>
                  <p className="font-sans text-xs text-neutral-200 line-clamp-2 leading-relaxed opacity-90">
                    {imp.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Meta Bar */}
              <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                <span className="font-extrabold text-neutral-900 uppercase tracking-wider">
                  {imp.name}
                </span>
                <span className="font-mono text-neutral-400 font-medium">
                  {imp.code}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FLOATING CLOUD / TAGS ORBIT SECTION ("What we bring to the table") */}
      <section className="relative py-28 px-6 overflow-hidden bg-[#f7f4ee]">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-600">
            <Sparkles size={20} />
          </div>

          <h2 className="font-serif italic font-extrabold text-4xl sm:text-6xl text-neutral-950 tracking-tight">
            What we bring to the table
          </h2>

          <p className="font-sans text-neutral-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-normal">
            Digital and physical publishing experiences that empower African storytellers and connect stories with global readers from day one.
          </p>

          {/* FLOATING ORBIT PILLS SURROUNDING TITLE */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {[
              "Literary Prose",
              "Poetry",
              "Children's Imprint",
              "Translational Rights",
              "Author Mentorship",
              "International Distribution",
              "Cultural Preservation",
              "Audiobook Production",
              "Aké Festival Hub",
            ].map((tag, idx) => (
              <motion.span
                key={tag}
                animate={{ y: [0, idx % 2 === 0 ? -8 : 8, 0] }}
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
                className="bg-white/90 backdrop-blur-md text-neutral-800 border border-neutral-200/80 font-sans text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-rose-400 transition-all"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DARK FOOTER ABOUT SECTION ("Behind the press") */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="bg-[#181a1d] text-white rounded-3xl p-8 sm:p-14 lg:p-20 relative overflow-hidden space-y-12 shadow-2xl">
          
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase font-bold tracking-widest">
              <Feather size={16} />
              <span>THE FOUNDER & PRESS</span>
            </div>

            <h2 className="font-serif italic font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              Behind the press
            </h2>

            <p className="font-serif italic text-neutral-300 text-lg sm:text-xl leading-relaxed">
              "Finally, meet the author and publisher passionate about helping African voices succeed: a quick peek into our world."
            </p>

            <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
              Founded in 2016 in Lagos by Lola Shoneyin, Ouida Books operates dedicated imprints for fiction, poetry, children's literature, and thrillers, bridging the gap between extraordinary African authors and global readership.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-rose-600 hover:bg-rose-500 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-lg transition-all cursor-pointer"
              >
                Inquire with Editorial Team
              </button>
            </div>
          </div>

          {/* FLAT AUTHOR/STORE PHOTOS AT BOTTOM RIGHT */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 border-t border-neutral-800">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg"
                alt="Ouida House"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png"
                alt="Lola Shoneyin"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg"
                alt="Ouida Lagos Store"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Embedded inline keyframes for 100% zero-lag marquee */}
      <style>{`
        @keyframes marqueeSmooth {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      {/* FULL COVER MODAL FOR OUIDA BOOKS CATALOG */}
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
              className="bg-neutral-900 border border-white/15 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden my-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center text-left"
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
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-flex items-center space-x-2 bg-rose-950/80 border border-rose-800/50 px-3 py-1 rounded-full text-rose-300 font-mono text-xs uppercase font-bold tracking-wider">
                  <Sparkles size={12} />
                  <span>{activeModalBook.category} • {activeModalBook.year}</span>
                </div>

                <div>
                  <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                    {activeModalBook.title}
                  </h3>
                  <p className="text-sm font-sans font-semibold text-rose-400 pt-1">
                    By {activeModalBook.author}
                  </p>
                </div>

                <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
                  {activeModalBook.synopsis}
                </p>

                <div className="pt-3 border-t border-white/10 text-xs text-neutral-400 font-mono">
                  <span>Publisher / Imprint: </span>
                  <span className="text-neutral-200 font-bold">Ouida Books</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}


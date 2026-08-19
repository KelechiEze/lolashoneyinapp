import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface Festival {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  quote?: string;
  quoteAuthor?: string;
  img?: string;
  images?: string[];
  accent: string;
}

function FestivalGallery({ festival }: { festival: Festival }) {
  const images = festival.images && festival.images.length > 0 
    ? festival.images 
    : (festival.img ? [festival.img] : []);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
        <img
          src={images[0]}
          alt={festival.title}
          className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main Image Frame with Navigation */}
      <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-neutral-200 shadow-md bg-neutral-100 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${festival.title} - View ${activeIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/15 via-transparent to-transparent pointer-events-none" />

        {/* Carousel Prev/Next Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicator Badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-sm">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((imgSrc, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative aspect-[16/10] rounded-[8px] overflow-hidden border-2 transition-all cursor-pointer ${
              activeIndex === idx
                ? "border-rose-600 shadow-sm ring-2 ring-rose-600/20"
                : "border-neutral-200/80 opacity-70 hover:opacity-100 hover:border-neutral-400"
            }`}
          >
            <img
              src={imgSrc}
              alt={`${festival.title} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function FestivalsPage() {
  const festivals: Festival[] = [
    {
      id: "ake",
      title: "Aké Arts and Book Festival",
      subtitle: "Africa's Largest Literary Gathering",
      desc: "Aké is Africa's largest literary gathering, three days each year where writers, poets, artists, filmmakers, and thinkers converge to talk, read, and argue about the questions that matter on the continent. Founded by Shoneyin in 2013 in Abeokuta, the town where Nobel laureate Wole Soyinka was born, the festival moved to Lagos in 2017 and has since brought together over a thousand creatives from Africa and the diaspora. It has grown from a single-city gathering into what many now call the biggest convergence of African creatives in the world, and in 2023 it won the inaugural Aficionado Award, presented by the Frankfurt and Turin book fairs, for its contribution to improving the quality of international publishing.",
      quote: "A big thank you to you and your entire team for creating such a festive atmosphere in this year's Aké Festival. We enjoyed the flowers and their colours but we know it was because they grew from a plant with deep roots not always visible, but there all the same, all the time.",
      quoteAuthor: "Ngũgĩ wa Thiong'o",
      img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-21.50.54.jpeg",
      images: [
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-21.50.54.jpeg",
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-22.26.36.jpeg",
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-22.28.40.jpeg"
      ],
      accent: "text-amber-600"
    },
    {
      id: "lifi",
      title: "Lagos International Festival of Illustrations (LIFI)",
      subtitle: "Bridging European and African Graphic Arts",
      desc: "LIFI began with a conversation Shoneyin had at the Bologna Children's Book Fair, when she asked a Slovenian illustrator whether she knew anyone willing to come to Lagos and teach. The answer became a festival: a three-day gathering that brings acclaimed illustrators from around the world to train and work alongside Nigerian illustrators, building the skills and the pipeline Nigerian children's publishing has long lacked. Its second edition runs 17-19 September 2026, with illustrators from Italy, Poland, and Switzerland working alongside 36 Nigerian participants.",
      img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-21.41.51-1.jpeg",
      images: [
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-21.41.51-1.jpeg",
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-21.41.51-2.jpeg",
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-21.41.51.jpeg"
      ],
      accent: "text-rose-600"
    },
    {
      id: "kabafest",
      title: "Kaduna Book & Arts Festival (KABAFEST)",
      subtitle: "A Stage for Northern Nigerian Voices",
      desc: "KABAFEST took northern Nigeria's literary scene and gave it a stage of its own. Founded in 2017 as an initiative of the Kaduna State Government, the festival set out to challenge the idea that the north was too conservative for books and ideas, hosting panels in Hausa and English and creating space for conversations on identity, politics, feminism, and religion that don't always get room elsewhere. It was the only state-funded literary festival in northern Nigeria, until state support was withdrawn and the festival was discontinued in 2025.",
      img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-22.39.06.jpeg",
      images: [
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-22.39.06.jpeg",
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-22.39.07-1.jpeg",
        "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-19-at-22.39.07-2.jpeg"
      ],
      accent: "text-emerald-600"
    },
    {
      id: "afli",
      title: "Abuja Festival of Literature and Ideas (AFLI)",
      subtitle: "Stimulating Ideas in the Nation's Capital",
      desc: "AFLI is the newest festival under the Book Buzz Foundation, launching its inaugural edition from 8-10 October 2026 in Abuja, in partnership with the EU Delegation to Nigeria. Abuja, Shoneyin believed, was ripe for an intellectually stimulating platform where thinkers could learn about issues shaping the wider world from the experts who study them.",
      accent: "text-teal-600"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 max-w-4xl transform-gpu"
        >
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Literary Festivals
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-3xl leading-relaxed">
            Gathering writers, poets, artists, filmmakers, and thinkers across cities to celebrate culture and intellectual exchange.
          </p>
        </motion.div>

        {/* FESTIVALS LIST */}
        <div className="space-y-20 border-t border-neutral-200 pt-16">
          {festivals.map((f, idx) => {
            const hasImages = (f.images && f.images.length > 0) || Boolean(f.img);
            return (
              <motion.div 
                key={f.id} 
                id={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                className={
                  hasImages 
                    ? "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transform-gpu scroll-mt-32"
                    : "max-w-3xl transform-gpu scroll-mt-32"
                }
              >
                {/* Text Area */}
                <div className={`space-y-6 ${hasImages ? `lg:col-span-6 ${idx % 2 === 1 ? "lg:order-last" : ""}` : ""}`}>
                  <div className="space-y-2">
                    <span className={`font-mono text-xs uppercase tracking-widest font-black ${f.accent}`}>{f.subtitle}</span>
                    <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase leading-tight text-neutral-950">{f.title}</h2>
                  </div>

                  <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">{f.desc}</p>
                  
                  {f.quote && (
                    <div className="bg-neutral-50 border-l-4 border-rose-600 p-6 rounded-r-xl space-y-2">
                      <p className="text-neutral-800 font-serif italic text-sm md:text-base leading-relaxed select-text">
                        "{f.quote}"
                      </p>
                      <p className="text-neutral-600 font-sans text-xs font-bold uppercase tracking-wider">
                        — {f.quoteAuthor}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center space-x-6 text-xs text-neutral-500 font-mono">
                    <span className="flex items-center"><MapPin size={14} className="mr-1 text-neutral-400" /> NIGERIA</span>
                    <span className="flex items-center"><Calendar size={14} className="mr-1 text-neutral-400" /> ANNUAL EVENT</span>
                  </div>
                </div>

                {/* Image / Gallery Area (Only rendered if images exist) */}
                {hasImages && (
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="lg:col-span-6"
                  >
                    <FestivalGallery festival={f} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

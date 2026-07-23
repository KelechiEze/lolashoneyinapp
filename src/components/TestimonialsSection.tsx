import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface TestimonialSlide {
  id: string;
  category: string;
  statement: string;
  imageUrl: string;
  statValue: string;
  statLabel: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  brandName: string;
}

const TESTIMONIALS: TestimonialSlide[] = [
  {
    id: "frankfurt-fair",
    category: "AKÉ FESTIVAL RECOGNITION",
    statement: "Recognised internationally for its outstanding and highly original publishing initiatives, building bridges across African and global literary communities.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    statValue: "2023",
    statLabel: "Inaugural winner of the prestigious Aficionado Award",
    quote: "Lola Shoneyin's vision for Aké Arts and Book Festival completely altered the landscape of literary gatherings on the African continent.",
    authorName: "Aficionado Jury",
    authorRole: "Frankfurt Book Fair & Salone del Libro",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
    brandName: "Aficionado Award"
  },
  {
    id: "baba-segi-review",
    category: "LITERARY IMPACT",
    statement: "Her debut novel unravels the complex dynamics of polygamy, receiving critical acclaim for its warmth, humor, and bold female perspective.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    statValue: "13+",
    statLabel: "Languages translated with international stage adaptations",
    quote: "A rich, funny, and deeply empathetic book that gives a powerful voice to women navigating traditional societies with intelligence and grit.",
    authorName: "The Guardian Review",
    authorRole: "Literary Section",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
    brandName: "The Guardian"
  },
  {
    id: "lifi-success",
    category: "LAGOS ILLUSTRATION FESTIVAL",
    statement: "Creating a monumental platform connecting African and European visual illustrators, featuring guest artists from Switzerland, Italy, and Poland.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    statValue: "1st",
    statLabel: "Festival dedicated entirely to illustration art in Nigeria",
    quote: "LIFI has established Nigeria as an essential player in the global illustration community, nurturing thousands of young African graphic talents.",
    authorName: "European Cultural Partners",
    authorRole: "Cultural Delegation",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop",
    brandName: "LIFI Group"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="reviews" 
      className="relative min-h-screen bg-neutral-50 text-neutral-900 py-20 px-6 md:py-32 md:px-12 flex items-center overflow-hidden border-t border-neutral-200 z-30"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col space-y-16">
        
        {/* HEADER AREA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 transform-gpu"
        >
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-500 font-bold block">
              REVIEWS & TESTIMONIALS
            </span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-neutral-950">
              Recognised globally for cultural innovation
            </h2>
          </div>
          
          {/* Custom Arrows */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handlePrev}
              className="p-3 bg-white hover:bg-neutral-100 rounded-full border border-neutral-200 text-neutral-800 transition-all duration-300 cursor-pointer outline-none shadow-sm hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 bg-white hover:bg-neutral-100 rounded-full border border-neutral-200 text-neutral-800 transition-all duration-300 cursor-pointer outline-none shadow-sm hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* SLIDER CARD CONTAINER */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
            >
              {/* Left visual column */}
              <div className="lg:col-span-4 min-h-[300px] lg:min-h-0 relative">
                <div className="relative w-full h-full rounded-[8px] overflow-hidden bg-neutral-200 border border-neutral-200 shadow-md">
                  <img
                    src={current.imageUrl}
                    alt={current.category}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10" />
                </div>
              </div>

              {/* Right statement / stats column */}
              <div className="lg:col-span-8 flex flex-col justify-between p-8 md:p-12 bg-white border border-neutral-200 rounded-[8px] shadow-sm space-y-12">
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                    <span className="font-mono text-[10px] tracking-widest text-rose-600 uppercase font-bold">{current.category}</span>
                  </div>
                  
                  <p className="font-sans font-bold text-xl md:text-2xl lg:text-3xl tracking-tight leading-snug text-neutral-900 select-text">
                    {current.statement}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100 items-start">
                  {/* Stat Card */}
                  <div className="space-y-2">
                    <div className="font-sans font-black text-4xl md:text-5xl text-neutral-950 tracking-tight leading-none">
                      {current.statValue}
                    </div>
                    <p className="font-sans text-neutral-600 font-semibold text-xs md:text-sm leading-relaxed max-w-xs">
                      {current.statLabel}
                    </p>
                  </div>

                  {/* Elegant Quote Block */}
                  <div className="space-y-4">
                    <p className="font-serif italic text-sm md:text-base leading-relaxed text-neutral-700 select-text">
                      "{current.quote}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={current.authorAvatar}
                        alt={current.authorName}
                        className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-sans font-bold text-xs text-neutral-900 uppercase">{current.authorName}</h4>
                        <p className="font-sans text-[10px] text-neutral-500 uppercase tracking-wider">{current.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

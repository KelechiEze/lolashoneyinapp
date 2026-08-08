import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    alt: "Beautiful curated bookshop interior with wood shelves",
    title: "OuidaLagos Culture Hub",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    alt: "Aké Arts and Book Festival stage and crowd",
    title: "Aké Festival Gatherings",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    alt: "Elegant high-contrast African artistic portrait",
    title: "Cultural Narratives",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
    alt: "Lagos International Festival of Illustrations artwork",
    title: "Illustration Artistry",
  },
];

export default function AgencySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="credentials-quote" 
      className="relative min-h-screen bg-white text-neutral-950 py-20 px-6 md:py-32 md:px-12 flex items-center overflow-hidden border-t border-neutral-100 z-30"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Credentials Strip & Beautiful Interactive Quote */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-12">
          
          {/* 1. CREDENTIALS STRIP */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left space-y-4 py-6 px-6 bg-neutral-50 border border-neutral-200/60 rounded-[8px] shadow-sm transform-gpu"
          >
            <h4 className="text-[10px] uppercase font-mono tracking-[0.25em] text-neutral-400 font-bold block mb-2">
              RECOGNITIONS & LEADERSHIP
            </h4>
            <div className="space-y-3 font-sans text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase">
              <p className="border-b border-neutral-200/50 pb-2">
                The Secret Lives of Baba Segi's Wives
              </p>
              <p className="border-b border-neutral-200/50 pb-2">
                Aké Arts and Book Festival. Fourteen years.
              </p>
              <p className="text-rose-600">
                FT Woman of 2023.
              </p>
            </div>
          </motion.div>

          {/* 2. QUOTE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative space-y-6 pt-6 border-t border-neutral-100 transform-gpu"
          >
            <span className="text-6xl text-neutral-300 font-serif absolute -top-4 -left-2 select-none pointer-events-none">“</span>
            <p className="font-serif italic text-base md:text-lg leading-relaxed text-neutral-700 relative z-10 pl-6 select-text">
              "A big thank you to you and your entire team for creating such a festive atmosphere in this year's Aké Festival. We enjoyed the flowers and their colours but we know it was because they grew from a plant with deep roots not always visible, but there all the same, all the time."
            </p>
            <p className="font-sans font-bold text-xs md:text-sm tracking-wider text-neutral-900 uppercase pl-6">
              Ngũgĩ wa Thiong'o
            </p>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Beautiful Studio Visual Slider Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-center transform-gpu"
        >
          <div className="relative w-full aspect-[25/24] bg-neutral-100 rounded-[8px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)] border border-neutral-200/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {/* Visual Image */}
                <img
                  src={SLIDES[currentSlide].url}
                  alt={SLIDES[currentSlide].alt}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-[10px] font-mono tracking-widest text-white/60 uppercase">ACTIVE VENTURE</p>
                  <p className="font-sans font-extrabold text-white text-lg tracking-tight uppercase">{SLIDES[currentSlide].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots Navigation bottom right */}
            <div className="absolute bottom-6 right-8 flex items-center space-x-2 z-10 bg-black/20 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

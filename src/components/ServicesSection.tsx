import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

interface Pillar {
  id: string;
  num: string;
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  altText: string;
}

const PILLARS_DATA: Pillar[] = [
  {
    id: "writing",
    num: "01",
    title: "Writing & Novels",
    description: "Author of three poetry collections, ten children's books, and the award-winning novel 'The Secret Lives of Baba Segi's Wives' which was nominated for the Orange Prize for Fiction.",
    buttonText: "EXPLORE WRITING",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop",
    altText: "A stack of beautiful novels and notebooks in a library",
  },
  {
    id: "festivals",
    num: "02",
    title: "Literary Festivals",
    description: "Founder and director of Aké Arts and Book Festival (celebrating 14 years), the Abuja Festival of Literature and Ideas, and the Lagos International Festival of Illustrations (LIFI).",
    buttonText: "VIEW FESTIVALS",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    altText: "A bright stage with authors and creative speakers",
  },
  {
    id: "publishing",
    num: "03",
    title: "Publishing & Bookstore",
    description: "Publisher of Ouida Books, supporting bold African voices, and founder of OuidaLagos—a high-end bookstore, café, and cultural hub located at 34 Ajanaku Street in Lagos.",
    buttonText: "VISIT OUIDA",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
    altText: "Shelves in a curated cultural bookshop with lighting",
  },
  {
    id: "film",
    num: "04",
    title: "Documentary Filmmaking",
    description: "Creating living archives that address undercelebrated culture and social struggles, including 'Flowers for Warriors' and the upcoming documentary 'Egbe: Searching for Belonging'.",
    buttonText: "WATCH FILMS",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    altText: "Film lens camera setup shooting documentary outdoor",
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string>("writing");

  const currentPillar = PILLARS_DATA.find((p) => p.id === activeId) || PILLARS_DATA[0];

  return (
    <section 
      id="pillars" 
      className="relative min-h-screen bg-white text-neutral-950 py-20 px-6 md:py-32 md:px-12 flex items-center overflow-hidden border-t border-neutral-200 z-30"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col space-y-16">
        
        {/* HEADER AREA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 max-w-4xl transform-gpu"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-400 font-semibold block">
            THE PILLARS OF THE WORK
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-neutral-900">
            Pioneering African literature, independent publishing, and regional cultural festivals
          </h2>
        </motion.div>

        {/* INTERACTIVE SPLIT ACCORDION LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Accordion interactive lists */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col w-full divide-y divide-neutral-200/80 transform-gpu"
          >
            {PILLARS_DATA.map((pillar) => {
              const isActive = pillar.id === activeId;
              return (
                <div 
                  key={pillar.id}
                  className="relative transition-all duration-500"
                >
                  {/* Clickable Row Header */}
                  <button
                    onClick={() => setActiveId(pillar.id)}
                    className={`w-full flex items-center justify-between py-6 px-4 md:px-6 text-left cursor-pointer transition-all duration-300 rounded-[8px] ${
                      isActive 
                        ? "bg-black text-white" 
                        : "bg-transparent text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-neutral-400">
                        {pillar.num}
                      </span>
                      <span className="font-sans text-base md:text-lg lg:text-xl font-bold tracking-tight">
                        {pillar.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-center">
                      {isActive ? (
                        <Minus size={18} className="text-white" strokeWidth={2.5} />
                      ) : (
                        <Plus size={18} className="text-neutral-400 group-hover:text-neutral-950" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* Expanded Body Panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.35, delay: 0.05 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.2 } }
                        }}
                        className="overflow-hidden bg-black text-white rounded-b-[8px] -mt-2 px-4 pb-8 md:px-6"
                      >
                        <div className="pt-2 pl-8 md:pl-12 space-y-6">
                          <p className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed font-medium max-w-sm select-text">
                            {pillar.description}
                          </p>

                          {/* Pill Button */}
                          <div className="pt-2">
                            <button className="group flex items-center justify-between bg-black hover:bg-neutral-900 border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase pl-5 pr-2.5 py-3 rounded-full transition-all duration-300 gap-3">
                              <span>{pillar.buttonText}</span>
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight size={11} strokeWidth={2.5} />
                              </span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* RIGHT COLUMN: Cinematic matching image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 w-full h-full flex flex-col justify-center transform-gpu"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[1.25/1] bg-neutral-100 rounded-[8px] overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.06)] border border-neutral-200/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentPillar.imageUrl}
                    alt={currentPillar.altText}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Outer shadow mask overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

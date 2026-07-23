import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-[#f8f9fa] text-neutral-950 py-20 px-6 md:py-32 md:px-12 flex items-center overflow-hidden border-t border-neutral-200 z-30"
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
            ABOUT THE AUTHOR & FOUNDER
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-neutral-900">
            Lola Shoneyin: Poet, Novelist, Publisher, and Institution Builder
          </h2>
        </motion.div>

        {/* SPLIT GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Description, Stats, and CTA Button */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12">
            
            {/* Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 text-neutral-600 font-sans text-sm md:text-[15px] leading-relaxed transform-gpu"
            >
              <p>
                Lola Shoneyin is a Nigerian poet, novelist, publisher, bookseller, and festival curator. She is the founder and director of Book Buzz Foundation, Aké Arts and Book Festival, and the Abuja Festival of Literature and Ideas. She is also the founder of the Lagos International Festival of Illustrations, Nigeria's first festival dedicated entirely to the art of illustration, bringing together illustrators from across Africa and Europe. She is the publisher of Ouida Books and the founder of OuidaLagos, a bookshop and cultural hub in Lagos.
              </p>
              <p>
                Her novel <span className="italic font-semibold text-neutral-950">The Secret Lives of Baba Segi's Wives</span> has been translated into thirteen languages and was nominated for the Orange Prize for Fiction in 2011. She is the author of three poetry collections and ten children's books that place Nigerian children at the centre of their own adventures. She is President of the IBBY Nigeria Section.
              </p>
              <p>
                Before founding Book Buzz Foundation, she spent years in education, teaching in London and working in school leadership in Nigeria. That grounding in how young people learn and what they need to see of themselves in stories has shaped everything she has built since.
              </p>
            </motion.div>

            {/* Statistics Row with Bounce & Jump */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-neutral-200/60">
              
              {/* Stat 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="space-y-1 transform-gpu"
              >
                <div className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 flex items-baseline">
                  13
                  <span className="text-xl md:text-2xl font-light text-neutral-400 ml-0.5 select-none relative -top-3 md:-top-4"></span>
                </div>
                <p className="text-xs text-neutral-500 font-sans font-semibold tracking-wide">
                  Languages Translated
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="space-y-1 transform-gpu"
              >
                <div className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 flex items-baseline">
                  14
                  <span className="text-xl md:text-2xl font-light text-neutral-400 ml-0.5 select-none relative -top-3 md:-top-4"></span>
                </div>
                <p className="text-xs text-neutral-500 font-sans font-semibold tracking-wide">
                  Years of Aké Festival
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="space-y-1 transform-gpu"
              >
                <div className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 flex items-baseline">
                  10
                  <span className="text-xl md:text-2xl font-light text-neutral-400 ml-0.5 select-none relative -top-3 md:-top-4">+</span>
                </div>
                <p className="text-xs text-neutral-500 font-sans font-semibold tracking-wide">
                  Children's Books
                </p>
              </motion.div>

            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 transform-gpu"
            >
              <a href="#contact" className="inline-block">
                <button className="group flex items-center justify-between bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold tracking-wider uppercase pl-6 pr-3.5 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg gap-4 cursor-pointer">
                  <span>GET IN TOUCH</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={13} strokeWidth={2.5} />
                  </span>
                </button>
              </a>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Childhood Photos Stack & Current Portrait */}
          <div className="lg:col-span-6 w-full space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Childhood Photo 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="relative aspect-[4/5] bg-neutral-100 rounded-[8px] overflow-hidden shadow-md border border-neutral-200/50 transform-gpu"
              >
                <img
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop"
                  alt="Lola Shoneyin childhood school portrait placeholder"
                  className="w-full h-full object-cover select-none filter sepia contrast-125 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Childhood Photo 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="relative aspect-[4/5] bg-neutral-100 rounded-[8px] overflow-hidden shadow-md border border-neutral-200/50 transform-gpu"
              >
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
                  alt="Lola Shoneyin school classroom memories"
                  className="w-full h-full object-cover select-none filter sepia contrast-110 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <p className="text-[11px] font-mono tracking-wider text-neutral-400 text-center uppercase">
              ARCHIVAL ARCHIVES: EARLY CHILDHOOD AND SCHOOLING MEMORIES
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

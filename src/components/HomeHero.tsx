import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-9-2026-08_33_30-pm.png",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-9-2026-08_34_36-pm.png",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-9-2026-08_20_20-pm.png"
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: {
      x: "-100%",
    },
    animate: {
      x: 0,
      transition: {
        x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 1.8 },
      }
    },
    exit: {
      x: "100%",
      transition: {
        x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 1.8 },
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-end justify-start bg-neutral-950">
      
      {/* FULL-HEIGHT HERO IMAGE CAROUSEL */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={IMAGES[index]}
            alt="Lola Shoneyin: Poet, Novelist, Institution Builder"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Sleek, deep vignette and bottom gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />
        
        {/* Carousel indicator dots */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-2">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === idx ? "bg-white w-4" : "bg-white/40 hover:bg-white/70"
              } cursor-pointer`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* OVERLAID BRAND TEXT AREA */}
      <div className="relative z-20 px-6 md:px-16 pb-16 md:pb-24 max-w-5xl select-none">
        <div className="space-y-4">
          
          {/* Identity Line */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-xs md:text-sm font-semibold tracking-[0.3em] text-rose-400 uppercase"
          >
            Poet. Novelist. Institution Builder.
          </motion.p>

          {/* Large Name Display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-sans font-black text-6xl md:text-8xl xl:text-[9rem] leading-none tracking-tight text-white select-text uppercase"
          >
            Lola Shoneyin
          </motion.h1>

        </div>
      </div>

    </div>
  );
}

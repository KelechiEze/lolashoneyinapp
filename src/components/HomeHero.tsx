import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-9-2026-08_20_20-pm.png",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_42_09-pm.png",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-04_21_48-pm.png",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-04_23_20-pm.png"
];

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1DKaUnM4nn/?mibextid=wwXIfr",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1 1-1h2V2h-3c-3 0-4 1.4-4 3.5V8z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lolashoneyin?utm_source=qr",
    icon: (
      <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lola-shoneyin-37007b198?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/lolashoneyin?s=11&t=k5OJv4m_RpRtTxvzSNv50Q",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: {
      x: "-100%",
      scale: 1,
    },
    animate: {
      x: 0,
      scale: 1.15,
      transition: {
        x: { type: "tween", ease: [0.25, 1, 0.5, 1], duration: 1.8 },
        scale: { type: "tween", ease: "linear", duration: 7 },
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
      </div>

      {/* VERTICAL ANIMATED SOCIAL MEDIA STRIP ALIGNED WITH TOP-RIGHT MENU BUTTON */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-30 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-end items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="pointer-events-auto flex flex-col items-center space-y-5 sm:space-y-6"
        >
          {/* Top animated glowing vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 36 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[1.5px] bg-gradient-to-b from-transparent via-rose-500 to-white/40"
          />

          {/* Social Icons Column */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-5">
            {SOCIAL_LINKS.map((item, idx) => (
              <div key={item.name} className="relative group flex items-center justify-center">
                
                {/* Sleek Tooltip popout on hover */}
                <span className="absolute right-full mr-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap font-mono text-[10px] uppercase tracking-widest text-white bg-neutral-950/90 border border-white/20 px-2.5 py-1 rounded-full font-bold">
                  {item.name}
                </span>

                {/* Social Link Icon */}
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.25, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-white/80 hover:text-rose-400 transition-colors duration-300 block outline-none cursor-pointer"
                >
                  {item.icon}
                </motion.a>

                {/* Micro-glow ring animation on hover without background shadow or blur */}
                <span className="absolute inset-0 rounded-full border border-rose-500/0 group-hover:border-rose-500/80 transition-all duration-500 scale-50 group-hover:scale-110 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom animated glowing vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 36 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-[1.5px] bg-gradient-to-t from-transparent via-rose-500 to-white/40"
          />
        </motion.div>
      </div>

      {/* OVERLAID BRAND TEXT AREA & CAROUSEL DOTS */}
      <div className="relative z-20 px-6 md:px-16 pb-16 md:pb-20 max-w-5xl select-none flex flex-col justify-end">
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

        {/* Carousel indicator dots placed cleanly near bottom-left of hero */}
        <div className="flex items-center space-x-2 pt-6">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === idx ? "bg-rose-500 w-6" : "bg-white/40 hover:bg-white/70 w-2"
              } cursor-pointer`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}


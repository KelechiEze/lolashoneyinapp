import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BookOpen, Sparkles, ArrowUpRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ChildrenBookItem {
  id: string;
  title: string;
  year: string;
  image: string;
  description: string;
  tag: string;
}

export const CHILDREN_BOOKS_DATA: ChildrenBookItem[] = [
  {
    id: "anyibo",
    title: "Anyibo and the Mother Hen",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/anyibo.png",
    description: "A heartwarming story celebrating curiosity, compassion, and the wonders of nature.",
    tag: "YOUNG READERS"
  },
  {
    id: "hassan-hussaina",
    title: "A Durbar for Hassan and Hussaina",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png",
    description: "A festive cultural adventure through the grand traditions and colors of Northern Nigeria.",
    tag: "CULTURAL TALE"
  },
  {
    id: "baji",
    title: "Do As You're Told, Baji",
    year: "2022",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/baji.jpg",
    description: "A funny and engaging lesson on responsibility, listening, and growing up.",
    tag: "CHARACTER BUILDING"
  },
  {
    id: "iyaji",
    title: "Iyaji the House Girl",
    year: "2021",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/iyaji.png",
    description: "An inspiring story of perseverance, education, dignity, and unyielding hope.",
    tag: "RESILIENCE"
  },
  {
    id: "jamila",
    title: "Jamila's Clever Plan",
    year: "2022",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/jamila.png",
    description: "A tale of ingenuity and teamwork where young Jamila solves a community challenge.",
    tag: "PROBLEM SOLVING"
  },
  {
    id: "pwada",
    title: "Pwada Can Do Anything",
    year: "2024",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/pwada.png",
    description: "Empowering young girls to break boundaries, believe in themselves, and reach high.",
    tag: "GIRL EMPOWERMENT"
  },
  {
    id: "setto",
    title: "Setto Saves the Trees",
    year: "2025",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg",
    description: "An eco-friendly journey teaching children the value of trees and environmental stewardship.",
    tag: "ENVIRONMENT"
  },
  {
    id: "mayowa",
    title: "Mayowa and the Masquerades",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.32.23.jpeg",
    description: "An adventurous tale following young Mayowa as he uncovers the vibrant folklore of festival masquerades.",
    tag: "FOLKLORE & ADVENTURE"
  }
];

export default function HorizontalScrollSection() {
  const navigate = useNavigate();
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const visibleContainerWidth = trackRef.current.clientWidth;
        // Ensure the last card is 100% inside view with right margin padding
        const scrollDistance = Math.max(0, totalTrackWidth - visibleContainerWidth + 60);
        setMaxScroll(scrollDistance);
      }
    };

    calculateScroll();
    const timeout = setTimeout(calculateScroll, 300);
    window.addEventListener("resize", calculateScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculateScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001
  });

  // Slide horizontally until 80% progress, then hold fixed for full visibility before unpinning
  const x = useTransform(smoothProgress, [0, 0.82, 1], [0, -maxScroll, -maxScroll]);

  const handleBookClick = (bookId: string) => {
    navigate("/books", { state: { selectedBookId: bookId } });
    setTimeout(() => {
      const elem = document.getElementById("childrens-books-section");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section 
      ref={targetRef} 
      id="childrens-books-horizontal-section"
      className="relative h-[400vh] bg-white text-neutral-900 w-full overflow-visible"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 sm:px-8 md:px-12 py-6 bg-white">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Static Left Header Box */}
          <div className="lg:w-1/3 shrink-0 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200/80 px-3.5 py-1.5 rounded-full">
              <Sparkles size={13} className="text-rose-600 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-rose-700 font-bold">
                YOUNG READERS & CHILDREN'S BOOKS
              </span>
            </div>

            <h2 className="font-sans font-black text-3xl md:text-5xl text-neutral-950 tracking-tight uppercase leading-none">
              Children's Literature
            </h2>

            <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed max-w-md">
              Whimsical, instructive stories placing African children at the center of their own adventures — reinforcing agency, cultural pride, and creative imagination.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => {
                  navigate("/books");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-2 bg-neutral-950 hover:bg-rose-600 text-white text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-full transition-all duration-300 shadow-md cursor-pointer outline-none group"
              >
                <span>EXPLORE ALL BOOKS</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <div className="flex items-center space-x-1.5 text-neutral-400 font-mono text-[11px] uppercase tracking-wider font-bold">
                <span>SCROLL DOWN TO SLIDE</span>
                <ChevronRight size={14} className="text-rose-600 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Horizontally sliding track with 3D Children's Books */}
          <div ref={trackRef} className="lg:w-2/3 w-full overflow-hidden py-8">
            <motion.div 
              style={{ x, willChange: "transform" }} 
              className="flex gap-7 md:gap-9 w-max transform-gpu"
            >
              {CHILDREN_BOOKS_DATA.map((book) => (
                <div
                  key={book.id}
                  onClick={() => handleBookClick(book.id)}
                  className="relative group cursor-pointer shrink-0 w-[240px] sm:w-[280px] md:w-[300px] transform-gpu"
                >
                  {/* 3D Fanned Open Pages Layer on the Right Edge */}
                  <div className="absolute top-1.5 bottom-1.5 -right-3 w-3 bg-gradient-to-r from-amber-50 via-neutral-100 to-amber-100 border-r border-y border-neutral-300 shadow-md transition-transform duration-300 group-hover:translate-x-2 flex flex-col justify-between py-2 px-[1px] z-0 rounded-r-sm">
                    <div className="w-full h-full border-r border-dashed border-neutral-400/50 flex flex-col justify-around">
                      <div className="w-full h-[1px] bg-neutral-300" />
                      <div className="w-full h-[1px] bg-neutral-300" />
                      <div className="w-full h-[1px] bg-neutral-300" />
                      <div className="w-full h-[1px] bg-neutral-300" />
                      <div className="w-full h-[1px] bg-neutral-300" />
                    </div>
                  </div>

                  {/* Main Standing Hardcover Book */}
                  <div className="relative aspect-[3/4.2] w-full rounded-none overflow-hidden bg-neutral-900 border-l-[6px] border-l-rose-700 border-t border-b border-r border-neutral-800 shadow-[12px_18px_30px_rgba(0,0,0,0.22)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[20px_26px_45px_rgba(0,0,0,0.35)] z-10 flex flex-col justify-between p-4 transform-gpu">
                    
                    {/* Spine crease shadow line */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />

                    {/* Book Cover Image */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-950">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle subtle gradient vignette at top and bottom for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 z-10" />
                    </div>

                    {/* Header Badge */}
                    <div className="flex items-center justify-between z-20 relative">
                      <span className="font-mono text-[9px] font-black tracking-widest text-white bg-neutral-950/80 border border-white/20 px-2.5 py-0.5 uppercase shadow-sm">
                        {book.year}
                      </span>
                      <span className="font-mono text-[8px] font-bold tracking-wider text-rose-300 bg-rose-950/80 border border-rose-700/50 px-2 py-0.5 uppercase">
                        {book.tag}
                      </span>
                    </div>

                    {/* Bottom Title & Author Plaque */}
                    <div className="z-20 relative mt-auto pt-3 space-y-1 text-left">
                      <span className="font-mono text-[9px] text-amber-300 uppercase tracking-widest font-bold block">
                        Lola Shoneyin
                      </span>
                      <h3 className="font-sans font-black text-base md:text-lg text-white tracking-tight leading-snug drop-shadow-md group-hover:text-rose-200 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-[10px] text-neutral-300 line-clamp-2 leading-normal pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                        {book.description}
                      </p>
                      
                      <div className="pt-2 flex items-center text-[10px] font-mono text-rose-400 uppercase tracking-wider font-bold">
                        <span>Click to view book</span>
                        <ArrowUpRight size={12} className="ml-1" />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}



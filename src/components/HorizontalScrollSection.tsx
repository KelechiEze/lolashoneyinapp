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
            <h2 className="font-sans font-black text-3xl md:text-5xl text-neutral-950 tracking-tight uppercase leading-none">
              Children's Literature
            </h2>

            <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed max-w-md">
              Whimsical, instructive stories placing African children at the center of their own adventures, reinforcing agency, cultural pride, and creative imagination.
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

          {/* Horizontally sliding track with Children's Books */}
          <div ref={trackRef} className="lg:w-2/3 w-full overflow-hidden py-8">
            <motion.div 
              style={{ x, willChange: "transform" }} 
              className="flex gap-7 md:gap-9 w-max transform-gpu"
            >
              {CHILDREN_BOOKS_DATA.map((book) => (
                <div
                  key={book.id}
                  onClick={() => handleBookClick(book.id)}
                  className="relative group cursor-pointer shrink-0 w-[240px] sm:w-[280px] md:w-[300px] flex flex-col space-y-3 transform-gpu"
                >
                  {/* Clean Book Cover Image */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1 z-10">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Information Block Strictly Underneath */}
                  <div className="space-y-1.5 text-left pt-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] font-black tracking-widest text-rose-800 bg-rose-100 px-2 py-0.5 uppercase rounded-md font-bold">
                        {book.year}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-wider text-rose-700 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded-md uppercase">
                        {book.tag}
                      </span>
                    </div>

                    <h3 className="font-serif font-extrabold text-base sm:text-lg text-neutral-950 tracking-tight leading-snug group-hover:text-rose-600 transition-colors">
                      {book.title}
                    </h3>

                    <p className="font-sans text-xs font-semibold text-neutral-500">
                      By Lola Shoneyin
                    </p>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                      {book.description}
                    </p>
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



import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BookOpen, Sparkles, ArrowUpRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ChildrenBookItem {
  id: string;
  title: string;
  year?: string;
  image: string;
  description: string;
  tag: string;
  author?: string;
  publisher?: string;
}

export const CHILDREN_BOOKS_DATA: ChildrenBookItem[] = [
  {
    id: "mayowa",
    title: "Mayowa and the Masquerades",
    year: "2010",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-17.32.23.jpeg",
    description: "An adventurous tale following young Mayowa as he uncovers the vibrant folklore of festival masquerades.",
    tag: "FOLKLORE & ADVENTURE"
  },
  {
    id: "baji",
    title: "Do As You Are Told, Baji",
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
    id: "hassan-hussaina",
    title: "A Durbar Festival for Hassan and Hussaina",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/hassan-hussaina.png",
    description: "A festive cultural adventure through the grand traditions and colors of Northern Nigeria.",
    tag: "CULTURAL TALE"
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
    id: "anyibo",
    title: "Anyibo and the Mother Hen",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/anyibo.png",
    description: "A heartwarming story celebrating curiosity, compassion, and the wonders of nature.",
    tag: "YOUNG READERS"
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
    id: "tunde",
    title: "Tunde Onakoya, The Chess Champion",
    year: "2025",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/screenshot-2026-08-16-at-19.24.05.png",
    description: "An inspiring biography of chess master Tunde Onakoya, showing children the power of intellect and vision.",
    tag: "BIOGRAPHY"
  },
  {
    id: "dunoma",
    title: "Dunoma the Brave",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-06-at-21.17.37.jpeg",
    description: "A thrilling tale of bravery, leadership, and moral strength set in ancient kingdom landscapes.",
    tag: "HEROIC TALE"
  },
  /* Temporarily hidden per request.
  {
    id: "ariyo-spelling-tree",
    title: "Ariyo and the Spelling Tree",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.09-1.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "okon-cant-dance",
    title: "Okon Can't Dance",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.09-2.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "bakuras-big-mistake",
    title: "Bakura's Big Mistake",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.09-3.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "when-the-bulldozers-came",
    title: "When the Bulldozers Came",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.09-4.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "adeji-and-the-garden-eggs",
    title: "Adeji and the Garden Eggs",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.09.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "wheels-of-sunshine",
    title: "Wheels of Sunshine",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.10-1.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "talatu-and-the-desert-dates",
    title: "Talatu and the Desert Dates",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.10-2.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "avero-saves-market-day",
    title: "Avero Saves the Market Day",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.10-3.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "mmesoma-and-the-big-gully",
    title: "Mmesoma and the Big Gully",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.10-4.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "what-about-the-boys",
    title: "What About the Boys",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.10-5.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "oyin-and-the-special-marks",
    title: "Oyin and the Special Marks",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.10.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "amaka-and-the-ants",
    title: "Amaka and the Ants",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.11-1.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "rub-and-shine",
    title: "Rub and Shine",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.11-2.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "muna-waits-for-water",
    title: "Maimuna Waits for Water",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.11-3.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "tefelo-and-the-thief",
    title: "ETefelo and the Goat Thief",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.11-4.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "whatmo-and-the-magic-loom",
    title: "Ewatomi and the Magic Loom",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.11-5.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "emike-and-the-idu-mask",
    title: "Emike and the Idu Mask",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.11.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "who-took-my-akara",
    title: "Who Took My Akara?",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.12-1.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "no-more-wet-sheets",
    title: "No More Wet Sheets",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.12-2.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  },
  {
    id: "dark-enough-to-dance",
    title: "Dark Enough to Dance",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/10/whatsapp-image-2026-10-17-at-11.46.12.jpeg",
    description: "A picture book from the Tanja imprint.",
    tag: "PICTURE BOOK",
    author: "",
    publisher: "Tanja"
  }
  */
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
      className="relative bg-white text-neutral-900 w-full overflow-visible"
      style={{ height: `max(400vh, calc(100vh + ${maxScroll / 0.82}px))` }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4 sm:px-8 md:px-12 py-6 bg-white">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Static Left Header Box */}
          <div className="lg:w-1/3 shrink-0 space-y-5">
            <h2 className="font-sans font-black text-3xl md:text-5xl text-neutral-950 tracking-tight uppercase leading-none">
              Children's Books
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
                  className="relative group cursor-pointer shrink-0 w-[190px] sm:w-[210px] md:w-[220px] flex flex-col space-y-3 transform-gpu"
                >
                  {/* Clean Book Cover Image: Square for all children books except Tunde which is rectangular */}
                  <div className={`relative ${book.id === 'tunde' || book.title.toLowerCase().includes('tunde') ? 'aspect-[3/4.7]' : 'aspect-square'} w-full rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ease-out group-hover:-translate-y-1 bg-neutral-100 z-10`}>
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
                      {book.year && (
                        <span className="font-mono text-[10px] font-black tracking-widest text-rose-800 bg-rose-100 px-2 py-0.5 uppercase rounded-md font-bold">
                          {book.year}
                        </span>
                      )}
                      <span className="font-mono text-[10px] font-bold tracking-wider text-rose-700 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded-md uppercase">
                        {book.tag}
                      </span>
                    </div>

                    <h3 className="font-serif font-extrabold text-base sm:text-lg text-neutral-950 tracking-tight leading-snug group-hover:text-rose-600 transition-colors">
                      {book.title}
                    </h3>

                    {(book.author ?? "Lola Shoneyin") && (
                      <p className="font-sans text-xs font-semibold text-neutral-500">
                        By {book.author ?? "Lola Shoneyin"}
                      </p>
                    )}

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

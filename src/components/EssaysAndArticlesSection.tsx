import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Radio, BookOpen } from "lucide-react";
import { DisintegratingImage } from "./DisintegratingImage";

export interface EssayItem {
  id: string;
  title: string;
  year: string;
  outlet: string;
  format: string;
  description: string;
  url: string;
  image: string;
  code: string;
}

export const ESSAYS_AND_ARTICLES: EssayItem[] = [
  {
    id: "building-picturebook-ecosystem",
    title: "Building a Nigerian Picturebook Ecosystem",
    year: "2026",
    outlet: "Publishing Perspectives, 2026",
    format: "Publishing Perspectives",
    description: "An essay on the gap between African and European children's publishing, and the training pipeline she built to close it: Bookstorm, the Nigerian Picture Book Project, LIFI, and the Centre for Illustrations, Nigeria.",
    url: "https://publishingperspectives.com/2026/06/building-a-nigerian-picturebook-ecosystem/",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
    code: "_ECOSYSTEM2026"
  },
  {
    id: "red-tape-black-culture",
    title: "Red Tape, Black Culture",
    year: "2024",
    outlet: "Decolonial Hacker, 2024",
    format: "Decolonial Hacker",
    description: "A commissioned essay tracing \"red tape\" from Henry VIII to Nigeria's cultural bureaucracy, indicting the officials who reduce culture to spectacle then smother real creativity with paperwork. Edited by Adania Shibli.",
    url: "https://decolonialhacker.org/article/red-tape-black-culture",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
    code: "_REDTAPE2024"
  },
  {
    id: "nostalgia-extreme-sport",
    title: "Nostalgia is an Extreme Sport",
    year: "2021",
    outlet: "In Of This Our Country (The Borough Press / HarperCollins, 2021)",
    format: "The Borough Press / HarperCollins",
    description: "Her contribution to an anthology of 24 Nigerian writers on home, identity, and culture, edited by Nancy Adimora and Ore Agbaje-Williams, alongside Adichie, Habila, and Obioma.",
    url: "https://www.harpercollins.co.uk/9780008470654/of-this-our-country/",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
    code: "_NOSTALGIA2021"
  },
  {
    id: "what-is-wrong-with-calling-someone-a-golliwog",
    title: "What is wrong with calling someone a golliwog?",
    year: "2009",
    outlet: "The Times, London, 2009",
    format: "The Times, London",
    description: "Written during the Carol Thatcher and Jo-Wilfried Tsonga \"golliwog\" row, on preparing her son for the racism she feared he would face at his new school.",
    url: "https://www.thetimes.com/travel/destinations/uk-travel/scotland-travel/edinburgh/what-is-wrong-with-calling-someone-a-golliwog-h6g8nxqdnrn",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
    code: "_TIMES2009"
  }
];

export default function EssaysAndArticlesSection() {
  return (
    <div id="essays" className="border-t border-neutral-200 pt-16 space-y-10 scroll-mt-28 font-sans">
      
      {/* SECTION HEADER - MATCHING INTERVIEWS STYLE */}
      <div className="space-y-2">
        <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">
          ESSAYS & ARTICLES
        </span>
        <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
          Selected Essays & Critical Commentary
        </h2>
      </div>

      {/* ESSAYS GRID - DESIGNED EXACTLY LIKE INTERVIEWS AND MEDIA CONVERSATIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
        {ESSAYS_AND_ARTICLES.map((item, idx) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
              delay: idx * 0.08
            }}
            className="group cursor-pointer flex flex-col"
          >
            {/* Card Image Container - Taller portrait ratio matching interviews */}
            <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
              <DisintegratingImage
                src={item.image}
                alt={item.title}
                roundedClassName="rounded-[28px] sm:rounded-[32px]"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {item.year}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-600 shadow-md">
                  <ExternalLink size={14} />
                </div>
              </div>

              {/* Center Hover Overlay with Badge */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                  <ExternalLink className="w-5 h-5 text-black" />
                  <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                    Read Article / Essay
                  </span>
                </div>
              </div>

              {/* Bottom Text Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1">
                <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                  {item.outlet}
                </span>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-white leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-neutral-200 line-clamp-3 leading-relaxed opacity-90 pt-1">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[260px]">
                {item.title}
              </span>
              <span className="font-mono text-neutral-400 font-medium">
                {item.code}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  );
}

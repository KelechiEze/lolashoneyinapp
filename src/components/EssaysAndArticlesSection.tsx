import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export interface EssayItem {
  id: string;
  title: string;
  year: string;
  outlet: string;
  format: string;
  description: string;
  url: string;
}

export const ESSAYS_AND_ARTICLES: EssayItem[] = [
  {
    id: "building-picturebook-ecosystem",
    title: "Building a Nigerian Picturebook Ecosystem",
    year: "2026",
    outlet: "Publishing Perspectives",
    format: "Publishing Perspectives",
    description: "An essay on the gap between African and European children's publishing, and the training pipeline she built to close it: Bookstorm, the Nigerian Picture Book Project, LIFI, and the Centre for Illustrations, Nigeria.",
    url: "https://publishingperspectives.com/2026/06/building-a-nigerian-picturebook-ecosystem/"
  },
  {
    id: "red-tape-black-culture",
    title: "Red Tape, Black Culture",
    year: "2024",
    outlet: "Decolonial Hacker",
    format: "Decolonial Hacker",
    description: "A commissioned essay tracing \"red tape\" from Henry VIII to Nigeria's cultural bureaucracy, indicting the officials who reduce culture to spectacle then smother real creativity with paperwork. Edited by Adania Shibli.",
    url: "https://decolonialhacker.org/article/red-tape-black-culture"
  },
  {
    id: "nostalgia-extreme-sport",
    title: "Nostalgia is an Extreme Sport",
    year: "2021",
    outlet: "In Of This Our Country (The Borough Press / HarperCollins)",
    format: "The Borough Press / HarperCollins",
    description: "Her contribution to an anthology of 24 Nigerian writers on home, identity, and culture, edited by Nancy Adimora and Ore Agbaje-Williams, alongside Adichie, Habila, and Obioma.",
    url: "https://www.harpercollins.co.uk/9780008470654/of-this-our-country/"
  },
  {
    id: "what-is-wrong-with-calling-someone-a-golliwog",
    title: "What is wrong with calling someone a golliwog?",
    year: "2009",
    outlet: "The Times, London",
    format: "The Times, London",
    description: "Written during the Carol Thatcher and Jo-Wilfried Tsonga \"golliwog\" row, on preparing her son for the racism she feared he would face at his new school.",
    url: "https://www.thetimes.com/travel/destinations/uk-travel/scotland-travel/edinburgh/what-is-wrong-with-calling-someone-a-golliwog-h6g8nxqdnrn"
  }
];

export default function EssaysAndArticlesSection() {
  return (
    <div id="essays" className="border-t border-neutral-200 pt-16 space-y-10 scroll-mt-28 font-sans">
      
      {/* SECTION HEADER */}
      <div className="space-y-2">
        <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">
          ESSAYS & ARTICLES
        </span>
        <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
          Selected Essays & Articles
        </h2>
      </div>

      {/* CLEAN EDITORIAL LIST */}
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {ESSAYS_AND_ARTICLES.map((item, idx) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="group block py-7 sm:py-8 transition-colors duration-200 hover:bg-neutral-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200/80 px-2.5 py-0.5 rounded-md uppercase">
                    {item.year}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 font-medium">
                    {item.outlet}
                  </span>
                </div>
                <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 pt-2 md:pt-0 flex items-center text-xs font-mono font-bold text-neutral-400 group-hover:text-rose-600 transition-colors gap-1.5">
                <span className="hidden sm:inline uppercase">Read</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  );
}

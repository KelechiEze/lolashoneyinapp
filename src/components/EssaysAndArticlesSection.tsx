import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Sparkles, X, Eye } from "lucide-react";

export interface EssayItem {
  id: string;
  title: string;
  year: string;
  outlet: string;
  format: string;
  description: string;
  url: string;
}

export interface FeaturedVolume {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  publisher: string;
  coverImage: string;
  description: string;
  details: string;
  tag: string;
  url?: string;
}

export const FEATURED_ANTHOLOGIES: FeaturedVolume[] = [
  {
    id: "eleven-writers-democracy",
    title: "Eleven Writers and Leaders on Democracy",
    subtitle: "Conversations and Essays on Governance, Art & Civic Freedom",
    year: "2024",
    role: "Contributor & Editorial Voice",
    publisher: "Ouida Books / Cultural Initiatives",
    coverImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-17-at-18.30.34.jpeg",
    description: "A seminal collection of critical perspectives from eleven distinguished African writers, scholars, and public intellectuals reflecting on the state of democracy, freedom of expression, and civic action.",
    details: "Brings together urgent essays on democratic transitions, citizen empowerment, and the essential role of literature and truth-telling in political spheres.",
    tag: "FEATURED VOLUME"
  },
  {
    id: "of-this-our-country",
    title: "Of This Our Country",
    subtitle: "Acclaimed Essays on Home, Identity, and Culture",
    year: "2021",
    role: "Author: 'Nostalgia is an Extreme Sport'",
    publisher: "The Borough Press / HarperCollins",
    coverImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-17-at-18.27.11.jpeg",
    description: "A landmark anthology of 24 acclaimed Nigerian writers exploring modern Nigeria and its diaspora. Features Lola Shoneyin's essay 'Nostalgia is an Extreme Sport'.",
    details: "Edited by Nancy Adimora and Ore Agbaje-Williams, alongside Chimamanda Ngozi Adichie, Helon Habila, Chigozie Obioma, and Inua Ellams.",
    tag: "COLLECTED ESSAYS",
    url: "https://www.harpercollins.co.uk/9780008470654/of-this-our-country/"
  }
];

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
  const [selectedVolume, setSelectedVolume] = useState<FeaturedVolume | null>(null);

  return (
    <div id="essays" className="border-t border-neutral-200 pt-16 space-y-12 scroll-mt-28 font-sans">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
        <div className="space-y-3">
          <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
            Essays & Articles
          </h2>
          <p className="font-sans text-xs md:text-sm text-neutral-600 max-w-xl leading-relaxed">
            Critical essays, major anthology contributions, cultural analyses, and personal reflections on contemporary African literature, democracy, and creative freedom.
          </p>
        </div>
      </div>

      {/* DYNAMIC FEATURED ANTHOLOGIES & COLLECTED VOLUMES - UNCONTAINED & SEAMLESS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-neutral-900" />
            <span className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-widest">
              Featured Anthologies & Collected Volumes
            </span>
          </div>
          <span className="font-mono text-xs text-neutral-400">2 Publications</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-2">
          {FEATURED_ANTHOLOGIES.map((volume, idx) => (
            <motion.div
              key={volume.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 2-column layout for book: Flat Cover image (no border radius) + Details */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                  
                  {/* Visual book cover - strictly 0 border radius */}
                  <div className="sm:col-span-5 flex justify-center sm:justify-start">
                    <div 
                      onClick={() => setSelectedVolume(volume)}
                      className="relative cursor-pointer group/cover w-full max-w-[170px]"
                    >
                      <div className="relative aspect-[3/4.6] w-full rounded-none overflow-hidden shadow-md group-hover/cover:shadow-xl group-hover/cover:-translate-y-1 transition-all duration-300 border border-neutral-200 bg-neutral-900">
                        <img
                          src={volume.coverImage}
                          alt={volume.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-500 rounded-none"
                        />
                        <div className="absolute inset-0 bg-neutral-950/0 group-hover/cover:bg-neutral-950/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover/cover:opacity-100 bg-white/95 backdrop-blur-sm text-neutral-900 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow-md transition-opacity flex items-center gap-1 rounded-none">
                            <Eye size={12} />
                            <span>Preview</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Content Summary */}
                  <div className="sm:col-span-7 space-y-2.5 text-left">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-neutral-900 bg-neutral-100 px-2 py-0.5 rounded-none">
                          {volume.year}
                        </span>
                      </div>
                      <h3 className="font-serif font-black text-lg sm:text-xl text-neutral-950 group-hover:text-rose-600 transition-colors leading-tight">
                        {volume.title}
                      </h3>
                      <p className="font-sans text-xs font-medium text-neutral-600 uppercase tracking-wide">
                        {volume.role}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-neutral-600 leading-relaxed line-clamp-4">
                      {volume.description}
                    </p>

                    <div className="pt-1">
                      <span className="text-[11px] font-mono text-neutral-400 block">
                        Publisher: {volume.publisher}
                      </span>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex items-center gap-4">
                      <button
                        onClick={() => setSelectedVolume(volume)}
                        className="font-mono text-xs font-bold text-neutral-700 hover:text-rose-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <BookOpen size={13} className="text-neutral-900" />
                        <span>View Details</span>
                      </button>

                      {volume.url && (
                        <a
                          href={volume.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs font-bold text-neutral-900 hover:text-rose-600 transition-colors inline-flex items-center gap-1"
                        >
                          <span>Read More</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL LIGHTBOX FOR FEATURED VOLUMES */}
      <AnimatePresence>
        {selectedVolume && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden border border-neutral-200"
            >
              <button
                onClick={() => setSelectedVolume(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 flex justify-center">
                  <img
                    src={selectedVolume.coverImage}
                    alt={selectedVolume.title}
                    referrerPolicy="no-referrer"
                    className="w-48 max-h-[340px] object-cover rounded-none shadow-xl border border-neutral-200"
                  />
                </div>

                <div className="sm:col-span-7 space-y-4">
                  <h3 className="font-serif font-black text-2xl text-neutral-950 leading-snug">
                    {selectedVolume.title}
                  </h3>

                  <p className="font-sans text-xs font-bold text-neutral-600 uppercase tracking-wide">
                    {selectedVolume.role} • {selectedVolume.year}
                  </p>

                  <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                    {selectedVolume.description}
                  </p>

                  <p className="font-sans text-xs text-neutral-500 leading-relaxed italic">
                    {selectedVolume.details}
                  </p>

                  {selectedVolume.url && (
                    <div className="pt-2">
                      <a
                        href={selectedVolume.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all shadow-md"
                      >
                        <span>Visit Publication</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Clean Editorial List for Selected Essays & Articles */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
            Selected Articles & Essays
          </span>
        </div>

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
              className="group block py-6 sm:py-7 transition-colors duration-200 hover:bg-neutral-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-6">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded uppercase">
                      {item.year}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500 font-medium">
                      {item.outlet}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="font-serif font-bold text-[15px] sm:text-base md:text-[17px] text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="shrink-0 pt-1 md:pt-0 flex items-center text-xs font-mono font-bold text-neutral-400 group-hover:text-rose-600 transition-colors gap-1.5">
                  <span className="hidden sm:inline uppercase">Read</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </div>
  );
}

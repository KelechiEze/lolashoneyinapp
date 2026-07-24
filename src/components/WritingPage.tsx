import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowUpRight, Sparkles, Feather, FileText, Globe, Quote, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface NonFictionPiece {
  id: string;
  title: string;
  category: "Cultural Commentary" | "Essays & Speeches" | "Literary Criticism" | "Editorials";
  year: string;
  publication: string;
  excerpt: string;
  fullContent?: string;
  link?: string;
  readTime: string;
}

const ESSAYS_AND_ARTICLES: NonFictionPiece[] = [
  {
    id: "institutions",
    title: "Building Durable Cultural Ecosystems in Contemporary West Africa",
    category: "Cultural Commentary",
    year: "2023",
    publication: "Aké Review & Financial Times Feature",
    excerpt: "For centuries, African stories were preserved orally or harvested by external curators. To build lasting creative autonomy, we must build indigenous infrastructure — book festivals, publishing houses, and art spaces owned by our communities.",
    fullContent: "For centuries, African stories were preserved orally or harvested by external curators. To build lasting creative autonomy, we must build indigenous infrastructure — book festivals, publishing houses, and art spaces owned by our communities. Aké Arts and Book Festival was born out of a urgent desire to see African writers, artists, filmmakers, and thinkers converge on African soil to discuss the themes that define our lives, our politics, and our dreams.",
    readTime: "7 min read"
  },
  {
    id: "feminist-power",
    title: "Silence, Secrets, and Survival: Female Agency in Polygamous Structures",
    category: "Essays & Speeches",
    year: "2021",
    publication: "Pen America & Frankfurt Keynote",
    excerpt: "Polygamy is often analyzed through a purely patriarchal lens, but looking closer reveals intricate networks of female strategy, quiet defiance, and mutual preservation within restricted spaces.",
    fullContent: "Polygamy is often analyzed through a purely patriarchal lens, but looking closer reveals intricate networks of female strategy, quiet defiance, and mutual preservation within restricted spaces. Women in traditional households negotiate power in ways that defy Western feminist tropes, creating solidarity amidst competition.",
    readTime: "9 min read"
  },
  {
    id: "young-minds",
    title: "Mirroring the Self: Why African Children Deserve Books Built for Their Imaginations",
    category: "Editorials",
    year: "2022",
    publication: "Book Buzz Foundation Monograph",
    excerpt: "When a child opens a book and sees a character who looks like them, speaks like them, and lives in a neighborhood like theirs, magic happens. It transforms reading from an alien chore into an act of self-affirmation.",
    fullContent: "When a child opens a book and sees a character who looks like them, speaks like them, and lives in a neighborhood like theirs, magic happens. It transforms reading from an alien chore into an act of self-affirmation. Through 'Mayowa and the Masquerades' and 'Ilyas', my aim has always been to root our youth in joyous cultural pride.",
    readTime: "5 min read"
  },
  {
    id: "publishing-manifesto",
    title: "The Ouida Manifesto: Nurturing Bold, Unfiltered Voices Across Africa",
    category: "Literary Criticism",
    year: "2020",
    publication: "Ouida Books Cultural Journal",
    excerpt: "Independent publishing in Africa is not merely a business; it is an act of cultural preservation. Ouida Books exists to ensure that fearless storytellers do not have to modify their tone for foreign sensibilities.",
    fullContent: "Independent publishing in Africa is not merely a business; it is an act of cultural preservation. Ouida Books exists to ensure that fearless storytellers do not have to modify their tone for foreign sensibilities before being published.",
    readTime: "6 min read"
  },
  {
    id: "neurodiversity-africa",
    title: "Breaking the Silence: Neurodiversity, Disability, and Social Stigma in Nigeria",
    category: "Essays & Speeches",
    year: "2024",
    publication: "Human Rights & Creative Advocacy Address",
    excerpt: "Disability in West Africa remains shadowed by superstition and social isolation. Through documentary filmmaking and essayistic writing, we must dismantle prejudice and advocate for inclusive education.",
    readTime: "8 min read"
  },
  {
    id: "future-of-festivals",
    title: "From Abeokuta to Lagos: 14 Years of Aké Festival and the Power of Gathering",
    category: "Cultural Commentary",
    year: "2024",
    publication: "Aké Festival Annual Address",
    excerpt: "Fourteen years ago, gathering 100 writers under one roof in Nigeria seemed like an audacious dream. Today, Aké Festival stands as a beacon of artistic freedom, bringing thousands together across continents.",
    readTime: "10 min read"
  }
];

export default function WritingPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeEssay, setActiveEssay] = useState<NonFictionPiece | null>(null);

  const categories = ["All", "Cultural Commentary", "Essays & Speeches", "Literary Criticism", "Editorials"];

  const filteredPieces = selectedCategory === "All" 
    ? ESSAYS_AND_ARTICLES 
    : ESSAYS_AND_ARTICLES.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* HEADER SECTION */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full">
            <Feather size={13} className="text-rose-600" />
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-rose-700 font-bold">
              NON-FICTION & ESSAYS
            </span>
          </div>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Writing
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-2xl leading-relaxed">
            Non-fiction, cultural essays, speeches, and opinion pieces exploring African literature, institutional building, feminism, and social development.
          </p>
        </div>

        {/* CATEGORY FILTER STRIP WITH ANIMATED PILL */}
        <div className="flex flex-wrap items-center gap-2 border-b border-neutral-200 pb-6 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                  isSelected ? "text-white" : "text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-neutral-950 rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* FEATURED ESSAY CARD */}
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] font-bold tracking-widest text-rose-400 bg-rose-950 border border-rose-800/50 px-3 py-1 uppercase rounded-full">
                FEATURED ESSAY
              </span>
              <span className="font-mono text-xs text-neutral-400">{ESSAYS_AND_ARTICLES[0].year} • {ESSAYS_AND_ARTICLES[0].publication}</span>
            </div>

            <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight leading-tight group-hover:text-rose-200 transition-colors">
              {ESSAYS_AND_ARTICLES[0].title}
            </h2>

            <p className="font-serif italic text-neutral-300 text-base sm:text-lg leading-relaxed">
              "{ESSAYS_AND_ARTICLES[0].excerpt}"
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setActiveEssay(ESSAYS_AND_ARTICLES[0])}
                className="inline-flex items-center space-x-2 bg-white hover:bg-rose-600 text-neutral-950 hover:text-white font-mono text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-full transition-all cursor-pointer"
              >
                <span>READ FULL ESSAY</span>
                <ArrowUpRight size={14} />
              </button>
              <span className="font-mono text-xs text-neutral-400">{ESSAYS_AND_ARTICLES[0].readTime}</span>
            </div>
          </div>
        </div>

        {/* ESSAYS & NON-FICTION GRID */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
            <h3 className="font-sans font-extrabold text-xl text-neutral-900 uppercase tracking-tight">
              Published Essays & Commentary ({filteredPieces.length})
            </h3>
            <span className="font-mono text-xs text-neutral-400 uppercase">Lola Shoneyin Archives</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPieces.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="bg-neutral-50 hover:bg-neutral-100/90 border border-neutral-200 rounded-xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                  onClick={() => setActiveEssay(p)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold text-rose-700 bg-rose-100 border border-rose-200 px-2.5 py-1 rounded-md uppercase">
                        {p.category}
                      </span>
                      <span className="font-mono text-xs font-semibold text-neutral-400">{p.year}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-sans font-black text-lg text-neutral-950 tracking-tight leading-snug group-hover:text-rose-600 transition-colors uppercase">
                        {p.title}
                      </h4>
                      <p className="font-mono text-[11px] text-neutral-500 uppercase">{p.publication}</p>
                    </div>

                    <p className="font-sans text-xs text-neutral-700 leading-relaxed line-clamp-3">
                      {p.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex items-center justify-between font-mono text-xs">
                    <span className="text-neutral-400">{p.readTime}</span>
                    <span className="text-rose-600 font-bold uppercase tracking-wider group-hover:underline inline-flex items-center gap-1">
                      Read Essay <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ESSAY READING MODAL */}
        <AnimatePresence>
          {activeEssay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEssay(null)}
              className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white text-neutral-900 border border-neutral-200 rounded-2xl max-w-3xl w-full p-8 sm:p-12 relative shadow-2xl max-h-[85vh] overflow-y-auto space-y-6"
              >
                <button
                  onClick={() => setActiveEssay(null)}
                  className="absolute top-6 right-6 p-2 text-neutral-500 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className="space-y-3 border-b border-neutral-200 pb-6 pr-10">
                  <span className="font-mono text-xs font-bold text-rose-600 uppercase tracking-widest block">
                    {activeEssay.category} • {activeEssay.year}
                  </span>
                  <h2 className="font-sans font-black text-2xl sm:text-3xl text-neutral-950 uppercase tracking-tight leading-snug">
                    {activeEssay.title}
                  </h2>
                  <p className="font-mono text-xs text-neutral-500 uppercase">{activeEssay.publication}</p>
                </div>

                <div className="prose prose-neutral font-serif text-sm sm:text-base leading-relaxed text-neutral-800 space-y-4">
                  <p>{activeEssay.fullContent || activeEssay.excerpt}</p>
                  <p>
                    Lola Shoneyin's non-fiction work continues to shape discourse surrounding African cultural sustainability, female leadership, and democratic expression.
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex justify-end">
                  <button
                    onClick={() => setActiveEssay(null)}
                    className="bg-neutral-950 text-white px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Close Essay
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

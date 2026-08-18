import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AwardItem {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  organization: string;
}

const AWARDS_LIST: AwardItem[] = [
  {
    id: "award-1",
    title: "African Literary Person of the Year",
    year: "2017",
    organization: "African Literature Association",
    subtitle: "Conferred for groundbreaking impact across African literature, festival curation, and publishing infrastructure.",
  },
  {
    id: "award-2",
    title: "Financial Times 25 Most Influential Women",
    year: "2023",
    organization: "Financial Times",
    subtitle: "Recognized alongside global visionary leaders in culture, arts, literature, and social transformation.",
  },
  {
    id: "award-3",
    title: "Aficionado Award",
    year: "2023",
    organization: "Frankfurter Buchmesse & Salone del Libro Turin",
    subtitle: "Inaugural winner celebrating outstanding and original publishing initiatives worldwide.",
  },
  {
    id: "award-4",
    title: "Royal Society of Literature Fellowship",
    year: "2026",
    organization: "Royal Society of Literature",
    subtitle: "Elected to one of literature's highest lifelong honors in recognition of enduring creative excellence.",
  },
];

export default function AwardsAndPrizesSection() {
  return (
    <section id="awards" className="relative py-20 px-6 md:py-28 md:px-12 bg-white text-neutral-900 z-30 border-t border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
          <div className="space-y-2">
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-950">
              Awards and Prizes
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-medium">
            International recognitions spanning literary achievement, cultural diplomacy, and transformative institution building.
          </p>
        </div>

        {/* CLEAN EDITORIAL LIST LIKE ESSAYS & ARTICLES */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={award.id}
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
                      {award.year}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 font-medium">
                      {award.organization}
                    </span>
                  </div>
                  <h3 className="font-serif font-extrabold text-lg sm:text-xl text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                    {award.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {award.subtitle}
                  </p>
                </div>

                <div className="shrink-0 pt-2 md:pt-0 flex items-center text-xs font-mono font-bold text-neutral-400 group-hover:text-rose-600 transition-colors gap-1.5">
                  <span className="uppercase">Distinction</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";

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
    organization: "Brittle Paper",
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
              Awards
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-medium">
            International recognitions spanning literary achievement, cultural diplomacy, and transformative institution building.
          </p>
        </div>

        {/* BULLETED EDITORIAL LIST */}
        <ul className="space-y-6 list-none divide-y divide-neutral-200/80">
          {AWARDS_LIST.map((award, idx) => (
            <motion.li
              key={award.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`flex items-start gap-4 sm:gap-5 ${idx > 0 ? "pt-6" : ""}`}
            >
              {/* Refined Bullet Indicator */}
              <div className="mt-2 shrink-0">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-600 ring-4 ring-rose-100" />
              </div>

              {/* Award Content */}
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200/80 px-2.5 py-0.5 rounded-md uppercase">
                    {award.year}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 font-medium">
                    {award.organization}
                  </span>
                </div>
                
                <h3 className="font-serif font-extrabold text-lg sm:text-xl text-neutral-950 leading-snug">
                  {award.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-3xl">
                  {award.subtitle}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
}


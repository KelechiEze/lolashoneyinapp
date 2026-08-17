import React from "react";
import { motion } from "framer-motion";

interface AwardItem {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  imageUrl: string;
  organization: string;
}

const AWARDS_LIST: AwardItem[] = [
  {
    id: "award-1",
    title: "African Literary Person of the Year",
    year: "2017",
    organization: "African Literature Association",
    subtitle: "Conferred for groundbreaking impact across African literature, festival curation, & publishing infrastructure.",
    imageUrl: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_35_24-pm.png",
  },
  {
    id: "award-2",
    title: "Financial Times 25 Most Influential Women",
    year: "2023",
    organization: "Financial Times",
    subtitle: "Recognized alongside global visionary leaders in culture, arts, literature, and social transformation.",
    imageUrl: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png",
  },
  {
    id: "award-3",
    title: "Aficionado Award (Frankfurter Buchmesse and Salone Internazionale del Libro, Turin)",
    year: "2023",
    organization: "Frankfurter Buchmesse & Salone del Libro Turin",
    subtitle: "Inaugural winner celebrating outstanding and original publishing initiatives worldwide.",
    imageUrl: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_22_31-pm.png",
  },
  {
    id: "award-4",
    title: "Royal Society of Literature Fellowship",
    year: "2026",
    organization: "Royal Society of Literature",
    subtitle: "Elected to one of literature's highest lifelong honors in recognition of enduring creative excellence.",
    imageUrl: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/seghi1.jpeg",
  },
];

export default function AwardsAndPrizesSection() {
  return (
    <section id="awards" className="relative py-20 px-6 md:py-28 md:px-12 bg-white text-neutral-900 z-30 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
          <div className="space-y-3">
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-900">
              Awards and Prizes
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-medium">
            International recognitions spanning literary achievement, cultural diplomacy, and transformative institution building.
          </p>
        </div>

        {/* Gallery Grid Styled like International Stages and Residencies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={award.id}
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
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                <img
                  src={award.imageUrl}
                  alt={award.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Soft dark overlay */}
                <div className="absolute inset-0 bg-neutral-950/20 pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {award.year}
                  </span>
                  <div className="flex items-center px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-md">
                    <span className="font-mono text-[10px] font-bold uppercase text-neutral-900 truncate max-w-[160px]">
                      {award.organization}
                    </span>
                  </div>
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 space-y-1.5">
                  <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                    {award.organization}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-snug">
                    {award.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-200 line-clamp-3 leading-relaxed opacity-90 pt-1">
                    {award.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Meta Bar */}
              <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[260px]">
                  {award.title}
                </span>
                <span className="font-mono text-neutral-400 font-medium">
                  {award.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


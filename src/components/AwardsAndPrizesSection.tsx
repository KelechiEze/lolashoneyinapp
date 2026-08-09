import React from "react";
import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose-600 font-bold block">
              HONORS & ACCOLADES
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-900">
              Awards and Prizes
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-medium">
            International recognitions spanning literary achievement, cultural diplomacy, and transformative institution building.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition-all duration-300 rounded-none overflow-hidden flex flex-col shadow-sm hover:shadow-xl"
            >
              {/* Photo Frame - Sharp Edges */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-neutral-900 rounded-none">
                <img
                  src={award.imageUrl}
                  alt={award.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 rounded-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                {/* Year Badge - Sharp */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <span className="font-mono text-xs font-black uppercase tracking-wider text-white bg-rose-600 px-3 py-1.5 rounded-none shadow-md">
                    {award.year}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 border border-white/15 rounded-none">
                    <Award className="text-rose-500" size={18} />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-200">
                      {award.organization}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Card Body - Sharp Edges */}
              <div className="p-6 sm:p-8 space-y-3 bg-white border-t border-neutral-200 flex-1 flex flex-col justify-between rounded-none">
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-neutral-900 tracking-tight uppercase leading-snug group-hover:text-rose-600 transition-colors">
                    {award.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                    {award.subtitle}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-neutral-100 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 group-hover:text-rose-600 transition-colors">
                  <span>Recognition Archive</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


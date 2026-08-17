import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Calendar, Award } from "lucide-react";

export default function CredentialsStrip() {
  const items = [
    {
      id: "segi",
      title: "The Secret Lives of Baba Segi's Wives",
      subtitle: "Critically Acclaimed Novel Translated into 14 Languages",
      icon: <BookOpen className="w-4 h-4 text-rose-600 shrink-0" />,
      tag: "NOVEL"
    },
    {
      id: "ake",
      title: "Aké Arts and Book Festival. Fourteen years.",
      subtitle: "Pioneering Pan-African Cultural & Literary Festival",
      icon: <Calendar className="w-4 h-4 text-rose-600 shrink-0" />,
      tag: "INSTITUTION"
    },
    {
      id: "ft",
      title: "FT Woman of 2023.",
      subtitle: "Financial Times 25 Most Influential Women",
      icon: <Award className="w-4 h-4 text-rose-600 shrink-0" />,
      tag: "RECOGNITION"
    }
  ];

  return (
    <section className="relative z-20 bg-white text-neutral-900 border-b border-neutral-200 overflow-hidden py-10 sm:py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className={`flex items-start gap-4 p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 hover:border-neutral-900/30 hover:bg-neutral-100/80 transition-all duration-300 shadow-xs ${
                idx < items.length - 1 ? "md:border-r md:border-neutral-200" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-neutral-200 shadow-xs">
                {item.icon}
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-rose-600 font-bold block">
                  {item.tag}
                </span>
                <h3 className="font-sans font-black text-base sm:text-lg text-neutral-950 uppercase tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-neutral-600 font-medium leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

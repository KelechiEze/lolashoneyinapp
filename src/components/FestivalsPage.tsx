import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Award, MapPin } from "lucide-react";

export default function FestivalsPage() {
  const festivals = [
    {
      id: "ake",
      title: "Aké Arts and Book Festival",
      subtitle: "Africa's Largest Literary Gathering",
      desc: "Aké is Africa's largest literary gathering, three days each year where writers, poets, artists, filmmakers, and thinkers converge to talk, read, and argue about the questions that matter on the continent. Founded by Shoneyin in 2013 in Abeokuta, the town where Nobel laureate Wole Soyinka was born, the festival moved to Lagos in 2017 and has since brought together over a thousand creatives from Africa and the diaspora. It has grown from a single-city gathering into what many now call the biggest convergence of African creatives in the world, and in 2023 it won the inaugural Aficionado Award, presented by the Frankfurt and Turin book fairs, for its contribution to improving the quality of international publishing.",
      quote: "A big thank you to you and your entire team for creating such a festive atmosphere in this year's Aké Festival. We enjoyed the flowers and their colours but we know it was because they grew from a plant with deep roots not always visible, but there all the same, all the time.",
      quoteAuthor: "Ngũgĩ wa Thiong'o",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
      accent: "text-amber-600"
    },
    {
      id: "lifi",
      title: "Lagos International Festival of Illustrations (LIFI)",
      subtitle: "Bridging European and African Graphic Arts",
      desc: "LIFI began with a conversation Shoneyin had at the Bologna Children's Book Fair, when she asked a Slovenian illustrator whether she knew anyone willing to come to Lagos and teach. The answer became a festival: a three-day gathering that brings acclaimed illustrators from around the world to train and work alongside Nigerian illustrators, building the skills and the pipeline Nigerian children's publishing has long lacked. Its second edition runs 17-19 September 2026, with illustrators from Italy, Poland, and Switzerland working alongside 36 Nigerian participants.",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
      accent: "text-rose-600"
    },
    {
      id: "kabafest",
      title: "Kaduna Book & Arts Festival (KABAFEST)",
      subtitle: "A Stage for Northern Nigerian Voices",
      desc: "KABAFEST took northern Nigeria's literary scene and gave it a stage of its own. Founded in 2017 as an initiative of the Kaduna State Government, the festival set out to challenge the idea that the north was too conservative for books and ideas, hosting panels in Hausa and English and creating space for conversations on identity, politics, feminism, and religion that don't always get room elsewhere. It was the only state-funded literary festival in northern Nigeria, until state support was withdrawn and the festival was discontinued in 2025.",
      img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1200",
      accent: "text-emerald-600"
    },
    {
      id: "afli",
      title: "Abuja Festival of Literature and Ideas (AFLI)",
      subtitle: "Stimulating Ideas in the Nation's Capital",
      desc: "AFLI is the newest festival under the Book Buzz Foundation, launching its inaugural edition from 8-10 October 2026 in Abuja, in partnership with the EU Delegation to Nigeria. Abuja, Shoneyin believed, was ripe for an intellectually stimulating platform where thinkers could learn about issues shaping the wider world from the experts who study them.",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200",
      accent: "text-teal-600"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 max-w-4xl transform-gpu"
        >
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Literary Festivals
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-3xl leading-relaxed">
            Gathering writers, poets, artists, filmmakers, and thinkers across cities to celebrate culture and intellectual exchange.
          </p>
        </motion.div>

        {/* FESTIVALS LIST */}
        <div className="space-y-20 border-t border-neutral-200 pt-16">
          {festivals.map((f, idx) => (
            <motion.div 
              key={f.id} 
              id={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transform-gpu scroll-mt-32"
            >
              {/* Text Area */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="space-y-2">
                  <span className={`font-mono text-xs uppercase tracking-widest font-black ${f.accent}`}>{f.subtitle}</span>
                  <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase leading-tight text-neutral-950">{f.title}</h2>
                </div>

                <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">{f.desc}</p>
                
                {f.quote && (
                  <div className="bg-neutral-50 border-l-4 border-rose-600 p-6 rounded-r-xl space-y-2">
                    <p className="text-neutral-800 font-serif italic text-sm md:text-base leading-relaxed select-text">
                      "{f.quote}"
                    </p>
                    <p className="text-neutral-600 font-sans text-xs font-bold uppercase tracking-wider">
                      — {f.quoteAuthor}
                    </p>
                  </div>
                )}

                <div className="flex items-center space-x-6 text-xs text-neutral-500 font-mono">
                  <span className="flex items-center"><MapPin size={14} className="mr-1 text-neutral-400" /> NIGERIA</span>
                  <span className="flex items-center"><Calendar size={14} className="mr-1 text-neutral-400" /> ANNUAL EVENT</span>
                </div>
              </div>

              {/* Image Area */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="lg:col-span-6"
              >
                <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

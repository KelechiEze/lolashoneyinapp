import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Award, MapPin } from "lucide-react";

export default function FestivalsPage() {
  const festivals = [
    {
      id: "ake",
      title: "Aké Arts and Book Festival",
      subtitle: "Fourteen Years of Literary Gathering",
      desc: "Founded in 2013, Aké Arts and Book Festival has grown into one of the most significant literary gatherings on the African continent. Over the last fourteen years, it has brought together thousands of writers, artists, poets, and filmmakers from across Africa and the world to discuss culture, politics, and the arts.",
      award: "In 2023, Aké became the inaugural winner of the prestigious Aficionado Award (Frankfurt Book Fair & Salone del Libro di Torino) for outstanding and original publishing/literary initiatives.",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200",
      accent: "text-amber-400"
    },
    {
      id: "lifi",
      title: "Lagos International Festival of Illustrations (LIFI)",
      subtitle: "Empowering Graphic Storytelling",
      desc: "LIFI is Nigeria's first festival dedicated entirely to the art of illustration, bridging European and African graphic arts. Lola Shoneyin founded this pioneering initiative to establish Nigeria as a serious player in the global illustration community.",
      highlights: "Featured guest countries include Switzerland, Poland, and Italy, bringing masterclasses, international curators, and workshops to Nigerian artists.",
      img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
      accent: "text-rose-400"
    },
    {
      id: "afli",
      title: "Abuja Festival of Literature and Ideas (AFLI)",
      subtitle: "Ideas that Shape Policy and Culture",
      desc: "Founded as a platform for critical engagement in the nation's capital, AFLI hosts panels, keynotes, debates, and literature lounges. It addresses how stories, essays, and creative designs shape policy, governance, and development in Nigeria and West Africa.",
      img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200",
      accent: "text-teal-400"
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
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            CULTURAL SPHERES & CURATIONS
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Literary Festivals
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Designing world-class physical and digital environments that gather writers, thinkers, and illustrators to celebrate the arts.
          </p>
        </motion.div>

        {/* FESTIVALS LIST */}
        <div className="space-y-20 border-t border-neutral-200 pt-16">
          {festivals.map((f, idx) => (
            <motion.div 
              key={f.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transform-gpu"
            >
              {/* Text Area */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                <div className="space-y-2">
                  <span className={`font-mono text-xs uppercase tracking-widest font-black ${f.accent.replace('-400', '-600')}`}>{f.subtitle}</span>
                  <h2 className="font-sans font-black text-3xl md:text-4xl tracking-tight uppercase leading-tight text-neutral-950">{f.title}</h2>
                </div>

                <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">{f.desc}</p>
                
                {f.award && (
                  <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-[8px] flex items-start space-x-4">
                    <Award className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-sans font-extrabold text-xs text-neutral-900 uppercase tracking-wider">Frankfurt Aficionado Award Winner</h4>
                      <p className="text-neutral-600 font-sans text-xs mt-1 leading-relaxed select-text">{f.award}</p>
                    </div>
                  </div>
                )}

                {f.highlights && (
                  <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-[8px] flex items-start space-x-4">
                    <Sparkles className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-sans font-extrabold text-xs text-neutral-900 uppercase tracking-wider">Featured Guest Countries</h4>
                      <p className="text-neutral-600 font-sans text-xs mt-1 leading-relaxed select-text">{f.highlights}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-6 text-xs text-neutral-500 font-mono">
                  <span className="flex items-center"><MapPin size={14} className="mr-1 text-neutral-400" /> NIGERIA</span>
                  <span className="flex items-center"><Calendar size={14} className="mr-1 text-neutral-400" /> ANNUAL EVENT</span>
                </div>
              </div>

              {/* Image Area with Spiral / Scale in */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="lg:col-span-6"
              >
                <div className="relative aspect-[16/10] rounded-[8px] overflow-hidden border border-neutral-200 shadow-md bg-neutral-100">
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

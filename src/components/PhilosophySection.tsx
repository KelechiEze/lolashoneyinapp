import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles, Heart } from "lucide-react";

export default function PhilosophySection() {
  const cards = [
    {
      icon: <BookOpen className="w-8 h-8 text-rose-600" strokeWidth={1.5} />,
      title: "Stories with Deep Roots",
      description: "Rooted in local history, oral lore, and African narratives. Our literature is designed to go deep into our traditions while addressing universal human struggles."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" strokeWidth={1.5} />,
      title: "Centering Young Heroes",
      description: "Young readers need to see themselves in stories. Ten children's books place Nigerian children at the absolute center of their own brilliant, brave adventures."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" strokeWidth={1.5} />,
      title: "Sustainable Institution Building",
      description: "Creating permanent cultural landmarks like Book Buzz, Aké, and LIFI. We believe in building collaborative spaces that empower artists and novelists."
    },
    {
      icon: <Heart className="w-8 h-8 text-violet-600" strokeWidth={1.5} />,
      title: "Living Social Archives",
      description: "Documenting our cultural realities and struggles through film. We seek to capture undercelebrated traditions to preserve history and support community understanding."
    }
  ];

  return (
    <section 
      id="philosophy" 
      className="relative min-h-screen bg-white text-neutral-950 py-20 px-6 md:py-32 md:px-12 flex items-center overflow-hidden border-t border-neutral-200 z-30"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col space-y-16">
        
        {/* HEADER AREA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transform-gpu"
        >
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              <span>OUR GUIDING PHILOSOPHY</span>
            </div>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-neutral-900 uppercase">
              Upholding cultural documentation, representation, and artistic independence
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="font-sans text-neutral-600 font-medium text-sm md:text-base leading-relaxed select-text border-l-2 border-rose-500 pl-4 italic">
              "We must carry forward our stories, keeping the roots alive. Real change comes from creating platforms that support African voices and artists."
            </p>
          </div>
        </motion.div>

        {/* BOTTOM CONTENT: Image & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Studio Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-4 h-full min-h-[400px] lg:min-h-0 flex transform-gpu group relative"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_58_01-pm.png"
                alt="Lola Shoneyin Guiding Philosophy"
                className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Cards 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-neutral-50 hover:bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-between space-y-12 border border-neutral-200 hover:border-neutral-900 hover:shadow-xl transition-all duration-300 cursor-pointer transform-gpu group"
              >
                {/* Top Icon */}
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:border-neutral-900 transition-colors"
                >
                  {card.icon}
                </motion.div>

                {/* Bottom Content Area */}
                <div className="space-y-3">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-neutral-900 tracking-tight uppercase group-hover:text-rose-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-sans text-neutral-600 font-medium text-xs md:text-sm leading-relaxed select-text">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

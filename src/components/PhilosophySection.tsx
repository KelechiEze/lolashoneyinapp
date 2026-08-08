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
      icon: <Sparkles className="w-8 h-8 text-amber-500" strokeWidth={1.5} />,
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transform-gpu"
        >
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase font-mono tracking-[0.25em] text-neutral-400 font-semibold block">
              OUR GUIDING PHILOSOPHY
            </span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-neutral-900">
              Upholding cultural documentation, representation, and artistic independence
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="font-sans text-neutral-500 font-medium text-sm md:text-base leading-relaxed select-text">
              "We must carry forward our stories, keeping the roots alive. Real change comes from creating platforms that support African voices and artists."
            </p>
          </div>
        </motion.div>

        {/* BOTTOM CONTENT: Image & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Studio Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 h-full min-h-[400px] lg:min-h-0 flex transform-gpu"
          >
            <div className="relative w-full h-full rounded-[8px] overflow-hidden bg-white shadow-none border border-neutral-200/80">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_58_01-pm.png"
                alt="Lola Shoneyin Guiding Philosophy"
                className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right Cards 2x2 Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-[8px] p-8 md:p-10 flex flex-col justify-between space-y-16 shadow-none border border-neutral-200/80 hover:shadow-none transition-all duration-300 cursor-pointer transform-gpu"
              >
                {/* Top Icon */}
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-start"
                >
                  {card.icon}
                </motion.div>

                {/* Bottom Content Area */}
                <div className="space-y-3">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-neutral-900 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="font-sans text-neutral-500 font-medium text-xs md:text-sm leading-relaxed select-text">
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

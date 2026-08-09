import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Library, Landmark, Calendar, Film } from "lucide-react";

interface WorkTile {
  id: string;
  category: string;
  title: string;
  details: string;
  path: string;
  icon: React.ReactNode;
  bgImage: string;
  accentColor: string;
}

const WORK_TILES: WorkTile[] = [
  {
    id: "writing",
    category: "Literary Oeuvre",
    title: "Writing",
    details: "novels, poetry, children's books",
    path: "/books",
    icon: <BookOpen size={20} />,
    bgImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_31_03-pm.png",
    accentColor: "from-rose-600/90 to-neutral-950/90",
  },
  {
    id: "publishing",
    category: "Imprint Africa",
    title: "Publishing",
    details: "Ouida Books",
    path: "/publishing",
    icon: <Library size={20} />,
    bgImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_22_31-pm.png",
    accentColor: "from-amber-600/90 to-neutral-950/90",
  },
  {
    id: "ouidalagos",
    category: "Cultural Hub",
    title: "OuidaLagos",
    details: "bookshop, café, festivals, residency, CFIN",
    path: "/ouida-lagos",
    icon: <Landmark size={20} />,
    bgImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg",
    accentColor: "from-emerald-600/90 to-neutral-950/90",
  },
  {
    id: "festivals",
    category: "Pan-African Convenings",
    title: "Festivals",
    details: "Aké, LIFI, AFLI",
    path: "/festivals",
    icon: <Calendar size={20} />,
    bgImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-25-2026-02_35_24-pm.png",
    accentColor: "from-violet-600/90 to-neutral-950/90",
  },
  {
    id: "film",
    category: "Documentary Cinema",
    title: "Film",
    details: "Flowers for Warriors, A Fragile State, Egbe",
    path: "/film",
    icon: <Film size={20} />,
    bgImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg",
    accentColor: "from-teal-600/90 to-neutral-950/90",
  },
];

export default function TheWorkTiles() {
  const navigate = useNavigate();

  const handleTileClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="the-work" className="relative py-20 px-6 md:py-28 md:px-12 bg-white text-neutral-900 z-30 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-rose-600 font-bold block">
              PORTFOLIO ARCHITECTURE
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-900">
              The Work
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed font-medium">
            Explore the interconnected creative ecosystem spanning storytelling, publishing sovereignty, festival convenings, and documentary archives.
          </p>
        </motion.div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {WORK_TILES.map((tile, idx) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }}
              onClick={() => handleTileClick(tile.path)}
              className={`group relative min-h-[320px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/50 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between p-6 sm:p-8 transform-gpu ${
                tile.id === "writing" ? "sm:col-span-2 lg:col-span-2 min-h-[360px]" : ""
              }`}
            >
              {/* Background Cover Image */}
              <img
                src={tile.bgImage}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${tile.accentColor} opacity-85 group-hover:opacity-95 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/40" />

              {/* Top Row: Icon & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-rose-500 transition-all duration-300">
                  {tile.icon}
                </div>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-2 pt-12">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-rose-300/90 block">
                  {tile.category}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight">
                  {tile.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm font-semibold text-neutral-200 tracking-wide pt-1">
                  {tile.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

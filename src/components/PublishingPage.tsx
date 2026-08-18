import React from "react";
import { Coffee, Compass, BookOpen, MapPin } from "lucide-react";

export default function PublishingPage() {
  const highlights = [
    {
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      title: "Bold African Voices",
      desc: "Publishing daring and remarkable prose and poetry by established and emerging voices from across the continent."
    },
    {
      icon: <Coffee className="w-6 h-6 text-amber-500" />,
      title: "Cultural Café & Hub",
      desc: "A warm and inviting space for writers, artists, and readers to connect, exchange ideas, and relax with premium blends."
    },
    {
      icon: <Compass className="w-6 h-6 text-teal-500" />,
      title: "Creative Residency",
      desc: "Providing serene, structured quarters for local and international literary creators to focus on their manuscript production."
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Publishing & Bookselling
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Sustaining vibrant printed paper and physical ecosystems that celebrate intellectual thought, hospitality, and writer development.
          </p>
        </div>

        {/* DETAILS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-16">
          
          {/* Left Column - Ouida Books */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">Ouida Books</h2>
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">
              Founded by Lola Shoneyin in 2016, Ouida Books has emerged as a premier publishing house in Nigeria. Committed to high-end publishing standards, Ouida Books selects, edits, and produces books that capture complex realities and beautiful storytelling. It champions authentic voices and pushes boundaries in fiction, memoir, non-fiction, and children's literature.
            </p>
            <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed select-text">
              With a primary goal of restoring a reading culture and backing independent writers, Ouida provides full editing and marketing pathways, presenting high-quality, beautifully bound paperbooks to readers throughout West Africa and global markets.
            </p>
            
            <div className="relative aspect-[16/9] rounded-[8px] overflow-hidden border border-neutral-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop"
                alt="Ouida Books publishing stack"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column - OuidaLagos */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">OuidaLagos</h2>
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">
              OuidaLagos is more than a bookshop; it is a vibrant cultural hub in the heart of Lagos. Home to a bookstore, a relaxing café, a cultural events stage, and an intimate writer-in-residence room, it serves as an indispensable sanctuary for authors, thinkers, students, and readers.
            </p>

            {/* Address badge */}
            <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-[8px] flex items-center space-x-3">
              <MapPin className="text-rose-600 flex-shrink-0" size={18} />
              <div className="text-xs font-mono tracking-wide text-neutral-700 uppercase">
                34 Ajanaku Street, Opebi, Lagos, Nigeria
              </div>
            </div>

            <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed select-text">
              Every month, OuidaLagos hosts book readings, acoustic music nights, poetry slams, and visual art exhibitions, strengthening the creative pulse of Lagos and offering a home to all lovers of literature and community.
            </p>

            <div className="relative aspect-[16/9] rounded-[8px] overflow-hidden border border-neutral-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
                alt="Cozy reading room inside OuidaLagos"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* THREE PILLAR FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-neutral-200">
          {highlights.map((h, idx) => (
            <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-[8px] p-8 space-y-4 hover:border-neutral-300 transition-colors">
              <div className="p-3 bg-neutral-100 rounded-full w-max">{h.icon}</div>
              <h3 className="font-sans font-extrabold text-base text-neutral-900 uppercase tracking-wider">{h.title}</h3>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed select-text">{h.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

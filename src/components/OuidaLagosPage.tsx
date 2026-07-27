import React from "react";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SpacesSection from "./SpacesSection";

export default function OuidaLagosPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white relative">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
        
        {/* FIRST SECTION: HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full">
              <MapPin size={14} className="text-rose-600" />
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-rose-700 font-bold">
                CULTURAL HUB & BOOKSTORE • LAGOS
              </span>
            </div>
            
            <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
              Ouida Lagos
            </h1>
            
            <p className="text-neutral-700 font-serif italic text-xl md:text-2xl leading-relaxed">
              "A multi-story cultural sanctuary in Ikeja uniting books, coffee, art, festivals, residencies, and vibrant community."
            </p>
            
            <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
              Located at 34 Ajanaku Street in the heart of Ikeja, Ouida Lagos is a landmark multi-purpose creative space founded by Lola Shoneyin. Designed as a haven for readers, thinkers, and artists, it houses a premier independent bookstore, café, publishing house headquarters, event stage, the Orange Tree Writer's Residency, CFIN, and co-working spaces.
            </p>

            {/* Address & Hours Pill Card */}
            <div className="bg-neutral-50 border border-neutral-200 p-6 rounded-xl space-y-3 font-sans text-xs">
              <div className="flex items-start space-x-3 text-neutral-800">
                <MapPin size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-950 font-bold uppercase">Address</strong>
                  <span>34 Ajanaku Street, Off Salvation Road, Opebi, Ikeja, Lagos, Nigeria</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-neutral-800">
                <Clock size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-neutral-950 font-bold uppercase">Operating Hours</strong>
                  <span>Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: 12:00 PM – 6:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-2 bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full transition-all shadow-md cursor-pointer"
              >
                <span>Book Event Space / Contact</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl relative bg-neutral-950 group">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg"
                alt="Ouida Lagos Bookstore & Cafe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end text-white">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-rose-400">34 AJANAKU STREET • LAGOS</span>
                <h3 className="font-sans font-black text-2xl uppercase tracking-tight mt-1">Ouida Lagos Hub</h3>
                <p className="font-sans text-xs text-neutral-300 mt-2">Where literature, art, residencies, and Lagos creative energy intersect daily.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND SECTION: "Spaces at Ouida" (RECREATING SCREENSHOT LAYOUT) */}
        <SpacesSection className="pt-8 border-t border-neutral-200" />

      </div>
    </div>
  );
}

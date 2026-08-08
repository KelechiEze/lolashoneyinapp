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
              At 34 Ajanaku Street, off Salvation Road, Opebi, Ouida Lagos is a cultural hub built for people who read, make, and gather. It houses a bookshop stocked with fiction, non-fiction, children's books, poetry, and titles from Ouida Books itself; a café serving street food such as dundun, dodo, ewa agoyin, pepe sauce, zobo. The Orange Tree Residency is a two-week residency offering writers space to write and a chance to experience the full book ecosystem so that they better understand how the Nigerian publishing industry works.
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

        {/* SECOND SECTION: "Spaces at Ouida" */}
        <div id="spaces" className="scroll-mt-28">
          <SpacesSection className="pt-8 border-t border-neutral-200" />
        </div>

        {/* COMMUNITY SECTION */}
        <div id="community" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">CULTURAL GATHERINGS</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-neutral-950">
              Ouida Community
            </h2>
          </div>

          <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-2xl space-y-6">
            <p className="font-sans text-base md:text-lg text-neutral-800 leading-relaxed max-w-4xl">
              Ouida Community brings together artists, storytellers, food lovers, and culture enthusiasts through open-stage nights and hands-on workshops. Regular fixtures include <strong>Ouida Open Mic</strong>, <strong>Ìsèdá</strong> (a monthly celebration of creativity supported by the US Embassy), and <strong>Silent Reading at Ouida</strong>.
            </p>

            <div className="pt-4 border-t border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-sans text-sm font-semibold text-neutral-700">
                For rates, bookings, and the full offering, visit <a href="https://ouidalagos.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 underline hover:text-rose-700">ouidalagos.com</a>.
              </span>
              <a
                href="https://ouidalagos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
              >
                <span>Visit ouidalagos.com</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

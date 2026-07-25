import React from "react";
import { motion } from "framer-motion";
import { MapPin, Coffee, BookOpen, Calendar, Clock, Sparkles, ArrowUpRight, Users, Music, Palette, Home, Briefcase, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OuidaLagosPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: "The Bookstore",
      desc: "Thousands of curated African and international titles, poetry collections, graphic novels, and children's literature displayed in custom architectural shelving."
    },
    {
      icon: Coffee,
      title: "Café & Bistro",
      desc: "Artisanal espresso, fresh pastries, traditional Nigerian treats, and light gourmet fare in a tranquil, climate-controlled literary sanctuary."
    },
    {
      icon: ExternalLink,
      title: "Publishing House HQ",
      desc: "Home base for Ouida Books editing team, manuscript reviews, imprint curation (Cognix, Teyani, Tanja, Phoenix) and global distribution coordination.",
      linkUrl: "/ouida-books",
      linkText: "Explore Ouida Books"
    },
    {
      icon: Calendar,
      title: "Events & Performance Hall",
      desc: "A vibrant multi-purpose venue hosting weekly book readings, poetry open mics, art exhibitions, panel debates, and intimate film screenings."
    },
    {
      icon: Sparkles,
      title: "Festivals Hub (LIFI & AFLI)",
      desc: "Host venue for the Lagos International Festival of Illustration (LIFI) and Abuja Festival of Literature & Ideas (AFLI) workshops and guest panels.",
      linkUrl: "/festivals",
      linkText: "View Festivals"
    },
    {
      icon: Home,
      title: "Orange Tree Writer's Residency",
      desc: "A dedicated writer's residency providing mid-career African authors with quiet room, board, and editorial mentorship in Ikeja, Lagos."
    },
    {
      icon: Palette,
      title: "CFIN (Centre for Illustrations, Nigeria)",
      desc: "Nigeria's premier hub for graphic illustration, visual art archives, digital drawing masterclasses, and international curator exchanges."
    },
    {
      icon: Briefcase,
      title: "Co-working & Creative Space",
      desc: "Quiet, air-conditioned co-working areas and private meeting rooms equipped with high-speed Wi-Fi, tailored for authors, remote workers, and artists."
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* HERO SECTION */}
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

        {/* SPATIAL PILLARS - ALL 8 FEATURES */}
        <div className="border-t border-neutral-200 pt-16 space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">THE COMPLETE SPATIAL ECOSYSTEM</span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-neutral-950">
              Inside Ouida Lagos
            </h2>
            <p className="text-neutral-600 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
              Every floor and wing of Ouida Lagos is meticulously curated to encourage curiosity, author support, illustration arts, and artistic connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, idx) => {
              const IconComp = f.icon;
              return (
                <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 space-y-4 hover:border-neutral-300 transition-colors shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">
                      <IconComp size={20} />
                    </div>
                    <h3 className="font-sans font-black text-lg text-neutral-950 uppercase tracking-tight leading-snug">{f.title}</h3>
                    <p className="font-sans text-xs text-neutral-600 leading-relaxed">{f.desc}</p>
                  </div>

                  {f.linkUrl && (
                    <div className="pt-2">
                      <button
                        onClick={() => navigate(f.linkUrl)}
                        className="inline-flex items-center space-x-1 font-mono text-[11px] font-bold text-rose-600 hover:text-rose-700 uppercase cursor-pointer"
                      >
                        <span>{f.linkText}</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* HOST YOUR EVENT STRIP */}
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-6 shadow-2xl">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-bold block">VENUE RENTALS & GATHERINGS</span>
            <h3 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tight">Host Your Event at Ouida Lagos</h3>
            <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
              Planning a book launch, private poetry reading, acoustic music performance, art exhibition, or corporate workshop? Ouida Lagos offers versatile venue spaces with full audiovisual support and catering services.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full transition-all cursor-pointer"
            >
              Inquire About Space Rentals
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

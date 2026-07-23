import React from "react";
import { Award, Newspaper, ArrowUpRight, Globe } from "lucide-react";

export default function PressPage() {
  const accolades = [
    {
      id: "ft-2023",
      source: "Financial Times",
      title: "The Most Influential Women of 2023",
      tagline: "Honouring global leaders shaping literature and cultural institutions",
      desc: "Lola Shoneyin was named among the Financial Times' highly respected compilation of the world's most powerful and influential women, celebrating her massive decade-long dedication to creating platforms for African arts.",
      link: "https://www.ft.com",
      badge: "FT WOMAN 2023"
    },
    {
      id: "guardian-2024",
      source: "The Guardian",
      title: "The Most Inspiring People of 2024",
      tagline: "Spotlighting cultural visionaries building creative networks",
      desc: "Recognised for her pioneering efforts in introducing the Lagos International Festival of Illustrations (LIFI) and guiding the Book Buzz Foundation to empower independent artists across Africa.",
      link: "https://www.theguardian.com",
      badge: "MOST INSPIRING 2024"
    },
    {
      id: "frankfurt-award",
      source: "Frankfurt Book Fair",
      title: "Winner of the Aficionado Award",
      tagline: "Outstanding and highly original publishing initiatives",
      desc: "Aké Arts and Book Festival became the inaugural winner of the Aficionado Award, recognizing outstanding efforts in building international networks and supporting African creatives.",
      link: "https://www.buchmesse.de",
      badge: "AFICIONADO AWARD"
    }
  ];

  const pressLinks = [
    { source: "PEN Oakland", text: "Josephine Miles Literary Award", year: "2011" },
    { source: "Orange Prize", text: "Orange Prize for Fiction Nomination", year: "2011" },
    { source: "Ken Saro-Wiwa Prize", text: "Ken Saro-Wiwa Prose Prize Winner", year: "2011" },
    { source: "ANA Prize", text: "Association of Nigerian Authors Prose Prize Winner", year: "2011" }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            PRESS RELEASES & RECOGNITION
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Press & Accolades
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Curated coverage and honorary acknowledgements from leading global press, festivals, and publishers.
          </p>
        </div>

        {/* ACCLAIM FEATURE CARDS */}
        <div className="space-y-10 border-t border-neutral-200 pt-16">
          <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-neutral-500">Featured Media Coverages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accolades.map((a) => (
              <div key={a.id} className="bg-neutral-50 border border-neutral-200 rounded-[8px] p-8 flex flex-col justify-between space-y-8 hover:border-neutral-300 transition-colors shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-black tracking-widest text-rose-700 bg-rose-600/10 px-2 py-0.5 rounded-[4px] uppercase">{a.badge}</span>
                    <Newspaper size={18} className="text-neutral-400" />
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-[10px] tracking-widest uppercase text-neutral-500">{a.source}</h4>
                    <h3 className="font-sans font-extrabold text-xl text-neutral-900 tracking-tight leading-tight mt-1">{a.title}</h3>
                  </div>
                  <p className="font-serif italic text-xs text-neutral-500">{a.tagline}</p>
                  <p className="font-sans text-xs text-neutral-700 leading-relaxed select-text">{a.desc}</p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-neutral-800 uppercase tracking-widest font-bold hover:text-rose-600 transition-colors group"
                  >
                    <span>Read Full Profile</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LITERARY HONORS */}
        <div className="border-t border-neutral-200 pt-16 space-y-8">
          <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-neutral-500">Literary Honors & Nominations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pressLinks.map((p, idx) => (
              <div key={idx} className="bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 rounded-[8px] p-6 flex flex-col justify-between h-36 transition-all duration-300 shadow-sm">
                <span className="font-mono text-xs text-rose-600 font-bold">{p.year}</span>
                <div className="space-y-1">
                  <h4 className="font-sans font-extrabold text-sm text-neutral-800 uppercase tracking-tight">{p.source}</h4>
                  <p className="font-sans text-[10px] text-neutral-500 uppercase">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

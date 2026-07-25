import React from "react";
import WritingHeroSection from "./WritingHeroSection";
import BibliographyGridSection from "./BibliographyGridSection";

export default function WritingPage() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 px-4 sm:px-8 md:px-12 selection:bg-neutral-900 selection:text-white font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP PAGE HEADER */}
        <div className="space-y-2 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            BIBLIOGRAPHY, ESSAYS & WORKS BY LOLA SHONEYIN
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Writing
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg md:text-xl max-w-2xl leading-relaxed">
            Exploring polygamy, female power, identity, and African childhood through award-winning fiction, poetry, and children's literature.
          </p>
        </div>

        {/* RECREATED HERO SECTION FROM REFERENCE UI */}
        <WritingHeroSection />

        {/* BIBLIOGRAPHY & FEATURED WORKS SECTION */}
        <BibliographyGridSection />

      </div>
    </div>
  );
}

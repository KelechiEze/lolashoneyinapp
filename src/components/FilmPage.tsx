import React from "react";
import { Play, Film, Camera, Heart } from "lucide-react";

export default function FilmPage() {
  const documentaries = [
    {
      id: "flowers",
      title: "Flowers for Warriors (2020)",
      role: "Producer",
      desc: "Directed by Joshua Ogunjobi and produced by Shoneyin, Flowers for Warriors follows three Nigerian families raising children living with visible disabilities, in a society that stigmatises them. There is heartbreak in it, and fear, but also the quiet victory of parents who refuse to let the world's discomfort become their children's shame. The film screened at Studio Kino in Germany on 20 June 2022.",
      link: "https://www.youtube.com/watch?v=GRIKclGchfM",
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-23.47.22.jpeg",
      actionText: "Watch on YouTube",
      isLive: true
    },
    {
      id: "fragile",
      title: "A Fragile State (2024)",
      role: "Writer & Performer",
      desc: "A spoken-word poem written and performed by Shoneyin, commissioned by the Financial Times as part of Democracy 2024, a four-part film series marking the year's global elections. Shoneyin appeared alongside Margaret Atwood, Elif Shafak, and Aditi Mittal, each performing a piece on the fragility of democratic freedom. Directed by Juliet Riddell.",
      link: "https://www.youtube.com/watch?v=qfjvorIJhUA",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200",
      actionText: "Watch on YouTube",
      isLive: true
    },
    {
      id: "egbe",
      title: "Egbe: In Search of Belonging (2027)",
      role: "Producer & Director",
      desc: "A documentary on the egbe age-group social structure of Remoland, told through the voices of the people who live it, an archive of pre-colonial societal cohesion, held together by those who still cherish it. The film is in late production.",
      status: "In Late Production",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200",
      actionText: "In Late Production",
      isLive: false
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Documentaries & Film
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Creating living archives to preserve cultural bonds, document social realities, and combat stigma.
          </p>
        </div>

        {/* Lola's Statement */}
        <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-[8px] space-y-6 max-w-5xl shadow-sm">
          <div className="flex items-center space-x-3 text-rose-600">
            <Camera size={22} />
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest">A Director's Note</h3>
          </div>
          <blockquote className="font-serif italic text-lg md:text-xl text-neutral-800 leading-relaxed select-text">
            "We're lackadaisical about documentation our history and our heritage, and that needs to change. Make Egbé: My Search for Belonging became urgent after I witnessed a moving expression of togetherness and community at my father's 90th birthday."
          </blockquote>
          <p className="font-sans font-semibold text-xs tracking-wider text-neutral-500 uppercase">
            Lola Shoneyin
          </p>
        </div>

        {/* DOCUMENTARY PROJECTS GRID (Small 3-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-neutral-200">
          {documentaries.map((doc) => (
            <div key={doc.id} id={doc.id} className="bg-neutral-50 border border-neutral-200 rounded-[8px] overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-sm hover:shadow-md scroll-mt-28">
              {/* Cover Image */}
              <div className="relative aspect-[16/10] w-full bg-neutral-100">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/10" />
                {!doc.isLive && (
                  <div className="absolute top-3 right-3 bg-amber-500/90 text-neutral-950 font-mono text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded-[4px] uppercase">
                    In Post-Production
                  </div>
                )}
                {doc.isLive && (
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white font-mono text-[9px] font-black tracking-widest px-2.5 py-0.5 rounded-[4px] uppercase">
                    Available Now
                  </div>
                )}
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <Film className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span className="font-mono text-[11px] uppercase text-neutral-500 tracking-wider font-bold truncate">{doc.role}</span>
                  </div>
                  <h3 className="font-sans font-black text-lg md:text-xl text-neutral-900 uppercase tracking-tight leading-snug">{doc.title}</h3>
                  <p className="font-sans text-xs sm:text-[13px] text-neutral-600 leading-relaxed select-text line-clamp-4 hover:line-clamp-none transition-all">{doc.desc}</p>
                </div>

                {doc.status && (
                  <p className="text-[11px] font-mono text-amber-700 font-semibold pt-1">
                    📢 {doc.status}
                  </p>
                )}

                <div className="pt-4 border-t border-neutral-200/60">
                  {doc.isLive ? (
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-sans text-xs uppercase tracking-widest font-black group transition-colors"
                    >
                      <Play size={13} className="fill-current group-hover:scale-110 transition-transform" />
                      <span>{doc.actionText}</span>
                    </a>
                  ) : (
                    <span className="text-neutral-400 font-sans text-xs uppercase tracking-widest font-bold">
                      {doc.actionText}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

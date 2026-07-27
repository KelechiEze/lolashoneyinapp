import React from "react";
import { Play, Film, Camera, Heart } from "lucide-react";

export default function FilmPage() {
  const documentaries = [
    {
      id: "flowers",
      title: "Flowers for Warriors",
      role: "Producer & Director",
      desc: "This intimate and courageous documentary follows three parents of children living with disabilities through their discoveries, triumphs, and the intense stigma they consistently face from society. It highlights how the world fails to support neurodiverse children and the profound bravery of the families caring for them.",
      link: "https://www.youtube.com", // YouTube Link
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200",
      actionText: "Watch on YouTube",
      isLive: true
    },
    {
      id: "fragile",
      title: "A Fragile State",
      role: "Director & Producer",
      desc: "A compelling documentary investigation examining societal resilience, institutional fragile points, human endurance, and civil memory across West Africa.",
      status: "In Development & Production",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1200",
      actionText: "Production Archive",
      isLive: false
    },
    {
      id: "egbe",
      title: "Egbe: In Search of Belonging",
      role: "Director & Creator",
      desc: "Egbe began at my father's 90th birthday, where I watched him surrounded by his egbe, this group of people he'd known all his life. I couldn't look away. It got me thinking about undercelebrated parts of our culture, what we should carry forward, and what should be allowed to disappear. An exploration of the ancient Yoruba egbe tradition of peer-community associations.",
      status: "In Post-Production. Trailer coming soon.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200",
      actionText: "Post-Production Archive",
      isLive: false
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            CINEMATIC RECORDS & SOCIAL ACTS
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Documentaries & Film
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Creating living archives to preserve cultural bonds, document social realities, and combat stigma.
          </p>
        </div>

        {/* Lola's Sideways Statement */}
        <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-[8px] space-y-6 max-w-5xl shadow-sm">
          <div className="flex items-center space-x-3 text-rose-600">
            <Camera size={22} />
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest">A Director's Note</h3>
          </div>
          <blockquote className="font-serif italic text-xl md:text-2xl text-neutral-800 leading-relaxed select-text">
            "I came to documentary-making sideways. I am drawn to documentaries because they are living archives. The older I get, the more exasperated I am about our recklessness with documentation. The documentaries I make are just me doing my bit."
          </blockquote>
          <p className="font-sans font-semibold text-xs tracking-wider text-neutral-500 uppercase">
            — Lola Shoneyin
          </p>
        </div>

        {/* DOCUMENTARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-neutral-200">
          {documentaries.map((doc) => (
            <div key={doc.id} className="bg-neutral-50 border border-neutral-200 rounded-[8px] overflow-hidden flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-md">
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full bg-neutral-100">
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/10" />
                {!doc.isLive && (
                  <div className="absolute top-4 right-4 bg-amber-500/90 text-neutral-950 font-mono text-[9px] font-black tracking-widest px-3 py-1 rounded-[4px] uppercase">
                    In Post-Production
                  </div>
                )}
                {doc.isLive && (
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white font-mono text-[9px] font-black tracking-widest px-3 py-1 rounded-[4px] uppercase">
                    Available Now
                  </div>
                )}
              </div>

              {/* Text Body */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Film className="w-4 h-4 text-rose-600" />
                    <span className="font-mono text-xs uppercase text-neutral-500 tracking-wider font-bold">{doc.role}</span>
                  </div>
                  <h3 className="font-sans font-black text-xl md:text-2xl text-neutral-900 uppercase tracking-tight">{doc.title}</h3>
                  <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed select-text">{doc.desc}</p>
                </div>

                {doc.status && (
                  <p className="text-xs font-mono text-amber-700 font-semibold mt-4">
                    📢 {doc.status}
                  </p>
                )}

                <div className="pt-6">
                  {doc.isLive ? (
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-sans text-xs uppercase tracking-widest font-black group transition-colors"
                    >
                      <Play size={14} className="fill-current group-hover:scale-110 transition-transform" />
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

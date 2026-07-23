import React from "react";
import { useNavigate } from "react-router-dom";
import { Mic, ArrowRight, Calendar, Users, Globe } from "lucide-react";

export default function SpeakingPage() {
  const navigate = useNavigate();

  const topics = [
    {
      title: "African Literary Ecosystems",
      desc: "Delivering structural insights into how we build durable cultural institutions, curate regional book festivals, and support independent publishing houses in West Africa."
    },
    {
      title: "Neurodiversity & Social Advocacy",
      desc: "Exploring the stigma surrounding children living with physical and intellectual disabilities, tracing social responsibility, and detailing how visual archives promote awareness."
    },
    {
      title: "Storytelling & Young Representation",
      desc: "Highlighting the critical importance of representation in children's literature, showing how stories build pride, and discussing how education structures youth development."
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            KEYNOTES & LECTURES
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Speaking & Appearances
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Lola Shoneyin regularly speaks at international book festivals, universities, and cultural conferences worldwide.
          </p>
        </div>

        {/* DETAILS COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">AVAILABILITY STATEMENT</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">Booking Inquiries</h2>
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">
              As a novelist, publisher, documentary filmmaker, and institution builder, Lola Shoneyin offers unique perspectives on the growth of African literature, creative advocacy, and social development. Her high-energy, deeply passionate, and authoritative sessions have graced prominent stages including the Frankfurt Book Fair, Edinburgh International Book Festival, and London Book Fair.
            </p>
            <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed select-text">
              She is available for international panels, university guest lectures, keynote speeches, book readings, and school leadership consulting. Due to her intense scheduling coordinating her publishing initiatives and multiple annual festivals, please submit booking inquiries at least six weeks in advance.
            </p>

            <div className="pt-6">
              <button 
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group relative flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs md:text-sm font-bold tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Book Lola Shoneyin</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Selected Topics */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-neutral-400">Featured Keynote Topics</h3>
            <div className="space-y-6">
              {topics.map((t, idx) => (
                <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-[8px] p-6 space-y-3 hover:border-neutral-300 transition-colors">
                  <div className="flex items-center space-x-2 text-rose-600">
                    <Mic size={16} />
                    <h4 className="font-sans font-extrabold text-sm uppercase tracking-wider text-neutral-900">{t.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed select-text">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-neutral-50 p-4 rounded-[8px] border border-neutral-200 text-center shadow-sm">
                <p className="font-sans font-bold text-lg text-neutral-900">50+</p>
                <p className="text-[10px] font-sans text-neutral-500 uppercase">Stages Graced</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-[8px] border border-neutral-200 text-center shadow-sm">
                <p className="font-sans font-bold text-lg text-neutral-900">15+</p>
                <p className="text-[10px] font-sans text-neutral-500 uppercase">Countries Visited</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

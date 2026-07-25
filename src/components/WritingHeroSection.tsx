import React from "react";
import { Star, ArrowRight, BookOpen, ArrowUpRight, Award, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WritingHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="text-neutral-900 py-4 font-sans selection:bg-red-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* EYEBROW TAG */}
        <div>
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-rose-600">
            [ LOLA SHONEYIN ARCHIVE & WRITING ]
          </span>
        </div>

        {/* MAIN GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: TALL IMAGE OF LOLA SHONEYIN + RATING (4 COLUMNS) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* TALL IMAGE WITH 4px BORDER RADIUS */}
            <div className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/80 group">
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png"
                alt="Lola Shoneyin Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-7 flex flex-col justify-end">
                <p className="font-sans font-medium text-sm sm:text-base text-white/95 leading-relaxed tracking-tight italic">
                  “Shoneyin's prose captures the fierce wit, beauty, and resilience of West African womanhood.”
                </p>
              </div>
            </div>

            {/* RATING BLOCK UNDERNEATH LEFT IMAGE */}
            <div className="pt-2 pl-1 space-y-1">
              <div className="flex items-center space-x-2">
                <Star size={22} className="fill-orange-500 text-orange-500 shrink-0" />
                <span className="font-sans font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight">
                  5.0
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm font-medium text-neutral-500 tracking-tight">
                Global Reader & Critical Acclaim
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: HEADLINE + BOTTOM ROW (8 COLUMNS) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8 sm:space-y-12">
            
            {/* TOP HEADLINE TEXT (REPLACED TO MATCH WEBSITE SCOPE) */}
            <div>
              <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] text-neutral-950 tracking-tight leading-[1.18] max-w-3xl">
                We craft and publish award-winning African fiction, poetry, and children's literature focused on identity, power, heritage, and creative sovereignty.
              </h2>
            </div>

            {/* BOTTOM SECTION: MIDDLE IMAGE + (BUTTON & DASHBOARD) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-2">
              
              {/* MIDDLE BOOKSTORE / LITERARY IMAGE WITH 4px BORDER RADIUS */}
              <div className="md:col-span-5 relative aspect-[1/1] sm:aspect-[4/4.2] w-full rounded-[4px] overflow-hidden bg-neutral-900 shadow-md border border-neutral-200/80 group">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg"
                  alt="Ouida Lagos Literary Hub"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex items-end">
                  <span className="font-mono text-[10px] text-white/90 font-bold uppercase tracking-wider">
                    Ouida Books & Cultural Stage
                  </span>
                </div>
              </div>

              {/* RIGHT SIDE: RED "GET STARTED / EXPLORE WORKS" BUTTON & REPORT CONTAINER */}
              <div className="md:col-span-7 flex flex-col space-y-6">
                
                {/* GET STARTED / CONTACT BUTTON */}
                <div className="flex justify-end">
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-red-600 hover:bg-red-700 text-white font-sans font-medium text-sm px-5 py-2.5 rounded-[8px] transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-3 cursor-pointer group"
                  >
                    <span>Get in Touch</span>
                    <span className="w-7 h-7 rounded-full bg-white text-neutral-950 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </span>
                  </button>
                </div>

                {/* LITERARY IMPACT CONTAINER */}
                <div className="bg-[#EBE9E2] rounded-[16px] p-5 sm:p-7 relative border border-neutral-300/60 shadow-inner">
                  
                  {/* INNER WHITE CARD */}
                  <div className="bg-white rounded-[12px] p-4 sm:p-5 shadow-sm border border-neutral-200/80 space-y-4">
                    
                    {/* CARD HEADER */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-7 h-7 rounded-full bg-neutral-950 text-white flex items-center justify-center">
                          <BookOpen size={14} />
                        </div>
                        <span className="font-sans font-bold text-xs sm:text-sm text-neutral-800">
                          Literary Impact & Reach
                        </span>
                      </div>
                      <Award size={16} className="text-amber-500" />
                    </div>

                    {/* GRAPH CANVAS / SVG AREA */}
                    <div className="relative pt-6 pb-2">
                      
                      {/* SVG CHART LINE */}
                      <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80" fill="none">
                        <defs>
                          <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,55 C40,45 60,65 100,50 C140,35 160,55 200,40 C240,25 270,30 300,15"
                          fill="none"
                          stroke="#DC2626"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0,55 C40,45 60,65 100,50 C140,35 160,55 200,40 C240,25 270,30 300,15 L300,80 L0,80 Z"
                          fill="url(#redGradient)"
                        />
                      </svg>

                      {/* FLOATING PILL (LEFT): GLOBAL CIRCULATION */}
                      <div className="absolute left-2 top-10 bg-red-600 text-white px-3 py-1 rounded-full text-[11px] font-sans font-medium flex items-center space-x-1.5 shadow-md border border-red-500">
                        <Sparkles size={12} />
                        <span>Global Circulation</span>
                      </div>

                      {/* FLOATING CARD (RIGHT): METRIC */}
                      <div className="absolute right-2 -top-2 bg-red-600 text-white rounded-[10px] p-3.5 shadow-xl border border-red-500/80 min-w-[135px] flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-wider opacity-90 font-medium">
                          <span>Translations</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-base sm:text-lg font-black font-sans tracking-tight">
                            13+ Languages
                          </span>
                          <ArrowUpRight size={16} className="text-white" />
                        </div>
                      </div>

                    </div>

                    {/* TIMELINE / EDITION LABELS */}
                    <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 pt-2 border-t border-neutral-100">
                      <span>UK</span>
                      <span>US</span>
                      <span>FR</span>
                      <span>DE</span>
                      <span>IT</span>
                      <span>NG</span>
                      <span>GLOBAL</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

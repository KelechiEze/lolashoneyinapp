import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, MapPin, User, Award, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const handleBack = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-[57px] sm:pt-[68px] pb-20 selection:bg-rose-500 selection:text-white relative">
      
      {/* Sub-navbar sticky bar directly beneath the main fixed Header navbar */}
      <div className="sticky top-[57px] sm:top-[68px] z-40 bg-neutral-950/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 md:px-12 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBack}
            className="flex items-center space-x-2 sm:space-x-2.5 text-white hover:text-rose-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer outline-none group"
            aria-label="Back to home page"
          >
            <div className="p-1.5 sm:p-2 rounded-full bg-white/10 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 border border-white/10">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            </div>
            <span className="font-sans font-extrabold tracking-widest text-xs sm:text-sm">
              Back Home
            </span>
          </motion.button>

          <span className="font-mono text-[10px] sm:text-xs text-rose-400 font-bold uppercase tracking-widest truncate max-w-[180px] sm:max-w-none">
            {project.title}
          </span>
        </div>
      </div>

      {/* Hero Cover */}
      <div className="relative h-[70vh] sm:h-[85vh] w-full overflow-hidden bg-neutral-900">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-[position:center_18%]"
          style={{ backgroundImage: `url(${project.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-black/20" />

        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-sans text-xs sm:text-sm uppercase tracking-widest text-rose-600 font-extrabold bg-white/90 backdrop-blur-md px-3 py-1 inline-block rounded-md border border-neutral-200/50 shadow-sm"
            >
              {project.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-serif italic text-4xl sm:text-6xl md:text-8xl font-normal leading-tight text-neutral-950 tracking-wide select-text drop-shadow-sm"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 sm:px-8 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Metadata Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="border-t border-neutral-200 pt-6 space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar size={18} className="text-rose-600 shrink-0" />
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-neutral-500 font-bold">Year</h4>
                  <p className="font-sans text-sm font-semibold text-neutral-900 mt-0.5">{project.year}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin size={18} className="text-rose-600 shrink-0" />
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-neutral-500 font-bold">Location</h4>
                  <p className="font-sans text-sm font-semibold text-neutral-900 mt-0.5">{project.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <User size={18} className="text-rose-600 shrink-0" />
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-neutral-500 font-bold">Client / Organization</h4>
                  <p className="font-sans text-sm font-semibold text-neutral-900 mt-0.5">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Award size={18} className="text-rose-600 shrink-0" />
                <div>
                  <h4 className="font-sans text-[11px] uppercase tracking-widest text-neutral-500 font-bold">Leadership Role</h4>
                  <p className="font-sans text-sm font-semibold text-neutral-900 mt-0.5">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Credits */}
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-neutral-500 font-extrabold mb-4">
                Key Contributors & Milestones
              </h3>
              <ul className="space-y-3">
                {project.credits.map((credit, i) => (
                  <li key={i} className="flex justify-between text-xs sm:text-sm font-sans gap-2 border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">{credit.role}</span>
                    <span className="text-neutral-900 font-semibold text-right">{credit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Story & Gallery */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif italic text-2xl sm:text-4xl text-neutral-900 font-light">
                Overview & Impact
              </h2>
              <p className="font-sans text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed font-normal select-text">
                {project.description}
              </p>
            </motion.div>

            {/* Photo Gallery */}
            <div className="space-y-8">
              <h2 className="font-serif italic text-2xl sm:text-3xl text-neutral-900 font-light border-b border-neutral-200 pb-4">
                Gallery & Frames
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="relative aspect-[3/4.2] w-full overflow-hidden rounded-xl shadow-sm group">
                    <img
                      src={imgUrl}
                      alt={`Gallery plate ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-widest text-neutral-800 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200 shadow-none font-bold z-10">
                      FRAME 0{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="pt-12 border-t border-neutral-200 flex justify-between items-center">
              <button
                onClick={handleBack}
                className="inline-flex items-center space-x-2 text-neutral-900 hover:text-rose-600 transition-colors font-sans text-xs sm:text-sm tracking-widest uppercase font-bold group cursor-pointer"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Return to Projects</span>
              </button>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs text-neutral-500 hover:text-neutral-900 uppercase font-mono font-bold"
              >
                Top ↑
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

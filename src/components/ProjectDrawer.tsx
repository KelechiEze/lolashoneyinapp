import React, { useEffect } from "react";
import { motion } from "motion/react";
import { X, Calendar, MapPin, User, Award, ArrowUpRight } from "lucide-react";
import { ProjectData } from "../types";

interface ProjectDrawerProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  // Lock background body scroll when drawer is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-neutral-950 overflow-y-auto text-white"
    >
      {/* Floating close button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-300 hover:rotate-90 cursor-pointer outline-none border border-white/10 shadow-lg"
          aria-label="Close project"
        >
          <X size={20} />
        </button>
      </div>

      {/* Hero Banner / Cover */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        
        {/* Title area overlays the bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full px-6 py-12 md:px-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans text-xs md:text-sm uppercase tracking-widest text-zinc-400 mb-2 font-medium"
            >
              {project.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif italic text-6xl md:text-8xl font-normal leading-none text-white tracking-wide"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-16 py-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Metadata Sidebar (Col 4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="border-t border-white/10 pt-6 space-y-6">
              <div className="flex items-center space-x-4">
                <Calendar size={18} className="text-zinc-400 shrink-0" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-medium">Year</h4>
                  <p className="font-sans text-sm font-normal text-zinc-200 mt-0.5">{project.year}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin size={18} className="text-zinc-400 shrink-0" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-medium">Location</h4>
                  <p className="font-sans text-sm font-normal text-zinc-200 mt-0.5">{project.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <User size={18} className="text-zinc-400 shrink-0" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-medium">Client</h4>
                  <p className="font-sans text-sm font-normal text-zinc-200 mt-0.5">{project.client}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Award size={18} className="text-zinc-400 shrink-0" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-zinc-500 font-medium">My Role</h4>
                  <p className="font-sans text-sm font-normal text-zinc-200 mt-0.5">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Creative Credits list */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">Production Crew</h3>
              <ul className="space-y-3">
                {project.credits.map((credit, i) => (
                  <li key={i} className="flex justify-between text-sm font-sans">
                    <span className="text-zinc-500">{credit.role}</span>
                    <span className="text-zinc-200 font-medium">{credit.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Story & Photogrid (Col 8) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="font-serif italic text-3xl md:text-4xl text-zinc-200 font-light">Director's Statement</h2>
              <p className="font-sans text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                This series aims to encapsulate the perfect tension between human expression and the environmental space. 
                By working with slow shutter speeds, natural illumination, and tactile styling, each photo is printed as an artifact of time. 
                We intentionally avoided standard beauty lighting to preserve raw blemishes, textured skin, and organic interaction.
              </p>
              <p className="font-sans text-zinc-400 text-base leading-relaxed font-light">
                {project.description}
              </p>
            </motion.div>

            {/* Photo Layouts - Premium Editorial Style */}
            <div className="space-y-8">
              <h2 className="font-serif italic text-3xl md:text-4xl text-zinc-200 font-light border-b border-white/10 pb-4">
                The Frames
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="relative aspect-[3/4.2] w-full overflow-hidden rounded-xl shadow-sm group">
                    <img
                      src={imgUrl}
                      alt={`Gallery plate ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono tracking-widest text-neutral-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-200 font-bold z-10">
                      PLATE 0{idx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* End of Project Navigation / Back to portfolio */}
            <div className="pt-12 border-t border-white/10 text-center">
              <button
                onClick={onClose}
                className="inline-flex items-center space-x-2 text-white hover:text-zinc-400 transition-colors duration-300 font-sans text-sm tracking-widest uppercase font-semibold group cursor-pointer"
              >
                <span>Return to Gallery Stack</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}

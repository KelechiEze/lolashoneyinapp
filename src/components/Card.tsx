import React from "react";
import { motion } from "framer-motion";
import { ProjectData } from "../types";

interface CardProps {
  key?: string | number;
  project: ProjectData;
  index: number;
  total: number;
  onViewProject: (project: ProjectData) => void;
}

export default function Card({ project, index, total, onViewProject }: CardProps) {
  return (
    <div
      onClick={() => onViewProject(project)}
      style={{
        zIndex: index + 10,
      }}
      className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-950 cursor-pointer group/card select-none transform-gpu"
    >
      {/* Background Image with Hover Scale */}
      <div
        className="absolute inset-0 bg-cover bg-[position:center_18%] select-none scale-100 group-hover/card:scale-105 transition-transform duration-700 ease-out transform-gpu"
        style={{
          backgroundImage: `url(${project.coverImage})`,
        }}
      />

      {/* Dark Vignette Gradient Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-neutral-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/70 to-neutral-950/50 pointer-events-none" />

      {/* Viewfinder Photographic Corner Borders */}
      <div className="absolute inset-0 p-4 sm:p-8 md:p-14 pointer-events-none z-20">
        <div className="relative w-full h-full">
          <span className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border-t-[1px] border-l-[1px] border-white/65" />
          <span className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border-t-[1px] border-r-[1px] border-white/65" />
          <span className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border-b-[1px] border-l-[1px] border-white/65" />
          <span className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 border-b-[1px] border-r-[1px] border-white/65" />
        </div>
      </div>

      {/* Central Editorial Content Panel */}
      <div className="relative z-30 px-4 sm:px-8 md:px-12 max-w-4xl text-center flex flex-col items-center space-y-4 sm:space-y-6 md:space-y-8 transform-gpu">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] text-white tracking-wide font-light leading-tight sm:leading-none select-text drop-shadow-md">
          {project.title}
        </h2>

        <p className="font-sans text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.18em] leading-relaxed text-white/90 max-w-2xl select-text line-clamp-3 sm:line-clamp-none">
          {project.description}
        </p>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onViewProject(project);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pt-2 sm:pt-4 md:pt-6 group cursor-pointer outline-none focus:ring-1 focus:ring-white/20 px-4 py-2 rounded"
        >
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.3em] text-white uppercase relative">
            Click to view project
            <span className="absolute left-0 bottom-[-6px] w-full h-[1.5px] bg-rose-500 transform origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-110" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}


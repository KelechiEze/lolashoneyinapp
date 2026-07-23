import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { ProjectData } from "../types";
import Card from "./Card";

interface CardStackProps {
  projects: ProjectData[];
  onViewProject: (project: ProjectData) => void;
  onViewMoreBooks?: () => void;
}

export default function CardStack({ projects, onViewProject, onViewMoreBooks }: CardStackProps) {
  return (
    <div className="relative w-full bg-neutral-950">
      {/* Hardware-accelerated GPU native sticky card stacking track */}
      <div className="relative w-full bg-neutral-950">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            onViewProject={onViewProject}
          />
        ))}
      </div>

      {/* Prominent 'View More Books' Banner directly below the 3-card stack */}
      {onViewMoreBooks && (
        <div className="relative z-30 bg-neutral-900 border-t border-b border-white/10 px-6 py-16 sm:py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center space-x-2 font-mono text-xs uppercase tracking-[0.25em] font-bold text-rose-400 bg-rose-500/10 px-4 py-1.5 rounded-full border border-rose-500/20">
              <BookOpen size={14} />
              <span>EXPLORE THE COMPLETE BIBLIOGRAPHY</span>
            </span>

            <h3 className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white font-light leading-tight">
              Discover All Novels, Poetry Collections & Children's Books
            </h3>

            <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              From international award-winning novels translated into 13 languages to celebrated verse anthologies and empowering young reader initiatives.
            </p>

            <div className="pt-4">
              <button
                onClick={onViewMoreBooks}
                className="inline-flex items-center space-x-3 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase py-4 px-8 rounded-full transition-all duration-300 shadow-xl cursor-pointer hover:scale-105 active:scale-95 group"
              >
                <span>VIEW MORE BOOKS</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



import React from "react";
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
    </div>
  );
}



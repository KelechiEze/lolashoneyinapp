import React from "react";
import { motion } from "framer-motion";

interface DisintegratingImageProps {
  src: string;
  alt: string;
  roundedClassName?: string;
  className?: string;
}

export const DisintegratingImage: React.FC<DisintegratingImageProps> = ({
  src,
  alt,
  roundedClassName = "rounded-[28px]",
  className = ""
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-neutral-900 ${roundedClassName} ${className}`}>
      {/* Background Image with smooth scale on group hover */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out brightness-[0.92] group-hover:brightness-100"
        loading="lazy"
      />

      {/* Subtle Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
    </div>
  );
};

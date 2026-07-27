import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface SpaceCard {
  id: string;
  title: string;
  image: string;
  url: string;
  description: string;
  capacity: string;
  amenities: string[];
}

export const SPACES_LIST: SpaceCard[] = [
  {
    id: "workspace",
    title: "WORKSPACE",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_11_01-am.png",
    url: "/spaces/workspace",
    description: "Quiet, air-conditioned co-working areas equipped with high-speed Wi-Fi, comfortable ergonomic seating, power access at every desk, and an inspiring atmosphere tailored for authors, remote workers, researchers, and creative professionals.",
    capacity: "Up to 30 desks",
    amenities: ["High-Speed Wi-Fi", "Air Conditioning", "Power Access at Desk", "Café & Coffee Access", "Quiet Study Atmosphere"]
  },
  {
    id: "sunroom",
    title: "THE SUNROOM",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_10_08-am.png",
    url: "/spaces/sunroom",
    description: "A stunning glass-roofed atrium flooded with natural sunlight. The Sunroom is an open-air inspired indoor sanctuary designed for book launches, intimate poetry readings, panel discussions, cocktail mixers, and acoustic performances.",
    capacity: "50 – 80 Guests",
    amenities: ["Natural Skylight Architecture", "AV & Sound System", "Flexible Seating Layouts", "Catering & Bar Service", "Ambient Stage Lighting"]
  },
  {
    id: "meeting-rooms",
    title: "MEETING ROOMS",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_09_25-am.png",
    url: "/spaces/meeting-rooms",
    description: "Private, climate-controlled meeting and workshop rooms suited for board meetings, editorial team retreats, creative masterclasses, press briefings, and private strategy sessions.",
    capacity: "8 – 20 Guests",
    amenities: ["HD Presentation Screen", "Whiteboard & Workshop Tools", "High-Speed Wi-Fi", "Conference Seating", "Coffee & Tea Service"]
  },
  {
    id: "bookshop",
    title: "BOOKSHOP",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_08_12-am.png",
    url: "/spaces/bookshop",
    description: "Our flagship independent bookstore carrying thousands of curated African literature titles, poetry collections, international bestsellers, graphic novels, and children's books.",
    capacity: "Open Access",
    amenities: ["Curated African Titles", "Children's Reading Corner", "Literary Recommendations", "Book Signing Station"]
  }
];

interface SpacesSectionProps {
  className?: string;
  id?: string;
}

export default function SpacesSection({ className = "py-20 px-6 md:px-12 bg-white text-neutral-950 border-t border-neutral-200", id = "spaces" }: SpacesSectionProps) {
  const navigate = useNavigate();

  const handleCardClick = (spaceId: string) => {
    navigate(`/spaces/${spaceId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id={id} className={`relative z-20 ${className}`}>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-neutral-950 tracking-tight">
              Spaces at Ouida
            </h2>
            <p className="text-neutral-600 font-sans text-sm md:text-base mt-2 max-w-xl">
              Explore our versatile cultural, literary, and co-working environments designed for creativity, collaboration, and community.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SPACES_LIST.map((space) => (
            <div
              key={space.id}
              onClick={() => handleCardClick(space.id)}
              className="group relative aspect-[16/10] sm:aspect-[1.6/1] w-full rounded-xl overflow-hidden cursor-pointer shadow-md border border-neutral-200 bg-neutral-900 transform-gpu transition-all duration-300 hover:shadow-xl"
            >
              {/* Background Image */}
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                referrerPolicy="no-referrer"
              />

              {/* Dark Vignette Overlay for Crisp White Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 group-hover:from-black/85 group-hover:via-black/50 transition-colors duration-300" />

              {/* Top-Left Title */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl text-white tracking-widest uppercase drop-shadow-sm">
                  {space.title}
                </h3>
              </div>

              {/* Bottom-Left Learn More CTA */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 flex items-center space-x-2.5">
                <span className="font-sans text-sm sm:text-base font-normal text-white/95 group-hover:text-white transition-colors">
                  Learn More
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 bg-black/20 group-hover:bg-white group-hover:text-black flex items-center justify-center text-white transition-all duration-300">
                  <ChevronRight size={16} strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

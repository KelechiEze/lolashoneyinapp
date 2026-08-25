import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    id: "cafe",
    title: "CAFÉ",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.00.17.jpeg",
    url: "/spaces/cafe",
    description: "Our vibrant café serves Nigerian street food classics including dundun, crispy dodo, rich ewa agoyin with spicy pepe sauce, freshly brewed artisanal coffee, and signature chilled zobo.",
    capacity: "Indoor & Courtyard Seating",
    amenities: ["Fresh Nigerian Street Food (Dundun, Dodo, Ewa Agoyin)", "Signature Chilled Zobo", "Artisanal Coffee & Teas", "Courtyard & Indoor Ambience", "Bookshop & Cultural Hub Access"]
  },
  {
    id: "orange-tree",
    title: "ORANGE TREE RESIDENCY",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.52.10.jpeg",
    url: "/spaces/orange-tree",
    description: "A two-week residency offering writers dedicated space to write and a chance to experience the full book ecosystem so that they better understand how the Nigerian publishing industry works.",
    capacity: "Writers in Residence",
    amenities: ["Writing desk and good size bed.", "Kitchen for self-catering", "Publishing Immersion", "Mentorship & Editorial Access", "Quiet Creative Haven", "Bookshop & Café Privileges"]
  },
  {
    id: "workspace",
    title: "WORKSPACE",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_11_01-am.png",
    url: "/spaces/workspace",
    description: "Quiet co-working areas equipped with high-speed Wi-Fi, comfortable ergonomic seating, power access at every desk, and an inspiring atmosphere tailored for authors, remote workers, researchers, and creative professionals.",
    capacity: "Up to 30 desks",
    amenities: ["High-Speed Wi-Fi", "Quiet for deep focus", "Power Access at Desk", "Café & Coffee Access"]
  },
  {
    id: "sunroom",
    title: "THE SUNROOM",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-18.05.52.jpeg",
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
    amenities: ["HD Presentation Screen", "High-Speed Wi-Fi", "Conference Seating", "Coffee & Tea Service"]
  },
  {
    id: "bookshop",
    title: "BOOKSHOP",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-18.03.06.jpeg",
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
    <section id={id} className={`relative z-20 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-neutral-950 tracking-tight uppercase">
              Spaces at Ouida
            </h2>
            <p className="text-neutral-600 font-sans text-sm md:text-base mt-2 max-w-xl font-medium leading-relaxed">
              Explore our versatile cultural, literary, and co-working environments designed for creativity, collaboration, and community.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid with Stagger & Slide Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SPACES_LIST.map((space, idx) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => handleCardClick(space.id)}
              className="group relative aspect-[16/10] sm:aspect-[1.6/1] w-full rounded-xl overflow-hidden cursor-pointer shadow-md border border-neutral-200 bg-neutral-900 transform-gpu transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={space.image}
                alt={space.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-85"
                referrerPolicy="no-referrer"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-500" />

              {/* Top-Left Title */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 mb-2 inline-block">
                  {space.capacity}
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl text-white tracking-widest uppercase drop-shadow-sm group-hover:text-rose-300 transition-colors">
                  {space.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

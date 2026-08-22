import React, { useEffect, useState } from "react";
import { MapPin, ArrowUpRight, BookOpen, Users, Sparkles, Mic2, Eye, ChevronRight, X, ChevronLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    id: "orange-tree",
    title: "ORANGE TREE RESIDENCY",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.52.10.jpeg",
    url: "/spaces/orange-tree",
    description: "A two-week residency offering writers dedicated space to write and a chance to experience the full book ecosystem so that they better understand how the Nigerian publishing industry works.",
    capacity: "Writers in Residence",
    amenities: ["Dedicated Writing Suite", "Publishing Immersion", "Mentorship & Editorial Access", "Quiet Creative Haven", "Bookshop & Café Privileges"]
  },
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

const GALLERY_IMAGES: string[] = [
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.02.54-1.jpeg",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.02.54.jpeg",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.03.08.jpeg",
  "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.03.25.jpeg"
];

export default function OuidaLagosPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleSpaceClick = (spaceId: string) => {
    navigate(`/spaces/${spaceId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {/* 1. HERO / HEADER SECTION */}
        <section className="pt-16 scroll-mt-28">
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-sans font-black text-5xl md:text-7xl uppercase tracking-tight text-neutral-950">
              OuidaLagos
            </h1>

            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest pt-1">
              <MapPin size={14} className="text-rose-600" />
              <span>34 Ajanaku Street, Opebi, Ikeja, Lagos</span>
            </div>
          </div>
        </section>

        {/* 2. OUIDA SECTION (changed from Spaces) */}
        <section id="ouida" className="border-t border-neutral-200 pt-16 scroll-mt-28 space-y-16">
          <span id="spaces" className="scroll-mt-28" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Ouida
              </h2>

              {/* EXACT VERBATIM PARAGRAPH REQUESTED */}
              <p className="text-neutral-700 font-sans text-base sm:text-lg leading-relaxed font-normal">
                Ouida Lagos is a cultural hub built for people who read, create and listen. It houses a bookshop stocked with fiction, non-fiction, children's books, poetry, and titles from Ouida Books. We also have a café that serves street food such as dundun, dodo, ewa agoyin, pepe sauce, zobo. The Orange Tree Residency also lives at Ouida, along with Ouida Books and the Book Buzz Foundation offices. At the large workspace which doubles as our performance space, we run a host of monthly events and celebrations.
              </p>

              {/* Sub-Pills representing the elements of Ouida */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white border border-neutral-200/80 p-4 rounded-xl space-y-1 shadow-sm">
                  <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">01 / BOOKSHOP</span>
                  <span className="font-sans font-bold text-sm text-neutral-900 block">Curated Books</span>
                  <span className="font-sans text-xs text-neutral-500 block">Fiction, non-fiction, poetry & children's books</span>
                </div>
                <div className="bg-white border border-neutral-200/80 p-4 rounded-xl space-y-1 shadow-sm">
                  <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">02 / CAFÉ</span>
                  <span className="font-sans font-bold text-sm text-neutral-900 block">Street Food</span>
                  <span className="font-sans text-xs text-neutral-500 block">Dundun, dodo, ewa agoyin, pepe sauce, zobo</span>
                </div>
                <div className="bg-white border border-neutral-200/80 p-4 rounded-xl space-y-1 shadow-sm">
                  <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">03 / RESIDENCY</span>
                  <span className="font-sans font-bold text-sm text-neutral-900 block">The Orange Tree Residency</span>
                  <span className="font-sans text-xs text-neutral-500 block">2-week immersive writer residency</span>
                </div>
                <div className="bg-white border border-neutral-200/80 p-4 rounded-xl space-y-1 shadow-sm">
                  <span className="font-mono text-[10px] font-bold text-neutral-500 uppercase tracking-widest block">04 / WORKSPACE & STAGE</span>
                  <span className="font-sans font-bold text-sm text-neutral-900 block">Performance & Offices</span>
                  <span className="font-sans text-xs text-neutral-500 block">Ouida Books & Book Buzz Foundation offices</span>
                </div>
              </div>
            </div>

            {/* Right Image Feature Grid with the 3 images and looping autoplay video */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Image 1 */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.56.57.jpeg"
                    alt="Ouida Bookstore Shelves"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Image 2 */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.00.17.jpeg"
                    alt="Ouida Gathering & Performance Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                {/* Image 3 */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.48.26.jpeg"
                    alt="Ouida Outdoor Courtyard & Verandah"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Video playing automatically on an infinite loop */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-neutral-950 relative">
                  <video
                    src="https://res.cloudinary.com/nqlff1i2/video/upload/v1787407146/WhatsApp_Video_2026-08-22_at_14.49.19_qxzlah.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 text-[9px] font-mono font-bold text-white/90 uppercase tracking-widest pointer-events-none">
                    Live Atmosphere
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* SPACES & SANCTUARIES CARDS */}
          <div className="pt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-neutral-200/80 pb-4">
              <div>
                <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                  Our Spaces & Sanctuaries
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md">
                Click any space to discover full amenities, residency details, and booking information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SPACES_LIST.map((space, idx) => (
                <motion.div
                  key={space.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  onClick={() => handleSpaceClick(space.id)}
                  className={`group relative ${idx === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10] sm:aspect-[1.5/1]"} w-full rounded-2xl overflow-hidden cursor-pointer shadow-md border border-neutral-200 bg-neutral-900 transform-gpu transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Background Image */}
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-500" />

                  {/* Top-Left Title & Capacity */}
                  <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 mb-2 inline-block">
                      {space.capacity}
                    </span>
                    <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl text-white tracking-widest uppercase drop-shadow-sm group-hover:text-neutral-200 transition-colors">
                      {space.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SPACES & RESIDENCY PHOTO GALLERY */}
        <section id="gallery" className="border-t border-neutral-200 pt-16 scroll-mt-28 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Spaces Gallery
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md">
              A visual look into Ouida Lagos: the Orange Tree Residency, bookshop shelves, Sunroom stage, and communal corners.
            </p>
          </div>

          {/* Gallery Grid - Pure Images Only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`Ouida Space ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX MODAL - PURE IMAGE VIEW */}
        <AnimatePresence>
          {lightboxIndex !== null && GALLERY_IMAGES[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevLightbox}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextLightbox}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>

              {/* Pure Image Display */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              >
                <img
                  src={GALLERY_IMAGES[lightboxIndex]}
                  alt="Ouida Gallery Full"
                  className="max-w-full max-h-[88vh] object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. COMMUNITY SECTION */}
        <section id="community" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28">
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm space-y-10">
            
            <div className="space-y-4 max-w-3xl">
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Community
              </h2>

              {/* EXACT VERBATIM PARAGRAPH */}
              <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                Ouida Community brings together artists, storytellers, food lovers, and culture enthusiasts through open-stage nights and hands-on workshops. Regular fixtures include Ouida Open Mic, Ìsèdá, a monthly celebration of creativity supported by the US Embassy, and Silent Reading at Ouida.
              </p>
            </div>

            {/* 3 Community Cards with Images and standard border radius (rounded-2xl) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Card 1: Ouida Open Mic */}
              <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop"
                    alt="Ouida Open Mic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white p-2 rounded-full border border-white/10">
                    <Mic2 size={16} className="text-rose-400" />
                  </div>
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-rose-600 transition-colors">
                      Ouida Open Mic
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                      Open-stage nights bringing together poets, acoustic musicians, spoken word performers, and storytellers to share raw, electrifying work.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Regular Fixture</span>
                    <span className="text-rose-600">Open Stage</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Ìsèdá */}
              <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1000&auto=format&fit=crop"
                    alt="Ìsèdá Creative Celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white p-2 rounded-full border border-white/10">
                    <Sparkles size={16} className="text-amber-400" />
                  </div>
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-rose-600 transition-colors">
                      Ìsèdá
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                      A monthly celebration of creativity supported by the US Embassy, empowering emerging visual artists, craft makers, and thinkers through masterclasses.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Supported by US Embassy</span>
                    <span className="text-rose-600">Monthly</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Silent Reading at Ouida */}
              <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop"
                    alt="Silent Reading at Ouida"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white p-2 rounded-full border border-white/10">
                    <Eye size={16} className="text-teal-400" />
                  </div>
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-rose-600 transition-colors">
                      Silent Reading at Ouida
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                      Dedicated collective quiet hours for book lovers to gather, immerse deeply in literature, escape digital distractions, and read in calm community.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                    <span>Quiet Sanctuary</span>
                    <span className="text-rose-600">Community</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5. LINK-OUT SECTION */}
        <section id="link-out" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-28">
          <div className="bg-[#181a1d] text-white rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl space-y-6">
            
            <div className="max-w-2xl space-y-4 relative z-10">
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-white">
                Link-out
              </h2>

              {/* EXACT VERBATIM PARAGRAPH */}
              <p className="text-neutral-200 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                For rates, bookings, and the full offering, visit{" "}
                <a
                  href="https://ouidalagos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:text-rose-300 underline font-semibold transition-colors"
                >
                  ouidalagos.com
                </a>.
              </p>

              <div className="pt-4">
                <a
                  href="https://ouidalagos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-500 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-lg transition-all cursor-pointer group"
                >
                  <span>Visit ouidalagos.com</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Decorative Background Accent */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
              <BookOpen size={300} />
            </div>

          </div>
        </section>
      </div>

    </div>
  );
}

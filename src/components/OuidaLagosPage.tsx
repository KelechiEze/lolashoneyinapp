import React, { useEffect, useState } from "react";
import { MapPin, ArrowUpRight, BookOpen, X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export interface SpaceItem {
  id: string;
  title: string;
  image: string;
  tagline: string;
  description: string;
  capacity: string;
  amenities?: string[];
  idealFor?: string[];
}

export const ALL_SPACES_DATA: SpaceItem[] = [
  {
    id: "cafe",
    title: "CAFÉ",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.00.17.jpeg",
    tagline: "Authentic Nigerian street food café and artisanal coffee lounge.",
    description: "Fresh Nigerian street food favorites including dundun, crispy dodo, rich ewa agoyin with spicy pepe sauce, hot puffpuff, artisanal coffee, and signature chilled zobo in an inviting cultural courtyard.",
    capacity: "Café & Courtyard",
  },
  {
    id: "orange-tree",
    title: "THE ORANGE TREE RESIDENCY",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.52.10.jpeg",
    tagline: "Dedicated writer residency and publishing ecosystem immersion.",
    description: "A two-week residency offering writers dedicated workspace, self-catering accommodation, and full immersion into the Nigerian publishing industry.",
    capacity: "Writer Residency",
  },
  {
    id: "workspace",
    title: "WORKSPACE",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_11_01-am.png",
    tagline: "Quiet co-working haven tailored for authors and creative minds.",
    description: "A quiet co-working space equipped with high-speed fiber Wi-Fi, guaranteed power, and ergonomic seating for authors, researchers, and remote workers.",
    capacity: "Quiet Co-working",
  },
  {
    id: "sunroom",
    title: "THE SUNROOM",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-18.05.52.jpeg",
    tagline: "Luminous glass-roof atrium for book launches and performances.",
    description: "A luminous, glass-roofed atrium flooded with natural sunlight, hosting book launches, intimate poetry readings, panel discussions, and acoustic sets.",
    capacity: "Atrium & Events",
  },
  {
    id: "meeting-rooms",
    title: "MEETING ROOMS",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_09_25-am.png",
    tagline: "Climate-controlled suites for executive meetings and masterclasses.",
    description: "Private, climate-controlled meeting suites suited for board meetings, editorial team retreats, creative masterclasses, and private strategy sessions.",
    capacity: "Private Suites",
  },
  {
    id: "bookshop",
    title: "BOOKSHOP",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-18.03.06.jpeg",
    tagline: "Flagship independent bookstore carrying thousands of titles.",
    description: "Independent bookstore carrying thousands of curated African literature titles, poetry collections, children's books, and Ouida Books imprints.",
    capacity: "Bookstore",
  }
];

const GUEST_GALLERY_IMAGES = [
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg",
    title: "Ouida Lagos Courtyard & Café Atmosphere",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-23-at-22.47.41.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-23-at-22.50.25.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.02.54-1.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.02.54.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.03.25.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.26.04.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  },
  {
    url: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-26-at-20.25.11.jpeg",
    title: "In front of the iconic Door at Ouida",
    location: "Ouida Lagos"
  }
];

export default function OuidaLagosPage() {
  const location = useLocation();
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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GUEST_GALLERY_IMAGES.length);
    }
  };

  const prevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GUEST_GALLERY_IMAGES.length) % GUEST_GALLERY_IMAGES.length);
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
        
        {/* HERO / HEADER SECTION */}
        <section className="pt-16 scroll-mt-28">
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              OuidaLagos
            </h1>

            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest pt-1">
              <MapPin size={14} className="text-rose-600" />
              <span>34 Ajanaku Street, Opebi, Ikeja, Lagos</span>
            </div>
          </div>
        </section>

        {/* 1. OUIDA SECTION (FIRST) */}
        <section id="ouida" className="border-t border-neutral-200 pt-16 scroll-mt-28 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Text Column with verbatim narrative and core features */}
            <div className="lg:col-span-6 space-y-6">
              {/* EXACT VERBATIM PARAGRAPH REQUESTED */}
              <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                Ouida Lagos is a cultural hub built for people who read, create and listen. It houses a bookshop stocked with fiction, non-fiction, children's books, poetry, and titles from Ouida Books. We also have a café that serves street food such as dundun, dodo, ewa agoyin, pepe sauce, zobo. The Orange Tree Residency also lives at Ouida, along with Ouida Books and the Book Buzz Foundation offices. At the large workspace which doubles as our performance space, we run a host of monthly events and celebrations.
              </p>
            </div>

            {/* Right Media Grid with photo 4, photo 5, bookstore and looping video */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* 4th Photo from user: Conversations & Visitors */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-23-at-22.52.40-1.jpeg"
                    alt="Conversations at Ouida Lagos"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Bookstore Shelves */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-14.56.57.jpeg"
                    alt="Ouida Bookstore Shelves"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                {/* 5th Photo from user: Bookstore & Cultural Moments */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-neutral-900">
                  <img
                    src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-23-at-22.52.40.jpeg"
                    alt="Moments at Ouida Lagos"
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
        </section>

        {/* 2. COMMUNITY AND EVENTS SECTION (SECOND) */}
        <section id="community" className="border-t border-neutral-200 pt-16 scroll-mt-28 space-y-10">
          <span id="events" className="scroll-mt-28" />
          <div className="space-y-4 max-w-3xl">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Community and Events
            </h2>

            {/* INTRODUCTORY PARAGRAPH */}
            <p className="text-neutral-700 font-sans text-base sm:text-lg leading-relaxed font-normal">
              Ouida Community brings together artists, storytellers, food lovers, and culture enthusiasts through open-stage nights, literary dialogues, live acoustic sessions, and hands-on workshops. Regular fixtures include Ouida Open Mic, Book Chats, Music at Ouida, Ìsèdá (supported by the US Embassy), Litty December, and Silent Reading at Ouida.
            </p>
          </div>

          {/* 6 Community & Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            
            {/* Card 1: Ouida Open Mic */}
            <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-21.52.36.jpeg"
                  alt="Ouida Open Mic"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
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

            {/* Card 2: Book Chats */}
            <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-21.56.47.jpeg"
                  alt="Book Chats at Ouida"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-rose-600 transition-colors">
                    Book Chats
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                    Engaging author discussions, book launches, and critical literary dialogues exploring contemporary African fiction, non-fiction, and poetry.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Author Dialogues</span>
                  <span className="text-rose-600">Literary Sessions</span>
                </div>
              </div>
            </div>

            {/* Card 3: Music at Ouida */}
            <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-23-at-00.02.50.jpeg"
                  alt="Music at Ouida"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-rose-600 transition-colors">
                    Music at Ouida
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                    Intimate live acoustic sets, jazz showcases, vocal performances, and instrumental melodies blending African soundscapes with soul in our courtyard and sunroom.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Live Acoustics</span>
                  <span className="text-rose-600">Live Sound</span>
                </div>
              </div>
            </div>

            {/* Card 4: Ìsèdá / ISEDA */}
            <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-26-at-20.24.52-1.jpeg"
                  alt="Ìsèdá Creative Celebration"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
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

            {/* Card 5: Litty December */}
            <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-23-at-00.00.55.jpeg"
                  alt="Litty December Festive Cultural Fiesta"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-lg text-neutral-900 group-hover:text-rose-600 transition-colors">
                    Litty December
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
                    Ouida's signature end-of-year literary festival and holiday cultural fiesta, featuring book fairs, acoustic sets, pop-up stalls, and community celebrations.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Annual Fiesta</span>
                  <span className="text-rose-600">December Special</span>
                </div>
              </div>
            </div>

            {/* Card 6: Silent Reading at Ouida */}
            <div className="bg-[#fbf9f5] border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900 relative">
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-22.01.27.jpeg"
                  alt="Silent Reading at Ouida"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
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
        </section>

        {/* 3. OUIDA VISITORS GALLERY SECTION */}
        <section id="visitors-gallery" className="border-t border-neutral-200 pt-16 scroll-mt-28 space-y-10">
          <span id="guest-gallery" className="scroll-mt-28" />
          <span id="gallery" className="scroll-mt-28" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Ouida Visitors Gallery
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md">
              Photos in front of the iconic Door at Ouida.
            </p>
          </div>

          {/* Guest Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUEST_GALLERY_IMAGES.map((img, idx) => (
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
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-medium drop-shadow-sm">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && GUEST_GALLERY_IMAGES[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <button
                onClick={prevLightbox}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={nextLightbox}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
              >
                <img
                  src={GUEST_GALLERY_IMAGES[lightboxIndex].url}
                  alt={GUEST_GALLERY_IMAGES[lightboxIndex].title}
                  className="max-w-full max-h-[82vh] object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <p className="text-white/80 font-sans text-xs sm:text-sm mt-3 text-center">
                  {GUEST_GALLERY_IMAGES[lightboxIndex].title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. SPACES (COMPACT, REFINED BOXES) */}
        <section id="spaces" className="border-t border-neutral-200 pt-16 scroll-mt-28 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-6">
            <div>
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Spaces
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-md">
              Creative rooms, residency facilities, workspace, and gathering venues across Ouida Lagos.
            </p>
          </div>

          {/* Compact 3-Column Grid with Smaller Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SPACES_DATA.map((space, idx) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#fbf9f5] border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[16/10] w-full bg-neutral-900 overflow-hidden relative">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    {space.capacity}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-sans font-black text-lg text-neutral-950 group-hover:text-rose-600 transition-colors uppercase tracking-tight">
                      {space.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed mt-1.5 font-normal">
                      {space.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. LINK-OUT SECTION (FIFTH) */}
        <section id="link-out" className="max-w-7xl mx-auto px-0 py-6 scroll-mt-28">
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

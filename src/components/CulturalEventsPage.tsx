import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

// Archival materials for Infusion (Abuja creative scene 2009-2011)
const INFUSION_ARCHIVE = [
  {
    id: 1,
    title: "Infusion Archival Poster / Document 1",
    img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.08.34.jpeg",
  },
  {
    id: 2,
    title: "Infusion Archival Poster / Document 2",
    img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.11.24-1.jpeg",
  },
  {
    id: 3,
    title: "Infusion Archival Poster / Document 3",
    img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.11.24.jpeg",
  },
];

// Archival materials for Ibadan Arts Renaissance (IAR)
const IAR_ARCHIVE = [
  { id: 1, title: "IAR Archival Document 1", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.31.jpeg" },
  { id: 2, title: "IAR Archival Document 2", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-1.jpeg" },
  { id: 3, title: "IAR Archival Document 3", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-2.jpeg" },
  { id: 4, title: "IAR Archival Document 4", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-3.jpeg" },
  { id: 5, title: "IAR Archival Document 5", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-4.jpeg" },
  { id: 6, title: "IAR Archival Document 6", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32.jpeg" },
  { id: 7, title: "IAR Archival Document 7", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.33-1.jpeg" },
  { id: 8, title: "IAR Archival Document 8", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.33.jpeg" },
  { id: 9, title: "IAR Archival Document 9", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.34-1.jpeg" },
  { id: 10, title: "IAR Archival Document 10", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.34-2.jpeg" },
  { id: 11, title: "IAR Archival Document 11", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.34.jpeg" },
  { id: 12, title: "IAR Archival Document 12", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.22.12.jpeg" },
];

export default function CulturalEventsPage() {
  const location = useLocation();
  const [activeInfusionIndex, setActiveInfusionIndex] = useState<number | null>(null);
  const [activeIarIndex, setActiveIarIndex] = useState<number | null>(null);

  // Zoom & Pan state
  const [zoomScale, setZoomScale] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const resetZoom = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleOpenInfusion = (index: number) => {
    resetZoom();
    setActiveInfusionIndex(index);
    setActiveIarIndex(null);
  };

  const handleOpenIar = (index: number) => {
    resetZoom();
    setActiveIarIndex(index);
    setActiveInfusionIndex(null);
  };

  const handleClose = () => {
    setActiveInfusionIndex(null);
    setActiveIarIndex(null);
    resetZoom();
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.6, 4));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => {
      const next = Math.max(prev - 0.6, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasMovedRef.current) return;

    if (zoomScale > 1) {
      resetZoom();
    } else {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left - rect.width / 2;
        const clickY = e.clientY - rect.top - rect.height / 2;
        setPanOffset({ x: -clickX * 1.2, y: -clickY * 1.2 });
      }
      setZoomScale(2.5);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomScale <= 1) return;
    const deltaX = Math.abs(e.clientX - (dragStartRef.current.x + panOffset.x));
    const deltaY = Math.abs(e.clientY - (dragStartRef.current.y + panOffset.y));
    if (deltaX > 4 || deltaY > 4) {
      hasMovedRef.current = true;
    }
    setPanOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setZoomScale((prev) => Math.min(prev + 0.25, 4));
    } else {
      setZoomScale((prev) => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPanOffset({ x: 0, y: 0 });
        return next;
      });
    }
  };

  const currentItem =
    activeInfusionIndex !== null
      ? {
          url: INFUSION_ARCHIVE[activeInfusionIndex].img,
          title: INFUSION_ARCHIVE[activeInfusionIndex].title,
          category: "Infusion Archive",
          index: activeInfusionIndex,
          total: INFUSION_ARCHIVE.length,
          type: "infusion" as const,
        }
      : activeIarIndex !== null
      ? {
          url: IAR_ARCHIVE[activeIarIndex].img,
          title: IAR_ARCHIVE[activeIarIndex].title,
          category: "Ibadan Arts Renaissance Archive",
          index: activeIarIndex,
          total: IAR_ARCHIVE.length,
          type: "iar" as const,
        }
      : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentItem) return;
    resetZoom();
    if (currentItem.type === "infusion") {
      setActiveInfusionIndex((prev) => (prev !== null ? (prev === 0 ? INFUSION_ARCHIVE.length - 1 : prev - 1) : 0));
    } else {
      setActiveIarIndex((prev) => (prev !== null ? (prev === 0 ? IAR_ARCHIVE.length - 1 : prev - 1) : 0));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentItem) return;
    resetZoom();
    if (currentItem.type === "infusion") {
      setActiveInfusionIndex((prev) => (prev !== null ? (prev === INFUSION_ARCHIVE.length - 1 ? 0 : prev + 1) : 0));
    } else {
      setActiveIarIndex((prev) => (prev !== null ? (prev === IAR_ARCHIVE.length - 1 ? 0 : prev + 1) : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentItem) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") {
        resetZoom();
        if (currentItem.type === "infusion") {
          setActiveInfusionIndex((prev) => (prev !== null ? (prev === 0 ? INFUSION_ARCHIVE.length - 1 : prev - 1) : 0));
        } else {
          setActiveIarIndex((prev) => (prev !== null ? (prev === 0 ? IAR_ARCHIVE.length - 1 : prev - 1) : 0));
        }
      }
      if (e.key === "ArrowRight") {
        resetZoom();
        if (currentItem.type === "infusion") {
          setActiveInfusionIndex((prev) => (prev !== null ? (prev === INFUSION_ARCHIVE.length - 1 ? 0 : prev + 1) : 0));
        } else {
          setActiveIarIndex((prev) => (prev !== null ? (prev === IAR_ARCHIVE.length - 1 ? 0 : prev + 1) : 0));
        }
      }
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") resetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentItem]);

  // Repeated items for smooth endless marquee scrolling
  const infusionMarquee = [
    ...INFUSION_ARCHIVE,
    ...INFUSION_ARCHIVE,
    ...INFUSION_ARCHIVE,
    ...INFUSION_ARCHIVE,
    ...INFUSION_ARCHIVE,
  ];

  const iarMarquee = [
    ...IAR_ARCHIVE,
    ...IAR_ARCHIVE,
    ...IAR_ARCHIVE,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-neutral-900 min-h-screen pt-28 sm:pt-32 pb-24 overflow-x-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 sm:space-y-24">
        
        {/* PAGE HERO */}
        <section id="intro" className="space-y-6 max-w-4xl scroll-mt-28">
          <div className="space-y-2">
            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-neutral-950">
              Cultural Events
            </h1>
          </div>
          
          <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-2xl space-y-4 shadow-sm">
            <blockquote className="font-serif italic text-lg md:text-xl text-neutral-800 leading-relaxed select-text">
              "Creating platforms for music, literature, and art allows creative communities to cross-pollinate, discover new expressions, and build enduring cultural momentum."
            </blockquote>
            <p className="font-sans font-semibold text-xs tracking-wider text-neutral-500 uppercase">
              Lola Shoneyin
            </p>
          </div>
        </section>

        {/* SECTION 1: INFUSION */}
        <section id="infusion" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-6 max-w-4xl">
            <div className="space-y-2">
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Infusion
              </h2>
            </div>
            
            <div className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed select-text space-y-4">
              <p>
                In 2009, Shoneyin co-founded Infusion, a monthly gathering for music, art and culture that became a fixture of Abuja's creative scene, held on the last Thursday of every month for two and a half years. It offered the city's writers, musicians and visual artists a space to gather, perform and cross-pollinate — an early instance of the community-building instinct that would later shape Aké, LIFI, AFLI and KABAFEST.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500 font-mono pt-2">
              <span className="flex items-center"><MapPin size={14} className="mr-1 text-neutral-400" /> Abuja, Nigeria</span>
              <span className="flex items-center"><Calendar size={14} className="mr-1 text-neutral-400" /> 2009 – 2011 • Last Thursday of Every Month</span>
            </div>
          </div>

          {/* INFUSION ARCHIVAL IMAGES ON THEIR OWN - NO CONTAINERS */}
          <div className="pt-2">
            <div className="relative w-full overflow-hidden py-4">
              <div
                className="flex items-center space-x-8 w-max hover:[animation-play-state:paused]"
                style={{
                  display: "flex",
                  width: "max-content",
                  animation: "marqueeSmooth 28s linear infinite",
                  willChange: "transform",
                }}
              >
                {infusionMarquee.map((item, index) => {
                  const originalIndex = index % INFUSION_ARCHIVE.length;
                  return (
                    <div
                      key={`${item.id}-${index}`}
                      onClick={() => handleOpenInfusion(originalIndex)}
                      className="shrink-0 group cursor-pointer"
                      title="Click to zoom in and read"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-64 sm:h-84 w-auto max-w-xs sm:max-w-sm object-contain transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: IBADAN ARTS RENAISSANCE */}
        <section id="iar" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-6 max-w-4xl">
            <div className="space-y-2">
              <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
                Ibadan Arts Renaissance
              </h2>
            </div>
            
            <div className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed select-text space-y-4">
              <p>
                Lola Shoneyin founded the Ibadan Arts Renaissance (IAR) in Ibadan in 2002, running it as a one-woman operation out of 20a Aare Avenue, New Bodija. IAR published Olongo, a literary magazine she edited and designed. Alongside the magazine, IAR ran the Bola Ige Library to serve the Bodija community, staged a concert by musician Fatai Rolling Dollar, and hosted a calendar of readings, live music nights, and writing competitions. Both IAR and Olongo came to an end in 2004, when Shoneyin left Ibadan.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500 font-mono pt-2">
              <span className="flex items-center"><MapPin size={14} className="mr-1 text-neutral-400" /> New Bodija, Ibadan, Nigeria</span>
              <span className="flex items-center"><Calendar size={14} className="mr-1 text-neutral-400" /> 2002 – 2004 • Cultural Initiative & Events</span>
            </div>
          </div>

          {/* IAR ARCHIVAL IMAGES ON THEIR OWN - NO CONTAINERS */}
          <div className="pt-2">
            <div className="relative w-full overflow-hidden py-4">
              <div
                className="flex items-center space-x-8 w-max hover:[animation-play-state:paused]"
                style={{
                  display: "flex",
                  width: "max-content",
                  animation: "marqueeSmooth 36s linear infinite",
                  willChange: "transform",
                }}
              >
                {iarMarquee.map((item, index) => {
                  const originalIndex = index % IAR_ARCHIVE.length;
                  return (
                    <div
                      key={`${item.id}-${index}`}
                      onClick={() => handleOpenIar(originalIndex)}
                      className="shrink-0 group cursor-pointer"
                      title="Click to zoom in and read writings"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-64 sm:h-80 w-auto max-w-xs sm:max-w-sm object-contain transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* INTERACTIVE HIGH-RESOLUTION ZOOM & PAN LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 select-none"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[92vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* TOP CONTROLS & INFO BAR */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-950/90 border-b border-neutral-800 text-white z-10">
                <div className="flex items-center space-x-3 truncate">
                  <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-semibold">
                    {currentItem.category} ({currentItem.index + 1}/{currentItem.total})
                  </span>
                  <h3 className="font-sans font-bold text-white text-sm sm:text-base truncate">
                    {currentItem.title}
                  </h3>
                </div>

                {/* ZOOM & VIEW CONTROLS */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="flex items-center bg-neutral-800 rounded-lg p-0.5 border border-neutral-700">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomScale <= 1}
                      title="Zoom out (-)"
                      className="p-1.5 rounded hover:bg-neutral-700 text-neutral-300 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
                    >
                      <ZoomOut size={17} />
                    </button>
                    <span className="px-2 font-mono text-xs text-neutral-300 font-medium min-w-[48px] text-center">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomScale >= 4}
                      title="Zoom in (+)"
                      className="p-1.5 rounded hover:bg-neutral-700 text-neutral-300 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer transition-colors"
                    >
                      <ZoomIn size={17} />
                    </button>
                    <button
                      onClick={resetZoom}
                      title="Reset view (0)"
                      className="p-1.5 rounded hover:bg-neutral-700 text-neutral-300 hover:text-white cursor-pointer transition-colors border-l border-neutral-700 ml-0.5"
                    >
                      <RotateCcw size={15} />
                    </button>
                  </div>

                  <button
                    onClick={handleClose}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer ml-1"
                    title="Close (Esc)"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* INTERACTIVE VIEWER CANVAS */}
              <div
                ref={containerRef}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="relative flex-1 bg-neutral-950 overflow-hidden flex items-center justify-center p-4"
              >
                {/* PREV / NEXT NAVIGATION BUTTONS */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-white hover:text-neutral-950 text-white border border-neutral-700/60 shadow-lg backdrop-blur-sm transition-all cursor-pointer"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-neutral-900/80 hover:bg-white hover:text-neutral-950 text-white border border-neutral-700/60 shadow-lg backdrop-blur-sm transition-all cursor-pointer"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight size={22} />
                </button>

                {/* THE ZOOMABLE / PANNABLE IMAGE CONTAINER */}
                <div
                  onClick={handleImageClick}
                  className="relative flex items-center justify-center transition-transform duration-75 select-none"
                  style={{
                    transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})`,
                    transformOrigin: "center center",
                    cursor:
                      zoomScale > 1
                        ? isDragging
                          ? "grabbing"
                          : "zoom-out"
                        : "zoom-in",
                  }}
                >
                  <img
                    src={currentItem.url}
                    alt={currentItem.title}
                    draggable={false}
                    className="max-h-[74vh] max-w-[85vw] w-auto h-auto object-contain rounded shadow-2xl pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* ZOOM HINT OVERLAY */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-xs px-3.5 py-1.5 rounded-full pointer-events-none backdrop-blur-md flex items-center space-x-2">
                  <span>
                    {zoomScale > 1
                      ? "Click to zoom out • Drag to pan across text"
                      : "Click image or scroll to zoom in & read writings"}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Aké Review editions sorted chronologically (2025 down to 2014)
const AKE_REVIEW_COVERS = [
  { year: "2025", title: "Aké Review 2025", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke1.jpg" },
  { year: "2024", title: "Aké Review 2024", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke2.jpg" },
  { year: "2023", title: "Aké Review 2023", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke3.jpg" },
  { year: "2022", title: "Aké Review 2022", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke4.jpg" },
  { year: "2021", title: "Aké Review 2021", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke5.jpg" },
  { year: "2020", title: "Aké Review 2020", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke6.jpg" },
  { year: "2019", title: "Aké Review 2019", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke7.jpg" },
  { year: "2018", title: "Aké Review 2018", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke8.jpg" },
  { year: "2017", title: "Aké Review 2017", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke9.jpg" },
  { year: "2016", title: "Aké Review 2016", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke10.jpg" },
  { year: "2015", title: "Aké Review 2015", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke11.png" },
  { year: "2014", title: "Aké Review 2014", cover: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/akke12.jpg" },
];

// Olongo & Ibadan Arts Renaissance Archival Materials
const OLONGO_ARCHIVE = [
  { id: 1, title: "Olongo Archival Document 1", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.31.jpeg" },
  { id: 2, title: "Olongo Archival Document 2", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-1.jpeg" },
  { id: 3, title: "Olongo Archival Document 3", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-2.jpeg" },
  { id: 4, title: "Olongo Archival Document 4", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-3.jpeg" },
  { id: 5, title: "Olongo Archival Document 5", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32-4.jpeg" },
  { id: 6, title: "Olongo Archival Document 6", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.32.jpeg" },
  { id: 7, title: "Olongo Archival Document 7", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.33-1.jpeg" },
  { id: 8, title: "Olongo Archival Document 8", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.33.jpeg" },
  { id: 9, title: "Olongo Archival Document 9", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.34-1.jpeg" },
  { id: 10, title: "Olongo Archival Document 10", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.34-2.jpeg" },
  { id: 11, title: "Olongo Archival Document 11", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.21.34.jpeg" },
  { id: 12, title: "Olongo Archival Document 12", img: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-28-at-15.22.12.jpeg" },
];

export default function CulturalPublicationsPage() {
  const location = useLocation();
  const [activeArchiveIndex, setActiveArchiveIndex] = useState<number | null>(null);
  const [activeCoverIndex, setActiveCoverIndex] = useState<number | null>(null);
  
  // Interactive Zoom and Pan State
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

  // Reset zoom and pan when changing image
  const resetZoom = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleOpenOlongo = (index: number) => {
    resetZoom();
    setActiveArchiveIndex(index);
    setActiveCoverIndex(null);
  };

  const handleOpenCover = (index: number) => {
    resetZoom();
    setActiveCoverIndex(index);
    setActiveArchiveIndex(null);
  };

  const handleClose = () => {
    setActiveArchiveIndex(null);
    setActiveCoverIndex(null);
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
    // If the user was dragging, don't trigger click toggle
    if (hasMovedRef.current) return;

    if (zoomScale > 1) {
      // Zoom out to 1x
      resetZoom();
    } else {
      // Zoom in to 2.5x centered around click point
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
    activeArchiveIndex !== null
      ? {
          url: OLONGO_ARCHIVE[activeArchiveIndex].img,
          title: OLONGO_ARCHIVE[activeArchiveIndex].title,
          category: "Olongo Archive",
          index: activeArchiveIndex,
          total: OLONGO_ARCHIVE.length,
          type: "archive" as const,
        }
      : activeCoverIndex !== null
      ? {
          url: AKE_REVIEW_COVERS[activeCoverIndex].cover,
          title: AKE_REVIEW_COVERS[activeCoverIndex].title,
          year: AKE_REVIEW_COVERS[activeCoverIndex].year,
          category: "Aké Review",
          index: activeCoverIndex,
          total: AKE_REVIEW_COVERS.length,
          type: "cover" as const,
        }
      : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentItem) return;
    resetZoom();
    if (currentItem.type === "archive") {
      setActiveArchiveIndex((prev) => (prev !== null ? (prev === 0 ? OLONGO_ARCHIVE.length - 1 : prev - 1) : 0));
    } else {
      setActiveCoverIndex((prev) => (prev !== null ? (prev === 0 ? AKE_REVIEW_COVERS.length - 1 : prev - 1) : 0));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentItem) return;
    resetZoom();
    if (currentItem.type === "archive") {
      setActiveArchiveIndex((prev) => (prev !== null ? (prev === OLONGO_ARCHIVE.length - 1 ? 0 : prev + 1) : 0));
    } else {
      setActiveCoverIndex((prev) => (prev !== null ? (prev === AKE_REVIEW_COVERS.length - 1 ? 0 : prev + 1) : 0));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentItem) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") {
        resetZoom();
        if (currentItem.type === "archive") {
          setActiveArchiveIndex((prev) => (prev !== null ? (prev === 0 ? OLONGO_ARCHIVE.length - 1 : prev - 1) : 0));
        } else {
          setActiveCoverIndex((prev) => (prev !== null ? (prev === 0 ? AKE_REVIEW_COVERS.length - 1 : prev - 1) : 0));
        }
      }
      if (e.key === "ArrowRight") {
        resetZoom();
        if (currentItem.type === "archive") {
          setActiveArchiveIndex((prev) => (prev !== null ? (prev === OLONGO_ARCHIVE.length - 1 ? 0 : prev + 1) : 0));
        } else {
          setActiveCoverIndex((prev) => (prev !== null ? (prev === AKE_REVIEW_COVERS.length - 1 ? 0 : prev + 1) : 0));
        }
      }
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") resetZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentItem]);

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
              Cultural Publications
            </h1>
          </div>
          
          <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-2xl space-y-4 shadow-sm">
            <blockquote className="font-serif italic text-lg md:text-xl text-neutral-800 leading-relaxed select-text">
              "Creating literary journals and cultural publications is about documenting African life and ideas in our own words—creating enduring records where our writers, poets, and thinkers can experiment, converse, and challenge the world."
            </blockquote>
            <p className="font-sans font-semibold text-xs tracking-wider text-neutral-500 uppercase">
              Lola Shoneyin
            </p>
          </div>
        </section>

        {/* SECTION 1: AKÉ REVIEW */}
        <section id="ake-review" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-6 max-w-4xl">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Aké Review
            </h2>

            <div className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed select-text">
              <p>
                First slated for a 2013 launch, the edition stalled when the publisher partnership collapsed. Shoneyin took it over and issued the inaugural edition in 2014. Conceived as a multi-lingual, multi-genre platform for new and established talent, each edition doubles as a keepsake, built around "10 Questions" interviews with that year's festival guests. It is produced annually in tandem with Ake Festival.
              </p>
            </div>
          </div>

          {/* AKÉ REVIEW COVERS - STATIC RESPONSIVE GRID */}
          <div className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
              {AKE_REVIEW_COVERS.map((item, index) => (
                <div
                  key={item.year}
                  onClick={() => handleOpenCover(index)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-full aspect-[3/4] flex items-center justify-center">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Clear Year Date */}
                  <span className="mt-3 font-mono text-sm font-black text-neutral-950 tracking-wider">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: OLONGO */}
        <section id="olongo" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-6 max-w-4xl">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Olongo
            </h2>
            
            <div className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed select-text space-y-4">
              <p>
                Olongo was the journal Shoneyin edited and published through the Ibadan Arts Renaissance (IAR), the arts initiative she founded in Ibadan in 2002. It carried poetry from Helon Habila, Uche Nduka, and Amatoritsero Ede, an interview with Mabel Segun conducted by Remi Raji, and short fiction from emerging Nigerian writers. Olongo ran until 2004, when Shoneyin left Ibadan.
              </p>
            </div>
          </div>

          {/* OLONGO ARCHIVAL IMAGES - STATIC RESPONSIVE GRID */}
          <div className="pt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
              {OLONGO_ARCHIVE.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenOlongo(index)}
                  className="flex flex-col items-center group cursor-pointer"
                  title="Click to view and zoom in on writings"
                >
                  <div className="w-full aspect-[3/4] flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-h-full max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
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
                  {currentItem.year && (
                    <span className="font-mono text-xs font-bold bg-white text-neutral-950 px-2 py-0.5 rounded">
                      {currentItem.year}
                    </span>
                  )}
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

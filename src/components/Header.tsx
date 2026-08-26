import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenCalendar?: () => void;
}

export default function Header({ onOpenCalendar }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

const links = [
  { path: "/", label: "Home" },
  { 
    path: "/writing", 
    label: "Writing",
    hasDropdown: true,
    subLinks: [
      { path: "/books#prose", label: "Prose" },
      { path: "/books#poetry", label: "Poetry" },
      { path: "/books#children", label: "Children's Books" },
      { path: "/writing#essays", label: "Essays & Articles" },
    ]
  },
  {
    path: "/book-buzz",
    label: "Book Buzz",
    hasDropdown: true,
    subLinks: [
      { path: "/book-buzz#about", label: "Book Buzz Foundation" },
      { path: "/book-buzz#bookstorm", label: "Bookstorm" },
      { path: "/book-buzz#picturebook", label: "Nigerian Picture Book Project" },
      { path: "/book-buzz#partnerships", label: "Partnerships" },
    ]
  },
  { 
    path: "/publishing", 
    label: "Publishing",
    hasDropdown: true,
    subLinks: [
      { path: "/publishing#intro", label: "Ouida Books" },
      { path: "/publishing#imprints", label: "Imprints" },
    ]
  },
  { 
    path: "/ouida-lagos", 
    label: "OuidaLagos",
    hasDropdown: true,
    subLinks: [
      { path: "/ouida-lagos#community", label: "Community & Events" },
      { path: "/ouida-lagos#visitors-gallery", label: "Ouida Visitors Gallery" },
      { path: "/ouida-lagos#spaces", label: "Spaces" },
    ]
  },
  { 
    path: "/festivals", 
    label: "Festivals",
    hasDropdown: true,
    subLinks: [
      { path: "/festivals#ake", label: "Aké Arts and Book Festival" },
      { path: "/festivals#lifi", label: "LIFI" },
      { path: "/festivals#kabafest", label: "KABAFEST" },
      { path: "/festivals#afli", label: "AFLI" },
    ]
  },
  { 
    path: "/film", 
    label: "Films"
  },
  { 
    path: "/speaking", 
    label: "Speaking",
    hasDropdown: true,
    subLinks: [
      { path: "/speaking#gallery", label: "Event Gallery" },
    ]
  },
  { 
      path: "/press", 
      label: "Press",
      hasDropdown: true,
      subLinks: [
        { path: "/press#interviews", label: "Interviews",},
        { path: "/press#podcasts", label: "Podcasts",},
        { path: "/press#news", label: "News",},
      ]
    },
  { 
    path: "/contact", 
    label: "Contact",
    hasDropdown: true,
    subLinks: [,
      { path: "/contact#faq", label: "FAQ" },
    ]
  },
];

  // Detect scroll to toggle dark overlay background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile hamburger drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    navigate(path);
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isHomePage = location.pathname === "/";
  const showOverlay = !isHomePage || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3.5 sm:px-6 sm:py-4 md:px-12 md:py-5 transition-all duration-500 ${
          isOpen
            ? "bg-[#EFEFEA] border-b border-neutral-300 shadow-sm"
            : showOverlay
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/10 shadow-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-x-4">
          
          {/* Logo on Top Left */}
          <button
            onClick={() => handleNavigate("/")}
            className={`font-sans text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase font-black cursor-pointer select-none outline-none transition-colors flex items-center gap-2 shrink-0 ${
              isOpen ? "text-neutral-950 hover:text-neutral-700" : "text-white hover:text-neutral-200"
            }`}
          >
            <span>LOLA SHONEYIN</span>
          </button>

          {/* Desktop Navigation Links (for desktop screens >= 1024px lg) */}
          <nav className="hidden lg:flex items-center gap-x-3.5 lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8 whitespace-nowrap flex-nowrap shrink-0">
            {links.map((link, linkIdx) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              
              if (link.hasDropdown && link.subLinks) {
                // Align rightmost dropdowns to the right edge so they don't overflow the screen
                const isRightAligned = linkIdx >= links.length - 3;

                return (
                  <div key={link.label} className="relative group py-1 shrink-0">
                    <button
                      onClick={() => handleNavigate(link.path)}
                      className={`relative font-sans text-[11px] xl:text-xs 2xl:text-[13px] tracking-wider uppercase font-bold transition-colors duration-300 cursor-pointer outline-none flex items-center gap-1 whitespace-nowrap ${
                        isOpen ? "text-neutral-800 hover:text-neutral-950" : "text-white/85 group-hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[9px] text-neutral-400 font-mono transition-transform duration-300 group-hover:rotate-180">▼</span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[1.5px] ${isOpen ? "bg-neutral-950" : "bg-white"} transform transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>

                    {/* Sleek Hover Dropdown Card with Light Background matching the Menu Drawer */}
                    <div
                      className={`absolute top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 ${
                        isRightAligned ? "right-0 left-auto" : "-left-4"
                      }`}
                    >
                      <div className="bg-[#EFEFEA] border border-neutral-300/90 p-3.5 rounded-xl shadow-2xl backdrop-blur-xl w-72 sm:w-80 whitespace-normal space-y-1 text-neutral-900">
                        {link.subLinks.map((sub) => (
                          <button
                            key={sub.path}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigate(sub.path);
                            }}
                            className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-200/70 transition-colors group/sub cursor-pointer flex flex-col whitespace-normal"
                          >
                            <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-950 group-hover/sub:text-neutral-800 transition-colors flex items-center justify-between gap-2 whitespace-normal">
                              <span>{sub.label}</span>
                              <ArrowUpRight size={13} className="text-neutral-500 group-hover/sub:text-neutral-950 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all shrink-0" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`relative font-sans text-[11px] xl:text-xs 2xl:text-[13px] tracking-wider uppercase font-bold transition-colors duration-300 cursor-pointer outline-none group py-1 whitespace-nowrap shrink-0 ${
                    isOpen ? "text-neutral-800 hover:text-neutral-950" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${isOpen ? "bg-neutral-950" : "bg-white"} transform transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}

            {/* Calendar Trigger Button */}
            {onOpenCalendar && (
              <button
                onClick={onOpenCalendar}
                className="flex items-center space-x-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-[11px] xl:text-xs font-bold uppercase tracking-wider py-1.5 px-3.5 rounded-full shadow-md transition-all cursor-pointer border border-neutral-700 shrink-0 ml-1.5 whitespace-nowrap"
              >
                <Calendar size={13} />
                <span>Calendar</span>
              </button>
            )}
          </nav>

          {/* Hamburger Menu Button on Top Right (prominent on screens < 1024px lg) */}
          <div className="flex items-center space-x-2 shrink-0">
            {onOpenCalendar && (
              <button
                onClick={onOpenCalendar}
                className="lg:hidden flex items-center space-x-1 bg-neutral-900 text-white text-xs font-mono font-bold uppercase tracking-wider py-2 px-3 rounded-full shadow-md"
              >
                <Calendar size={13} />
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center p-2.5 sm:p-3 rounded-full border transition-all duration-300 cursor-pointer outline-none ${
                isOpen
                  ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 shadow-md"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/15 backdrop-blur-md"
              }`}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? (
                <X size={18} className="text-white" />
              ) : (
                <Menu size={18} className="text-white" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Hamburger Drawer / Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className="fixed inset-0 z-40 bg-[#EFEFEA] text-neutral-900 flex flex-col justify-between p-6 sm:p-10 pt-24 sm:pt-28 overflow-y-auto"
          >
            {/* Header branding inside drawer */}
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between py-6 space-y-12">
              
              {/* Navigation Links list inside drawer */}
              <div className="space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-bold block mb-4">
                  NAVIGATION MENU
                </span>

                <nav className="flex flex-col space-y-3 sm:space-y-4">
                  {links.map((link, idx) => {
                    const isActive =
                      link.path === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(link.path);
                    return (
                      <div key={link.path || link.label} className="space-y-1">
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 + 0.1 }}
                          onClick={() => handleNavigate(link.path)}
                          className={`w-full group text-left py-2 px-3 rounded-lg flex items-center justify-between transition-all duration-300 ${
                            isActive
                              ? "bg-neutral-200/90 text-neutral-950 font-black"
                              : "text-neutral-800 hover:text-neutral-950 hover:bg-neutral-200/50"
                          }`}
                        >
                          <span className="font-sans text-2xl sm:text-4xl uppercase tracking-wider font-extrabold flex items-center gap-3">
                            <span className="font-mono text-xs text-neutral-500 font-normal">
                              0{idx + 1}
                            </span>
                            {link.label}
                          </span>
                          <ArrowUpRight
                            size={24}
                            className={`transition-transform duration-300 ${
                              isActive
                                ? "text-neutral-950 translate-x-1 -translate-y-1"
                                : "text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-1 group-hover:-translate-y-1"
                            }`}
                          />
                        </motion.button>

                        {/* Render sub-links as clean text with arrow icons */}
                        {link.subLinks && (
                          <div className="pl-10 sm:pl-16 flex flex-col space-y-1.5 pt-1 pb-3">
                            {link.subLinks.map((sub) => (
                              <button
                                key={sub.path}
                                onClick={() => handleNavigate(sub.path)}
                                className="group/sub font-sans text-sm sm:text-base font-semibold text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-2 cursor-pointer text-left w-fit py-0.5"
                              >
                                <span>{sub.label}</span>
                                <ArrowUpRight size={14} className="text-neutral-400 group-hover/sub:text-neutral-950 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer footer info */}
              <div className="border-t border-neutral-300/80 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-600">
                <div>
                  <h4 className="font-sans font-extrabold uppercase tracking-wider text-neutral-950 mb-2 text-sm">
                    Lola Shoneyin
                  </h4>
                  <p className="leading-relaxed font-medium">
                    Author, Cultural Entrepreneur & Founder of Book Buzz Foundation
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase font-bold">
                      Contact Email
                    </span>
                    <a
                      href="mailto:info@lolashoneyin.com"
                      className="text-neutral-950 hover:text-neutral-600 transition-colors font-bold text-sm"
                    >
                      info@lolashoneyin.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleNavigate("/contact")}
                    className="bg-neutral-950 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all self-start sm:self-auto cursor-pointer shadow-md"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
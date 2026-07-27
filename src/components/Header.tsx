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
        { path: "/books", label: "Bibliography", desc: "Baba Segi's Wives, poetry collections, children's books & Northern Lights" },
        { path: "/writing", label: "Articles & Essays", desc: "Selected commentary, essays and published articles" },
      ]
    },
    { 
      path: "/ouida-books", 
      label: "Publishing",
      hasDropdown: true,
      subLinks: [
        { path: "/ouida-books", label: "Ouida Books", desc: "Founding, mission & independent African publishing" },
        { path: "/ouida-books#imprints", label: "Imprints", desc: "Cognix, Teyani, Tanja, and Phoenix" },
      ]
    },
    { 
      path: "/ouida-lagos", 
      label: "OuidaLagos",
      hasDropdown: true,
      subLinks: [
        { path: "/ouida-lagos", label: "Bookstore & Café", desc: "Cultural sanctuary & community hub in Ikeja" },
        { path: "/ouida-books", label: "Publishing House", desc: "Headquarters of Ouida Books imprints" },
        { path: "/ouida-lagos#residency", label: "Residency & CFIN", desc: "Orange Tree Writer's Residency & Centre for Illustrations" },
        { path: "/spaces", label: "Co-working Space", desc: "Private studios, halls & creative workspaces" },
      ]
    },
    { 
      path: "/festivals", 
      label: "Festivals",
      hasDropdown: true,
      subLinks: [
        { path: "/festivals#ake", label: "Aké Arts & Book Festival", desc: "Annual premier African literary gathering" },
        { path: "/festivals#lifi", label: "LIFI", desc: "Lagos International Festival of Illustration" },
        { path: "/festivals#afli", label: "AFLI", desc: "Abuja Festival of Literature and Ideas" },
      ]
    },
    { 
      path: "/film", 
      label: "Films",
      hasDropdown: true,
      subLinks: [
        { path: "/film#flowers", label: "Flowers for Warriors", desc: "Documentary on neurodiversity & parent courage" },
        { path: "/film#fragile", label: "A Fragile State", desc: "Investigation into institutional resilience" },
        { path: "/film#egbe", label: "Egbe: In Search of Belonging", desc: "Exploration of Yoruba peer associations" },
      ]
    },
    { 
      path: "/press", 
      label: "Press",
      hasDropdown: true,
      subLinks: [
        { path: "/press#awards", label: "Awards & Prizes", desc: "RSL Fellowship, FT 25, Aficionado & Literary Person of the Year" },
        { path: "/press#faq", label: "FAQ", desc: "Frequently asked questions & media kit" },
      ]
    },
    { 
      path: "/speaking", 
      label: "Speaking",
      hasDropdown: true,
      subLinks: [
        { path: "/speaking#gallery", label: "Photo Gallery", desc: "FLAM Marrakech, Bologna, Princeton & global appearances" },
        { path: "/speaking#interviews", label: "Podcasts & Interviews", desc: "Keynotes, conversations & media features" },
        { path: "/contact", label: "Bookings", desc: "Funnels directly into contact for speaking engagements" },
      ]
    },
    { 
      path: "/contact", 
      label: "Contact",
      hasDropdown: true,
      subLinks: [
        { path: "/contact", label: "Contact Us", desc: "info@lolashoneyin.com" },
        { path: "/contact#bookings", label: "Work Inquiries & Bookings", desc: "Keynotes, panels & publishing inquiries" },
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHomePage = location.pathname === "/";
  const showOverlay = !isHomePage || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-4 py-3.5 sm:px-6 sm:py-4 md:px-12 md:py-5 transition-all duration-500 ${
          showOverlay
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/10 shadow-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-x-4">
          
          {/* Logo on Top Left */}
          <button
            onClick={() => handleNavigate("/")}
            className="text-white font-sans text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase font-black cursor-pointer select-none outline-none hover:text-neutral-200 transition-colors flex items-center gap-2 shrink-0"
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
                      className="relative text-white/85 group-hover:text-white font-sans text-[11px] xl:text-xs 2xl:text-[13px] tracking-wider uppercase font-bold transition-colors duration-300 cursor-pointer outline-none flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>{link.label}</span>
                      <span className="text-[9px] text-rose-400 font-mono transition-transform duration-300 group-hover:rotate-180">▼</span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-rose-500 transform transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>

                    {/* Sleek Hover Dropdown Card */}
                    <div
                      className={`absolute top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 ${
                        isRightAligned ? "right-0 left-auto" : "-left-4"
                      }`}
                    >
                      <div className="bg-neutral-950/95 border border-white/15 p-3 rounded-xl shadow-2xl backdrop-blur-xl w-72 sm:w-80 whitespace-normal space-y-1">
                        {link.subLinks.map((sub) => (
                          <button
                            key={sub.path}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavigate(sub.path);
                            }}
                            className="w-full text-left p-2.5 rounded-lg hover:bg-white/10 transition-colors group/sub cursor-pointer flex flex-col whitespace-normal"
                          >
                            <span className="text-xs font-bold uppercase tracking-wider text-white group-hover/sub:text-rose-400 transition-colors flex items-center justify-between gap-2 whitespace-normal">
                              <span>{sub.label}</span>
                              <ArrowUpRight size={12} className="text-neutral-500 group-hover/sub:text-rose-400 shrink-0" />
                            </span>
                            <span className="text-[10px] text-neutral-400 font-sans mt-0.5 leading-relaxed whitespace-normal break-words block pr-2">
                              {sub.desc}
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
                  className="relative text-white/85 hover:text-white font-sans text-[11px] xl:text-xs 2xl:text-[13px] tracking-wider uppercase font-bold transition-colors duration-300 cursor-pointer outline-none group py-1 whitespace-nowrap shrink-0"
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-rose-500 transform transition-transform duration-300 origin-left ${
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
                className="flex items-center space-x-1.5 bg-rose-600/90 hover:bg-rose-600 text-white font-mono text-[11px] xl:text-xs font-bold uppercase tracking-wider py-1.5 px-3.5 rounded-full shadow-md transition-all cursor-pointer border border-rose-500/50 shrink-0 ml-1.5 whitespace-nowrap"
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
                className="lg:hidden flex items-center space-x-1 bg-rose-600 text-white text-xs font-mono font-bold uppercase tracking-wider py-2 px-3 rounded-full shadow-md"
              >
                <Calendar size={13} />
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold tracking-widest uppercase py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-full border border-white/15 backdrop-blur-md transition-all duration-300 cursor-pointer outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider">
                {isOpen ? "CLOSE" : "MENU"}
              </span>
              {isOpen ? (
                <X size={16} className="text-white" />
              ) : (
                <Menu size={16} className="text-white" />
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
            className="fixed inset-0 z-40 bg-neutral-950 text-white flex flex-col justify-between p-6 sm:p-10 pt-24 sm:pt-28 overflow-y-auto"
          >
            {/* Header branding inside drawer */}
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between py-6 space-y-12">
              
              {/* Navigation Links list inside drawer */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-rose-500 font-bold block mb-4">
                  NAVIGATION MENU
                </span>

                <nav className="flex flex-col space-y-3 sm:space-y-4">
                  {links.map((link, idx) => {
                    const isActive =
                      link.path === "/"
                        ? location.pathname === "/"
                        : location.pathname.startsWith(link.path);
                    return (
                      <div key={link.path || link.label} className="space-y-2">
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 + 0.1 }}
                          onClick={() => handleNavigate(link.path)}
                          className={`w-full group text-left py-2 px-3 rounded-lg flex items-center justify-between transition-all duration-300 ${
                            isActive
                              ? "bg-white/10 text-white font-black"
                              : "text-neutral-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className="font-sans text-2xl sm:text-4xl uppercase tracking-wider font-extrabold flex items-center gap-3">
                            <span className="font-mono text-xs text-rose-500/80 font-normal">
                              0{idx + 1}
                            </span>
                            {link.label}
                          </span>
                          <ArrowUpRight
                            size={24}
                            className={`transition-transform duration-300 ${
                              isActive
                                ? "text-rose-500 translate-x-1 -translate-y-1"
                                : "text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                            }`}
                          />
                        </motion.button>

                        {/* Render sub-links inside mobile drawer if present */}
                        {link.subLinks && (
                          <div className="pl-12 flex flex-wrap gap-2 pt-1 pb-2">
                            {link.subLinks.map((sub) => (
                              <button
                                key={sub.path}
                                onClick={() => handleNavigate(sub.path)}
                                className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1.5 rounded-md bg-white/5 hover:bg-rose-600 hover:text-white text-neutral-300 transition-colors border border-white/10 flex items-center gap-1 cursor-pointer"
                              >
                                <span>{sub.label}</span>
                                <ArrowUpRight size={10} />
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
              <div className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-400">
                <div>
                  <h4 className="font-sans font-bold uppercase tracking-wider text-white mb-2">
                    Lola Shoneyin
                  </h4>
                  <p className="leading-relaxed">
                    Author, Cultural Entrepreneur & Founder of Book Buzz Foundation
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="block text-neutral-500 font-mono text-[10px] uppercase">
                      Contact Email
                    </span>
                    <a
                      href="mailto:info@lolashoneyin.com"
                      className="text-white hover:text-rose-400 transition-colors font-medium"
                    >
                      info@lolashoneyin.com
                    </a>
                  </div>
                  <button
                    onClick={() => handleNavigate("/contact")}
                    className="bg-rose-600 hover:bg-rose-500 text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all self-start sm:self-auto cursor-pointer"
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

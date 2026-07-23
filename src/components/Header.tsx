import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/books", label: "Books" },
    { path: "/writing", label: "Writing" },
    { path: "/festivals", label: "Festivals" },
    { path: "/publishing", label: "Publishing" },
    { path: "/film", label: "Film" },
    { path: "/press", label: "Press" },
    { path: "/speaking", label: "Speaking" },
    { path: "/contact", label: "Contact" },
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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo on Top Left */}
          <button
            onClick={() => handleNavigate("/")}
            className="text-white font-sans text-base sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.25em] uppercase font-black cursor-pointer select-none outline-none hover:text-neutral-200 transition-colors flex items-center gap-2"
          >
            <span>LOLA SHONEYIN</span>
          </button>

          {/* Desktop Navigation Links (for screens >= 800px) */}
          <nav className="hidden min-[800px]:flex items-center gap-x-6 lg:gap-x-8">
            {links.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className="relative text-white/80 hover:text-white font-sans text-xs lg:text-sm tracking-widest uppercase font-semibold transition-colors duration-300 cursor-pointer outline-none group py-1"
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
          </nav>

          {/* Hamburger Menu Button on Top Right (prominent on mobile / screens < 800px) */}
          <div className="flex items-center">
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
                      <motion.button
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 + 0.1 }}
                        onClick={() => handleNavigate(link.path)}
                        className={`group text-left py-2 px-3 rounded-lg flex items-center justify-between transition-all duration-300 ${
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
                      href="mailto:info@bookbuzzfoundation.org"
                      className="text-white hover:text-rose-400 transition-colors font-medium"
                    >
                      info@bookbuzzfoundation.org
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

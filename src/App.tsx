import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Calendar as CalendarIcon } from "lucide-react";
import { PROJECTS } from "./data";
import Header from "./components/Header";
import CardStack from "./components/CardStack";
import AgencySection from "./components/AgencySection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PhilosophySection from "./components/PhilosophySection";
import TestimonialsSection from "./components/TestimonialsSection";
import SpacesSection from "./components/SpacesSection";
import HomeHero from "./components/HomeHero";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import PoetrySection from "./components/PoetrySection";
import { BentoSection } from "./components/BentoSection";
import { BentoSectionTwo } from "./components/BentoSectionTwo";
import { AwardsMarquee } from "./components/AwardsMarquee";
import TheWorkTiles from "./components/TheWorkTiles";
import AwardsAndPrizesSection from "./components/AwardsAndPrizesSection";
import ProjectDetailPage from "./components/ProjectDetailPage";
import CalendarModal from "./components/CalendarModal";

// Sub-pages
import BooksPage from "./components/BooksPage";
import WritingPage from "./components/WritingPage";
import OuidaBooksPage from "./components/OuidaBooksPage";
import OuidaLagosPage from "./components/OuidaLagosPage";
import SpaceDetailPage from "./components/SpaceDetailPage";
import FestivalsPage from "./components/FestivalsPage";
import PublishingPage from "./components/PublishingPage";
import FilmPage from "./components/FilmPage";
import PressPage from "./components/PressPage";
import SpeakingPage from "./components/SpeakingPage";
import ContactPage from "./components/ContactPage";
import BookBuzzPage from "./components/BookBuzzPage";
import AwardsPage from "./components/AwardsPage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full relative"
    >
      {/* 1. Sticky Fixed Hero Section */}
      <div className="sticky top-0 w-full h-screen z-0 overflow-hidden">
        <HomeHero />
      </div>

      {/* 2. Covering Content Layer that slides up over the fixed Hero */}
      <div className="relative z-10 bg-white shadow-[0_-25px_60px_rgba(0,0,0,0.15)]">
        {/* The Work (tiles) */}
        <TheWorkTiles />

        {/* Biography */}
        <AboutSection />

        {/* Awards and Prizes */}
        <AwardsAndPrizesSection />

        {/* Spaces at Ouida Section */}
        <SpacesSection />

        {/* Sticky Projects CardStack */}
        <CardStack
          projects={PROJECTS.slice(0, 3)}
          onViewProject={(project) => {
            navigate(`/project/${project.id}`);
            window.scrollTo({ top: 0, behavior: "instant" });
          }}
          onViewMoreBooks={() => {
            navigate("/books");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Horizontal Scroll Section (Children's Books) */}
        <HorizontalScrollSection />

        {/* Poetry Section */}
        <PoetrySection />

        {/* Cultural Ecosystem Bento Grid Sections */}
        <BentoSection />
        <BentoSectionTwo />

        {/* Curation Pillars */}
        <ServicesSection />

        {/* Philosophy Section */}
        <PhilosophySection />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-open calendar if user visits shared event link (?event=eventId)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const eventId = params.get("event") || params.get("eventId");
    if (eventId) {
      setIsCalendarOpen(true);
    }
  }, [location.search]);

  // Scroll to target section whenever URL hash changes or page loads with a hash
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const handleFooterNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-rose-500 selection:text-white flex flex-col justify-between">
      
      {/* Top Fixed Responsive Header */}
      <Header onOpenCalendar={() => setIsCalendarOpen(true)} />

      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

      {/* Main Slash Route Page Renderer */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/book-buzz" element={<BookBuzzPage />} />
            <Route path="/ouida-books" element={<OuidaBooksPage />} />
            <Route path="/ouida-lagos" element={<OuidaLagosPage />} />
            <Route path="/spaces" element={<OuidaLagosPage />} />
            <Route path="/spaces/:spaceId" element={<SpaceDetailPage />} />
            <Route path="/workspace" element={<SpaceDetailPage />} />
            <Route path="/sunroom" element={<SpaceDetailPage />} />
            <Route path="/meeting-rooms" element={<SpaceDetailPage />} />
            <Route path="/bookshop" element={<SpaceDetailPage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/publishing" element={<OuidaBooksPage />} />
            <Route path="/film" element={<FilmPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Bottom Footer Section */}
      <footer className="relative bg-white border-t border-neutral-200 pt-16 pb-12 px-4 sm:px-8 md:px-12 z-30 text-neutral-900">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Logo Line */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 font-sans font-black text-xl tracking-tighter text-neutral-950 select-none uppercase">
              <span className="bg-neutral-950 text-white px-2.5 py-1 rounded-[4px] font-serif text-base tracking-normal">LS</span>
              <span>Lola Shoneyin</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCalendarOpen(true)}
                className="text-xs font-mono uppercase font-bold text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1"
              >
                <CalendarIcon size={12} />
                <span>Public Calendar</span>
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xs font-mono uppercase font-bold text-neutral-400 hover:text-neutral-950 transition-colors"
              >
                Back to Top ↑
              </button>
            </div>
          </div>

          <div className="w-full h-[1px] bg-neutral-200" />

          {/* Main Footer Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            
            {/* Left Column: Nav & Big Statement */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Horizontal Nav Links */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-extrabold tracking-wider text-neutral-500 uppercase">
                {[
                  { path: "/", label: "HOME" },
                  { path: "/writing", label: "WRITING" },
                  { path: "/books", label: "BOOKS" },
                  { path: "/ouida-books", label: "PUBLISHING" },
                  { path: "/ouida-lagos", label: "SPACES" },
                  { path: "/festivals", label: "FESTIVALS" },
                  { path: "/film", label: "FILM" },
                  { path: "/speaking", label: "WORK INQUIRIES" },
                  { path: "/contact", label: "CONTACT & PRESS" },
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleFooterNav(item.path)}
                    className={`hover:text-neutral-950 transition-colors cursor-pointer ${
                      (item.path === "/" && location.pathname === "/") ||
                      (item.path !== "/" && location.pathname.startsWith(item.path))
                        ? "text-rose-600 underline underline-offset-4"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Call to action headline */}
              <div className="space-y-6">
                <h2 className="font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-tight max-w-xl">
                  Ready to collaborate and build cultural spaces?
                </h2>
                <div>
                  <button
                    onClick={() => handleFooterNav("/contact")}
                    className="inline-flex items-center space-x-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase py-4 px-6 rounded-full transition-all duration-300 shadow-md cursor-pointer outline-none group"
                  >
                    <span>START A COLLABORATION</span>
                    <span className="bg-rose-600 text-white rounded-full p-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center justify-center">
                      <ArrowUpRight size={12} className="stroke-[3]" />
                    </span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Social Row & Connect Info */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-10 lg:space-y-0 lg:items-end">
              
              <div className="flex items-center space-x-4 text-neutral-600 lg:justify-end">
                <a href="https://www.facebook.com/share/1DKaUnM4nn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-neutral-950 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1 1-1h2V2h-3c-3 0-4 1.4-4 3.5V8z"/></svg>
                </a>
                <a href="https://www.instagram.com/lolashoneyin?utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-neutral-950 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/lola-shoneyin-37007b198?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-neutral-950 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://x.com/lolashoneyin?s=11&t=k5OJv4m_RpRtTxvzSNv50Q" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-neutral-950 transition-colors" aria-label="X (Twitter)">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>

              <div className="space-y-4 lg:text-left lg:w-64">
                <h4 className="font-sans font-extrabold text-sm text-neutral-950 tracking-wider uppercase">Connect</h4>
                <div className="space-y-2 flex flex-col items-start text-xs">
                  <a 
                    href="mailto:info@lolashoneyin.com" 
                    className="inline-flex items-center space-x-1 text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
                  >
                    <span>info@lolashoneyin.com</span>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </a>
                  <p className="text-neutral-500 leading-relaxed pt-1 font-sans select-text">
                    Lagos Office: 34 Ajanaku Street, Opebi, Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="w-full h-[1px] bg-neutral-200" />

          {/* Bottom copyright row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 text-xs text-neutral-500 font-medium">
            <div className="flex items-center space-x-6">
              <a href="#terms" className="hover:text-neutral-950 transition-colors">Terms of Service</a>
              <a href="#privacy" className="hover:text-neutral-950 transition-colors">Privacy Policy</a>
            </div>
            <div>
              <span>© {new Date().getFullYear()} Lola Shoneyin. All rights reserved.</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Back To Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-neutral-900/90 hover:bg-black text-white backdrop-blur-md rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

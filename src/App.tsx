import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Calendar as CalendarIcon } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import CredentialsStrip from "./components/CredentialsStrip";
import TheWorkTiles from "./components/TheWorkTiles";
import AboutSection from "./components/AboutSection";
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
import CulturalPublicationsPage from "./components/CulturalPublicationsPage";
import CulturalEventsPage from "./components/CulturalEventsPage";

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
        {/* Biography */}
        <AboutSection />

        {/* Awards and Prizes */}
        <AwardsAndPrizesSection />
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

  // Always scroll to top immediately on route pathname change when no hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname]);

  // Scroll to target section whenever URL hash changes or page loads with a hash
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }, 150);
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
        <AnimatePresence 
          mode="wait"
          onExitComplete={() => {
            if (!window.location.hash) {
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/book-buzz" element={<BookBuzzPage />} />
            <Route path="/ouida-books" element={<OuidaBooksPage />} />
            <Route path="/cultural-publications" element={<CulturalPublicationsPage />} />
            <Route path="/ouida-lagos" element={<OuidaLagosPage />} />
            <Route path="/spaces" element={<OuidaLagosPage />} />
            <Route path="/spaces/:spaceId" element={<SpaceDetailPage />} />
            <Route path="/workspace" element={<SpaceDetailPage />} />
            <Route path="/sunroom" element={<SpaceDetailPage />} />
            <Route path="/meeting-rooms" element={<SpaceDetailPage />} />
            <Route path="/bookshop" element={<SpaceDetailPage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/cultural-events" element={<CulturalEventsPage />} />
            <Route path="/publishing" element={<OuidaBooksPage />} />
            <Route path="/film" element={<FilmPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/media" element={<PressPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<ContactPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Redesigned Rich Bottom Footer */}
      <Footer onOpenCalendar={() => setIsCalendarOpen(true)} />

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

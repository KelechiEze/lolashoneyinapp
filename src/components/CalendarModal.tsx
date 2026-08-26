import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  ExternalLink,
  Share2,
  Check
} from "lucide-react";

export interface EventItem {
  id: string;
  title: string;
  category: "Festivals" | "Ouida Lagos" | "Book Launch" | "Residency" | "Film Screening";
  badgeColor: string; // Tailwind dot color
  date: string; // ISO string YYYY-MM-DD
  month: string; // e.g., "August 2026"
  displayDate: string;
  time: string;
  location: string;
  description: string;
  image: string;
  linkText?: string;
  linkUrl?: string;
  organizer?: string;
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "ake-2026",
    title: "Aké Arts and Book Festival 2026",
    category: "Festivals",
    badgeColor: "bg-rose-500",
    date: "2026-11-19",
    month: "November 2026",
    displayDate: "Nov 19–22, 2026",
    time: "09:00 AM – 09:00 PM WAT",
    location: "Lagos, Nigeria & Online",
    description: "Four days of panel discussions, book chats, poetry slams, art exhibitions, and film screenings featuring global African literary luminaries.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg",
    linkText: "Aké Festival Portal",
    linkUrl: "/festivals",
    organizer: "Book Buzz Foundation"
  },
  {
    id: "lifi-2026",
    title: "Lagos International Festival of Illustrations (LIFI)",
    category: "Festivals",
    badgeColor: "bg-amber-500",
    date: "2026-09-12",
    month: "September 2026",
    displayDate: "Sept 12–14, 2026",
    time: "10:00 AM – 06:00 PM WAT",
    location: "Ouida Lagos, 34 Ajanaku St, Ikeja",
    description: "Nigeria's flagship illustration gathering bridging West African graphic storytellers with European masters and publishers.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    linkText: "LIFI Details",
    linkUrl: "/festivals",
    organizer: "CFIN & Ouida Lagos"
  },
  {
    id: "afli-2026",
    title: "Abuja Festival of Literature and Ideas (AFLI)",
    category: "Festivals",
    badgeColor: "bg-emerald-500",
    date: "2026-10-09",
    month: "October 2026",
    displayDate: "9 & 10 October 2026",
    time: "09:00 AM – 05:00 PM WAT",
    location: "Abuja, Nigeria",
    description: "Policy, literature, and public debates examining governance, artistic freedom, and youth leadership in West Africa.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    linkText: "Explore AFLI",
    linkUrl: "/festivals",
    organizer: "Book Buzz Foundation"
  },
  {
    id: "ouida-openmic",
    title: "Ouida Lagos Monthly Open Mic & Poetry Evening",
    category: "Ouida Lagos",
    badgeColor: "bg-purple-500",
    date: "2026-08-28",
    month: "August 2026",
    displayDate: "Aug 28, 2026",
    time: "06:00 PM – 09:00 PM WAT",
    location: "Ouida Lagos Café & Stage",
    description: "An intimate gathering for poets, spoken word performers, acoustic musicians, and storytellers under the Lagos night sky.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg",
    linkText: "Visit Ouida Lagos",
    linkUrl: "/ouida-lagos",
    organizer: "Ouida Lagos Cultural Hub"
  },
  {
    id: "orange-residency",
    title: "Orange Tree Residency Applications Window",
    category: "Residency",
    badgeColor: "bg-orange-500",
    date: "2026-09-01",
    month: "September 2026",
    displayDate: "Sept 1–30, 2026",
    time: "Submissions Open",
    location: "Ouida Lagos Writer's Wing",
    description: "Call for applications for mid-career African novelists and poets for a 4-week fully hosted writer's residency in Ikeja, Lagos.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    linkText: "Inquire via Contact",
    linkUrl: "/contact",
    organizer: "Orange Tree Residency Committee"
  },
  {
    id: "egbe-screening",
    title: "Special Premiere Preview: Egbe: In Search of Belonging",
    category: "Film Screening",
    badgeColor: "bg-sky-500",
    date: "2026-10-24",
    month: "October 2026",
    displayDate: "Oct 24, 2026",
    time: "05:30 PM WAT",
    location: "Ouida Lagos Screening Lounge",
    description: "Director's preview screening and panel discussion with Lola Shoneyin on Yoruba peer-community association traditions.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800",
    linkText: "Film Archive",
    linkUrl: "/film",
    organizer: "Lola Shoneyin Productions"
  },
  {
    id: "ouida-imprint-launch",
    title: "Ouida Books Autumn Releases & Imprint Showcase",
    category: "Book Launch",
    badgeColor: "bg-indigo-500",
    date: "2026-11-05",
    month: "November 2026",
    displayDate: "Nov 5, 2026",
    time: "04:00 PM WAT",
    location: "Ouida Bookstore, Lagos",
    description: "Book unveiling for upcoming titles across Cognix, Teyani, Tanja, and Phoenix imprints with author signings.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg",
    linkText: "Ouida Publishing",
    linkUrl: "/ouida-books",
    organizer: "Ouida Books Editorial Desk"
  }
];

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const [selectedMonth, setSelectedMonth] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const months = ["All", "August 2026", "September 2026", "October 2026", "November 2026"];

  // Check URL query param ?event=eventId when opened to load deep-linked event directly
  useEffect(() => {
    if (isOpen) {
      const params = new URLSearchParams(window.location.search);
      const targetId = params.get("event") || params.get("eventId");
      if (targetId) {
        const found = UPCOMING_EVENTS.find((e) => e.id === targetId);
        if (found) {
          setSelectedEvent(found);
        }
      }
    }
  }, [isOpen]);

  const filteredEvents = useMemo(() => {
    return UPCOMING_EVENTS.filter((evt) => {
      const matchMonth = selectedMonth === "All" || evt.month === selectedMonth;
      const matchSearch =
        searchQuery === "" ||
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchMonth && matchSearch;
    });
  }, [selectedMonth, searchQuery]);

  const handleShare = async (evt: EventItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}?event=${evt.id}`;

    // Try Web Share API for mobile devices if supported
    if (navigator.share && /Android|iPhone|iPad/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: evt.title,
          text: `${evt.title} (${evt.displayDate}) - ${evt.location}`,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    // Fallback to clipboard copy
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopiedId(evt.id);
        setTimeout(() => setCopiedId(null), 2500);
      } catch (err) {
        console.error("Failed to copy link: ", err);
      }
    }
  };

  const getGoogleCalendarUrl = (evt: EventItem) => {
    const title = encodeURIComponent(evt.title);
    const details = encodeURIComponent(`${evt.description}\n\nOrganizer: ${evt.organizer || "Lola Shoneyin Ecosystem"}`);
    const location = encodeURIComponent(evt.location);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-lg">
        
        {/* MODAL WRAPPER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F6F4EE] border border-neutral-300 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl text-neutral-900"
        >
          
          {/* TOP HEADER BAR */}
          <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white border-b border-neutral-200/80 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-neutral-950 flex items-center justify-center font-bold shadow-sm">
                <CalendarIcon size={20} />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-500 block">
                  PUBLIC SCHEDULE & EVENTS
                </span>
                <h2 className="font-sans font-black text-xl sm:text-2xl text-neutral-950 tracking-tight uppercase">
                  Events Calendar
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* CONTROLS STRIP: MONTH FILTER & SEARCH */}
          <div className="px-6 py-3 sm:px-8 bg-white/60 border-b border-neutral-200/80 shrink-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Month Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                <span className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-wider shrink-0 mr-1">
                  Month:
                </span>
                {months.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedMonth === m
                        ? "bg-amber-400 text-neutral-950 font-extrabold shadow-sm"
                        : "bg-neutral-200/50 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-64 shrink-0">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search event title, venue..."
                  className="w-full bg-white border border-neutral-300 rounded-full pl-9 pr-4 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-black font-sans"
                />
              </div>
            </div>
          </div>

          {/* EVENTS CARD GRID (MATCHING THE VIDEO DESIGN WITH 500% PRECISION) */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 scrollbar-thin scrollbar-thumb-neutral-300">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16 space-y-3 bg-white rounded-3xl border border-neutral-200/80 p-8">
                <CalendarIcon size={32} className="mx-auto text-neutral-400" />
                <h3 className="font-sans font-bold text-lg text-neutral-800">No events found</h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Try adjusting your filters or search terms to view upcoming public programs.
                </p>
                <button
                  onClick={() => {
                    setSelectedMonth("All");
                    setSearchQuery("");
                  }}
                  className="mt-2 bg-neutral-950 text-white font-mono text-xs font-bold uppercase px-4 py-2 rounded-full cursor-pointer hover:bg-neutral-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEvents.map((evt, idx) => (
                  <motion.div
                    key={evt.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* TOP BADGE TAG WITH DOT (EXACTLY LIKE VIDEO) */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center space-x-1.5 bg-neutral-100 border border-neutral-200/80 px-3 py-1 rounded-full">
                        <span className={`w-2 h-2 rounded-full ${evt.badgeColor}`} />
                        <span className="font-mono text-[11px] font-bold text-neutral-700 uppercase tracking-wider">
                          {evt.category}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        {evt.displayDate}
                      </span>
                    </div>

                    {/* MAIN CONTENT SPLIT: LEFT TEXT + RIGHT IMAGE THUMBNAIL (EXACTLY MATCHING VIDEO) */}
                    <div className="grid grid-cols-12 gap-4 items-start my-1 flex-1">
                      
                      {/* Left Side Info */}
                      <div className="col-span-7 sm:col-span-8 space-y-2 pr-1">
                        <h3 className="font-sans font-black text-xl text-neutral-950 group-hover:text-amber-600 transition-colors leading-tight uppercase tracking-tight">
                          {evt.title}
                        </h3>

                        <p className="font-sans text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                          {evt.description}
                        </p>

                        <div className="pt-2 space-y-1">
                          <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-500">
                            <Clock size={12} className="text-amber-500 shrink-0" />
                            <span className="truncate">{evt.time}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-500">
                            <MapPin size={12} className="text-rose-500 shrink-0" />
                            <span className="truncate">{evt.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side Image Thumbnail (Matching Video Aspect Ratio) */}
                      <div className="col-span-5 sm:col-span-4 aspect-[4/3] w-full rounded-[5px] overflow-hidden bg-neutral-900 relative shadow-sm border border-neutral-200/60 shrink-0">
                        <img
                          src={evt.image}
                          alt={evt.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                      </div>

                    </div>

                    {/* BOTTOM ACTION ROW WITH AMBER/BLACK ANIMATED CIRCULAR ARROW BUTTON (MATCHING VIDEO) */}
                    <div className="pt-5 border-t border-neutral-100 flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setSelectedEvent(evt)}
                          className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 group-hover:text-amber-600 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>View Details & RSVP</span>
                        </button>

                        <button
                          onClick={(e) => handleShare(evt, e)}
                          className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                            copiedId === evt.id
                              ? "bg-emerald-500 text-white border-emerald-500"
                              : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border-neutral-200"
                          }`}
                          title="Copy Unique Event Link"
                          aria-label="Share event"
                        >
                          {copiedId === evt.id ? (
                            <Check size={13} />
                          ) : (
                            <Share2 size={13} />
                          )}
                        </button>
                      </div>

                      <button
                        onClick={() => setSelectedEvent(evt)}
                        className="w-10 h-10 rounded-full bg-amber-400 group-hover:bg-neutral-950 text-neutral-950 group-hover:text-amber-400 flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 cursor-pointer"
                        aria-label="Expand event details"
                      >
                        <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* FOOTER BAR */}
          <div className="p-4 sm:p-5 bg-white border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-600 shrink-0">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All sessions hosted at Ouida Lagos or partnering international venues</span>
            </div>
            <div>
              <span>Contact: </span>
              <a href="mailto:info@lolashoneyin.com" className="font-bold text-neutral-950 underline hover:text-amber-600">
                info@lolashoneyin.com
              </a>
            </div>
          </div>

        </motion.div>

        {/* EVENT DETAIL OVERLAY EXPANDER */}
        <AnimatePresence>
          {selectedEvent && (
            <div 
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-neutral-200 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-neutral-900"
              >
                {/* PROMINENT TOP-RIGHT OUTER EDGE CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-950 hover:bg-rose-600 text-white flex items-center justify-center shadow-2xl border-2 border-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Close event details"
                  title="Close details"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>

                {/* Cover Header */}
                <div className="aspect-[16/9] w-full rounded-[5px] overflow-hidden bg-neutral-900 relative shadow-inner">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                    <span className="font-mono text-xs font-bold uppercase text-amber-400">
                      {selectedEvent.category} • {selectedEvent.displayDate}
                    </span>
                    <h3 className="font-sans font-black text-2xl uppercase tracking-tight leading-tight mt-1">
                      {selectedEvent.title}
                    </h3>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-4">
                  <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                    {selectedEvent.description}
                  </p>

                  <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 space-y-2 font-mono text-xs text-neutral-700">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 uppercase">Time:</span>
                      <strong className="text-neutral-950">{selectedEvent.time}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 uppercase">Location:</span>
                      <strong className="text-neutral-950">{selectedEvent.location}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 uppercase">Organizer:</span>
                      <strong className="text-neutral-950">{selectedEvent.organizer || "Lola Shoneyin Ecosystem"}</strong>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => handleShare(selectedEvent, e)}
                      className={`inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                        copiedId === selectedEvent.id
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
                          : "bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
                      }`}
                      title="Share Event"
                    >
                      {copiedId === selectedEvent.id ? (
                        <>
                          <Check size={15} className="text-emerald-600" />
                          <span className="text-emerald-700 font-extrabold">Unique Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 size={15} />
                          <span>Share Event Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  {selectedEvent.linkUrl && (
                    <a
                      href={selectedEvent.linkUrl}
                      onClick={onClose}
                      className="inline-flex items-center space-x-1.5 bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs font-bold uppercase tracking-wider py-3 px-5 rounded-full transition-all cursor-pointer shadow-sm"
                    >
                      <span>{selectedEvent.linkText || "Learn More"}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </AnimatePresence>
  );
}

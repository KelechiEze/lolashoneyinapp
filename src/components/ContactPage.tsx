import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, MapPin, Newspaper, ArrowUpRight, Download, FileText, Calendar, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACT_FAQS = [
  {
    q: "Does Ouida Books accept manuscript submissions?",
    a: "Ouida Books accepts submissions during specific windows each year. For current submission periods and guidelines, visit ouidabooks.com."
  },
  {
    q: "How do I invite you to speak at my festival or event?",
    a: "Speaking and appearance requests go through info@lolashoneyin.com. Please include the date, location, format, and the topic you'd like me to speak on."
  },
  {
    q: "Can I visit OuidaLagos? What are the opening hours?",
    a: "Yes. OuidaLagos is at 34 Ajanaku Street, Opebi, Lagos. For opening hours, events, and bookings, visit ouidalagos.com."
  },
  {
    q: "Do you offer mentorship, workshops, or residencies for emerging writers?",
    a: "Yes, through Book Buzz Foundation's training programmes and the Orange Tree Residency at OuidaLagos. Details are on the respective pages."
  },
  {
    q: "How can my organisation partner with Book Buzz Foundation or one of the festivals?",
    a: "Partnership enquiries go through info@lolashoneyin.com."
  },
  {
    q: "When is your next novel coming out?",
    a: "I'm working on it."
  },
  {
    q: "How do you feel about the adaptations of The Secret Lives of Baba Segi's Wives?",
    a: "I'm delighted every time The Secret Lives of Baba Segi's Wives finds new life in a different artform."
  }
];

export default function ContactPage() {
  const location = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. INTRO / HERO SECTION */}
      <section id="intro" className="max-w-7xl mx-auto px-6 pt-12 pb-16 scroll-mt-28">
        <div className="text-left space-y-4 max-w-3xl">
          <span className="font-mono text-xs text-rose-600 uppercase tracking-[0.25em] font-bold block">
            CONTACT & FAQ
          </span>

          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight uppercase leading-[1.02]">
            Contact
          </h1>

          <div>
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full mt-2">
              <Mail size={14} className="text-rose-600" />
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-rose-700 font-bold">
                ROUTING & INQUIRIES
              </span>
            </div>
          </div>

          <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal pt-4">
            All enquiries, contact, work inquiries, bookings, and partnerships go to <a href="mailto:info@lolashoneyin.com" className="font-mono font-bold text-rose-600 underline hover:text-rose-700">info@lolashoneyin.com</a>.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-start gap-4">
            <a
              href="mailto:info@lolashoneyin.com"
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center space-x-2 group"
            >
              <span>Email info@lolashoneyin.com</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={() => {
                const faqEl = document.getElementById("faq");
                if (faqEl) faqEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-sm transition-all cursor-pointer"
            >
              <span>View FAQ</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CONTACT ROUTING & OFFICIAL CHANNELS */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <div id="routing" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-neutral-200/80 pt-16 scroll-mt-28">
          <div className="space-y-6">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              CONTACT ROUTING
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tight text-neutral-950">
              Contact routing
            </h2>
            <div className="p-6 bg-white border border-neutral-200/80 rounded-2xl shadow-sm space-y-3">
              <p className="text-neutral-900 font-sans text-base sm:text-lg font-medium leading-relaxed">
                All enquiries, contact, work inquiries, bookings, and partnerships, go to <a href="mailto:info@lolashoneyin.com" className="font-mono font-bold text-rose-600 underline hover:text-rose-700">info@lolashoneyin.com</a>.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
                <div className="flex items-center space-x-3 text-rose-600 font-mono text-xs font-extrabold uppercase">
                  <Mail size={16} />
                  <span>General Enquiries & Contact</span>
                </div>
                <a href="mailto:info@lolashoneyin.com" className="font-mono text-sm font-bold text-neutral-900 hover:text-rose-600 block">
                  info@lolashoneyin.com
                </a>
                <p className="text-xs text-neutral-500 font-sans">For readers, general inquiries, and message routing.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm space-y-2">
                <div className="flex items-center space-x-3 text-rose-600 font-mono text-xs font-extrabold uppercase">
                  <Calendar size={16} />
                  <span>Work Inquiries, Bookings & Partnerships</span>
                </div>
                <a href="mailto:info@lolashoneyin.com" className="font-mono text-sm font-bold text-neutral-900 hover:text-rose-600 block">
                  info@lolashoneyin.com
                </a>
                <p className="text-xs text-neutral-500 font-sans">For keynote speeches, panel moderation, festival appearances, and partnerships.</p>
              </div>

              <div className="flex items-start space-x-3 text-neutral-800 pt-2">
                <MapPin size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <span className="font-mono text-xs font-semibold">CULTURAL HUB: 34 Ajanaku Street, Off Salvation Rd, Opebi, Ikeja, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 text-white p-8 sm:p-10 rounded-2xl space-y-6 border border-neutral-800 shadow-xl">
            <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase font-bold">
              <FileText size={16} />
              <span>Media & Official Press Kit</span>
            </div>

            <h3 className="font-sans font-black text-2xl uppercase tracking-tight">Download Press Assets</h3>
            <p className="font-sans text-xs text-neutral-300 leading-relaxed">
              Access high-resolution portraits, official biography, author photos, book cover high-res renders, and festival background documentation for media publications.
            </p>

            <div className="pt-2">
              <a
                href="mailto:info@lolashoneyin.com?subject=Press%20Kit%20Request"
                className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all cursor-pointer shadow-md"
              >
                <Download size={14} />
                <span>Request Press Kit</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
        <div id="faq" className="border-t border-neutral-200/80 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              QUESTIONS & CLARIFICATIONS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight text-neutral-950">
              FAQ
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed">
              Answers regarding manuscript submissions, speaking invitations, visiting OuidaLagos, mentorship, partnerships, and current literary projects.
            </p>
          </div>

          <div className="max-w-4xl space-y-3.5">
            {CONTACT_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <motion.div
                  key={idx}
                  layout
                  transition={{ layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-rose-200 shadow-sm"
                      : "bg-white hover:bg-rose-50/20 border-neutral-200/80"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center space-x-4 cursor-pointer focus:outline-none select-none group"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: isOpen ? "#e11d48" : "#f1f0ea",
                        rotate: isOpen ? 180 : 0
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                    >
                      {isOpen ? (
                        <Minus size={18} className="text-white stroke-[2.5]" />
                      ) : (
                        <Plus size={18} className="text-neutral-700 stroke-[2.2]" />
                      )}
                    </motion.div>

                    <span className="font-sans font-bold text-base sm:text-lg text-neutral-900 tracking-tight leading-snug group-hover:text-rose-600 transition-colors">
                      {faq.q}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -6, opacity: 0 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                          className="pl-18 sm:pl-20 pr-6 pb-6 pt-1 font-sans text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed"
                        >
                          {faq.a}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

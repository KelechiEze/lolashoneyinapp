import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Plus, Minus, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_BG_IMAGE = "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const CONTACT_FAQS: FaqItem[] = [
  {
    q: "Does Ouida Books accept manuscript submissions?",
    a: "Ouida Books accepts submissions during specific windows each year. For current submission periods and guidelines, please visit the official Ouida Books portal."
  },
  {
    q: "How do I invite you to speak at my festival or event?",
    a: "Speaking and appearance requests can be submitted directly through the contact form on this page. Please include the proposed date, location, event format, and topic in your message."
  },
  {
    q: "Can I visit Ouida Lagos? What are the opening hours?",
    a: (
      <div className="space-y-2">
        <p>Ouida Lagos is located at 34 Ajanaku Street, Opebi, Ikeja, Lagos. Opening hours are:</p>
        <ul className="list-disc list-inside space-y-1 pl-1">
          <li><strong>Monday to Friday:</strong> 09:00 – 18:00</li>
          <li><strong>Saturday:</strong> 10:00 – 17:00</li>
        </ul>
        <p>
          For cultural event programming, please visit{" "}
          <a
            href="https://ouidalagos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-rose-700 underline font-semibold transition-colors"
          >
            OuidaLagos.com
          </a>.
        </p>
      </div>
    )
  },
  {
    q: "Do you offer mentorship?",
    a: (
      <span>
        We offer training programmes throughout the year. Details can be found on{" "}
        <a
          href="https://bookbuzzfoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-600 hover:text-rose-700 underline font-semibold transition-colors"
        >
          BookBuzzFoundation.org
        </a>{" "}
        and on our socials.
      </span>
    )
  },
  {
    q: "How can my organisation partner with Book Buzz Foundation or one of the festivals?",
    a: "Institutional, philanthropic, and cultural partnership proposals can be submitted via the contact form by selecting the Cultural Partnerships category."
  },
  {
    q: "When is your next novel coming out?",
    a: "Soon."
  },
  {
    q: "How do you feel about the adaptations of The Secret Lives of Baba Segi's Wives?",
    a: "I am thrilled that The Secret Lives of Baba Segi’s Wives will find new audiences."
  }
];

export default function ContactPage() {
  const location = useLocation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Speaking & Events",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

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
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 selection:bg-neutral-900 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. INTRO HEADER */}
      <section id="intro" className="max-w-7xl mx-auto px-6 pt-4 pb-10 scroll-mt-28">
        <div className="text-left space-y-3 max-w-3xl">
          <h1 className="font-sans font-black text-3xl md:text-4xl text-neutral-950 tracking-tight uppercase leading-tight">
            Connect
          </h1>
          <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            For keynote speaking invitations, literary inquiries, festival curation, publishing conversations, and cultural partnerships.
          </p>
        </div>
      </section>

      {/* 2. CONTACT SECTION WITH ORIGINAL COLOR BACKGROUND IMAGE & LEFT-ALIGNED FORM */}
      <section className="relative w-full bg-neutral-100 overflow-hidden border-y border-neutral-200">
        {/* Original Color Background Image with No White Hue */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={HERO_BG_IMAGE}
            alt="Lola Shoneyin"
            className="w-full h-full object-cover object-right sm:object-right md:object-[75%_center]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            
            {/* LEFT-ALIGNED FORM CONTAINER - SOLID WHITE, STRICTLY NO BORDER RADIUS */}
            <div className="bg-white text-neutral-950 p-8 sm:p-10 md:p-12 shadow-2xl border border-neutral-300 rounded-none">
              <div className="space-y-2 mb-8 border-b border-neutral-200 pb-6">
                <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight text-neutral-950">
                  Send a Message
                </h2>
                <p className="text-neutral-600 font-sans text-xs sm:text-sm">
                  Please complete the form below. Your message will be reviewed and routed accordingly.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-neutral-50 border border-neutral-300 p-8 text-center space-y-4 rounded-none"
                >
                  <div className="w-12 h-12 bg-neutral-950 text-white flex items-center justify-center mx-auto rounded-none">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-sans font-black text-xl text-neutral-950 uppercase tracking-tight">
                    Message Sent Successfully
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-neutral-900">{formData.name}</strong>. Your message has been received and will be reviewed shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "Speaking & Events", subject: "", message: "" });
                    }}
                    className="mt-4 inline-flex items-center text-xs font-mono font-bold text-neutral-950 hover:text-neutral-700 uppercase tracking-wider underline cursor-pointer rounded-none"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-none px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full bg-neutral-50 border border-neutral-300 rounded-none px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Speaking & Events", "Literary & Publishing", "Press & Media", "Cultural Partnerships", "General"].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat })}
                          className={`text-xs font-mono py-2.5 px-3 rounded-none border text-left transition-all cursor-pointer ${
                            formData.category === cat
                              ? "bg-neutral-950 text-white border-neutral-950 font-bold"
                              : "bg-neutral-50 text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-100"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Keynote Invitation / Partnership Inquiry..."
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-none px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please include event dates, venue location, project scope, or specifics..."
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-none p-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-950 focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-neutral-950 hover:bg-neutral-800 disabled:opacity-70 text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 px-9 rounded-none shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer group"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Submit Message"}</span>
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION - STRICTLY NO BORDER RADIUS, NEUTRAL THEME */}
      <section id="faq" className="max-w-7xl mx-auto px-6 pt-20 space-y-8 scroll-mt-28">
        <div className="space-y-2 border-b border-neutral-200 pb-6">
          <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed">
            Guidance regarding speaking invitations, manuscript submissions, visiting OuidaLagos, mentorship programs, and partnerships.
          </p>
        </div>

        <div className="max-w-4xl space-y-3">
          {CONTACT_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-none transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-neutral-50 border-neutral-900 shadow-sm"
                    : "bg-white hover:bg-neutral-50 border-neutral-300 hover:border-neutral-400"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center space-x-4 cursor-pointer focus:outline-none select-none group rounded-none"
                >
                  <div
                    className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 border transition-colors ${
                      isOpen ? "bg-neutral-950 text-white border-neutral-950" : "bg-white text-neutral-800 border-neutral-300 group-hover:border-neutral-950 group-hover:bg-neutral-100"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} className="stroke-[2.5]" />
                    ) : (
                      <Plus size={16} className="stroke-[2.2]" />
                    )}
                  </div>

                  <span className="font-sans font-bold text-base sm:text-lg text-neutral-900 tracking-tight leading-snug">
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
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 sm:pl-18 pr-6 pb-6 pt-1 font-sans text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed border-t border-neutral-200 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

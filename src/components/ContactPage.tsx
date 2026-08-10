import React, { useState } from "react";
import { Send, Check, Mail, MapPin, Newspaper, ArrowUpRight, Award, Download, FileText, Calendar, Sparkles, Plus, Minus } from "lucide-react";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("General");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((!firstName && !lastName) || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTimeout(() => {
        setIsSuccess(false);
      }, 3500);
    }, 1200);
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-20 pb-24 selection:bg-neutral-900 selection:text-white">
      
      {/* HERO CONTACT FORM SECTION WITH HERO BACKGROUND IMAGE */}
      <div className="relative w-full min-h-[92vh] flex items-center justify-start px-6 sm:px-12 lg:px-24 py-16 bg-neutral-950 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-top opacity-40 select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 backdrop-blur-[0.5px]" />
        </div>

        {/* Floating Contact Form Container */}
        <div id="form" className="relative z-10 w-full max-w-xl bg-white p-8 sm:p-12 md:p-14 shadow-2xl rounded-none text-neutral-900 my-auto scroll-mt-28">
          
          <div className="space-y-2 mb-6">
            <span className="font-mono text-[10px] text-rose-600 font-extrabold uppercase tracking-widest block">
              DIRECT INQUIRIES & BOOKINGS
            </span>
            <h1 className="font-sans font-medium text-4xl sm:text-5xl tracking-tight text-neutral-950 leading-tight">
              Get in touch
            </h1>
            <p className="font-sans text-xs text-neutral-600">
              Official email for all inquiries: <a href="mailto:info@lolashoneyin.com" className="font-mono font-bold text-rose-600 underline">info@lolashoneyin.com</a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* FIRST NAME / LAST NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full bg-neutral-100/90 border-0 rounded-none px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-neutral-100 focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                  LAST NAME
                </label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full bg-neutral-100/90 border-0 rounded-none px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-neutral-100 focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            {/* EMAIL / PHONE NUMBER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full bg-neutral-100/90 border-0 rounded-none px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-neutral-100 focus:ring-1 focus:ring-black transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  className="w-full bg-neutral-100/90 border-0 rounded-none px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-neutral-100 focus:ring-1 focus:ring-black transition-all"
                />
              </div>
            </div>

            {/* INQUIRY CATEGORY */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                INQUIRY CATEGORY
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full bg-neutral-100/90 border-0 rounded-none px-4 py-3.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:bg-neutral-100 focus:ring-1 focus:ring-black transition-all cursor-pointer"
              >
                <option value="General">Contact Us: General Inquiry</option>
                <option value="Speaking">Work Inquiries & Keynote Bookings</option>
                <option value="Press">Press & Media Requests</option>
                <option value="Publishing">Ouida Books Editorial & Licensing</option>
                <option value="Festivals">Aké / LIFI / AFLI Festival Partnerships</option>
              </select>
            </div>

            {/* YOUR MESSAGE (OPTIONAL) */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                YOUR MESSAGE
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your inquiry details..."
                className="w-full bg-neutral-100/90 border-0 rounded-none px-4 py-3.5 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-neutral-100 focus:ring-1 focus:ring-black transition-all resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-none transition-colors cursor-pointer text-center ${
                isSuccess 
                  ? "bg-emerald-700 text-white" 
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : isSuccess ? "Thank You: Message Sent!" : "Submit"}
            </button>

          </form>
        </div>
      </div>

      {/* LOWER SECTION: CONTACT DETAILS & OFFICIAL ADDRESSES */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 space-y-20">
        
        {/* DIRECT CONNECTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-neutral-200 pt-16">
          <div className="space-y-6">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              OFFICIAL DESKS
            </span>
            <h2 className="font-sans font-black text-3xl uppercase tracking-tight text-neutral-950">
              Contact Channels
            </h2>
            <p className="text-neutral-700 font-sans text-sm leading-relaxed">
              All official correspondence for Lola Shoneyin, speaking bookings, press requests, and organizational partnerships are processed directly via <strong className="text-neutral-950">info@lolashoneyin.com</strong>.
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-2">
                <div className="flex items-center space-x-3 text-rose-600 font-mono text-xs font-extrabold uppercase">
                  <Mail size={16} />
                  <span>Contact Us (General)</span>
                </div>
                <a href="mailto:info@lolashoneyin.com" className="font-mono text-sm font-bold text-neutral-900 hover:text-rose-600 block">
                  info@lolashoneyin.com
                </a>
                <p className="text-xs text-neutral-500 font-sans">For readers, general inquiries, and foundation messages.</p>
              </div>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-2">
                <div className="flex items-center space-x-3 text-rose-600 font-mono text-xs font-extrabold uppercase">
                  <Calendar size={16} />
                  <span>Work Inquiries & Bookings</span>
                </div>
                <a href="mailto:info@lolashoneyin.com" className="font-mono text-sm font-bold text-neutral-900 hover:text-rose-600 block">
                  info@lolashoneyin.com
                </a>
                <p className="text-xs text-neutral-500 font-sans">For keynote speeches, panel moderations, festival appearances & consultations.</p>
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
                className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all cursor-pointer"
              >
                <Download size={14} />
                <span>Request Press Kit</span>
              </a>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION */}
        <div id="faq" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              General & Press FAQ
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-600 max-w-xl leading-relaxed">
              Find quick answers regarding manuscript submissions, speaking requests, visiting OuidaLagos, partnerships, and upcoming projects.
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
                      ? "bg-[#F7F6EF] border-neutral-300 shadow-sm"
                      : "bg-[#F8F7F2] hover:bg-[#F4F3ED] border-neutral-200/80"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center space-x-4 cursor-pointer focus:outline-none select-none group"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: isOpen ? "#D7FC70" : "#E2E0D8",
                        rotate: isOpen ? 180 : 0
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
                    >
                      {isOpen ? (
                        <Minus size={18} className="text-neutral-950 stroke-[2.5]" />
                      ) : (
                        <Plus size={18} className="text-neutral-700 stroke-[2.2]" />
                      )}
                    </motion.div>

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

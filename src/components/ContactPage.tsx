import React, { useState } from "react";
import { Send, Check, Mail, MapPin, Newspaper, ArrowUpRight, Award, Download, FileText } from "lucide-react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("General");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const pressAccolades = [
    {
      source: "Financial Times",
      title: "The Most Influential Women of 2023",
      tagline: "Honouring global leaders shaping literature and cultural institutions",
      badge: "FT WOMAN 2023"
    },
    {
      source: "The Guardian",
      title: "The Most Inspiring People of 2024",
      tagline: "Spotlighting cultural visionaries building creative networks",
      badge: "MOST INSPIRING 2024"
    },
    {
      source: "Frankfurt Book Fair",
      title: "Winner of the Aficionado Award",
      tagline: "Outstanding and highly original publishing initiatives",
      badge: "AFICIONADO AWARD"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-20 pb-24 selection:bg-neutral-900 selection:text-white">
      
      {/* HERO CONTACT FORM SECTION WITH HERO BACKGROUND IMAGE */}
      <div className="relative w-full min-h-[92vh] flex items-center justify-start px-6 sm:px-12 lg:px-24 py-16 bg-neutral-950 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-24-2026-03_41_03-pm.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-90 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 backdrop-blur-[0.5px]" />
        </div>

        {/* Floating Contact Form Container */}
        <div className="relative z-10 w-full max-w-xl bg-white p-8 sm:p-12 md:p-14 shadow-2xl rounded-none text-neutral-900 my-auto">
          <h1 className="font-sans font-medium text-4xl sm:text-5xl tracking-tight text-neutral-950 mb-8 leading-tight">
            Get in touch
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            
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
                <option value="General">General Inquiry</option>
                <option value="Speaking">Speaking / Keynote Booking</option>
                <option value="Press">Press & Interview Request</option>
                <option value="Ouida">Ouida Books Publishing</option>
                <option value="Festivals">Aké / LIFI / Festival Partnership</option>
              </select>
            </div>

            {/* YOUR MESSAGE (OPTIONAL) */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono tracking-wider font-semibold text-neutral-500 uppercase">
                YOUR MESSAGE (OPTIONAL)
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message here"
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
              {isSubmitting ? "Submitting..." : isSuccess ? "Thank You — Message Sent!" : "Submit"}
            </button>

          </form>
        </div>
      </div>

      {/* LOWER SECTION: ADDRESS & PRESS INFORMATION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 space-y-20">
        
        {/* DIRECT CONNECTION & HUB INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-neutral-200 pt-16">
          <div className="space-y-4">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              OFFICE & HEADQUARTERS
            </span>
            <h2 className="font-sans font-black text-3xl uppercase tracking-tight text-neutral-950">
              Direct Contact & Media Kit
            </h2>
            <p className="text-neutral-700 font-sans text-sm leading-relaxed">
              For administrative inquiries, festival sponsorships, and publisher partnerships, visit Ouida Lagos or contact our foundation offices.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-neutral-800">
                <Mail size={16} className="text-rose-600 shrink-0" />
                <span className="font-mono text-xs font-semibold">OFFICE: info@bookbuzzfoundation.org</span>
              </div>
              <div className="flex items-start space-x-3 text-neutral-800">
                <MapPin size={16} className="text-rose-600 shrink-0 mt-0.5" />
                <span className="font-mono text-xs font-semibold">HUB: 34 Ajanaku Street, Off Salvation Rd, Opebi, Ikeja, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 text-white p-8 rounded-2xl space-y-4 border border-neutral-800 shadow-xl">
            <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs uppercase font-bold">
              <FileText size={16} />
              <span>Media & Official Press Kit</span>
            </div>
            <p className="font-sans text-xs text-neutral-300 leading-relaxed">
              Download high-resolution author portraits, official biography summaries, book jackets, and festival press releases for publication.
            </p>
            <a
              href="mailto:info@bookbuzzfoundation.org?subject=Press%20Kit%20Request"
              className="inline-flex items-center space-x-2 bg-rose-600 hover:bg-rose-500 text-white font-mono text-[11px] font-bold uppercase tracking-wider py-3 px-5 rounded-full transition-colors"
            >
              <Download size={13} />
              <span>Request Press Kit</span>
            </a>
          </div>
        </div>

        {/* PRESS & MEDIA COVERAGE */}
        <div className="border-t border-neutral-200 pt-16 space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full">
              <Newspaper size={14} className="text-rose-600" />
              <span className="font-mono text-xs uppercase tracking-widest text-rose-700 font-bold">
                PRESS COVERAGE & ACCOLADES
              </span>
            </div>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-neutral-950">
              International Press Honors
            </h2>
            <p className="text-neutral-600 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
              Curated press features, honors, and international recognition celebrating Lola Shoneyin's literary and institution-building work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressAccolades.map((a, idx) => (
              <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-xl p-7 flex flex-col justify-between space-y-6 shadow-sm hover:border-neutral-300 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-black tracking-widest text-rose-700 bg-rose-100 border border-rose-200 px-2.5 py-1 rounded-md uppercase">
                      {a.badge}
                    </span>
                    <Award size={18} className="text-rose-600" />
                  </div>
                  <h4 className="font-sans font-black text-xs tracking-widest uppercase text-neutral-500">{a.source}</h4>
                  <h3 className="font-sans font-black text-lg text-neutral-950 tracking-tight leading-snug uppercase">{a.title}</h3>
                  <p className="font-sans text-xs text-neutral-700 leading-relaxed">{a.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

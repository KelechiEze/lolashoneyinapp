import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, ArrowUpRight, Calendar as CalendarIcon, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenCalendar?: () => void;
}

export default function Footer({ onOpenCalendar }: FooterProps) {
  const navigate = useNavigate();

  const handleNav = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#260B0B] text-white overflow-hidden pt-16 md:pt-20 pb-8 px-6 sm:px-10 md:px-16 border-t border-[#3D1414] font-sans selection:bg-rose-500 selection:text-white">
      {/* Background glow accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Top Section with 3-4 Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Brand & Connect Column */}
          <div className="md:col-span-5 lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <span className="font-sans font-black text-2xl tracking-wider uppercase text-white flex items-center gap-1">
                LOLA SHONEYIN<span className="text-xs text-rose-400 font-mono">®</span>
              </span>
            </div>

            <p className="text-neutral-300 font-sans text-sm sm:text-base leading-relaxed max-w-md font-normal">
              Storyteller. Curator. Institution Builder.
            </p>

            {/* Connect With Me White Pill Button */}
            <div className="pt-2">
              <button
                onClick={() => handleNav("/contact")}
                className="bg-white hover:bg-neutral-100 text-[#260B0B] font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg inline-flex items-center gap-2.5 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Connect with me</span>
                <ArrowRight size={16} className="text-[#260B0B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-rose-400 uppercase tracking-widest font-bold">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-300">
              <li>
                <button onClick={() => handleNav("/writing")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Books & Writing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/ouida-books")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Ouida Books
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/cultural-publications")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cultural Publications
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/festivals")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Festivals & Gatherings
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/cultural-events")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cultural Events (Infusion)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/ouida-lagos")} className="hover:text-white transition-colors cursor-pointer text-left">
                  OuidaLagos Cultural Hub
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/film")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Film & Adaptations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav("/media")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Media & Podcasts
                </button>
              </li>
            </ul>
          </div>

          {/* Info & Social Links Column */}
          <div className="md:col-span-4 lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-rose-400 uppercase tracking-widest font-bold">
                INFO & INQUIRIES
              </h4>
              
              {onOpenCalendar && (
                <div className="space-y-3">
                  <button
                    onClick={onOpenCalendar}
                    className="inline-flex items-center space-x-2.5 text-sm text-neutral-300 hover:text-white transition-colors group font-mono cursor-pointer"
                  >
                    <span className="p-2 rounded-md bg-white/10 text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <CalendarIcon size={15} />
                    </span>
                    <span>Public Calendar & Appearances</span>
                  </button>
                </div>
              )}
            </div>

            {/* Social Icons Row */}
            <div className="pt-2 space-y-3">
              <h5 className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                Follow On Socials
              </h5>
              <div className="flex items-center space-x-3 text-neutral-300">
                <a
                  href="https://www.facebook.com/share/1DKaUnM4nn/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h3.6l.4-3H12V6c0-.9.2-1 1-1h2V2h-3c-3 0-4 1.4-4 3.5V8z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/lolashoneyin?utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/lola-shoneyin-37007b198?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href="https://x.com/lolashoneyin?s=11&t=k5OJv4m_RpRtTxvzSNv50Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-neutral-400 font-mono">
          <div className="flex items-center space-x-6">
            <span>© {new Date().getFullYear()} Lola Shoneyin. All rights reserved.</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-bold"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}

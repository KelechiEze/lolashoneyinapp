import React, { useState } from "react";
import { Award, Newspaper, ArrowUpRight, HelpCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  summary: string;
  isFestivalAward?: boolean;
}

const AWARDS_LIST: AwardItem[] = [
  {
    year: "2026",
    title: "Royal Society of Literature (RSL) Fellow",
    organization: "Royal Society of Literature, UK",
    summary: "Elected to the prestigious Royal Society of Literature Fellowship for outstanding lifelong contribution to literature and institution building."
  },
  {
    year: "2023",
    title: "FT 25 Most Influential Women",
    organization: "Financial Times",
    summary: "Recognized among the 25 most influential women globally for creating sovereign platforms for African authors, publishers, and illustrators."
  },
  {
    year: "2023",
    title: "Inaugural Aficionado Award",
    organization: "Frankfurt Book Fair & Salone del Libro di Torino",
    summary: "Awarded to Aké Arts and Book Festival for outstanding, highly original publishing and literary initiatives on the African continent.",
    isFestivalAward: true
  },
  {
    year: "2017",
    title: "African Literary Person of the Year",
    organization: "Brittle Paper & Continental Literary Press",
    summary: "Honored as African Literary Person of the Year for pioneering work with Aké Festival, Book Buzz Foundation, and Ouida Books."
  },
  {
    year: "2011",
    title: "Orange Prize for Fiction (Longlist)",
    organization: "Orange Prize Foundation",
    summary: "Nominated for the prestigious Orange Prize for Fiction for her debut novel, The Secret Lives of Baba Segi's Wives."
  },
  {
    year: "2011",
    title: "PEN Oakland Josephine Miles Literary Award",
    organization: "PEN Oakland",
    summary: "Awarded for outstanding multicultural literary accomplishment for The Secret Lives of Baba Segi's Wives."
  }
];

const FAQS = [
  {
    q: "How can I submit a manuscript to Ouida Books?",
    a: "Ouida Books opens open reading submission windows twice a year across its imprints (Cognix, Teyani, Tanja, Phoenix). Please check our Publishing page or email publishing inquiries via info@lolashoneyin.com during active submission windows."
  },
  {
    q: "How do I book Lola Shoneyin for a keynote speech or panel?",
    a: "Booking requests for international conferences, university guest lectures, and literary festivals should be submitted via the Contact page or directly to info@lolashoneyin.com at least 6 weeks in advance."
  },
  {
    q: "When and where does Aké Festival take place?",
    a: "Aké Arts and Book Festival takes place annually in November in Nigeria and online. Specific dates, guest lineups, and ticketing details are published on the Festivals page."
  },
  {
    q: "Are the film screen rights available for Baba Segi's Wives?",
    a: "Film and theatrical adaptation inquiries regarding Lola Shoneyin's works (excluding EbonyLife production arrangements) should be directed through legal management via info@lolashoneyin.com."
  },
  {
    q: "What is the relationship between Book Buzz Foundation, Ouida Books, and Ouida Lagos?",
    a: "Book Buzz Foundation is a non-profit organization dedicated to literacy and festivals (Aké, LIFI, AFLI). Ouida Books is the independent publishing house, and Ouida Lagos is the physical bookstore and cultural hub in Ikeja."
  }
];

export default function PressPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            PRESS, AWARDS & FAQ
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Press & Accolades
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl leading-relaxed">
            Honors, global media recognition, literary fellowships, and frequently asked press questions.
          </p>
        </div>

        {/* AWARDS AND PRIZES SECTION */}
        <div className="border-t border-neutral-200 pt-16 space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">HONORS & PRIZES</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AWARDS_LIST.map((award, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7 space-y-4 flex flex-col justify-between hover:border-neutral-300 transition-all shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-md">
                      {award.year}
                    </span>
                    <Award size={20} className={award.isFestivalAward ? "text-amber-500" : "text-rose-600"} />
                  </div>

                  <h3 className="font-sans font-black text-xl text-neutral-950 uppercase tracking-tight leading-snug">
                    {award.title}
                  </h3>

                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-500 block">
                    {award.organization}
                  </span>

                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                    {award.summary}
                  </p>
                </div>

                {award.isFestivalAward && (
                  <div className="pt-3 border-t border-neutral-200/80 flex items-center space-x-2 text-[10px] font-mono text-amber-700 font-bold uppercase">
                    <Sparkles size={12} />
                    <span>Awarded to Aké Arts & Book Festival</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <div className="border-t border-neutral-200 pt-16 space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">HELP & PRESS INFORMATION</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div className="max-w-4xl space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-sans font-extrabold text-base sm:text-lg text-neutral-950 uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-neutral-200/80 flex items-center justify-center shrink-0 text-neutral-700">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

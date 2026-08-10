import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Newspaper, ArrowUpRight, HelpCircle, Sparkles, Plus, Minus, Mic, ExternalLink, BookOpen, Layers, Zap, Hexagon, CircleDot, Compass } from "lucide-react";
import { DisintegratingImage } from "./DisintegratingImage";
import { AwardsMarquee } from "./AwardsMarquee";

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  summary: string;
  image: string;
  code: string;
  isFestivalAward?: boolean;
}

const AWARDS_LIST: AwardItem[] = [
  {
    year: "2026",
    title: "Royal Society of Literature Fellow",
    organization: "Royal Society of Literature, UK",
    summary: "Elected to the prestigious Royal Society of Literature Fellowship for outstanding lifelong contribution to literature and institution building.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    code: "_RSL"
  },
  {
    year: "2023",
    title: "FT 25 Most Influential Women",
    organization: "Financial Times",
    summary: "Recognized among the 25 most influential women globally for creating sovereign platforms for African authors, publishers, and illustrators.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    code: "_FT25"
  },
  {
    year: "2023",
    title: "Inaugural Aficionado Award",
    organization: "Frankfurt Book Fair & Salone del Libro di Torino",
    summary: "Awarded to Aké Arts and Book Festival for outstanding, highly original publishing and literary initiatives on the African continent.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    code: "_AFICIONADO",
    isFestivalAward: true
  },
  {
    year: "2017",
    title: "African Literary Person of the Year",
    organization: "Brittle Paper & Continental Literary Press",
    summary: "Honored as African Literary Person of the Year for pioneering work with Aké Festival, Book Buzz Foundation, and Ouida Books.",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop",
    code: "_ALPOTY"
  },
  {
    year: "2011",
    title: "Orange Prize for Fiction (Longlist)",
    organization: "Orange Prize Foundation",
    summary: "Nominated for the prestigious Orange Prize for Fiction for her debut novel, The Secret Lives of Baba Segi's Wives.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    code: "_ORANGE"
  },
  {
    year: "2011",
    title: "PEN Oakland Josephine Miles Literary Award",
    organization: "PEN Oakland",
    summary: "Awarded for outstanding multicultural literary accomplishment for The Secret Lives of Baba Segi's Wives.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    code: "_PEN"
  }
];

const INTERVIEWS_LIST = [
  {
    title: "Art, Tech and Polygamy (Episode 41)",
    outlet: "Dr Dotun's Substack",
    year: "2022",
    summary: "A live-audience podcast interview on her relationship with the late Bola Ige, the 1996 grant that funded her first published poem, and boarding school in England.",
    url: "https://drdotun.substack.com/p/episode-41-art-tech-and-polygamy-79a",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    code: "_POD01"
  },
  {
    title: "Inspiring Open: A life blind to obstacles",
    outlet: "Wiki Loves Women",
    year: "2022",
    summary: "Betty Kankam-Boadu interviews her on founding Ouida Books and Aké, part of a series on tenacious African women.",
    url: "https://podcast.wikiloveswomen.org/podcast-item/lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    code: "_POD02"
  },
  {
    title: "Culture Diaries Meets Nigerian Novelist Lola Shoneyin",
    outlet: "Culture Diaries (Wana Udobang)",
    year: "2017",
    summary: "A filmed interview on directing Aké and KABAFEST, writing Baba Segi's Wives, and her love of Toni Morrison. Later republished by Northwestern University's Program of African Studies.",
    url: "https://www.youtube.com/watch?v=M_pvEP0fA14",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    code: "_POD03"
  },
  {
    title: "'We need to have lots of conversations about the Africa we want'",
    outlet: "Johannesburg Review of Books",
    year: "2018",
    summary: "Shayera Dark interviews her on Aké's 'Fantastical Futures' theme and the rise of African speculative fiction.",
    url: "https://johannesburgreviewofbooks.com/2018/11/05/we-need-to-have-lots-of-conversations-about-the-africa-we-want-an-interview-with-lola-shoneyin-founder-of-the-ake-festival/",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    code: "_POD04"
  },
  {
    title: "Africa Interviews: Lola Shoneyin",
    outlet: "Africa Interviews (Sam Umukoro)",
    year: "2015",
    summary: "An interview on her chaotic childhood, choosing Arts over her father's wish that she study law, and the gift of empathy in her writing.",
    url: "https://www.africainterviews.com/lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    code: "_POD05"
  },
  {
    title: "INTERVIEW: Being Married to a Soyinka is Great, But I Have My Own Identity",
    outlet: "Premium Times",
    year: "2013",
    summary: "On her early influences, her writing life, and holding an identity distinct from her marriage into the Soyinka family.",
    url: "https://www.premiumtimesng.com/entertainment/126696-interview-being-married-to-a-soyinka-is-great-but-i-have-my-own-identity-lola-shoneyin.html",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    code: "_POD06"
  },
  {
    title: "Poetry and inspiration with Lola Shoneyin",
    outlet: "Saraba Magazine (Damilola Ajayi)",
    year: "2012",
    summary: "An interview on writing limericks at boarding school, the Iowa writing program, and Cassava Republic taking on her debut novel.",
    url: "https://sarabamag.com/damilola-ajayi-catches-up-with-lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop",
    code: "_POD07"
  },
  {
    title: "Author Q&A Series: Lola Shoneyin",
    outlet: "MissOjikutu",
    year: "2012",
    summary: "A Q&A on Baba Segi's cantankerous second wife, seeing her work published in Hebrew, and the pull between interest and obligation in her choices.",
    url: "https://missojikutu.wordpress.com/2012/02/26/author-qa-series-lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
    code: "_POD08"
  },
  {
    title: "Conversation with Lola Shoneyin",
    outlet: "ImageNations (Nana Fredua-Agyeman)",
    year: "2011",
    summary: "The blog's first-ever interview, in which she sets out her uncompromising views on polygamy and traces how her Edinburgh childhood shaped her writing.",
    url: "https://freduagyeman.blogspot.com/2011/01/conversation-with-lola-shoneyin-author.html",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop",
    code: "_POD09"
  },
  {
    title: "An Interview with Lola Shoneyin",
    outlet: "African Writing Online",
    year: "2010",
    summary: "An early-career interview around the UK release of Baba Segi's Wives, on her poetry collections and forthcoming children's book.",
    url: "https://www.african-writing.com/nine/lolashoneyin.htm",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop",
    code: "_POD10"
  }
];

const FEATURES_LIST = [
  {
    title: "The new African publishers reaching for sovereignty: a review of Imprint Africa",
    outlet: "Africa Bibliography, Research and Documentation (Cambridge University Press)",
    year: "2026",
    summary: "A scholarly review of Imprint Africa, the book of interviews with nine African women publishers in which Shoneyin discusses Ouida Books, printing locally in Nigeria, and building publishing sovereignty.",
    url: "https://www.cambridge.org/core/journals/africa-bibliography-research-and-documentation/article/new-african-publishers-reaching-for-sovereignty-a-review-of-imprint-africa/F29FDD2798E740A7CBAF463DF04D0F61",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop",
    code: "_FT01"
  },
  {
    title: "Nigerian Author Lola Shoneyin Elected a Fellow of the Royal Society of Literature",
    outlet: "BellaNaija",
    year: "2026",
    summary: "Reports her election as an RSL Fellow, inducted at the society's summer gathering in London, where she signed the Roll Book with George Eliot's dip pen.",
    url: "https://www.bellanaija.com/2026/07/lola-shoneyin-royal-society-of-literature-fellow/",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    code: "_FT02"
  },
  {
    title: "Lola Shoneyin elected Royal Society of Literature Fellow",
    outlet: "The Lagos Review",
    year: "2026",
    summary: "Covers the same RSL induction, held at an evening ceremony at The Fable in London.",
    url: "https://thelagosreview.ng/lola-shoneyin-elected-royal-society-of-literature-fellow",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop",
    code: "_FT03"
  },
  {
    title: "'A Fragile State': Nigerian poet Lola Shoneyin makes plea for democracy",
    outlet: "France 24",
    year: "2024",
    summary: "A televised feature on her Financial Times poem 'A Fragile State,' in which she discusses democracy, rights, and speaking up for women.",
    url: "https://www.france24.com/en/tv-shows/perspective/20240305-a-fragile-state-nigerian-poet-lola-shoneyin-makes-plea-for-democracy",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1000&auto=format&fit=crop",
    code: "_FT04"
  },
  {
    title: "Lola Shoneyin Listed in Financial Times' 25 Most Influential Women of 2023",
    outlet: "BellaNaija",
    year: "2023",
    summary: "Coverage of her place on the FT's unranked list of 25 influential women, alongside figures including Beyoncé and Barbara Kingsolver.",
    url: "https://www.bellanaija.com/2023/12/lola-shoneyin-financial-times-25-most-influential-women-of-2023/",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    code: "_FT05"
  },
  {
    title: "I Want To Create An Example Of Excellence With Aké",
    outlet: "Daily Trust",
    year: "2021",
    summary: "A press-conference feature on running Aké to a standard of excellence, demystifying male-only leadership, and adapting the festival during the pandemic.",
    url: "https://dailytrust.com/i-want-to-create-example-of-excellence-with-ake-lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    code: "_FT06"
  },
  {
    title: "Building Thriving Institutions for African Literature",
    outlet: "Brittle Paper",
    year: "2020",
    summary: "A long-form feature on two decades of institution-building and the choices behind a career devoted to culture and literature.",
    url: "https://brittlepaper.com/2020/10/building-thriving-institutions-for-african-literature-an-interview-with-lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    code: "_FT07"
  },
  {
    title: "Black History Month Spotlight: Lola Shoneyin",
    outlet: "Serpent's Tail",
    year: "2020",
    summary: "Her UK editor Rebecca Gray reflects on editing Baba Segi's Wives a decade on, calling it a modern classic and Bolanle's book above all.",
    url: "https://serpentstail.com/2020/10/22/black-history-month-lola-shoneyin/",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    code: "_FT08"
  }
];

const FAQS = [
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
            PRESS, INTERVIEWS & ACCOLADES
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Press & Media
          </h1>
          <p className="text-neutral-700 font-serif italic text-lg sm:text-xl max-w-3xl leading-relaxed">
            For over two decades, Shoneyin's work has drawn the attention of journalists, scholars, and cultural commentators across three continents. The pieces gathered here span her writing, her publishing, and her festivals, from her earliest interviews around the release of <span className="not-italic font-semibold">The Secret Lives of Baba Segi's Wives</span> to academic reviews of her work as a publisher, and from Nigerian outlets to the pages of The Times and the journals of Cambridge University Press.
          </p>
        </div>

        {/* ACCLAIM & RECOGNITIONS MARQUEE */}
        <div className="-mx-6 md:-mx-12">
          <AwardsMarquee />
        </div>

        {/* SELECTED INTERVIEWS SECTION */}
        <div id="interviews" className="border-t border-neutral-200 pt-16 space-y-12 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              MEDIA & PODCAST CONVERSATIONS
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Selected Interviews
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-xl">
              Ten selected media, podcast, and literary interviews spanning her writing, festivals, and publishing vision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {INTERVIEWS_LIST.map((interview, idx) => (
              <motion.a
                key={idx}
                href={interview.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  delay: idx * 0.08
                }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Card Image Container - Taller portrait ratio with Disintegrating Hover */}
                <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                  <DisintegratingImage
                    src={interview.image}
                    alt={interview.title}
                    roundedClassName="rounded-[28px] sm:rounded-[32px]"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      {interview.year}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-md">
                      <Mic size={14} />
                    </div>
                  </div>

                  {/* Center Hover Overlay with Badge */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                      <Mic className="w-5 h-5 text-black" />
                      <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                        Listen / Read
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1">
                    <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                      {interview.outlet}
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white leading-snug">
                      {interview.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-200 line-clamp-2 leading-relaxed opacity-90 pt-1">
                      {interview.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta Bar */}
                <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                  <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[200px]">
                    {interview.title}
                  </span>
                  <span className="font-mono text-neutral-400 font-medium">
                    {interview.code}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* FEATURES & MEDIA COVERAGE SECTION */}
        <div id="features" className="border-t border-neutral-200 pt-16 space-y-12 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">PRESS FEATURES & REVIEWS</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Features & Coverage
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-xl">
              Selected features, profiles, and scholarly reviews from Cambridge University Press, Financial Times, France 24, BellaNaija, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES_LIST.map((feature, idx) => (
              <motion.a
                key={idx}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-neutral-50 border border-neutral-200 hover:border-rose-300 p-6 rounded-2xl flex flex-col justify-between group transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-full">
                      {feature.year}
                    </span>
                    <ExternalLink size={14} className="text-neutral-400 group-hover:text-rose-600 transition-colors" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                    {feature.outlet}
                  </span>
                  <h3 className="font-sans font-bold text-base text-neutral-950 leading-snug group-hover:text-rose-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed line-clamp-4">
                    {feature.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200/80 flex items-center justify-between text-[11px] font-mono text-rose-600 font-bold uppercase">
                  <span>Read Full Piece</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* HONORS & PRIZES SECTION */}
        <div id="honors" className="border-t border-neutral-200 pt-16 space-y-12 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">ACADEMIC REVIEWS & HONORS</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Honors & Prizes
            </h2>
          </div>

          {/* Academic Review Spotlight */}
          <div className="bg-neutral-950 text-white p-8 md:p-10 rounded-2xl space-y-4 border border-neutral-800 shadow-lg">
            <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-widest">
              <BookOpen size={16} />
              <span>CAMBRIDGE UNIVERSITY PRESS FEATURE (2026)</span>
            </div>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              "The new African publishers reaching for sovereignty: a review of Imprint Africa"
            </h3>
            <p className="font-sans text-xs sm:text-sm text-neutral-300 max-w-3xl leading-relaxed">
              Published in <span className="italic">Africa Bibliography, Research and Documentation</span> (Cambridge University Press). An academic review analyzing Ouida Books and Lola Shoneyin's pioneering contribution toward African publishing sovereignty and continent-wide distribution infrastructure.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {AWARDS_LIST.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  delay: idx * 0.08
                }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Card Image Container */}
                <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                  <DisintegratingImage
                    src={award.image}
                    alt={award.title}
                    roundedClassName="rounded-[28px] sm:rounded-[32px]"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      {award.year}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-600 shadow-md">
                      <Award size={16} />
                    </div>
                  </div>

                  {/* Center Hover Overlay with Badge */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                      <Award className="w-5 h-5 text-rose-600" />
                      <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                        View Honor
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1">
                    <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                      {award.organization}
                    </span>
                    <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight leading-snug">
                      {award.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-200 line-clamp-3 leading-relaxed opacity-90 pt-1">
                      {award.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta Bar */}
                <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                  <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[200px]">
                    {award.title}
                  </span>
                  <span className="font-mono text-neutral-400 font-medium">
                    {award.code}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
        <div id="faq" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold block">
              HELP & PRESS INFORMATION
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-neutral-950">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 max-w-xl leading-relaxed">
              Find answers to common inquiries regarding publishing, international bookings, festival participation, and media rights.
            </p>
          </div>

          <div className="max-w-4xl space-y-3.5">
            {FAQS.map((faq, idx) => {
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

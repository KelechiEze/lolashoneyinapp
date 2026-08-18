import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Newspaper, 
  Mic, 
  ArrowUpRight, 
  ExternalLink, 
  BookOpen, 
  Sparkles, 
  Radio, 
  Globe, 
  Calendar,
  Layers,
  FileText
} from "lucide-react";
import { DisintegratingImage } from "./DisintegratingImage";

export interface PressItem {
  id: string;
  title: string;
  outlet: string;
  year: string;
  summary: string;
  url: string;
  code: string;
  image: string;
  tag: string;
}

export const INTERVIEWS_DATA: PressItem[] = [
  {
    id: "dr-dotun-2022",
    title: "Art, Tech and Polygamy (Episode 41)",
    outlet: "Dr Dotun's Substack",
    year: "2022",
    summary: "A live-audience podcast interview on her relationship with the late Bola Ige, the 1996 grant that funded her first published poem, and boarding school in England.",
    url: "https://drdotun.substack.com/p/episode-41-art-tech-and-polygamy-79a",
    code: "_INT01",
    tag: "Podcast & Live Dialogue",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "wiki-loves-women-2022",
    title: "Inspiring Open: A life blind to obstacles",
    outlet: "Wiki Loves Women",
    year: "2022",
    summary: "Betty Kankam-Boadu interviews her on founding Ouida Books and Aké, part of a series on tenacious African women.",
    url: "https://podcast.wikiloveswomen.org/podcast-item/lola-shoneyin/",
    code: "_INT02",
    tag: "Audio Interview Series",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "culture-diaries-2017",
    title: "Culture Diaries Meets Nigerian Novelist Lola Shoneyin",
    outlet: "Culture Diaries (Wana Udobang)",
    year: "2017",
    summary: "A filmed interview on directing Aké and KABAFEST, writing Baba Segi's Wives, and her love of Toni Morrison. Later republished by Northwestern University's Program of African Studies.",
    url: "https://www.youtube.com/watch?v=M_pvEP0fA14",
    code: "_INT03",
    tag: "Filmed Interview",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "johannesburg-review-2018",
    title: "'We need to have lots of conversations about the Africa we want'",
    outlet: "Johannesburg Review of Books",
    year: "2018",
    summary: "Shayera Dark interviews her on Aké's \"Fantastical Futures\" theme and the rise of African speculative fiction.",
    url: "https://johannesburgreviewofbooks.com/2018/11/05/we-need-to-have-lots-of-conversations-about-the-africa-we-want-an-interview-with-lola-shoneyin-founder-of-the-ake-festival/",
    code: "_INT04",
    tag: "Literary Feature Q&A",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "africa-interviews-2015",
    title: "Africa Interviews: Lola Shoneyin",
    outlet: "Africa Interviews (Sam Umukoro)",
    year: "2015",
    summary: "On her chaotic childhood, choosing Arts over her father's wish that she study law, and the gift of empathy in her writing.",
    url: "https://www.africainterviews.com/lola-shoneyin/",
    code: "_INT05",
    tag: "In-Depth Profile",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "premium-times-2013",
    title: "INTERVIEW: Being Married to a Soyinka is Great, But I Have My Own Identity",
    outlet: "Premium Times",
    year: "2013",
    summary: "On her early influences, her writing life, and holding an identity distinct from her marriage into the Soyinka family.",
    url: "https://www.premiumtimesng.com/entertainment/126696-interview-being-married-to-a-soyinka-is-great-but-i-have-my-own-identity-lola-shoneyin.html",
    code: "_INT06",
    tag: "National Press Dialogue",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "saraba-magazine-2012",
    title: "Poetry and inspiration with Lola Shoneyin",
    outlet: "Saraba Magazine (Damilola Ajayi)",
    year: "2012",
    summary: "On writing limericks at boarding school, the Iowa writing program, and Cassava Republic taking on her debut novel.",
    url: "https://sarabamag.com/damilola-ajayi-catches-up-with-lola-shoneyin/",
    code: "_INT07",
    tag: "Literary Journal",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "missojikutu-2012",
    title: "Author Q&A Series: Lola Shoneyin",
    outlet: "MissOjikutu",
    year: "2012",
    summary: "A Q&A on Baba Segi's cantankerous second wife, seeing her work published in Hebrew, and the pull between interest and obligation.",
    url: "https://missojikutu.wordpress.com/2012/02/26/author-qa-series-lola-shoneyin/",
    code: "_INT08",
    tag: "Author Q&A",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "imagenations-2011",
    title: "Conversation with Lola Shoneyin",
    outlet: "ImageNations (Nana Fredua-Agyeman)",
    year: "2011",
    summary: "The blog's first-ever interview, in which she sets out her views on polygamy and traces how her Edinburgh childhood shaped her writing.",
    url: "https://freduagyeman.blogspot.com/2011/01/conversation-with-lola-shoneyin-author.html",
    code: "_INT09",
    tag: "Continental Literary Blog",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "african-writing-2010",
    title: "An Interview with Lola Shoneyin",
    outlet: "African Writing Online, Issue 9",
    year: "2010",
    summary: "An early-career interview around the UK release of Baba Segi's Wives, on her poetry collections and forthcoming children's book.",
    url: "https://www.african-writing.com/nine/lolashoneyin.htm",
    code: "_INT10",
    tag: "Archival Release Interview",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop"
  }
];

export const FEATURES_DATA: PressItem[] = [
  {
    id: "cambridge-2026",
    title: "The new African publishers reaching for sovereignty: a review of Imprint Africa",
    outlet: "Africa Bibliography, Research and Documentation (Cambridge University Press)",
    year: "2026",
    summary: "A scholarly review of Imprint Africa, the book of interviews with nine African women publishers in which Shoneyin discusses Ouida Books, printing locally in Nigeria, and building publishing sovereignty.",
    url: "https://www.cambridge.org/core/journals/africa-bibliography-research-and-documentation/article/new-african-publishers-reaching-for-sovereignty-a-review-of-imprint-africa/F29FDD2798E740A7CBAF463DF04D0F61",
    code: "_FEAT01",
    tag: "Cambridge University Press",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "bellanaija-rsl-2026",
    title: "Nigerian Author Lola Shoneyin Elected a Fellow of the Royal Society of Literature",
    outlet: "BellaNaija",
    year: "2026",
    summary: "Reports her election as an RSL Fellow, inducted at the society's summer gathering in London, where she signed the Roll Book with George Eliot's dip pen.",
    url: "https://www.bellanaija.com/2026/07/lola-shoneyin-royal-society-of-literature-fellow/",
    code: "_FEAT02",
    tag: "Fellowship Induction",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lagos-review-2026",
    title: "Lola Shoneyin elected Royal Society of Literature Fellow",
    outlet: "The Lagos Review",
    year: "2026",
    summary: "Covers the same RSL induction, held at an evening ceremony at The Fable in London.",
    url: "https://thelagosreview.ng/lola-shoneyin-elected-royal-society-of-literature-fellow",
    code: "_FEAT03",
    tag: "Literary News",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "france24-2024",
    title: "'A Fragile State': Nigerian poet Lola Shoneyin makes plea for democracy",
    outlet: "France 24",
    year: "2024",
    summary: "A televised feature on her Financial Times poem, discussing democracy, rights, and speaking up for women.",
    url: "https://www.france24.com/en/tv-shows/perspective/20240305-a-fragile-state-nigerian-poet-lola-shoneyin-makes-plea-for-democracy",
    code: "_FEAT04",
    tag: "Television Broadcast",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "bellanaija-ft-2023",
    title: "Lola Shoneyin Listed in Financial Times' 25 Most Influential Women of 2023",
    outlet: "BellaNaija",
    year: "2023",
    summary: "Coverage of her place on the FT's unranked list, alongside figures including Beyoncé and Barbara Kingsolver.",
    url: "https://www.bellanaija.com/2023/12/lola-shoneyin-financial-times-25-most-influential-women-of-2023/",
    code: "_FEAT05",
    tag: "FT Recognition",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "daily-trust-2021",
    title: "I Want To Create An Example Of Excellence With Aké",
    outlet: "Daily Trust",
    year: "2021",
    summary: "On running Aké to a standard of excellence, demystifying male-only leadership, and adapting the festival during the pandemic.",
    url: "https://dailytrust.com/i-want-to-create-example-of-excellence-with-ake-lola-shoneyin/",
    code: "_FEAT06",
    tag: "National Daily Feature",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "brittle-paper-2020",
    title: "Building Thriving Institutions for African Literature",
    outlet: "Brittle Paper",
    year: "2020",
    summary: "A long-form feature on two decades of institution-building.",
    url: "https://brittlepaper.com/2020/10/building-thriving-institutions-for-african-literature-an-interview-with-lola-shoneyin/",
    code: "_FEAT07",
    tag: "Long-Form Analysis",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "serpents-tail-2020",
    title: "Black History Month Spotlight: Lola Shoneyin",
    outlet: "Serpent's Tail",
    year: "2020",
    summary: "Her UK editor Rebecca Gray reflects on editing Baba Segi's Wives a decade on, calling it a modern classic.",
    url: "https://serpentstail.com/2020/10/22/black-history-month-lola-shoneyin/",
    code: "_FEAT08",
    tag: "Publisher Spotlight",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function PressPage() {
  const location = useLocation();

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

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. INTRO SECTION */}
      <section id="intro" className="max-w-7xl mx-auto px-6 pt-12 pb-16 scroll-mt-28">
        <div className="text-left space-y-4 max-w-3xl">
          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight uppercase leading-[1.02]">
            Press
          </h1>

          {/* EXACT VERBATIM INTRO COPY */}
          <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal pt-2">
            For over two decades, Shoneyin's work has drawn the attention of journalists, scholars, and cultural commentators across three continents. The pieces gathered here span her writing, her publishing, and her festivals, from her earliest interviews around the release of The Secret Lives of Baba Segi's Wives to academic reviews of her work as a publisher, and from Nigerian outlets to the pages of The Times and the journals of Cambridge University Press.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-start gap-4">
            <button
              onClick={() => {
                const interviewsEl = document.getElementById("interviews");
                if (interviewsEl) interviewsEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center space-x-2 group"
            >
              <span>Explore Interviews</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => {
                const featuresEl = document.getElementById("features");
                if (featuresEl) featuresEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-sm transition-all cursor-pointer"
            >
              <span>View Features</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERVIEWS SECTION */}
      <section id="interviews" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
            Interviews
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Ten selected media, podcast, and literary interviews spanning her writing, festivals, and publishing vision.
          </p>
        </div>

        {/* Interviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {INTERVIEWS_DATA.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
                delay: idx * 0.06
              }}
              className="group cursor-pointer flex flex-col space-y-3"
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/5] min-h-[360px] sm:min-h-[400px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                <DisintegratingImage
                  src={item.image}
                  alt={item.title}
                  roundedClassName="rounded-[28px] sm:rounded-[32px]"
                />

                {/* Top Badge Floating Pill */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {item.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-950 shadow-md">
                    <Mic size={14} />
                  </div>
                </div>

                {/* Hover Overlay with Action Button */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                    <Mic className="w-4 h-4 text-rose-600" />
                    <span className="text-xs font-extrabold tracking-tight font-sans uppercase">
                      Open Interview
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                </div>

                {/* Overlay details at bottom of image */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1.5">
                  <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                    {item.outlet}
                  </span>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Text Description Below Image */}
              <div className="space-y-1.5 px-1 pt-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-sans font-bold text-sm sm:text-base text-neutral-950 tracking-tight group-hover:text-rose-600 transition-colors line-clamp-1">
                    {item.title}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-neutral-400 shrink-0 ml-2">
                    {item.code}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal">
                  {item.summary}
                </p>
                <div className="pt-2 flex items-center space-x-1.5 text-rose-600 font-mono text-[11px] font-bold uppercase tracking-wider group-hover:underline">
                  <span>Read / Listen via {item.outlet}</span>
                  <ExternalLink size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
            Features
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Scholarly reviews, major profiles, and broadcast coverage across international media.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURES_DATA.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-neutral-200/80 hover:border-neutral-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Feature Card Top with Portrait Image */}
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest text-neutral-950 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                    {item.year}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono font-bold truncate">
                  {item.outlet}
                </div>
              </div>

              {/* Feature Content */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold text-rose-600 uppercase tracking-widest block">
                    {item.code} • {item.tag}
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed line-clamp-4 font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-rose-600 font-bold uppercase">
                  <span>Read Article</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
}

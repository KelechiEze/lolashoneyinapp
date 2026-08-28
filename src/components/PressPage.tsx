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
  FileText,
  Play
} from "lucide-react";

export interface PressItem {
  id: string;
  title: string;
  outlet: string;
  year: string;
  summary: string;
  url: string;
  code: string;
  image?: string;
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
    tag: "Podcast & Live Dialogue"
  },
  {
    id: "wiki-loves-women-2022",
    title: "Inspiring Open: A life blind to obstacles",
    outlet: "Wiki Loves Women",
    year: "2022",
    summary: "Betty Kankam-Boadu interviews her on founding Ouida Books and Aké, part of a series on tenacious African women.",
    url: "https://podcast.wikiloveswomen.org/podcast-item/lola-shoneyin/",
    code: "_INT02",
    tag: "Audio Interview Series"
  },
  {
    id: "culture-diaries-2017",
    title: "Culture Diaries Meets Nigerian Novelist Lola Shoneyin",
    outlet: "Culture Diaries (Wana Udobang)",
    year: "2017",
    summary: "A filmed interview on directing Aké and KABAFEST, writing Baba Segi's Wives, and her love of Toni Morrison. Later republished by Northwestern University's Program of African Studies.",
    url: "https://www.youtube.com/watch?v=M_pvEP0fA14",
    code: "_INT03",
    tag: "Filmed Interview"
  },
  {
    id: "johannesburg-review-2018",
    title: "'We need to have lots of conversations about the Africa we want'",
    outlet: "Johannesburg Review of Books",
    year: "2018",
    summary: "Shayera Dark interviews her on Aké's \"Fantastical Futures\" theme and the rise of African speculative fiction.",
    url: "https://johannesburgreviewofbooks.com/2018/11/05/we-need-to-have-lots-of-conversations-about-the-africa-we-want-an-interview-with-lola-shoneyin-founder-of-the-ake-festival/",
    code: "_INT04",
    tag: "Literary Feature Q&A"
  },
  {
    id: "africa-interviews-2015",
    title: "Africa Interviews: Lola Shoneyin",
    outlet: "Africa Interviews (Sam Umukoro)",
    year: "2015",
    summary: "On her chaotic childhood, choosing Arts over her father's wish that she study law, and the gift of empathy in her writing.",
    url: "https://www.africainterviews.com/lola-shoneyin/",
    code: "_INT05",
    tag: "In-Depth Profile"
  },
  {
    id: "premium-times-2013",
    title: "INTERVIEW: Being Married to a Soyinka is Great, But I Have My Own Identity",
    outlet: "Premium Times",
    year: "2013",
    summary: "On her early influences, her writing life, and holding an identity distinct from her marriage into the Soyinka family.",
    url: "https://www.premiumtimesng.com/entertainment/126696-interview-being-married-to-a-soyinka-is-great-but-i-have-my-own-identity-lola-shoneyin.html",
    code: "_INT06",
    tag: "National Press Dialogue"
  },
  {
    id: "saraba-magazine-2012",
    title: "Damilola Ajayi Catches Up with Lola Shoneyin",
    outlet: "Saraba Magazine",
    year: "2012",
    summary: "Damilola Ajayi catches up with Lola Shoneyin on poetry, boarding school limericks, the Iowa writing program, and publishing with Cassava Republic.",
    url: "https://sarabamag.com/damilola-ajayi-catches-up-with-lola-shoneyin/",
    code: "_INT07",
    tag: "Literary Journal"
  },
  {
    id: "missojikutu-2012",
    title: "Author Q&A Series: Lola Shoneyin",
    outlet: "MissOjikutu",
    year: "2012",
    summary: "A Q&A on Baba Segi's cantankerous second wife, seeing her work published in Hebrew, and the pull between interest and obligation.",
    url: "https://missojikutu.wordpress.com/2012/02/26/author-qa-series-lola-shoneyin/",
    code: "_INT08",
    tag: "Author Q&A"
  },
  {
    id: "imagenations-2011",
    title: "Conversation with Lola Shoneyin",
    outlet: "ImageNations (Nana Fredua-Agyeman)",
    year: "2011",
    summary: "The blog's first-ever interview, in which she sets out her views on polygamy and traces how her Edinburgh childhood shaped her writing.",
    url: "https://freduagyeman.blogspot.com/2011/01/conversation-with-lola-shoneyin-author.html",
    code: "_INT09",
    tag: "Continental Literary Blog"
  },
  {
    id: "african-writing-2010",
    title: "An Interview with Lola Shoneyin",
    outlet: "African Writing Online, Issue 9",
    year: "2010",
    summary: "An early-career interview around the UK release of Baba Segi's Wives, on her poetry collections and forthcoming children's book.",
    url: "https://www.african-writing.com/nine/lolashoneyin.htm",
    code: "_INT10",
    tag: "Archival Release Interview"
  }
];

export interface PodcastItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  tag: string;
  link: string;
  image: string;
}

export const PODCASTS_DATA: PodcastItem[] = [
  {
    id: "pulse-annotated",
    title: "THE PULSE Presents ANNOTATED w/ Temi feat. Lola Shoneyin",
    source: "ThePulseTNB",
    date: "10 June 2026",
    summary: "An expansive dialogue on literary activism, African book fairs, institutional longevity, and publishing voices that redefine world fiction.",
    tag: "Featured Video & Podcast",
    link: "https://www.youtube.com/live/w568d-phdag?si=fiAzQX7JshakrEVi",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "art-tech-polygamy",
    title: "Art, Tech and Polygamy (Episode 41)",
    source: "Dr Dotun's Substack",
    date: "Live Recording",
    summary: "A live podcast recording on modern storytelling intersectionality, polygamous domestic archives, technology's impact on African arts, and independent press dynamics.",
    tag: "Live Recording & Audio",
    link: "https://drdotun.substack.com/p/episode-41-art-tech-and-polygamy-79a",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1000&auto=format&fit=crop"
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 selection:bg-rose-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* 1. INTRO SECTION */}
      <section id="intro" className="max-w-7xl mx-auto px-6 pt-12 pb-16 scroll-mt-28">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-6 max-w-4xl"
        >
          <h1 className="font-sans font-black text-3xl md:text-4xl text-neutral-950 tracking-tight uppercase leading-tight">
            Press
          </h1>

          {/* Statement / Quote Box */}
          <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-[8px] space-y-6 shadow-sm">
            <blockquote className="font-serif italic text-lg md:text-xl text-neutral-800 leading-relaxed select-text">
              "My work has attracted the attention of journalists, scholars, and cultural commentators. The pieces below here span my earliest interviews to academic reviews of my work as a publisher, bookseller and festival organiser."
            </blockquote>
            <p className="font-sans font-semibold text-xs tracking-wider text-neutral-500 uppercase">
              Lola Shoneyin
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. INTERVIEWS SECTION (LIST FORMAT) */}
      <section id="interviews" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="text-left space-y-3 max-w-3xl">
          <h2 className="font-sans font-black text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
            Interviews
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Ten selected media, podcast, and literary interviews spanning her writing, festivals, and publishing vision.
          </p>
        </div>

        {/* Interviews List */}
        <div className="space-y-4 max-w-5xl">
          {INTERVIEWS_DATA.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white border border-neutral-200/80 hover:border-neutral-400/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="space-y-2 flex-1 min-w-0 pr-0 sm:pr-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-extrabold text-neutral-900 bg-neutral-100 border border-neutral-200/80 px-2.5 py-0.5 rounded-md shrink-0">
                    {item.year}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                    {item.outlet}
                  </span>
                  <span className="text-neutral-300 hidden sm:inline">•</span>
                  <span className="font-mono text-[10px] text-neutral-500 hidden sm:inline">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 ml-auto hidden md:inline">
                    {item.code}
                  </span>
                </div>
                
                <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="shrink-0 pt-2 sm:pt-0 self-end sm:self-center">
                <div className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-neutral-100 group-hover:bg-neutral-950 text-neutral-900 group-hover:text-white transition-all text-xs font-mono font-bold uppercase tracking-wider">
                  <span>Read / Listen</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 3. PODCASTS SECTION */}
      <section id="podcasts" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="text-left space-y-3 max-w-3xl">
          <h2 className="font-sans font-black text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
            Podcasts
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Featured podcast appearances, broadcast dialogues, and in-depth cultural discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {PODCASTS_DATA.map((podcast, idx) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group text-left"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                    {podcast.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                  <span className="text-rose-300 font-bold">{podcast.source}</span>
                  <span className="text-neutral-300">{podcast.date}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                    {podcast.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {podcast.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-400 font-medium">
                    {podcast.date}
                  </span>
                  <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 font-sans text-xs font-bold uppercase tracking-wider text-rose-600 hover:text-rose-700 transition-colors group/btn"
                  >
                    <span>Listen / Explore</span>
                    <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. NEWS SECTION */}
      <section id="news" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <span id="press" className="scroll-mt-28" />
        <span id="features" className="scroll-mt-28" />
        <div className="text-left space-y-3 max-w-3xl">
          <h2 className="font-sans font-black text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
            News
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Scholarly reviews, major profiles, and broadcast coverage across international media.
          </p>
        </div>

        {/* News List */}
        <div className="space-y-4 max-w-5xl">
          {FEATURES_DATA.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white border border-neutral-200/80 hover:border-neutral-400/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="space-y-2 flex-1 min-w-0 pr-0 sm:pr-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-extrabold text-neutral-950 bg-neutral-100 border border-neutral-200/80 px-2.5 py-0.5 rounded-md shrink-0">
                    {item.year}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                    {item.outlet}
                  </span>
                  <span className="text-neutral-300 hidden sm:inline">•</span>
                  <span className="font-mono text-[10px] text-neutral-500 hidden sm:inline">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 ml-auto hidden md:inline">
                    {item.code}
                  </span>
                </div>
                
                <h3 className="font-sans font-bold text-base sm:text-lg text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              <div className="shrink-0 pt-2 sm:pt-0 self-end sm:self-center">
                <div className="flex items-center space-x-1.5 px-4 py-2 rounded-full bg-neutral-100 group-hover:bg-neutral-950 text-neutral-900 group-hover:text-white transition-all text-xs font-mono font-bold uppercase tracking-wider">
                  <span>Read Article</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
}


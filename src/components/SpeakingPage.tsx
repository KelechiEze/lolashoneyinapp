import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, 
  ArrowUpRight, 
  MapPin, 
  Sparkles, 
  Radio, 
  Image as ImageIcon, 
  Calendar, 
  Globe, 
  X, 
  ChevronRight, 
  Headphones, 
  ExternalLink,
  BookOpen
} from "lucide-react";
import { DisintegratingImage } from "./DisintegratingImage";

export interface EngagementItem {
  id: string;
  title: string;
  location: string;
  year: string;
  role?: string;
  code: string;
}

export const ENGAGEMENTS_LIST: EngagementItem[] = [
  {
    id: "flam-2026",
    title: "Festival du Livre Africain (FLAM)",
    location: "Marrakech",
    year: "2026",
    role: "Keynote & Panelist",
    code: "_ENG01"
  },
  {
    id: "bridge-to-africa-2026",
    title: "Bridge to Africa, University of Las Palmas de Gran Canaria",
    location: "Gran Canaria, Spain",
    year: "2026",
    role: "Featured Speaker",
    code: "_ENG02"
  },
  {
    id: "nairobi-litfest-2026",
    title: "Nairobi Litfest",
    location: "Nairobi, Kenya",
    year: "2026",
    role: "Keynote Address",
    code: "_ENG03"
  },
  {
    id: "klf-2026",
    title: "Kampala Literary Festival (KLF)",
    location: "Kampala, Uganda",
    year: "2026",
    role: "Featured Guest",
    code: "_ENG04"
  },
  {
    id: "lifi-2025",
    title: "Lagos International Festival of Illustrations (LIFI)",
    location: "Lagos, Nigeria",
    year: "2025",
    role: "Convener & Opening Speaker",
    code: "_ENG05"
  },
  {
    id: "feria-las-palmas-2023",
    title: "Feria del Libro de Las Palmas de Gran Canaria",
    location: "Gran Canaria, Spain",
    year: "2023",
    role: "International Guest Author",
    code: "_ENG06"
  },
  {
    id: "ilb-berlin-2024",
    title: "International Literature Festival Berlin",
    location: "Berlin, Germany",
    year: "2024",
    role: "Guest Author & Panelist",
    code: "_ENG07"
  },
  {
    id: "frankfurt-buchmesse",
    title: "Frankfurt Buchmesse",
    location: "Frankfurt, Germany",
    year: "Annual",
    role: "Aficionado Award & Panelist",
    code: "_ENG08"
  },
  {
    id: "read-my-world-2023",
    title: "Read My World Festival, Amsterdam",
    location: "Amsterdam, Netherlands",
    year: "2023",
    role: "Guest Curator",
    code: "_ENG09"
  },
  {
    id: "princeton-canon-2025",
    title: 'Princeton University, "The Canon: 65 Years Later", with Helon Habila and Nnedi Okorafor',
    location: "Princeton, NJ, USA",
    year: "2025",
    role: "Guest Lecturer & Panelist",
    code: "_ENG10"
  },
  {
    id: "st-thomas-1999",
    title: "Distinguished Scholar, University of St. Thomas",
    location: "Minnesota, USA",
    year: "1999",
    role: "Distinguished Scholar",
    code: "_ENG11"
  },
  {
    id: "iowa-1999",
    title: "International Writing Program, University of Iowa",
    location: "Iowa City, USA",
    year: "1999",
    role: "Writer in Residence",
    code: "_ENG12"
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

export const PODCASTS_LIST: PodcastItem[] = [
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

export interface GalleryPhoto {
  id: string;
  title: string;
  event: string;
  location: string;
  year: string;
  image: string;
  caption: string;
}

export const SPEAKING_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-flam",
    title: "FLAM Marrakech",
    event: "Festival du Livre Africain",
    location: "Marrakech, Morocco",
    year: "2026",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    caption: "Keynote presentation at Festival du Livre Africain (FLAM), fostering pan-African creative and publishing bridges in Marrakech."
  },
  {
    id: "photo-bridge-africa",
    title: "Bridge to Africa",
    event: "University of Las Palmas",
    location: "Gran Canaria, Spain",
    year: "2026",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    caption: "Addressing scholars and creative thinkers on Afro-European cultural exchange and independent publishing ecosystems."
  },
  {
    id: "photo-nairobi",
    title: "Nairobi Litfest",
    event: "East African Literary Gathering",
    location: "Nairobi, Kenya",
    year: "2026",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    caption: "Keynote address exploring regional festival networks, translation, and cross-border African book distribution."
  },
  {
    id: "photo-kampala",
    title: "Kampala Literary Festival",
    event: "KLF 2026",
    location: "Kampala, Uganda",
    year: "2026",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
    caption: "Featured panelist discussing post-colonial satire, women in contemporary letters, and independent literary presses."
  },
  {
    id: "photo-lifi",
    title: "Lagos International Festival of Illustrations",
    event: "LIFI 2025",
    location: "Lagos, Nigeria",
    year: "2025",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=800",
    caption: "Opening speech celebrating African visual narrative artists, illustrators, and children's picturebook creators."
  },
  {
    id: "photo-feria-libro",
    title: "Feria del Libro de Las Palmas",
    event: "Feria del Libro",
    location: "Gran Canaria, Spain",
    year: "2023",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800",
    caption: "Featured guest author session and reading from Spanish translations of The Secret Lives of Baba Segi's Wives."
  },
  {
    id: "photo-berlin",
    title: "International Literature Festival Berlin",
    event: "ILB Berlin",
    location: "Berlin, Germany",
    year: "2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
    caption: "International literary panel discussing female agency, contemporary satire, and Nigerian cultural institutions."
  },
  {
    id: "photo-frankfurt",
    title: "Frankfurt Buchmesse",
    event: "Frankfurt Book Fair",
    location: "Frankfurt, Germany",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg",
    caption: "Accepting the Aficionado Award at the Frankfurt Buchmesse celebrating ten years of pioneering cultural festival leadership."
  },
  {
    id: "photo-read-my-world",
    title: "Read My World Festival",
    event: "Guest Curator Session",
    location: "Amsterdam, Netherlands",
    year: "2023",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    caption: "Serving as guest curator for Read My World Festival in Amsterdam, presenting West African authors and poets to European audiences."
  },
  {
    id: "photo-princeton",
    title: 'Princeton University: "The Canon"',
    event: "The Canon: 65 Years Later",
    location: "Princeton, NJ, USA",
    year: "2025",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4516.jpg",
    caption: 'Collaborative keynote and critical panel "The Canon: 65 Years Later" alongside Helon Habila and Nnedi Okorafor at Princeton.'
  },
  {
    id: "photo-st-thomas",
    title: "University of St. Thomas",
    event: "Distinguished Scholar Residency",
    location: "Minnesota, USA",
    year: "1999",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg",
    caption: "Archival memory from distinguished scholar lectures and creative writing seminars in Minnesota."
  },
  {
    id: "photo-iowa",
    title: "International Writing Program",
    event: "University of Iowa",
    location: "Iowa City, USA",
    year: "1999",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800",
    caption: "Landmark residency at the world-renowned Iowa International Writing Program in 1999."
  },
  {
    id: "photo-zimbabwe",
    title: "Zimbabwe International Book Fair",
    event: "ZIBF Archival Memory",
    location: "Harare, Zimbabwe",
    year: "1999",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    caption: "First international engagement at the Zimbabwe International Book Fair in 1999, launching a global speaking trajectory."
  },
  {
    id: "photo-hay",
    title: "Hay Festival",
    event: "Hay-on-Wye Literature Festival",
    location: "Wales, UK",
    year: "2023",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800",
    caption: "Gala stage dialogue on cultural sovereignty, female voices in African prose, and festival curation."
  },
  {
    id: "photo-edinburgh",
    title: "Edinburgh International Book Festival",
    event: "EIBF Special Event",
    location: "Edinburgh, Scotland",
    year: "2022",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800",
    caption: "Reading and discussion on women's experiences and independence in modern West African fiction."
  },
  {
    id: "photo-gothenburg",
    title: "Gothenburg Book Fair",
    event: "Bokmässan Focus Africa",
    location: "Gothenburg, Sweden",
    year: "2021",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
    caption: "Highlighting Nordic-African translation initiatives, cultural exchanges, and independent publishing."
  },
  {
    id: "photo-torino",
    title: "Salone del Libro di Torino",
    event: "Turin International Book Fair",
    location: "Turin, Italy",
    year: "2023",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800",
    caption: "Panel honoring European-African independent publisher networks and book translation grants."
  },
  {
    id: "photo-oxford",
    title: "Oxford University Symposium",
    event: "St Antony's College",
    location: "Oxford, UK",
    year: "2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    caption: "Academic lecture on literary archive preservation and grassroots festival impact in West Africa."
  },
  {
    id: "photo-pen",
    title: "PEN World Voices Festival",
    event: "PEN America Forum",
    location: "New York, USA",
    year: "2022",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    caption: "International panel addressing global freedom of expression, feminist writing, and creative advocacy."
  },
  {
    id: "photo-capetown",
    title: "Open Book Festival",
    event: "Fugard Theatre Session",
    location: "Cape Town, South Africa",
    year: "2019",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    caption: "Pan-African dialogue on continental book distribution, author residencies, and publishing alliances."
  },
  {
    id: "photo-paris",
    title: "Salon du Livre de Paris",
    event: "Livre Paris Pavilion",
    location: "Paris, France",
    year: "2021",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    caption: "Presenting French translations of Nigerian literary works and fostering Anglophone-Francophone dialogue."
  },
  {
    id: "photo-bologna",
    title: "Bologna Children's Book Fair",
    event: "IBBY International Showcase",
    location: "Bologna, Italy",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    caption: "Showcasing illustrated children's picturebooks representing African youth and inclusive storytelling."
  }
];

export default function SpeakingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);

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
      
      {/* 1. INTRO / HERO SECTION */}
      <section id="intro" className="max-w-7xl mx-auto px-6 pt-12 pb-16 scroll-mt-28">
        <div className="text-left space-y-4 max-w-3xl">
          <span className="font-mono text-xs text-rose-600 uppercase tracking-[0.25em] font-bold block">
            SPEAKING
          </span>

          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight uppercase leading-[1.02]">
            Speaking
          </h1>

          <div>
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full mt-2">
              <Mic size={14} className="text-rose-600" />
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-rose-700 font-bold">
                INTRO
              </span>
            </div>
          </div>

          {/* EXACT VERBATIM INTRO COPY */}
          <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal pt-4">
            Shoneyin has been participating in literary events since 1998. Her first international engagements took her to the Zimbabwe International Book Fair in 1999, and then to the Iowa International Writers Workshop in the same year. She has not stopped since.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-start gap-4">
            <button
              onClick={() => {
                const engagementsEl = document.getElementById("engagements");
                if (engagementsEl) engagementsEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-md transition-all cursor-pointer inline-flex items-center space-x-2 group"
            >
              <span>View Engagements</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 px-7 rounded-full shadow-sm transition-all cursor-pointer"
            >
              <span>Booking Inquiries</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. ENGAGEMENTS SECTION */}
      <section id="engagements" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600">
            SPEAKING
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
            Engagements
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Keynotes, festival appearances, academic panels, and international cultural dialogues.
          </p>
        </div>

        {/* Engagements Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {ENGAGEMENTS_LIST.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="font-mono text-[10px] font-bold text-rose-600 uppercase tracking-widest block">
                    {item.code} • {item.role}
                  </span>
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
                <span className="font-mono text-xs font-extrabold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full shrink-0">
                  {item.year}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs text-neutral-500 font-mono">
                <div className="flex items-center space-x-1.5">
                  <MapPin size={13} className="text-neutral-400" />
                  <span className="font-sans text-neutral-600">{item.location}</span>
                </div>
                <span className="text-neutral-400 font-sans text-[11px] uppercase tracking-wider">Literary Stage</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PODCASTS AND INTERVIEWS SECTION */}
      <section id="podcasts" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-600">
            SPEAKING
          </span>
          <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
            Podcasts and Interviews
          </h2>
          <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed">
            Featured podcast appearances, broadcast dialogues, and in-depth cultural discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PODCASTS_LIST.map((podcast, idx) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
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
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PHOTO GALLERY SECTION (PHOTOS FROM AT LEAST 20 EVENTS) */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full">
              <ImageIcon size={14} className="text-rose-600" />
              <span className="font-mono text-xs uppercase tracking-widest text-rose-700 font-bold">
                SPEAKING
              </span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
              Photo gallery
            </h2>
            <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed">
              Photos from at least 20 events worldwide — keynotes, literature festivals, panels, and residencies.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-600 font-bold bg-white border border-neutral-200 px-4 py-2 rounded-full self-start md:self-auto shadow-sm">
            {SPEAKING_PHOTOS.length} Archival Events
          </div>
        </div>

        {/* Gallery Grid of 20+ Events */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {SPEAKING_PHOTOS.slice(0, visibleCount).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
                onClick={() => setSelectedPhoto(item)}
                className="group cursor-pointer flex flex-col bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Photo Aspect Container */}
                <div className="relative aspect-[4/5] w-full bg-neutral-900 overflow-hidden">
                  <DisintegratingImage
                    src={item.image}
                    alt={item.title}
                    roundedClassName="rounded-none"
                  />

                  {/* Year Tag */}
                  <div className="absolute top-3 left-3 z-20 pointer-events-none">
                    <span className="font-mono text-[10px] font-bold text-neutral-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {item.year}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                    <span className="font-sans text-xs font-bold text-neutral-950 uppercase tracking-wider bg-white/95 px-4 py-2 rounded-full shadow-lg">
                      View Photo
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <div className="p-4 space-y-1 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1 text-rose-600 font-mono text-[10px] font-bold uppercase tracking-wider">
                      <MapPin size={11} />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-neutral-950 group-hover:text-rose-600 transition-colors leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-neutral-500 line-clamp-2 pt-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Controls */}
        <div className="flex flex-col items-center justify-center pt-6 space-y-3">
          {visibleCount < SPEAKING_PHOTOS.length ? (
            <button
              onClick={() => setVisibleCount(SPEAKING_PHOTOS.length)}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Load All {SPEAKING_PHOTOS.length} Event Photos</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setVisibleCount(8);
                const galleryEl = document.getElementById("gallery");
                if (galleryEl) galleryEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Show Fewer Photos</span>
            </button>
          )}
          <p className="font-mono text-xs text-neutral-500">
            Showing {Math.min(visibleCount, SPEAKING_PHOTOS.length)} of {SPEAKING_PHOTOS.length} event photos
          </p>
        </div>
      </section>

      {/* PHOTO MODAL */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white text-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 flex flex-col md:flex-row my-auto"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close photo view"
              >
                <X size={18} />
              </button>

              <div className="relative flex-1 bg-neutral-950 min-h-[300px] sm:min-h-[360px] md:min-h-[480px] w-full overflow-hidden flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 bg-white text-neutral-900 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-extrabold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedPhoto.year}
                    </span>
                    <span className="font-mono text-xs text-rose-600 font-bold uppercase tracking-wider">
                      {selectedPhoto.location}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-neutral-950 leading-snug">
                      {selectedPhoto.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-500 font-bold">
                      {selectedPhoto.event}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed pt-3 border-t border-neutral-100">
                    {selectedPhoto.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Speaking Gallery</span>
                  <span className="text-neutral-950 font-bold">Lola Shoneyin</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

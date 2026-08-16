import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, ArrowRight, Calendar, Users, Globe, Video, Radio, ArrowUpRight, MessageSquare, Image, MapPin, ChevronDown, Sparkles, X } from "lucide-react";
import { DisintegratingImage } from "./DisintegratingImage";

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  code: string;
}

const PHOTO_GALLERY: GalleryItem[] = [
  {
    id: "flam-marrakech",
    title: "FLAM Marrakech",
    location: "Marrakech, Morocco",
    year: "2024",
    description: "Keynote address and panel on North and Sub-Saharan African literary bridges at Festival du Livre Africain de Marrakech.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    code: "_GAL01"
  },
  {
    id: "bologna-children",
    title: "Bologna Children's Book Fair",
    location: "Bologna, Italy",
    year: "2023",
    description: "Representing IBBY Nigeria Section and showcasing 10+ children's book titles placing African youth at center stage.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    code: "_GAL02"
  },
  {
    id: "bridge-to-africa",
    title: "Bridge to Africa Summit",
    location: "Las Palmas, Spain",
    year: "2022",
    description: "Cultural summit examining Afro-European creative exchanges, translation rights, and publishing ecosystems.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    code: "_GAL03"
  },
  {
    id: "feria-libro",
    title: "Feria del Libro Las Palmas",
    location: "Gran Canaria, Spain",
    year: "2022",
    description: "Featured guest author reading Spanish translations of Baba Segi's Wives and discussing female empowerment.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800",
    code: "_GAL04"
  },
  {
    id: "read-my-world",
    title: "Read My World Festival",
    location: "Amsterdam, Netherlands",
    year: "2021",
    description: "Serving as guest curator for Read My World Festival, bringing West African writers and poets to Dutch audiences.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    code: "_GAL05"
  },
  {
    id: "ilb-berlin",
    title: "ILB Berlin Litfest",
    location: "Berlin, Germany",
    year: "2023",
    description: "International literary lounge addressing post-colonial storytelling, publishing agency, and female solidarity.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
    code: "_GAL06"
  },
  {
    id: "frankfurt-buchmesse",
    title: "Frankfurt Buchmesse",
    location: "Frankfurt, Germany",
    year: "2023",
    description: "Accepting the Aficionado Award on behalf of Aké Arts and Book Festival at the Frankfurt Book Fair.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg",
    code: "_GAL07"
  },
  {
    id: "nairobi-litfest",
    title: "Nairobi Litfest Keynote",
    location: "Nairobi, Kenya",
    year: "2019",
    description: "Keynote dialogue on East-West African literary collaboration and building regional festival networks.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    code: "_GAL08"
  },
  {
    id: "klf-karachi",
    title: "Karachi Literature Festival",
    location: "Karachi, Pakistan",
    year: "2018",
    description: "International guest speaker exploring South Asian and African domestic narratives, humor, and satire.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800",
    code: "_GAL09"
  },
  {
    id: "princeton-canon",
    title: "Princeton 'The Canon' Panel",
    location: "Princeton University, USA",
    year: "2022",
    description: "Guest lecturer on 'Revising the African Canon' at Princeton University Department of African American Studies.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4516.jpg",
    code: "_GAL10"
  },
  {
    id: "1999-residencies",
    title: "1999 Writer Residencies",
    location: "Minnesota & Iowa, USA",
    year: "1999",
    description: "Archival memories from writer residencies at University of St. Thomas Minnesota and International Writing Program Iowa.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg",
    code: "_GAL11"
  },
  {
    id: "hay-festival-wales",
    title: "Hay Festival International",
    location: "Hay-on-Wye, UK",
    year: "2023",
    description: "Headline panel on world literature, African publishing sovereignty, and female satirical perspectives.",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=800",
    code: "_GAL12"
  },
  {
    id: "edinburgh-book-fest",
    title: "Edinburgh Lit Festival",
    location: "Edinburgh, Scotland",
    year: "2022",
    description: "Gala keynote on women in contemporary African fiction and independent press publishing strategies.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800",
    code: "_GAL13"
  },
  {
    id: "gothenburg-book-fair",
    title: "Gothenburg Book Fair",
    location: "Gothenburg, Sweden",
    year: "2021",
    description: "Focus Africa pavilion highlighting Nordic-African translation projects and children's picturebooks.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800",
    code: "_GAL14"
  },
  {
    id: "salone-torino",
    title: "Salone del Libro di Torino",
    location: "Turin, Italy",
    year: "2023",
    description: "Honoring European-African publisher alliances and international book distribution networks.",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800",
    code: "_GAL15"
  },
  {
    id: "oxford-african-lit",
    title: "Oxford University Symposium",
    location: "Oxford, United Kingdom",
    year: "2022",
    description: "Keynote address at St Antony's College on African archive preservation and independent imprints.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    code: "_GAL16"
  },
  {
    id: "macmillan-keynote",
    title: "African Writers Assembly",
    location: "London, United Kingdom",
    year: "2020",
    description: "Plenary presentation on youth literacy, Book Buzz Foundation, and West African publishing logistics.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    code: "_GAL17"
  },
  {
    id: "ake-festival-opening",
    title: "Aké Festival 10th Anniversary",
    location: "Lagos, Nigeria",
    year: "2023",
    description: "Opening address celebrating ten years of Aké Arts & Book Festival in Lagos with international creators.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    code: "_GAL18"
  },
  {
    id: "pen-america-gala",
    title: "PEN World Voices Forum",
    location: "New York, USA",
    year: "2022",
    description: "International guest panel on global censorship, female agency, and creative freedom in literature.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
    code: "_GAL19"
  },
  {
    id: "capetown-open-book",
    title: "Open Book Festival",
    location: "Cape Town, South Africa",
    year: "2019",
    description: "Pan-African dialogue on book distribution across continental borders and festival partnerships.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    code: "_GAL20"
  },
  {
    id: "paris-livre-fair",
    title: "Salon du Livre de Paris",
    location: "Paris, France",
    year: "2021",
    description: "Presenting French translations of debut works and discussing Francophone-Anglophone literary bridges.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800",
    code: "_GAL21"
  },
  {
    id: "dakar-biennale",
    title: "Dak'Art Biennale Pavilion",
    location: "Dakar, Senegal",
    year: "2022",
    description: "Visual storytelling pavilion exploring cross-pollination between literature and contemporary African art.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
    code: "_GAL22"
  }
];

export interface InterviewItem {
  id: string;
  outlet: string;
  title: string;
  year: string;
  format: "Video Interview" | "Radio Broadcast" | "Print & Digital Q&A" | "Podcast";
  summary: string;
  link: string;
  image: string;
  code: string;
}

const INTERVIEWS_DATA: InterviewItem[] = [
  {
    id: "ft-interview",
    outlet: "Financial Times",
    title: "The Woman Building Africa's Literary Capital",
    year: "2023",
    format: "Print & Digital Q&A",
    summary: "An in-depth profile discussing Aké Festival, Ouida Books, and why independent African publishing is vital for cultural sovereignty.",
    link: "https://www.ft.com",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
    code: "_FT01"
  },
  {
    id: "bbc-interview",
    outlet: "BBC World Service",
    title: "Culture, Feminism, and Baba Segi",
    year: "2022",
    format: "Radio Broadcast",
    summary: "Lola Shoneyin reflects on the international acclaim of her debut novel, female solidarity in polygamous structures, and adapting the work for global stages.",
    link: "https://www.bbc.co.uk",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
    code: "_BBC02"
  },
  {
    id: "aljazeera-interview",
    outlet: "Al Jazeera English",
    title: "Durable Institutions for Creatives",
    year: "2023",
    format: "Video Interview",
    summary: "Discussing the 10+ year trajectory of Book Buzz Foundation, empowering young writers, and breaking artistic boundaries in West Africa.",
    link: "https://www.aljazeera.com",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    code: "_AJE03"
  },
  {
    id: "brittlepaper-interview",
    outlet: "Brittle Paper",
    title: "Aké Festival, Ouida & Future Publishing",
    year: "2024",
    format: "Podcast",
    summary: "A candid conversation on independent book distribution, mentoring debut authors, and curating inclusive literary spaces.",
    link: "https://brittlepaper.com",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1000&auto=format&fit=crop",
    code: "_BP04"
  },
  {
    id: "channels-interview",
    outlet: "Channels Television",
    title: "Storytelling & Young Literacy",
    year: "2023",
    format: "Video Interview",
    summary: "Exploring children's literature, early childhood education, and using visual narratives to demystify social stigmas in Nigeria.",
    link: "https://www.channelstv.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    code: "_CTV05"
  }
];

export default function SpeakingPage() {
  const navigate = useNavigate();
  const [visiblePhotos, setVisiblePhotos] = useState(6);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const topics = [
    {
      title: "African Literary Ecosystems",
      desc: "Delivering structural insights into how we build durable cultural institutions, curate regional book festivals, and support independent publishing houses in West Africa."
    },
    {
      title: "Neurodiversity & Social Advocacy",
      desc: "Exploring the stigma surrounding children living with physical and intellectual disabilities, tracing social responsibility, and detailing how visual archives promote awareness."
    },
    {
      title: "Storytelling & Young Representation",
      desc: "Highlighting the critical importance of representation in children's literature, showing how stories build pride, and discussing how education structures youth development."
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            KEYNOTES, FESTIVALS & INTERVIEWS
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Speaking & Gallery
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl leading-relaxed">
            Lola Shoneyin regularly speaks at international book festivals, universities, and cultural conferences worldwide, alongside featured media interviews.
          </p>
        </div>

        {/* BOOKING INQUIRIES */}
        <div id="engagements" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-16 scroll-mt-28">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">AVAILABILITY STATEMENT</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">Booking Inquiries</h2>
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">
              As a novelist, publisher, documentary filmmaker, and institution builder, Lola Shoneyin offers unique perspectives on the growth of African literature, creative advocacy, and social development. Her high-energy, deeply passionate, and authoritative sessions have graced prominent stages including Frankfurt, Edinburgh, Berlin, and London.
            </p>
            <p className="text-neutral-600 font-sans text-xs md:text-sm leading-relaxed select-text">
              Submit booking inquiries directly via <a href="mailto:info@lolashoneyin.com" className="font-mono font-bold text-rose-600 underline">info@lolashoneyin.com</a> at least six weeks in advance.
            </p>

            <div className="pt-4">
              <button 
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group relative flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs md:text-sm font-bold tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Book Lola Shoneyin</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-neutral-400">Featured Keynote Topics</h3>
            <div className="space-y-4">
              {topics.map((t, idx) => (
                <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 space-y-2">
                  <div className="flex items-center space-x-2 text-rose-600">
                    <Mic size={16} />
                    <h4 className="font-sans font-extrabold text-sm uppercase tracking-wider text-neutral-900">{t.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed select-text">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INTERVIEWS SECTION */}
        <div id="podcasts" className="border-t border-neutral-200 pt-16 space-y-10 scroll-mt-28">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">MEDIA & PODCASTS</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Interviews & Media Conversations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {INTERVIEWS_DATA.map((item, idx) => (
              <motion.a
                key={item.id}
                href={item.link}
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
                    src={item.image}
                    alt={item.title}
                    roundedClassName="rounded-[28px] sm:rounded-[32px]"
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      {item.year}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-600 shadow-md">
                      <Radio size={14} />
                    </div>
                  </div>

                  {/* Center Hover Overlay with Badge */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                      <Radio className="w-5 h-5 text-black" />
                      <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                        Listen / Read
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 space-y-1">
                    <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                      {item.outlet} • {item.format}
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-200 line-clamp-2 leading-relaxed opacity-90 pt-1">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Meta Bar */}
                <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                  <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[200px]">
                    {item.title}
                  </span>
                  <span className="font-mono text-neutral-400 font-medium">
                    {item.code}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* PHOTO GALLERY SECTION */}
        <div id="gallery" className="border-t border-neutral-200 pt-16 space-y-12 scroll-mt-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full">
                <Image size={14} className="text-rose-600" />
                <span className="font-mono text-xs uppercase tracking-widest text-rose-700 font-bold">
                  INTERNATIONAL STAGES & RESIDENCIES
                </span>
              </div>
              <h2 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tight text-neutral-950">
                Speaking Photo Gallery
              </h2>
              <p className="text-neutral-600 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
                Archival moments from international book fairs, festival keynotes, academic panels, and guest residencies across the globe.
              </p>
            </div>

            <div className="font-mono text-xs text-neutral-500 font-bold bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-full self-start md:self-auto">
              {PHOTO_GALLERY.length} Gallery Archives
            </div>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <AnimatePresence mode="popLayout">
              {PHOTO_GALLERY.slice(0, visiblePhotos).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    delay: (idx % 6) * 0.08
                  }}
                  onClick={() => setSelectedPhoto(item)}
                  className="group cursor-pointer flex flex-col"
                >
                  {/* Card Image Container */}
                  <div className="relative w-full aspect-[4/5] min-h-[380px] sm:min-h-[420px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 transition-all duration-500 hover:shadow-2xl">
                    <DisintegratingImage
                      src={item.image}
                      alt={item.title}
                      roundedClassName="rounded-[28px] sm:rounded-[32px]"
                    />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[10px] font-extrabold text-black bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {item.year}
                      </span>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-rose-600 shadow-md">
                        <MapPin size={12} />
                        <span className="font-mono text-[10px] font-bold uppercase text-neutral-900 truncate max-w-[120px]">
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Center Hover Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 pointer-events-none z-30">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/95 text-black shadow-2xl backdrop-blur-md">
                        <MapPin className="w-5 h-5 text-rose-600" />
                        <span className="text-sm font-extrabold tracking-tight font-sans uppercase">
                          View Memory
                        </span>
                      </div>
                    </div>

                    {/* Bottom Text Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-20 space-y-1">
                      <span className="font-mono text-[10px] font-extrabold text-rose-300 uppercase tracking-widest block">
                        {item.location}
                      </span>
                      <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-neutral-200 line-clamp-2 leading-relaxed opacity-90 pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Meta Bar */}
                  <div className="flex items-center justify-between mt-3 px-2 text-xs sm:text-sm tracking-tight font-sans">
                    <span className="font-extrabold text-neutral-900 uppercase tracking-wider truncate max-w-[200px]">
                      {item.title}
                    </span>
                    <span className="font-mono text-neutral-400 font-medium">
                      {item.code}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* LOAD MORE / VIEW LESS BUTTON */}
          <div className="flex flex-col items-center justify-center pt-8 border-t border-neutral-200/80 space-y-3">
            {visiblePhotos < PHOTO_GALLERY.length ? (
              <button
                onClick={() => setVisiblePhotos(PHOTO_GALLERY.length)}
                className="group relative flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Load More Photos</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setVisiblePhotos(6);
                  const galleryEl = document.getElementById("gallery");
                  if (galleryEl) galleryEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Less</span>
              </button>
            )}
            <p className="font-mono text-[11px] text-neutral-400 font-medium">
              Showing {Math.min(visiblePhotos, PHOTO_GALLERY.length)} of {PHOTO_GALLERY.length} Archival Images
            </p>
          </div>
        </div>

      </div>

      {/* MEMORY IMAGE MODAL (CENTERED ON SCREEN) */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Centered Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-neutral-950 text-neutral-900 rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-100/90 hover:bg-white text-neutral-900 flex items-center justify-center transition-all border border-neutral-200 cursor-pointer shadow-lg hover:scale-110 active:scale-95"
                aria-label="Close memory view"
              >
                <X size={18} />
              </button>

              {/* Image View - Full Width & Edge to Edge Cover */}
              <div className="relative flex-1 bg-neutral-950 min-h-[300px] sm:min-h-[360px] md:min-h-[480px] w-full overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metadata Details Sidebar - Clean White Panel */}
              <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 bg-white text-neutral-900 border-t md:border-t-0 md:border-l border-neutral-200 flex flex-col justify-between space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-extrabold text-neutral-900 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedPhoto.year}
                    </span>
                    <span className="font-mono text-xs text-rose-600 font-bold uppercase tracking-wider">
                      {selectedPhoto.code}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-rose-600 font-mono text-xs font-bold uppercase tracking-wider">
                      <MapPin size={14} />
                      <span>{selectedPhoto.location}</span>
                    </div>
                    <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-neutral-950 leading-snug">
                      {selectedPhoto.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed pt-3 border-t border-neutral-100">
                    {selectedPhoto.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Speaking Memory</span>
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, ArrowRight, Calendar, Users, Globe, Video, Radio, ArrowUpRight, MessageSquare, Image, MapPin } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
}

const PHOTO_GALLERY: GalleryItem[] = [
  {
    id: "flam-marrakech",
    title: "FLAM Marrakech",
    location: "Marrakech, Morocco",
    year: "2024",
    description: "Keynote address and panel on North and Sub-Saharan African literary bridges at Festival du Livre Africain de Marrakech.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800"
  },
  {
    id: "bologna-children",
    title: "Bologna Children's Book Fair",
    location: "Bologna, Italy",
    year: "2023",
    description: "Representing IBBY Nigeria Section and showcasing 10+ children's book titles placing African youth at center stage.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800"
  },
  {
    id: "bridge-to-africa",
    title: "Bridge to Africa / Las Palmas",
    location: "Las Palmas, Spain",
    year: "2022",
    description: "Cultural summit examining Afro-European creative exchanges, translation rights, and publishing ecosystems.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800"
  },
  {
    id: "feria-libro",
    title: "Feria del Libro Las Palmas",
    location: "Gran Canaria, Spain",
    year: "2022",
    description: "Featured guest author reading Spanish translations of Baba Segi's Wives and discussing female empowerment.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800"
  },
  {
    id: "read-my-world",
    title: "Read My World Amsterdam (Guest Curator)",
    location: "Amsterdam, Netherlands",
    year: "2021",
    description: "Serving as guest curator for Read My World Festival, bringing West African writers and poets to Dutch audiences.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800"
  },
  {
    id: "ilb-berlin",
    title: "ILB Berlin (International Literature Festival Berlin)",
    location: "Berlin, Germany",
    year: "2023",
    description: "International literary lounge addressing post-colonial storytelling, publishing agency, and female solidarity.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800"
  },
  {
    id: "frankfurt-buchmesse",
    title: "Frankfurt Buchmesse",
    location: "Frankfurt, Germany",
    year: "2023",
    description: "Accepting the Aficionado Award on behalf of Aké Arts and Book Festival at the Frankfurt Book Fair.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg"
  },
  {
    id: "nairobi-litfest",
    title: "Nairobi Litfest",
    location: "Nairobi, Kenya",
    year: "2019",
    description: "Keynote dialogue on East-West African literary collaboration and building regional festival networks.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800"
  },
  {
    id: "klf-karachi",
    title: "Karachi Literature Festival (KLF)",
    location: "Karachi, Pakistan",
    year: "2018",
    description: "International guest speaker exploring South Asian and African domestic narratives, humor, and satire.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800"
  },
  {
    id: "princeton-canon",
    title: "Princeton 'The Canon' Panel",
    location: "Princeton University, USA",
    year: "2022",
    description: "Guest lecturer on 'Revising the African Canon' at Princeton University Department of African American Studies.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4516.jpg"
  },
  {
    id: "1999-residencies",
    title: "1999 Residencies (St. Thomas MN & Iowa IWP)",
    location: "USA (St. Thomas MN / Iowa City)",
    year: "1999",
    description: "Archival memories from writer residencies at University of St. Thomas Minnesota and International Writing Program (IWP) Iowa.",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg"
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
}

const INTERVIEWS_DATA: InterviewItem[] = [
  {
    id: "ft-interview",
    outlet: "Financial Times",
    title: "The Woman Building Africa's Literary Capital",
    year: "2023",
    format: "Print & Digital Q&A",
    summary: "An in-depth profile discussing Aké Festival, Ouida Books, and why independent African publishing is vital for cultural sovereignty.",
    link: "https://www.ft.com"
  },
  {
    id: "bbc-interview",
    outlet: "BBC World Service",
    title: "Culture, Feminism, and the Legacy of Baba Segi",
    year: "2022",
    format: "Radio Broadcast",
    summary: "Lola Shoneyin reflects on the international acclaim of her debut novel, female solidarity in polygamous structures, and adapting the work for global stages.",
    link: "https://www.bbc.co.uk"
  },
  {
    id: "aljazeera-interview",
    outlet: "Al Jazeera English",
    title: "Building Durable Institutions for African Creatives",
    year: "2023",
    format: "Video Interview",
    summary: "Discussing the 10+ year trajectory of Book Buzz Foundation, empowering young writers, and breaking artistic boundaries in West Africa.",
    link: "https://www.aljazeera.com"
  },
  {
    id: "brittlepaper-interview",
    outlet: "Brittle Paper",
    title: "Aké Festival, Ouida Books, and the Future of Publishing",
    year: "2024",
    format: "Podcast",
    summary: "A candid conversation on independent book distribution, mentoring debut authors, and curating inclusive literary spaces.",
    link: "https://brittlepaper.com"
  },
  {
    id: "channels-interview",
    outlet: "Channels Television",
    title: "The Power of Storytelling & Young Reader Literacy",
    year: "2023",
    format: "Video Interview",
    summary: "Exploring children's literature, early childhood education, and using visual narratives to demystify social stigmas in Nigeria.",
    link: "https://www.channelstv.com"
  }
];

export default function SpeakingPage() {
  const navigate = useNavigate();

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-16">
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

        {/* PHOTO GALLERY SECTION */}
        <div className="border-t border-neutral-200 pt-16 space-y-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PHOTO_GALLERY.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-950 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-full font-mono text-[10px] font-bold text-white border border-white/20">
                    {item.year}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1.5 text-rose-600 font-mono text-[11px] font-bold uppercase">
                      <MapPin size={12} />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-sans font-black text-xl text-neutral-950 uppercase tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERVIEWS SECTION */}
        <div className="border-t border-neutral-200 pt-16 space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">MEDIA & PODCASTS</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Interviews & Media Conversations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERVIEWS_DATA.map((item) => (
              <div 
                key={item.id} 
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-extrabold text-rose-700 bg-rose-100 border border-rose-200 px-2.5 py-1 rounded-md uppercase">
                      {item.format}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400">{item.year}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[11px] font-bold text-rose-600 uppercase tracking-widest block">
                      {item.outlet}
                    </span>
                    <h3 className="font-sans font-black text-lg text-neutral-950 tracking-tight leading-snug group-hover:text-rose-600 transition-colors uppercase">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 group-hover:text-rose-600 transition-colors"
                  >
                    <span>View Interview</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

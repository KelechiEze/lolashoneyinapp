import React from "react";
import { BookOpen, Sparkles, Users, Heart, ArrowUpRight, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function BookBuzzPage() {
  const partnerships = [
    {
      title: "Read My World, Amsterdam",
      desc: "Book Buzz Foundation's partnership with the Amsterdam literature festival, where Shoneyin served as guest curator, bringing African voices onto a European stage.",
      location: "Amsterdam, Netherlands",
      tag: "International Curation"
    },
    {
      title: "Sharjah Festival of African Literature",
      desc: "In 2025, Shoneyin cocurated the inaugural festival alongside the Sharjah Book Authority, sharing a stage in University City, Sharjah, with Nobel laureates Abdulrazak Gurnah and Wole Soyinka.",
      location: "Sharjah, UAE",
      tag: "Co-Curation"
    },
    {
      title: "Here + There, with Bristol Ideas",
      desc: "In 2021, four Nigerian poets, Wana Udobang, Alhanislam, Niyi Osundare, and Logan February, contributed poems to a climate initiative through Book Buzz Foundation's partnership with Bristol Ideas.",
      location: "Bristol, UK",
      tag: "Climate Initiative"
    }
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-neutral-900 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* TOP HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-4xl scroll-mt-28"
          id="about"
        >
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            FOUNDATION & LITERARY INFRASTRUCTURE
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Book Buzz Foundation
          </h1>
          <p className="text-neutral-700 font-serif italic text-xl md:text-2xl max-w-3xl leading-relaxed">
            Building reading spaces, nurturing young creators, and bringing world literature to Nigerian soil.
          </p>
        </motion.div>

        {/* INTRO MODULE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">MISSION & VISION</span>
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Creating Reading Spaces & Nurturing Talent
            </h2>
            <p className="text-neutral-700 font-sans text-base md:text-lg leading-relaxed select-text">
              For over a decade, the Book Buzz Foundation has created reading spaces by putting small, impactful libraries in schools and communities that had none. The Book Buzz Foundation also runs festivals that bring the world's writers to Nigerian soil, while training a new generation of children's book writers, illustrators, editors, and graphic designers. Its two flagship festivals, Aké Arts & Book Festival and the Kaduna Book & Arts Festival, carry that mission into cities across the country. Book Buzz Foundation is always looking for partnership opportunities to achieve its goals.
            </p>
          </div>

          <div className="lg:col-span-6 bg-neutral-50 border border-neutral-200/90 rounded-2xl p-8 space-y-6">
            <div className="flex items-center space-x-3 text-rose-600">
              <BookOpen size={24} />
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider">Foundation Highlights</h3>
            </div>
            <ul className="space-y-4 text-sm font-sans text-neutral-700">
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Over 10 years of establishing impactful libraries in underserved schools.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Organizer of Aké Arts & Book Festival and Kaduna Book & Arts Festival.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="w-2 h-2 rounded-full bg-rose-600 mt-2 shrink-0" />
                <span>Training pipeline for writers, illustrators, editors, and graphic designers.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOOKSTORM SECTION */}
        <section id="bookstorm" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">CHILDREN'S PUBLISHING INITIATIVE</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-neutral-950">Bookstorm</h2>
          </div>

          <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-2xl space-y-6 shadow-xl">
            <p className="font-sans text-base md:text-lg text-neutral-200 leading-relaxed max-w-4xl">
              Bookstorm began in 2023. It stepped onto the world stage in 2024 in Bologna, and it continues to grow in ambition. The Book Buzz Foundation aims to publish one hundred high-quality, culturally relevant children's picture books, while providing training for young Nigerian writers and illustrators whose work can compete globally.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-rose-400 font-mono text-xs uppercase tracking-widest font-bold">
              <Sparkles size={16} />
              <span>Goal: 100 Culturally Relevant Children's Picture Books</span>
            </div>
          </div>
        </section>

        {/* NIGERIAN PICTURE BOOK PROJECT */}
        <section id="picturebook" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">FLAGSHIP FELLOWSHIP</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-neutral-950">
              Nigerian Picture Book Project
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6 text-neutral-700 font-sans text-base leading-relaxed">
              <p className="font-serif italic text-xl text-neutral-900 font-medium">
                What does it mean to be Nigerian, and how do you put that feeling into a picture book a child will remember for the rest of their life?
              </p>
              <p>
                Launched on 17 October 2025 at Ouida Place in Opebi, in partnership with the European Union Delegation to Nigeria and ECOWAS, the project drew nearly 200 applications for 48 spots, 24 for writers and 24 for illustrators. All 48 were trained over twelve weeks. On 7 October 2026, twenty children's picture books, written, illustrated, and published entirely by Nigerians for Nigerian children, will be revealed.
              </p>
              <p>
                The brief to the writers was personal, not technical: go back to their own childhoods, find the parts of being Nigerian worth keeping, and put them on the page so the next generation can hold onto them too. As Shoneyin said at the launch of the project:
              </p>
              <blockquote className="border-l-2 border-rose-600 pl-6 font-serif italic text-xl text-neutral-900 font-bold">
                "Every Nigerian child deserves to see themselves in a book."
              </blockquote>
            </div>

            <div className="lg:col-span-4 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl space-y-6">
              <div className="font-mono text-xs text-rose-600 font-bold uppercase tracking-widest">
                Project Stats & Dates
              </div>
              <div className="space-y-4 font-sans text-xs text-neutral-800">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="block font-bold text-neutral-950 uppercase">Launch Date</span>
                  <span>17 October 2025 at Ouida Place, Opebi</span>
                </div>
                <div className="border-b border-neutral-200 pb-3">
                  <span className="block font-bold text-neutral-950 uppercase">Partners</span>
                  <span>European Union Delegation to Nigeria & ECOWAS</span>
                </div>
                <div className="border-b border-neutral-200 pb-3">
                  <span className="block font-bold text-neutral-950 uppercase">Fellows Trained</span>
                  <span>48 Fellows (24 Writers & 24 Illustrators)</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-950 uppercase">Book Reveal</span>
                  <span>7 October 2026: 20 Brand New Picture Books</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERSHIPS SECTION */}
        <section id="partnerships" className="border-t border-neutral-200 pt-16 space-y-10 scroll-mt-28">
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">GLOBAL INITIATIVES</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl uppercase tracking-tight text-neutral-950">
              Partnerships
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((p, idx) => (
              <div key={idx} className="bg-neutral-50 border border-neutral-200 p-8 rounded-2xl space-y-4 hover:border-neutral-300 transition-colors">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full inline-block">
                  {p.tag}
                </span>
                <h3 className="font-sans font-black text-xl text-neutral-950 uppercase tracking-tight">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
                <div className="pt-2 font-mono text-[11px] text-neutral-500 flex items-center">
                  <Globe size={12} className="mr-1 text-neutral-400" />
                  <span>{p.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

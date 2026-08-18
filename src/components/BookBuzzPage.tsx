import React from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function BookBuzzPage() {
  const partnerships = [
    {
      title: "Read My World, Amsterdam",
      desc: "Book Buzz Foundation's partnership with the Amsterdam literature festival, where Shoneyin served as guest curator, bringing African voices onto a European stage.",
      location: "Amsterdam, Netherlands",
      tag: "International Curation",
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-18-at-11.41.28-1.jpeg"
    },
    {
      title: "Sharjah Festival of African Literature",
      desc: "In 2025, Shoneyin cocurated the inaugural festival alongside the Sharjah Book Authority, sharing a stage in University City, Sharjah, with Nobel laureates Abdulrazak Gurnah and Wole Soyinka.",
      location: "Sharjah, UAE",
      tag: "Co-Curation",
      image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-18-at-11.49.38.jpeg"
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
          className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 md:gap-10 scroll-mt-28"
          id="about"
        >
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
              Book Buzz Foundation
            </h1>
            <p className="text-neutral-700 font-serif italic text-xl md:text-2xl max-w-3xl leading-relaxed">
              Building a thriving reading, writing, and publishing culture across Nigeria and Africa.
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-start md:justify-end">
            <img 
              src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/bbf-new-logo-small.png" 
              alt="Book Buzz Foundation Logo" 
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* MISSION & VISION - PROMINENT PRIMARY MODULE */}
        <section id="mission-vision" className="border-t border-neutral-200 pt-16 space-y-10 scroll-mt-28">
          <div className="space-y-4">
            <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-neutral-950 leading-[1.08] max-w-5xl">
              Expanding Access, Creating Spaces & Nurturing Creators
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
            <div className="lg:col-span-6 space-y-6 text-neutral-700 font-sans text-base md:text-lg leading-relaxed select-text">
              <p>
                Book Buzz Foundation is a cultural organisation committed to building a thriving reading, writing and publishing culture in Nigeria. For more than a decade, we have worked to expand access to books and ideas, create spaces where readers and writers can encounter one another, and strengthen the ecosystem that allows literature to flourish.
              </p>
              <p>
                Our work begins with access: establishing libraries in schools and communities where books are scarce or absent. It extends to developing the people who make books possible—writers, illustrators, editors and designers—and creating platforms where Nigerian and international writers, thinkers and artists can meet audiences.
              </p>
              <p>
                Through initiatives including the Aké Arts & Book Festival and the Kaduna Book & Arts Festival, Book Buzz Foundation has helped place literature at the centre of cultural conversation while connecting Nigerian audiences to ideas and voices from across Africa and the world.
              </p>
              <p className="font-medium text-neutral-900">
                We believe that societies that read, imagine and tell their own stories are better equipped to shape their futures. We work with partners who share that belief and want to help build the institutions, opportunities and audiences that will sustain African literature for generations.
              </p>
            </div>

            {/* HIGHLIGHTS BLOCK - CLEAN, ORDERED & CONSISTENT */}
            <div className="lg:col-span-6 bg-neutral-50 border border-neutral-200/90 rounded-2xl p-8 sm:p-10 space-y-6">
              <h3 className="font-sans font-black text-base sm:text-lg uppercase tracking-wider text-neutral-950 border-b border-neutral-200 pb-4">
                HIGHLIGHTS
              </h3>
              
              <ul className="space-y-5 text-sm sm:text-base font-sans text-neutral-800">
                <li className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-900 mt-2.5 shrink-0" />
                  <span className="leading-relaxed">
                    Established <strong>101 mini libraries</strong> in northern Nigeria in underserved schools.
                  </span>
                </li>
                
                <li className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-900 mt-2.5 shrink-0" />
                  <span className="leading-relaxed">
                    Organiser of <strong>Aké Arts & Book Festival</strong>, <strong>Kaduna Book & Arts Festival</strong>, <strong>Lagos International Festival of Illustration</strong>, and <strong>Abuja Festival of Literature and Ideas</strong>.
                  </span>
                </li>

                <li className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-900 mt-2.5 shrink-0" />
                  <span className="leading-relaxed">
                    Training pipeline for writers, poets, agents, illustrators, editors, and graphic designers.
                  </span>
                </li>

                <li className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-neutral-900 mt-2.5 shrink-0" />
                  <span className="leading-relaxed">
                    BBF is the National section of the <strong>International Board on Books for Young People (IBBY)</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BOOKSTORM SECTION */}
        <section id="bookstorm" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              BookStorm
            </h2>
            <div className="shrink-0 flex items-center justify-start sm:justify-end">
              <img 
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/bookstorm-logo.jpeg" 
                alt="BookStorm Logo" 
                className="h-16 sm:h-20 md:h-22 w-auto object-contain rounded-[2px] border border-neutral-200 shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-neutral-100 border border-neutral-200/90 text-neutral-950 p-8 md:p-12 rounded-2xl space-y-6 shadow-sm">
            <div className="space-y-5 font-sans text-base md:text-lg text-neutral-700 leading-relaxed max-w-4xl select-text">
              <p>
                BookStorm is Book Buzz Foundation’s initiative to transform the children’s book ecosystem in Nigeria by investing in the people who create the books. Launched in 2023, it trains and supports Nigerian writers, illustrators and other publishing professionals to produce high-quality children’s books that are culturally relevant and genuinely engaging for young readers.
              </p>
              <p>
                What makes BookStorm distinctive is that it is not simply a training programme. It is designed as a pipeline from talent development to publication: creators receive expert instruction, mentorship and editorial support, build professional networks, and are given pathways to turn their work into published books. Its partnerships have included organisations such as the Bologna Children’s Book Fair and Mimaster Illustrazione in Milan.
              </p>
              <p>
                At its heart is a bigger ambition: to ensure that Nigerian children have access to beautiful, compelling books in which they can recognise their lives, cultures, imaginations and possibilities. BookStorm is therefore building both the creative talent and the publishing infrastructure required for a stronger Nigerian children’s literature sector. One stated ambition is to produce 100 children’s books reflecting the realities, cultures and dreams of Nigerian children.
              </p>
            </div>
            
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-4 text-neutral-900 font-mono text-xs uppercase tracking-widest font-bold">
              <span className="bg-white px-3 py-1.5 rounded-md border border-neutral-200/80 shadow-xs">
                Ambition: 100 Children's Books Reflecting Nigerian Realities & Dreams
              </span>
            </div>
          </div>
        </section>

        {/* NIGERIAN PICTURE BOOK PROJECT */}
        <section id="picturebook" className="border-t border-neutral-200 pt-16 space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              Nigerian Picture Book Project
            </h2>
            <div className="shrink-0 flex items-center justify-start sm:justify-end">
              <img 
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/08/npbp-logo-design.png" 
                alt="Nigerian Picture Book Project Logo" 
                className="h-16 sm:h-20 md:h-22 w-auto object-contain rounded-[2px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6 text-neutral-700 font-sans text-base md:text-lg leading-relaxed select-text">
              <p>
                The Nigerian Picture Book Project (NPBP) is a Book Buzz Foundation initiative, supported by the European Union, designed to develop a new generation of Nigerian children’s book creators. It trains and mentors 40 young Nigerian writers and illustrators aged 21–30, giving them the creative and professional support to develop original picture books for children aged 5–8.
              </p>
              <p>
                The project takes participants through the full process of making a picture book: storytelling, character development and visual narrative, followed by collaboration between writers and illustrators, editorial development and preparation for publication. A central emphasis is on creating stories that are rooted in Nigerian communities, cultures and everyday realities while meeting high standards of writing, illustration and book production.
              </p>
              <p>
                Its goal is concrete: to produce 20 professionally published picture books written and illustrated by Nigerians for Nigerian children. The finished books are intended to reach children through schools and libraries, as well as being showcased at festivals and book fairs.
              </p>
            </div>

            <div className="lg:col-span-4 bg-neutral-50 border border-neutral-200 p-8 rounded-2xl space-y-6">
              <div className="font-mono text-xs text-neutral-900 font-bold uppercase tracking-widest border-b border-neutral-200 pb-2">
                PROJECT OVERVIEW
              </div>
              <div className="space-y-4 font-sans text-xs text-neutral-800">
                <div className="border-b border-neutral-200 pb-3">
                  <span className="block font-bold text-neutral-950 uppercase">Partner & Support</span>
                  <span>Supported by the European Union</span>
                </div>
                <div className="border-b border-neutral-200 pb-3">
                  <span className="block font-bold text-neutral-950 uppercase">Cohort & Target</span>
                  <span>40 Writers & Illustrators (Ages 21–30)</span>
                </div>
                <div className="border-b border-neutral-200 pb-3">
                  <span className="block font-bold text-neutral-950 uppercase">Target Audience</span>
                  <span>Children aged 5–8</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-950 uppercase">Output & Distribution</span>
                  <span>20 Picture Books • Schools, Libraries & Book Fairs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL PARTNERSHIPS SECTION - OPEN EDITORIAL LAYOUT (NO CONTAINERS) */}
        <section id="partnerships" className="border-t border-neutral-200 pt-16 space-y-10 scroll-mt-28">
          <div className="space-y-3 max-w-3xl">
            <h2 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tight text-neutral-950">
              GLOBAL PARTNERSHIPS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
            {partnerships.map((p, idx) => (
              <div key={idx} className="space-y-4">
                {p.image && (
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-[2px] bg-neutral-100 border border-neutral-200/80">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center rounded-[2px] block"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                
                <div className="space-y-2.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-[2px] border border-neutral-200 inline-block">
                    {p.tag}
                  </span>
                  
                  <h3 className="font-sans font-black text-xl sm:text-2xl text-neutral-950 uppercase tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {p.desc}
                  </p>
                  
                  <div className="pt-2 font-mono text-xs text-neutral-500 flex items-center">
                    <Globe size={13} className="mr-1.5 text-neutral-400 shrink-0" />
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

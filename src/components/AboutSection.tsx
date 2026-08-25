import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-white text-neutral-950 py-20 px-6 md:py-32 md:px-12 flex items-center overflow-hidden border-t border-neutral-200 z-30"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col space-y-16">
        
        {/* HEADER AREA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 max-w-4xl transform-gpu"
        >
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-neutral-900">
            Biography
          </h2>
        </motion.div>

        {/* SPLIT GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Description, Stats, and CTA Button */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12">
            
            {/* Paragraphs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 text-neutral-600 font-sans text-sm md:text-[15px] leading-relaxed transform-gpu"
            >
              <p>
                Lola Shoneyin is a Nigerian poet, novelist, publisher, bookseller, and festival curator. In 2002, she founded the Ibadan Arts Renaissance. She trained as a teacher and taught in inner-city schools in the UK between 2004 to 2008 and then served as a deputy principal at an Abuja School from 2009 to 2012. She ran a monthly arts gathering called Infusion throughout that period at the popular JB's Grill.
              </p>
              <p>
                She is the founder of Book Buzz Foundation and the director of Aké Arts and Book Festival, the Kaduna Book & Arts Festival and the new Abuja Festival of Literature and Ideas. She is also the founder of the Lagos International Festival of Illustrations, Nigeria's first festival dedicated entirely to the art of illustration which brings together illustrators from Europe in contact with budding Nigerian illustrators. She is the publisher of Ouida Books and the founder of Ouida Lagos, a bookshop and cultural hub in Lagos.
              </p>
              <p>
                Her novel <span className="italic font-semibold text-neutral-950">The Secret Lives of Baba Segi's Wives</span> has been translated into fourteen languages and was nominated for the Orange Prize for Fiction in 2011. She is the author of three poetry collections and ten children's books that place Nigerian children at the centre of their own adventures. She is President of the IBBY Nigeria Section.
              </p>
              <p>
                Aké Arts and Book Festival, which she founded in 2013, has grown into one of the most significant literary gatherings on the African continent, bringing together writers, artists, poets, and filmmakers from across Africa and the world. In 2023, Aké became the inaugural winner of the Aficionado Award, a joint initiative of the Frankfurt Book Fair and the Salone Internazionale del Libro di Torino, recognising outstanding and original publishing initiatives.
              </p>
              <p>
                As a documentary filmmaker, Shoneyin produced 'Flowers for Warriors', which follows three parents of children living with disabilities through their discoveries, struggles, and the stigma they face. She is completing 'Egbe: In Search of Belonging', a documentary about the Yoruba egbé tradition, which was inspired by a scene at her father's 90th birthday that captured her imagination.
              </p>
              <p>
                Since 2017, Shoneyin has been active in the children's book space. Her goal is to stimulate the production of high quality, culturally rooted picture books for Nigerian children.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-2 transform-gpu"
            >
              <button 
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group flex items-center justify-between bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold tracking-wider uppercase pl-6 pr-3.5 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg gap-4 cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Childhood Photos Stack & Current Portrait */}
          <div className="lg:col-span-6 w-full space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Childhood / Youth Photo 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="relative aspect-[4/5] bg-white rounded-[8px] overflow-hidden shadow-none border border-neutral-200/80 transform-gpu group"
              >
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg"
                  alt="Lola Shoneyin portrait"
                  className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Childhood / Youth Photo 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="relative aspect-[4/5] bg-white rounded-[8px] overflow-hidden shadow-none border border-neutral-200/80 transform-gpu group"
              >
                <img
                  src="https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4516.jpg"
                  alt="Lola Shoneyin archival portrait"
                  className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

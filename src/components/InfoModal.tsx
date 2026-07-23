import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Check, Heart, Sparkles, Image as ImageIcon, Camera, Globe, ArrowUpRight } from "lucide-react";

interface InfoModalProps {
  mode: "about" | "services" | "gallery" | "contact" | null;
  onClose: () => void;
}

export default function InfoModal({ mode, onClose }: InfoModalProps) {
  // Contact Form State
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Gallery Filters State
  const [activeFilter, setActiveFilter] = useState("all");

  if (!mode) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
        setName("");
        setMessage("");
        onClose();
      }, 2000);
    }, 1200);
  };

  const galleryItems = [
    { id: 1, category: "editorial", url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600", title: "Sheer Veil Study" },
    { id: 2, category: "studio", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600", title: "Contrast Profile" },
    { id: 3, category: "landscape", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600", title: "Vast Cyan Coast" },
    { id: 4, category: "candid", url: "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=600", title: "Gilded Hour Laugh" },
    { id: 5, category: "editorial", url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600", title: "Curly Heart Close-Up" },
    { id: 6, category: "studio", url: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600", title: "Textured Drapery" },
    { id: 7, category: "landscape", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600", title: "Yosemite Monolith" },
    { id: 8, category: "candid", url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600", title: "Cuvée Bar Slices" },
  ];

  const filteredGallery = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      {/* Outer Click dismisser */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Panel Content container */}
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-neutral-900 border border-white/10 rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] md:max-h-[85vh]"
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <h2 className="font-sans text-xs md:text-sm uppercase tracking-widest text-zinc-400 font-bold">
              {mode === "about" && "The Studio Philosophy"}
              {mode === "services" && "Commercial Services"}
              {mode === "gallery" && "Complete Archives"}
              {mode === "contact" && "Initiate Editorial"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer outline-none"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal content body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          
          {/* ABOUT MODE */}
          {mode === "about" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className="md:col-span-5 relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                  alt="Photography Studio Portrait"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="md:col-span-7 space-y-6">
                <h3 className="font-serif italic text-4xl md:text-5xl font-light text-white leading-tight">
                  We capture artifacts of temporal light.
                </h3>
                <p className="font-sans text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  Photolio® is an award-winning creative studio founded in Paris, France, specializing in haute editorial portraiture, boutique fashion lookbooks, and ambient spatial reportage. We operate with a deep reverence for organic materials, architectural geometry, and raw emotion.
                </p>
                <p className="font-sans text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  Rather than engineering sterile digital compositions, we celebrate the unpredictability of daylight, film grains, and natural movement. Our work has been showcased in Cuvée, Solenne Magazine, and various independent design journals globally.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <span className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Principal Curator</span>
                    <span className="block font-sans text-sm text-zinc-200 mt-1">Marc-Antoine</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Head Stylist</span>
                    <span className="block font-sans text-sm text-zinc-200 mt-1">Clara Laurent</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SERVICES MODE */}
          {mode === "services" && (
            <div className="space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h3 className="font-serif italic text-4xl text-white font-normal">Our Curated Capabilities</h3>
                <p className="font-sans text-zinc-400 text-sm font-light leading-relaxed">
                  Available for domestic and international commissions. Each project undergoes thorough creative brief alignment, prop selection, and dynamic capture.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* Service Card 1 */}
                <div className="p-6 bg-neutral-950 border border-white/5 hover:border-white/20 rounded-lg space-y-4 transition-all duration-300">
                  <div className="p-3 bg-white/5 w-fit rounded-lg text-zinc-300">
                    <Camera size={20} />
                  </div>
                  <h4 className="font-serif text-xl italic text-white">Haute Editorial</h4>
                  <p className="font-sans text-zinc-400 text-xs font-light leading-relaxed">
                    Full day studio or location fashion portraiture, includes custom lighting plans, creative styling direction, and premium color graded prints.
                  </p>
                  <div className="pt-2 border-t border-white/5 flex justify-between text-xs font-mono text-zinc-400">
                    <span>TIMEFRAME</span>
                    <span>1-2 WEEKS</span>
                  </div>
                </div>

                {/* Service Card 2 */}
                <div className="p-6 bg-neutral-950 border border-white/5 hover:border-white/20 rounded-lg space-y-4 transition-all duration-300">
                  <div className="p-3 bg-white/5 w-fit rounded-lg text-zinc-300">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-serif text-xl italic text-white">Spatial & Ambient</h4>
                  <p className="font-sans text-zinc-400 text-xs font-light leading-relaxed">
                    Capturing high-end hospitality venues, wine bars, artisan workshops, and galleries with zero-interference atmospheric light.
                  </p>
                  <div className="pt-2 border-t border-white/5 flex justify-between text-xs font-mono text-zinc-400">
                    <span>TIMEFRAME</span>
                    <span>3-5 DAYS</span>
                  </div>
                </div>

                {/* Service Card 3 */}
                <div className="p-6 bg-neutral-950 border border-white/5 hover:border-white/20 rounded-lg space-y-4 transition-all duration-300">
                  <div className="p-3 bg-white/5 w-fit rounded-lg text-zinc-300">
                    <Globe size={20} />
                  </div>
                  <h4 className="font-serif text-xl italic text-white">Creative Consult</h4>
                  <p className="font-sans text-zinc-400 text-xs font-light leading-relaxed">
                    A multi-hour remote brainstorming mapping moodboards, composition guidelines, camera set selections, and lighting schematics.
                  </p>
                  <div className="pt-2 border-t border-white/5 flex justify-between text-xs font-mono text-zinc-400">
                    <span>TIMEFRAME</span>
                    <span>RECURRING</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GALLERY MODE */}
          {mode === "gallery" && (
            <div className="space-y-8">
              {/* Category Filter tabs */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["all", "editorial", "studio", "landscape", "candid"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-1.5 rounded-full font-sans text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 border ${activeFilter === filter ? 'bg-white text-neutral-950 border-white' : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              {/* Photo Masonry-style Grid */}
              <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredGallery.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={item.id}
                      className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 border border-white/5"
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div>
                          <span className="block font-mono text-[9px] text-zinc-400 tracking-wider uppercase">{item.category}</span>
                          <span className="block font-sans text-xs text-white font-medium mt-0.5">{item.title}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

          {/* CONTACT MODE */}
          {mode === "contact" && (
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <h3 className="font-serif italic text-4xl text-white font-light">Let's craft the narrative.</h3>
                <p className="font-sans text-zinc-400 text-sm font-light">
                  Submit your details below. We typically review and respond with comprehensive moodboard proposals within 48 business hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 bg-white/5 border border-white/10 rounded-xl text-center space-y-4"
                  >
                    <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                      <Check size={24} />
                    </div>
                    <h4 className="font-serif italic text-2xl text-white">Commission Sent</h4>
                    <p className="font-sans text-zinc-400 text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you for initiating the contact. Marc-Antoine and Clara will connect with your vision soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleContactSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Your Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Solenne Robert"
                          className="w-full bg-neutral-950 border border-white/10 rounded px-4 py-2.5 font-sans text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Your Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. solenne@creative.com"
                          className="w-full bg-neutral-950 border border-white/10 rounded px-4 py-2.5 font-sans text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] tracking-wider text-zinc-500 uppercase">Brief Narrative / Mood</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your brand aesthetic, styling thoughts, and expected location..."
                        className="w-full bg-neutral-950 border border-white/10 rounded px-4 py-2.5 font-sans text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-white hover:bg-zinc-200 text-neutral-950 rounded font-sans text-xs tracking-widest uppercase font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Aligning Coordinates...</span>
                      ) : (
                        <>
                          <span>Transmit Commission Request</span>
                          <Send size={12} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          )}

        </div>
      </motion.div>
    </motion.div>
  );
}

import React, { useState } from "react";
import { Send, Check, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate server route
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PAGE HERO */}
        <div className="space-y-4 max-w-4xl">
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-rose-600 font-bold block">
            INTIMATE DIALOGUES & WORK INQUIRIES
          </span>
          <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight tracking-tight uppercase text-neutral-950">
            Contact Lola
          </h1>
          <p className="text-neutral-600 font-serif italic text-lg max-w-2xl">
            Submit speaking requests, publication opportunities, festival panel pitches, or kind words below.
          </p>
        </div>

        {/* DETAILS COLUMN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-200 pt-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-rose-600 uppercase tracking-widest font-bold">REACH OUT</span>
              <h2 className="font-sans font-black text-3xl uppercase tracking-tight text-neutral-950">Direct Connection</h2>
            </div>
            
            <p className="text-neutral-700 font-sans text-sm md:text-base leading-relaxed select-text">
              Lola Shoneyin reads all correspondence. Whether you are interested in booking keynotes, proposing an independent manuscript to Ouida Books, pitching an illustration exhibit to LIFI, or requesting interview sessions, please use the secure form on the right.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <div className="flex items-center space-x-3 text-neutral-600">
                <Mail size={16} />
                <span className="font-mono text-xs">OFFICE: info@bookbuzzfoundation.org</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-600">
                <MapPin size={16} />
                <span className="font-mono text-xs">HUB: 34 Ajanaku Street, Opebi, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-[8px] p-8 md:p-12 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs uppercase font-mono tracking-widest text-neutral-500">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Chinua Achebe"
                  className="w-full bg-white border border-neutral-300 rounded-[8px] px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs uppercase font-mono tracking-widest text-neutral-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. chinua@gmail.com"
                  className="w-full bg-white border border-neutral-300 rounded-[8px] px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-rose-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs uppercase font-mono tracking-widest text-neutral-500">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we collaborate? Details of your schedule, location, or request..."
                  className="w-full bg-white border border-neutral-300 rounded-[8px] px-4 py-4 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`w-full group flex items-center justify-center space-x-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-[8px] transition-all duration-300 shadow-md ${
                    isSuccess ? "bg-emerald-600 hover:bg-emerald-600 text-white" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : isSuccess ? (
                    <>
                      <Check size={16} />
                      <span>Message Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

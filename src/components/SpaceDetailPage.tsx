import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Share2, Sparkles } from "lucide-react";
import { SPACES_LIST, SpaceCard } from "./SpacesSection";

// Rich extended content per space for the blog-style layout
interface ExtendedSpaceInfo extends SpaceCard {
  tagline: string;
  readTime: string;
  author: string;
  date: string;
  heroImage: string;
  galleryImages: string[];
  editorialParagraphs: string[];
  highlights: { title: string; desc: string }[];
  idealFor: string[];
}

const EXTENDED_SPACES_DATA: Record<string, ExtendedSpaceInfo> = {
  workspace: {
    ...SPACES_LIST[0],
    tagline: "An inspiring, distraction-free co-working sanctuary in Ikeja tailored for authors, remote teams, and creative minds.",
    readTime: "4 min read",
    author: "Ouida Lagos Editorial",
    date: "Updated July 2026",
    heroImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_11_01-am.png",
    galleryImages: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_11_01-am.png",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800&auto=format&fit=crop",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg"
    ],
    editorialParagraphs: [
      "Finding a peaceful, well-serviced work environment in the fast-paced metropolis of Lagos can be a challenge. That was the primary motivation behind the Workspace at Ouida Lagos: to construct a quiet, light-filled haven where creative energy meets flawless infrastructure.",
      "Tucked inside 34 Ajanaku Street in Ikeja, the co-working space offers quiet desks, ergonomic seating, and individual power outlets at every seat. High-speed fiber-optic connectivity ensures uninterrupted remote work, manuscript writing, video calls, or deep academic research.",
      "Unlike conventional corporate shared offices, working at Ouida puts you at the crossroads of West Africa's vibrant literary ecosystem. Downstairs, fresh artisanal coffee brews continuously at the café, and thousands of titles line the shelves of the bookstore: offering the perfect intellectual break whenever inspiration pauses."
    ],
    highlights: [
      { title: "Fiber-Optic High-Speed Internet", desc: "Dedicated high-bandwidth connection designed for seamless video conferencing and heavy file transfers." },
      { title: "Guaranteed Uninterrupted Power", desc: "Dual backup generators ensure your workflow is never interrupted by power outages." },
      { title: "Café & Refreshment Access", desc: "Enjoy direct access to fresh espresso, herbal teas, and fresh pastries from the in-house Ouida Café." },
      { title: "Quiet & Focused Atmosphere", desc: "A respectful, noise-managed environment optimized for deep concentration and authorial work." }
    ],
    idealFor: [
      "Authors & Novelists writing manuscripts",
      "Remote Tech Workers & Freelancers",
      "Researchers & Journalists",
      "Graduate Students & Academics",
      "Small Creative Startup Teams"
    ]
  },
  sunroom: {
    ...SPACES_LIST[1],
    tagline: "A luminous glass-roof atrium flooded with natural light, host to Lagos' most memorable literary and artistic gatherings.",
    readTime: "5 min read",
    author: "Ouida Lagos Events",
    date: "Updated July 2026",
    heroImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_10_08-am.png",
    galleryImages: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_10_08-am.png",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4513.jpg"
    ],
    editorialParagraphs: [
      "Architecturally designed as the centerpiece of Ouida Lagos, The Sunroom is an open-air inspired indoor glass atrium. By day, natural light pours through the geometric roof panels, casting warm shadows across lush indoor greenery; by night, dimmable ambient lighting creates an ethereal atmosphere for intimate gatherings.",
      "Since its opening, The Sunroom has hosted dozens of high-profile book reveals, author interviews, poetry slams, acoustic music sessions, and creative masterclasses. Its flexible layout allows modular seating configurations ranging from formal theater-style rows to relaxed lounge seating.",
      "Equipped with built-in acoustic sound dampening, professional wireless microphones, and dedicated stage lighting, the venue provides event organizers with turn-key technical capabilities supported by our attentive in-house hospitality team."
    ],
    highlights: [
      { title: "Natural Skylight Architecture", desc: "Floor-to-ceiling glass ceiling allowing abundant natural light for photography, videography, and daytime events." },
      { title: "Comprehensive AV & Audio Rig", desc: "Built-in PA speaker system, wireless lapel & handheld mics, and projector capabilities." },
      { title: "Flexible Seating & Stage Setup", desc: "Configurable for up to 80 guests in theater style, cabaret style, or open floor networking." },
      { title: "Integrated Bar & Catering", desc: "Full food and drink catering packages customized for evening receptions and book launches." }
    ],
    idealFor: [
      "Book Launches & Author Readings",
      "Panel Discussions & Fireside Chats",
      "Acoustic Music & Poetry Performances",
      "Private Cocktail Receptions & Mixers",
      "Art Exhibitions & Product Reveals"
    ]
  },
  "meeting-rooms": {
    ...SPACES_LIST[2],
    tagline: "Climate-controlled, sound-insulated meeting suites designed for high-impact board meetings, editorial retreats, and workshops.",
    readTime: "3 min read",
    author: "Ouida Business Suite",
    date: "Updated July 2026",
    heroImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_09_25-am.png",
    galleryImages: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_09_25-am.png",
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=800&auto=format&fit=crop",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg"
    ],
    editorialParagraphs: [
      "When privacy, acoustic isolation, and executive professionalism are required, the Meeting Rooms at Ouida Lagos deliver an outstanding experience. Tucked away on our dedicated workshop floor, these suites provide an oasis of focus away from outside noise.",
      "Each meeting room is outfitted with high-definition presentation monitors, wireless screen mirroring, glass whiteboards, and ergonomic executive chairs. Our air conditioning units maintain optimal temperature control, ensuring long sessions remain comfortable.",
      "Ideal for publishing editorial retreats, board strategy sessions, creative workshops, or private interviews, our staff provides seamless catering, fresh coffee refills, and administrative support throughout your reservation."
    ],
    highlights: [
      { title: "HD Smart Display Screens", desc: "Plug-and-play HDMI and wireless screen sharing for crisp pitch presentations and video calls." },
      { title: "Soundproof Acoustic Comfort", desc: "Insulated walls and doors to ensure confidential discussions remain completely private." },
      { title: "Workshop Whiteboards & Tools", desc: "Full wall whiteboards supplied with markers, post-its, and brainstorming stationery." },
      { title: "Executive Catering Packages", desc: "Customized breakfast, lunch, and coffee breaks delivered directly to your meeting room." }
    ],
    idealFor: [
      "Corporate Board & Executive Meetings",
      "Editorial Teams & Writing Retreats",
      "Masterclasses & Training Workshops",
      "Media Interviews & Press Briefings",
      "Private Client Strategy Sessions"
    ]
  },
  bookshop: {
    ...SPACES_LIST[3],
    tagline: "Lagos' premier independent bookstore celebrating contemporary African literature, poetry, and global storytelling.",
    readTime: "4 min read",
    author: "Ouida Literary Team",
    date: "Updated July 2026",
    heroImage: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_08_12-am.png",
    galleryImages: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/chatgpt-image-jul-27-2026-09_08_12-am.png",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-24-at-16.50.38-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/setto-front-cover.jpg"
    ],
    editorialParagraphs: [
      "At the soul of Ouida Lagos lies our flagship bookstore: a vibrant physical space created to honor, preserve, and amplify African literary expression. Walking through its glass doors, visitors are greeted by floor-to-ceiling shelves carrying thousands of fiction titles, poetry anthologies, political essays, memoirs, and rare collector editions.",
      "Founded by author and publisher Lola Shoneyin, the Ouida Bookshop is intentionally designed as a welcoming sanctuary for seasoned bibliophiles and young readers alike. Our dedicated Children's Reading Corner encourages early literacy with colorful West African folklore, illustrated picture books, and young adult novels.",
      "In addition to daily retail, the bookshop frequently hosts surprise author signings, community book club meetings, and literary discussions. Our passionate booksellers possess deep knowledge of West African literature and are always delighted to offer personalized recommendations."
    ],
    highlights: [
      { title: "Unmatched African Literature Catalog", desc: "Extensive collection of classic and contemporary prose, poetry, and non-fiction by African authors." },
      { title: "Children's Reading & Learning Nook", desc: "Dedicated low-shelf area with soft rugs and interactive books for young explorers." },
      { title: "Author Book Signings & First Editions", desc: "Regular host to signed copies and debut book launches for West Africa's leading authors." },
      { title: "Gift Wrapping & Literary Collectibles", desc: "Bespoke gift packaging, tote bags, bookmark sets, andOuida publishing merchandise." }
    ],
    idealFor: [
      "Avid Readers & Book Collectors",
      "Families & Children seeking inspiring stories",
      "Tourists & Cultural Enthusiasts visiting Lagos",
      "Book Clubs & Literary Discussions",
      "Students & Researchers seeking rare titles"
    ]
  }
};

export default function SpaceDetailPage() {
  const { spaceId } = useParams<{ spaceId?: string }>();
  const navigate = useNavigate();

  // Handle direct routes like /workspace, /sunroom, /meeting-rooms, /bookshop or /spaces/:spaceId
  // Also handle case where path matches /workspace directly
  const path = window.location.pathname.replace(/^\/spaces\//, "").replace(/^\//, "");
  const activeKey = spaceId || path || "workspace";

  const space = EXTENDED_SPACES_DATA[activeKey] || EXTENDED_SPACES_DATA["workspace"];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeKey]);

  const handleTrackBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/spaces");
    }
  };

  return (
    <article className="bg-white text-neutral-900 min-h-screen pt-28 pb-24 px-4 sm:px-6 md:px-12 selection:bg-rose-500 selection:text-white relative">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* TOP TRACK-BACK NAVIGATION BAR */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6 pt-2">
          <button
            onClick={handleTrackBack}
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-700 hover:text-rose-600 transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-rose-600 flex items-center justify-center transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </div>
            <span>Track Back to Previous Page</span>
          </button>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
              OUIDA LAGOS SPACES
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: space.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 text-neutral-600 transition-colors cursor-pointer"
              title="Share Page"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* BLOG HEADER & METADATA */}
        <header className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-rose-50 border border-rose-200 px-3.5 py-1.5 rounded-full">
            <Sparkles size={14} className="text-rose-600" />
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-rose-700 font-bold">
              VENUE & HAVEN • {space.title}
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-neutral-950 uppercase tracking-tight leading-none">
            {space.title}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-neutral-700 leading-relaxed border-l-4 border-rose-600 pl-4 py-1">
            "{space.tagline}"
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-sans text-neutral-500 border-t border-b border-neutral-100 py-3">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-neutral-900">{space.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5">
              <Clock size={14} className="text-neutral-400" />
              <span>{space.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5">
              <Users size={14} className="text-neutral-400" />
              <span className="font-bold text-neutral-800">{space.capacity}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5 text-neutral-600">
              <MapPin size={14} className="text-rose-600" />
              <span>34 Ajanaku Street, Ikeja, Lagos</span>
            </div>
          </div>
        </header>

        {/* MAIN FEATURED HERO IMAGE */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-950">
          <img
            src={space.heroImage}
            alt={space.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
            <span className="font-mono text-[11px] font-bold text-rose-300 uppercase tracking-widest">
              LOCATION PHOTO • OUIDA LAGOS
            </span>
            <span className="font-sans font-black text-xl uppercase tracking-tight">{space.title} AT OUIDA</span>
          </div>
        </div>

        {/* BLOG BODY EDITORIAL CONTENT */}
        <section className="prose prose-neutral max-w-none space-y-6 font-sans text-neutral-800 text-base sm:text-lg leading-relaxed">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-neutral-950 tracking-tight pt-2">
            Overview & Vision
          </h2>
          {space.editorialParagraphs.map((paragraph, index) => (
            <p key={index} className="text-neutral-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        {/* OTHER SPACES DISCOVERY FOOTER */}
        <section className="border-t border-neutral-200 pt-10 space-y-6">
          <h3 className="font-sans font-black text-xl text-neutral-950 uppercase tracking-tight">
            Explore Other Spaces at Ouida
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SPACES_LIST.filter((s) => s.id !== space.id).map((otherSpace) => (
              <Link
                key={otherSpace.id}
                to={`/spaces/${otherSpace.id}`}
                className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-900 transition-all bg-white flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-900 relative">
                  <img
                    src={otherSpace.image}
                    alt={otherSpace.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-sans font-black text-sm uppercase text-neutral-950 group-hover:text-rose-600 transition-colors">
                    {otherSpace.title}
                  </h4>
                  <p className="font-sans text-xs text-neutral-500 line-clamp-2">
                    {otherSpace.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}

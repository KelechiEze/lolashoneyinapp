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
  ChevronLeft,
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
    location: "Marrakech, Morocco",
    year: "2026",
    role: "Keynote & Panelist",
    code: "_ENG01"
  },
  {
    id: "bridge-to-africa-2026",
    title: "Bridge to Africa, University of Las Palmas",
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
    id: "princeton-canon-2025",
    title: 'Princeton University, "The Canon: 65 Years Later"',
    location: "Princeton, NJ, USA",
    year: "2025",
    role: "Guest Lecturer & Panelist",
    code: "_ENG04"
  },
  {
    id: "kerala-litfest-2024",
    title: "Kerala Literature Festival (KLF)",
    location: "Kerala, India",
    year: "2024",
    role: "International Guest Speaker",
    code: "_ENG06"
  },
  {
    id: "beijing-cbf-2024",
    title: "Beijing Children's Book Fair",
    location: "Beijing, China",
    year: "2024",
    role: "Featured International Delegate",
    code: "_ENG07"
  },
  {
    id: "hay-peru-2023",
    title: "Hay Festival Arequipa",
    location: "Arequipa, Peru",
    year: "2023",
    role: "Guest Author & Keynote",
    code: "_ENG08"
  },
  {
    id: "bologna-2024",
    title: "Bologna Children's Book Fair",
    location: "Bologna, Italy",
    year: "2024",
    role: "International Showcase",
    code: "_ENG05"
  },
  {
    id: "ibby-ottawa-2024",
    title: "IBBY World Congress",
    location: "Ottawa, Canada",
    year: "2024",
    role: "Featured Speaker",
    code: "_ENG07"
  },
  {
    id: "ilb-berlin-2024",
    title: "International Literature Festival Berlin",
    location: "Berlin, Germany",
    year: "2024",
    role: "Guest Author & Panelist",
    code: "_ENG08"
  },
  {
    id: "frankfurt-buchmesse-2023",
    title: "Frankfurt Buchmesse (Aficionado Award)",
    location: "Frankfurt, Germany",
    year: "2023",
    role: "Award & Keynote",
    code: "_ENG09"
  },
  {
    id: "read-my-world-2023",
    title: "Read My World Festival",
    location: "Amsterdam, Netherlands",
    year: "2023",
    role: "Guest Curator",
    code: "_ENG10"
  },
  {
    id: "feria-las-palmas-2023",
    title: "Feria del Libro de Las Palmas",
    location: "Gran Canaria, Spain",
    year: "2023",
    role: "Guest Author",
    code: "_ENG11"
  },
  {
    id: "iowa-st-thomas-1999",
    title: "International Writing Program & St. Thomas",
    location: "Iowa & Minnesota, USA",
    year: "1999",
    role: "Scholar & Fellow",
    code: "_ENG12"
  }
];

export interface InterviewItem {
  id: string;
  title: string;
  outlet: string;
  year: string;
  summary: string;
  url: string;
  code: string;
  tag: string;
}

export const INTERVIEWS_LIST: InterviewItem[] = [
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
    title: "Poetry and inspiration with Lola Shoneyin",
    outlet: "Saraba Magazine (Damilola Ajayi)",
    year: "2012",
    summary: "On writing limericks at boarding school, the Iowa writing program, and Cassava Republic taking on her debut novel.",
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
  images?: string[];
  caption: string;
}

export const SPEAKING_PHOTOS: GalleryPhoto[] = [
  // 1. FLAM Marrakech
  {
    id: "photo-flam",
    title: "FLAM Marrakech",
    event: "Festival du Livre Africain",
    location: "Marrakech, Morocco",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.25.38.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.25.38.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.24.43.jpeg"
    ],
    caption: "Keynote presentation at Festival du Livre Africain (FLAM), fostering pan-African creative and publishing bridges in Marrakech."
  },
  // 2. Bridge to Africa
  {
    id: "photo-bridge-africa",
    title: "Bridge to Africa",
    event: "University of Las Palmas",
    location: "Gran Canaria, Spain",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.28.30.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.28.30.jpeg"
    ],
    caption: "Addressing scholars and creative thinkers on Afro-European cultural exchange and independent publishing ecosystems."
  },
  // 3. Feria del Libro de Las Palmas
  {
    id: "photo-feria-libro",
    title: "Feria del Libro de Las Palmas",
    event: "Feria del Libro",
    location: "Gran Canaria, Spain",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.29.29.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.29.29.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.29.59.jpeg"
    ],
    caption: "Featured guest author session and reading from Spanish translations of The Secret Lives of Baba Segi's Wives."
  },
  // 4. Nairobi Litfest 2026
  {
    id: "photo-nairobi",
    title: "Nairobi Litfest",
    event: "East African Literary Gathering",
    location: "Nairobi, Kenya",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.34.58.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.34.58.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.33.52.jpeg"
    ],
    caption: "Keynote address exploring regional festival networks, translation, and cross-border African book distribution."
  },
  // 5. PEN World Voices Festival, New York
  {
    id: "photo-pen-ny",
    title: "PEN World Voices Festival",
    event: "PEN America Forum",
    location: "New York, USA",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.16.35-1.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.16.35-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.16.35.jpeg"
    ],
    caption: "Featured panelist and keynote discussions on global freedom of expression, feminist literature, and international creative advocacy at the PEN Festival in New York."
  },
  // 6. Kerala Literature Festival (KLF)
  {
    id: "photo-kerala-litfest",
    title: "Kerala Literature Festival",
    event: "Kerala Literature Festival (KLF)",
    location: "Kerala, India",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-21.49.24.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-21.49.24.jpeg"
    ],
    caption: "Featured speaker sessions and international dialogues on African fiction, female narratives, and literary publishing at the Kerala Literature Festival in India."
  },
  // 7. IBBY Congress, Ottawa
  {
    id: "photo-ibby-ottawa",
    title: "IBBY Congress, Ottawa",
    event: "IBBY World Congress",
    location: "Ottawa, Canada",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.41.24.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.41.24.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.43.05.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.55.58.jpeg"
    ],
    caption: "Engaging global children's literature advocates, translators, and creators at the IBBY Congress in Ottawa."
  },
  // 8. Bologna Children's Book Fair
  {
    id: "photo-bologna",
    title: "Bologna Children's Book Fair",
    event: "International Children's Publishing",
    location: "Bologna, Italy",
    year: "2026",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.47.26.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.47.26.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.50.26.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.49.04.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.48.28.jpeg"
    ],
    caption: "Showcasing illustrated picturebooks and pioneering training collaborations for African illustrators and writers."
  },
  // 9. Mantova International Festival, Italy
  {
    id: "photo-mantova",
    title: "Mantova International Festival",
    event: "Festivaletteratura Mantova",
    location: "Mantova, Italy",
    year: "2024",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-14.58.56-1.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-14.58.56-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-14.58.56.jpeg"
    ],
    caption: "Featured dialogues, literary readings, and international author sessions at Festivaletteratura Mantova in Italy."
  },
  // 10. Beijing Children's Book Fair
  {
    id: "photo-beijing-cbf",
    title: "Beijing Children's Book Fair",
    event: "China International Children's Book Publishing",
    location: "Beijing, China",
    year: "2025",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-22.05.07.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-22.05.07.jpeg"
    ],
    caption: "International delegations, author showcases, and publishing rights dialogues exploring multicultural children's literature at the Beijing Children's Book Fair."
  },
  // 11. Hay Festival, Peru
  {
    id: "photo-hay-peru",
    title: "Hay Festival, Peru",
    event: "Hay Festival Arequipa",
    location: "Arequipa, Peru",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-22.14.44-1.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-22.14.44-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-22.14.44.jpeg"
    ],
    caption: "Keynote author discussions, literary panels, and transatlantic dialogues celebrating fiction and independent publishing at Hay Festival in Peru."
  },
  // 12. Frankfurt Buchmesse
  {
    id: "photo-frankfurt",
    title: "Frankfurt Buchmesse",
    event: "Frankfurt Book Fair",
    location: "Frankfurt, Germany",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.35.17.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.35.17.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.52.35.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.51.44.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4517.jpg"
    ],
    caption: "Accepting the Aficionado Award and engaging in rights and publishing dialogues at the Frankfurt Buchmesse."
  },
  // 13. CreativAfrica, Italy
  {
    id: "photo-creativafrica",
    title: "CreativAfrica, Italy",
    event: "CreativAfrica 2019",
    location: "Turin & Milan, Italy",
    year: "2019",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.10.16.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.10.16.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.32.18.jpeg"
    ],
    caption: "Special author sessions, discussions, and cultural showcases at CreativAfrica in Italy."
  },
  // 14. Princeton University
  {
    id: "photo-princeton",
    title: 'Princeton University: "The Canon"',
    event: "The Canon: 65 Years Later",
    location: "Princeton, NJ, USA",
    year: "2025",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.58.25.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.58.25.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-21-at-17.58.25-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4516.jpg"
    ],
    caption: 'Collaborative keynote and critical panel "The Canon: 65 Years Later" alongside Helon Habila and Nnedi Okorafor at Princeton.'
  },
  // 15. Bergen LitFest, Norway
  {
    id: "photo-bergen-litfest",
    title: "Bergen LitFest",
    event: "Bergen International Festival of Literature",
    location: "Bergen, Norway",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-11.10.14-1.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-11.10.14-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-11.10.14.jpeg"
    ],
    caption: "Featured readings, author panels, and international cultural exchange at the Bergen International Festival of Literature (Bergen LitFest) in Norway."
  },
  // 16. Norwegian Festival of Literature
  {
    id: "photo-norwegian-litfest",
    title: "Norwegian Festival of Literature",
    event: "Norsk Litteraturfestival",
    location: "Lillehammer, Norway",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-11.17.37.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-11.17.37.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-11.20.25.jpeg"
    ],
    caption: "Engaging discussions, keynote conversations, and literary sessions at the Norwegian Festival of Literature (Norsk Litteraturfestival)."
  },
  // 17. Open Book Festival
  {
    id: "photo-capetown",
    title: "Open Book Festival",
    event: "Open Book Festival 2012",
    location: "Cape Town, South Africa",
    year: "2012",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.18.36-1.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.18.36-1.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.18.36.jpeg"
    ],
    caption: "Panel discussions, author readings, and continental literary dialogues at the Open Book Festival in Cape Town."
  },
  // 18. Salon du Livre de Paris
  {
    id: "photo-paris",
    title: "Salon du Livre de Paris",
    event: "Salon du Livre",
    location: "Paris, France",
    year: "2021",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.20.39.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.20.39.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-22-at-15.20.40.jpeg"
    ],
    caption: "Presenting French translations of Nigerian literary works and fostering Anglophone-Francophone cultural dialogue at Salon du Livre."
  },
  // 19. University of St. Thomas
  {
    id: "photo-st-thomas",
    title: "University of St. Thomas",
    event: "Distinguished Scholar Residency",
    location: "Minnesota, USA",
    year: "1999",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/img_4519.jpg"
    ],
    caption: "Archival memory from distinguished scholar lectures and creative writing seminars in Minnesota."
  },
  // 20. Turin International Book Fair
  {
    id: "photo-torino",
    title: "Turin International Book Fair",
    event: "Salone Internazionale del Libro di Torino",
    location: "Turin, Italy",
    year: "2023",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.11.57.jpeg",
    images: [
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.11.57.jpeg",
      "https://kelechieze.wordpress.com/wp-content/uploads/2026/08/whatsapp-image-2026-08-25-at-15.26.03.jpeg"
    ],
    caption: "Author sessions, Aficionado recognitions, and international book discussions at the Turin International Book Fair in Italy."
  },
  // Other International Engagements
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
    id: "photo-read-my-world",
    title: "Read My World Festival",
    event: "Guest Curator Session",
    location: "Amsterdam, Netherlands",
    year: "2023",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    caption: "Serving as guest curator for Read My World Festival in Amsterdam, presenting West African authors and poets to European audiences."
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
    id: "photo-oxford",
    title: "Oxford University Symposium",
    event: "St Antony's College",
    location: "Oxford, UK",
    year: "2022",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
    caption: "Academic lecture on literary archive preservation and grassroots festival impact in West Africa."
  }
];

export default function SpeakingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);

  const activePhotoImages = selectedPhoto 
    ? (selectedPhoto.images && selectedPhoto.images.length > 0 ? selectedPhoto.images : [selectedPhoto.image])
    : [];

  const handleOpenPhoto = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
    setActiveImgIndex(0);
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoImages.length <= 1) return;
    setActiveImgIndex((prev) => (prev + 1) % activePhotoImages.length);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activePhotoImages.length <= 1) return;
    setActiveImgIndex((prev) => (prev - 1 + activePhotoImages.length) % activePhotoImages.length);
  };

  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, activePhotoImages.length]);

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
          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight uppercase leading-[1.02]">
            Speaking
          </h1>

          {/* EXACT VERBATIM INTRO COPY */}
          <p className="text-neutral-700 font-sans text-base sm:text-lg md:text-xl leading-relaxed font-normal pt-2">
            Shoneyin has been participating in literary events since 1998. Her first international engagements took her to the Zimbabwe International Book Fair in 1999, and then to the Iowa International Writers Workshop in the same year. She has not stopped since.
          </p>
        </div>
      </section>

      {/* 2. EVENT GALLERY SECTION */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200/80 scroll-mt-28 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-6">
          <div className="space-y-3">
            <h2 className="font-sans font-black text-4xl sm:text-6xl text-neutral-950 uppercase tracking-tight">
              Event Gallery
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
                onClick={() => handleOpenPhoto(item)}
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

                  {/* Photo count indicator if multiple */}
                  {item.images && item.images.length > 1 && (
                    <div className="absolute top-3 right-3 z-20 pointer-events-none">
                      <span className="font-mono text-[10px] font-bold text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full shadow-sm flex items-center space-x-1">
                        <ImageIcon size={10} className="mr-0.5" />
                        <span>{item.images.length} photos</span>
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-20">
                    <span className="font-sans text-xs font-bold text-neutral-950 uppercase tracking-wider bg-white/95 px-4 py-2 rounded-full shadow-lg">
                      View Photos
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
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close photo view"
              >
                <X size={18} />
              </button>

              {/* IMAGE BY THE LEFT (WITH CAROUSEL CONTROLS FOR MULTI-IMAGE) */}
              <div className="relative flex-1 bg-neutral-950 min-h-[320px] sm:min-h-[400px] md:min-h-[480px] w-full overflow-hidden flex flex-col items-center justify-center group/modalimg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImgIndex}
                    src={activePhotoImages[activeImgIndex] || selectedPhoto.image}
                    alt={`${selectedPhoto.title} - ${activeImgIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Multi-Image Controls */}
                {activePhotoImages.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg opacity-90 hover:opacity-100"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg opacity-90 hover:opacity-100"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Image Counter Badge */}
                    <div className="absolute top-4 left-4 z-20 pointer-events-none">
                      <span className="font-mono text-xs font-bold text-white bg-black/65 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {activeImgIndex + 1} / {activePhotoImages.length}
                      </span>
                    </div>

                    {/* Thumbnails Navigation Strip */}
                    <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center space-x-2 px-4 py-1.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      {activePhotoImages.map((imgUrl, thumbIdx) => (
                        <button
                          key={thumbIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImgIndex(thumbIdx);
                          }}
                          className={`relative w-12 h-9 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImgIndex === thumbIdx
                              ? "border-rose-500 scale-105 shadow-md"
                              : "border-white/50 opacity-60 hover:opacity-100"
                          }`}
                          aria-label={`View photo ${thumbIdx + 1}`}
                        >
                          <img
                            src={imgUrl}
                            alt=""
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* CONTENT PANEL - DATE TOP RIGHT, TITLE, AND WRITING UNDER TITLE */}
              <div className="w-full md:w-80 lg:w-96 p-6 sm:p-8 bg-white text-neutral-900 flex flex-col justify-start space-y-6 overflow-y-auto">
                <div className="flex items-center justify-end pr-10 md:pr-10">
                  <span className="font-mono text-xs font-bold text-neutral-800 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedPhoto.year}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tight text-neutral-950 leading-snug">
                    {selectedPhoto.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                    {selectedPhoto.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

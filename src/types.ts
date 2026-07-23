export interface ProjectCredit {
  role: string;
  name: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  year: string;
  client: string;
  role: string;
  location: string;
  gallery: string[];
  credits: ProjectCredit[];
  colorTheme: {
    bg: string;
    accent: string;
    text: string;
  };
}

export interface NavLink {
  label: string;
  id: string;
}

export interface Tab {
  id: string;
  title: string;
  icon?: string;
  content: React.ReactNode;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  url: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Article {
    author: string;
    categories: string[];
    content: string;
    description: string;
    enclosure: Record<string, unknown>;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string | null;
    title: string;
}
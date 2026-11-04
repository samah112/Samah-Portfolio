export type Language = 'en' | 'ar';

export type ProjectCategory = 'all' | 'medical' | 'fintech' | 'systems' | 'eco';

export interface Project {
  id: string;
  categoryKey: 'medical' | 'fintech' | 'systems' | 'eco';
  category: {
    en: string;
    ar: string;
  };
  title: {
    en: string;
    ar: string;
  };
  shortDescription: {
    en: string;
    ar: string;
  };
  fullDescription: {
    en: string;
    ar: string;
  };
  role?: {
    en: string;
    ar: string;
  };
  technologies: {
    en: string[];
    ar: string[];
  };
  highlights: {
    en: string[];
    ar: string[];
  };
  clinicalNote?: {
    en: string;
    ar: string;
  };
  accentColor: string;
  badge?: {
    en: string;
    ar: string;
  };
}

export interface HighlightItem {
  id: string;
  badge: {
    en: string;
    ar: string;
  };
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  iconName: string;
  featured?: boolean;
}

export interface AwardItem {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  organization: {
    en: string;
    ar: string;
  };
  track: {
    en: string;
    ar: string;
  };
  statement: {
    en: string;
    ar: string;
  };
  supporters: {
    en: string[];
    ar: string[];
  };
  recognition: {
    en: string[];
    ar: string[];
  };
  imageUrl: string;
}

export interface ResearchDomain {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  iconName: string;
  color: string;
  topics: {
    en: string[];
    ar: string[];
  };
  impact: {
    en: string;
    ar: string;
  };
}

export interface EducationItem {
  id: string;
  degree: {
    en: string;
    ar: string;
  };
  institution: {
    en: string;
    ar: string;
  };
  status: {
    en: string;
    ar: string;
  };
  focus: {
    en: string[];
    ar: string[];
  };
  color: string;
}

export interface SkillCategory {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  iconName: string;
  skills: {
    name: {
      en: string;
      ar: string;
    };
    iconName?: string;
  }[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isStreaming?: boolean;
  error?: boolean;
}

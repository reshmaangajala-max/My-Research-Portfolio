export interface Project {
  id: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  description: string;
  techTags?: string[];
  stats: {
    value: string;
    numericTarget?: number;
    suffix?: string;
    label: string;
    isTerracotta?: boolean;
    isSmallText?: boolean;
  }[];
  showTaxonomyDiagram?: boolean;
}

export interface ExperienceItem {
  id: string;
  isCurrent: boolean;
  dateRange: string;
  title: string;
  company: string;
  paragraphs: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

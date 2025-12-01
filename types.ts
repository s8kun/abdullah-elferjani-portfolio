import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  level?: number; // 0-100
}

export interface NavItem {
  label: string;
  href: string;
}
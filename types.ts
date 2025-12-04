import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[]; // e.g. Revit, AI, Grasshopper
  imageUrl: string;
}

export interface MethodStep {
  step: number;
  title: string;
  description: string;
}

export interface Course {
  title: string;
  description: string;
  targetAudience: string;
  topics: string[];
}
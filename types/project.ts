export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  gradient: string;
  link?: string;
  github?: string;
  featured?: boolean;
  category: "main" | "side" | "other";
  role?: string;
  achievements?: string[];
  learnings?: string[];
  hasDetailPage?: boolean;
  imagePath?: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

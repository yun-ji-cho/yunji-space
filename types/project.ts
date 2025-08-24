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

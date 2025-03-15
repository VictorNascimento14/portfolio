
import { ReactNode } from "react";
import { Code, Layout, Zap } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  items: string[];
}

export const projects: Project[] = [
  {
    title: "Projeto 1",
    description: "Aplicação web desenvolvida com React e Node.js",
    tags: ["React", "Node.js", "Tailwind CSS"],
    image: "/placeholder.svg"
  },
  {
    title: "Projeto 2",
    description: "Sistema de gestão de tarefas com integração de API",
    tags: ["React", "API REST", "TypeScript"],
    image: "/placeholder.svg"
  },
  {
    title: "Projeto 3",
    description: "E-commerce com sistema de pagamentos integrado",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg"
  }
];

export const skills: Skill[] = [
  { 
    name: "Frontend", 
    icon: <Layout className="w-10 h-10" />, 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] 
  },
  { 
    name: "Backend", 
    icon: <Code className="w-10 h-10" />, 
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] 
  },
  { 
    name: "Outros", 
    icon: <Zap className="w-10 h-10" />, 
    items: ["UI/UX Design", "Git", "Docker", "Figma"] 
  }
];

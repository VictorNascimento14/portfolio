import { ReactNode } from "react";
import { Code, Layout, Zap } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  items: string[];
}

export const projects: Project[] = [
  {
    title: "Projeto 1 - FURIA Chat Experience",
    description: "O FURIA Chat Experience é uma aplicação web moderna que oferece uma experiência de chat interativa com informações sobre a equipe de esports FURIA.",
    tags: ["React","TypeScript", "Vite", "Tailwind CSS", "Radix UI", "Lucide Icons"],
    image: "/FuriaChat.jpeg",
    demoLink: "https://furiachatexperience.netlify.app/",
    codeLink: "https://github.com/VictorNascimento14/furia-chat-experience"
  },
  {
    title: "Projeto 2 - FURIA Club",
    description: "Esta plataforma oferece uma experiência imersiva de comunidade, funcionalidades pensadas para engajar, entreter e informar os torcedores da FURIA.",
    tags: ["React", "Vite", "React Hook Form", "Zod", "React Icons", "Tailwind CSS", "Radix UI", "Lucide-react", "localStorage"],
    image: "/FuriaClub.jpeg",
    demoLink: "https://furiaclub.netlify.app/",
    codeLink: "https://github.com/VictorNascimento14/furia-club"
  },
  {
    title: "Projeto 3 - ProntoGestor",
    description: "O ProntoGestor é um sistema de gestão empresarial completo desenvolvido para auxiliar empresas de todos os portes no controle de suas operações comerciais. Com uma interface moderna e intuitiva, o sistema oferece ferramentas essenciais para o gerenciamento de vendas, estoque, clientes, fornecedores e muito mais.",
    tags: ["JAVA", "Spring-Boot", "PostgreSQL", "Javascript", "Git", "HTML", "CSS", "JSTL", "JDBC", "JPA", "Spring MVC", "Thymeleaf", "Maven", "Hibernate", "Bootstrap" ],
    image: "/ProntoGestor.jpeg",
    demoLink: "https://github.com/VictorNascimento14/prontogestor",
    codeLink: "https://github.com/VictorNascimento14/prontogestor"
  }
];

export const skills: Skill[] = [
  { 
    name: "Frontend", 
    icon: <Layout className="w-10 h-10" />, 
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] 
  },
  { 
    name: "Backend", 
    icon: <Code className="w-10 h-10" />, 
    items: ["JAVA", "Spring-Boot", "Python", "Javascript","JPA", "Spring MVC", "Thymeleaf", "Maven", "Hibernate", "Bootstrap" ] 
  },
  { 
    name: "Outros", 
    icon: <Zap className="w-10 h-10" />, 
    items: ["UI/UX Design", "Git", "Docker", "Figma", "PostgreSQL", "MySQL", "MongoDB"] 
  }
];

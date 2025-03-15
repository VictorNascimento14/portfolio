
import { useState, useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import HeroBackground from "@/components/portfolio/HeroBackground";
import Particles from "@/components/portfolio/Particles";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { projects, skills } from "@/data/portfolioData";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse position effect for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with dynamic elements */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <Particles />
        <HeroBackground mousePosition={mousePosition} />
        <Navbar />
        <Hero mousePosition={mousePosition} />
      </section>
      
      {/* Projects Section */}
      <ProjectsSection projects={projects} />
      
      {/* Skills Section */}
      <SkillsSection skills={skills} />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

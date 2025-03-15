
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 z-10 transition-all duration-300 ${isVisible ? 'backdrop-blur-md bg-black/50' : 'backdrop-blur-sm bg-black/30'}`}>
      <div className="text-xl font-bold">Seu Nome</div>
      <div className="flex gap-8">
        <a href="#projects" className="hover-underline hover:text-purple-400 transition-colors">Projetos</a>
        <a href="#skills" className="hover-underline hover:text-purple-400 transition-colors">Habilidades</a>
        <a href="#about" className="hover-underline hover:text-purple-400 transition-colors">Sobre</a>
        <a href="#contact" className="hover-underline hover:text-purple-400 transition-colors">Contato</a>
      </div>
    </nav>
  );
};

export default Navbar;

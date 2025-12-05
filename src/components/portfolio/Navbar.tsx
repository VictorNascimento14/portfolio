
import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";

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
      <div className="text-xl font-bold whitespace-nowrap">Victor Nascimento</div>
      <div className="container mx-auto px-24">
        <div className="flex flex-col md:flex-row justify-center items-center ml-40">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/--dev-victor-nascimento/" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 transition-transform duration-300">
            <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/VictorNascimento14" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
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

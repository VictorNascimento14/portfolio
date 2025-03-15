
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MousePointer } from "lucide-react";

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero = ({ mousePosition }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Criando experiências digitais inovadoras e funcionais para seus usuários.";
  const textRef = useRef(0);
  
  // Typing effect
  useEffect(() => {
    if (textRef.current < fullText.length) {
      const typingTimer = setTimeout(() => {
        setTypedText(prevText => prevText + fullText.charAt(textRef.current));
        textRef.current += 1;
      }, 50);
      
      return () => clearTimeout(typingTimer);
    }
  }, [typedText]);

  return (
    <div className="container mx-auto px-4 relative z-1 text-center">
      <div className="mb-8 flex justify-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 glow-effect animate-float">
          <img 
            src="/placeholder.svg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-fade-in-up">
        Desenvolvedor Criativo
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto h-16">
        {typedText}<span className="animate-pulse">|</span>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
          Ver Projetos <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          className="border-gray-700 text-white hover:bg-gray-800 transform transition-transform duration-300 hover:scale-105"
          style={{
            boxShadow: '0 0 15px rgba(138, 75, 255, 0.2)',
            borderColor: 'rgba(138, 75, 255, 0.3)'
          }}
        >
          Entre em Contato
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <MousePointer className="h-6 w-6 text-purple-400" />
      </div>
    </div>
  );
};

export default Hero;

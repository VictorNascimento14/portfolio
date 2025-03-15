
import { useEffect, useState } from "react";

interface HeroBackgroundProps {
  mousePosition: { x: number; y: number };
}

const HeroBackground = ({ mousePosition }: HeroBackgroundProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] z-0 animate-pulse-glow"
        style={{
          transform: `translate(-50%, -50%) scale(${1 - scrollPosition * 0.0005})`,
        }}
      ></div>
      <div 
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] z-0" 
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.2s ease-out',
          opacity: Math.max(0.2, 1 - scrollPosition * 0.001)
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] z-0"
        style={{
          transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
          transition: 'transform 0.2s ease-out',
          opacity: Math.max(0.2, 1 - scrollPosition * 0.001)
        }}
      ></div>
    </div>
  );
};

export default HeroBackground;

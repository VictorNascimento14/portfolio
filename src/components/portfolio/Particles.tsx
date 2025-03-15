
import { useEffect, useRef } from "react";

const Particles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  
  // Particles effect
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;
      
      container.innerHTML = '';
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random colors
        const colors = ['#8a4bff', '#ff4bdd', '#4b83ff', '#4bffa5'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        // Add to DOM
        container.appendChild(particle);
        
        // Animation
        const animDuration = Math.random() * 20 + 10;
        const animDelay = Math.random() * 10;
        
        particle.animate(
          [
            { transform: `translate3d(0, 0, 0)`, opacity: Math.random() * 0.5 + 0.3 },
            { transform: `translate3d(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px, 0)`, opacity: Math.random() * 0.5 + 0.3 }
          ],
          {
            duration: animDuration * 1000,
            delay: animDelay * 1000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
          }
        );
      }
    };
    
    createParticles();
    
    // Recreate particles on resize
    const handleResize = () => {
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div className="particles" ref={particlesRef}></div>;
};

export default Particles;

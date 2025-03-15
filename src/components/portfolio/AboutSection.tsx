
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.15),transparent_40%)] z-0"></div>
      <div className="container mx-auto px-4 relative z-1">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-purple-500/50 animate-float">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[50px] -z-10 animate-pulse"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Sobre Mim
              </span>
            </h2>
            <p className="text-gray-300 mb-4">
              Sou um desenvolvedor full-stack apaixonado por criar soluções digitais inovadoras. 
              Com experiência em diversas tecnologias, busco constantemente aprender e aplicar 
              novos conhecimentos para resolver problemas complexos.
            </p>
            <p className="text-gray-300 mb-6">
              Trabalho com React, Node.js, TypeScript, e outras tecnologias modernas para 
              desenvolver aplicações web escaláveis e de alta performance.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Front-end</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-400 font-medium mb-2">Back-end</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

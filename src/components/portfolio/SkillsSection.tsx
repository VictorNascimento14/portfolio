
import { Code, Layout, Zap } from "lucide-react";
import { Skill } from "@/data/portfolioData";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.15),transparent_50%)] z-0"></div>
      <div className="container mx-auto px-4 relative z-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Minhas Habilidades
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-900/30 p-6 rounded-lg border border-gray-800 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

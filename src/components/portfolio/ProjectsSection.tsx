
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0"></div>
      <div className="container mx-auto px-4 relative z-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Meus Projetos
          </span>
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer backdrop-blur-sm overflow-hidden group h-full">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-purple-800">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="text-xs py-1 px-2 bg-gray-800 text-gray-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-gray-900 border-gray-800">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover rounded-md mb-4"
                      />
                      <p className="text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, 
                        velit eu tincidunt lacinia, nunc est tincidunt nunc, vel lacinia nunc
                        nunc est tincidunt.
                      </p>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline" size="sm" className="border-gray-700 text-green-950">
                          <ExternalLink className="mr-2 h-4 w-4" /> <a href="https://dragraziellagalvao1.netlify.app/" target="_blank">Ver Demo</a>
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                          <Github className="mr-2 h-4 w-4" /> <a href="https://github.com/VictorNascimento14/projeto-fisio" target="_blank">Ver Código</a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-4 bg-gradient-to-r from-purple-500/80 to-pink-500/80 border-none text-white hover:from-purple-600 hover:to-pink-600" />
            <CarouselNext className="static translate-y-0 bg-gradient-to-r from-purple-500/80 to-pink-500/80 border-none text-white hover:from-purple-600 hover:to-pink-600" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;

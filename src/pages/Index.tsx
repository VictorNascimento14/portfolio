
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, ExternalLink, Github, Mail } from "lucide-react";

const projects = [
  {
    title: "Projeto 1",
    description: "Aplicação web desenvolvida com React e Node.js",
    tags: ["React", "Node.js", "Tailwind CSS"],
    image: "/placeholder.svg"
  },
  {
    title: "Projeto 2",
    description: "Sistema de gestão de tarefas com integração de API",
    tags: ["React", "API REST", "TypeScript"],
    image: "/placeholder.svg"
  },
  {
    title: "Projeto 3",
    description: "E-commerce com sistema de pagamentos integrado",
    tags: ["Next.js", "Stripe", "MongoDB"],
    image: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px] z-0"></div>
        </div>
        
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-10 backdrop-blur-sm bg-black/30">
          <div className="text-xl font-bold">Seu Nome</div>
          <div className="flex gap-8">
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projetos</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contato</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 relative z-1 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Desenvolvedor Criativo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Criando experiências digitais inovadoras e funcionais para seus usuários.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              Ver Projetos <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Entre em Contato
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5V19M12 19L5 12M12 19L19 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Meus Projetos
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer backdrop-blur-sm overflow-hidden group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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
                      <Button variant="outline" size="sm" className="border-gray-700 text-white">
                        <ExternalLink className="mr-2 h-4 w-4" /> Ver Demo
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                        <Github className="mr-2 h-4 w-4" /> Ver Código
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 relative bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,50,255,0.15),transparent_40%)] z-0"></div>
        <div className="container mx-auto px-4 relative z-1">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-purple-500/50">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-[50px] -z-10"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,50,255,0.15),transparent_40%)] z-0"></div>
        <div className="container mx-auto px-4 relative z-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Entre em Contato
            </span>
          </h2>
          
          <div className="max-w-xl mx-auto bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-400">seu.email@exemplo.com</p>
              </div>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Assunto
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2023 Seu Nome. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

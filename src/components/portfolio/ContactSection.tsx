
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,50,255,0.15),transparent_40%)] z-0"></div>
      <div className="container mx-auto px-4 relative z-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Entre em Contato
          </span>
        </h2>
        
        <div className="max-w-xl mx-auto bg-gray-900/70 backdrop-blur-sm p-8 rounded-lg border border-gray-800 transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-500/30">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center animate-pulse">
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
                  className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
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
                  className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
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
                className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
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
                className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none transition-all duration-300"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

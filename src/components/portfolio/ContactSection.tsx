import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_email_dev", // Substitua pelo seu Service ID do EmailJS
        "template_c4dgvgn", // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Wr5Q2hfw2w8kbWvoT" // Substitua pela sua Public Key do EmailJS
      );

      toast.success("Mensagem enviada com sucesso!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <Toaster position="top-right" />
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
              <p className="text-gray-400">victor.dev.nascimento@hotmail.com</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
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
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none transition-all duration-300"
                placeholder="Sua mensagem..."
              ></textarea>
            </div>
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState, useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { userData } from '../../data/user';
import { Button } from '../ui/Button';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setStatus('idle');

      // AQUI ESTÁ A MUDANÇA: Usando as variáveis do .env
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Lado Esquerdo: Infos */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Vamos construir algo incrível juntos?
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Estou disponível para oportunidades de estágio e projetos freelance. 
              Entre em contato e vamos conversar sobre como posso agregar valor ao seu time.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${userData.contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-blue-700 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Envie um email</p>
                  <p className="font-medium">{userData.contact.email}</p>
                </div>
              </a>

              <a 
                href={`https://wa.me/${userData.contact.whatsapp.replace(/\D/g, '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-green-600 transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="font-medium">{userData.contact.whatsapp}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-lg bg-slate-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Localização</p>
                  <p className="font-medium">{userData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Olá Bruno, gostaria de falar sobre..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full justify-center ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`} 
                icon={isSubmitting ? undefined : Send}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20 animate-fade-in-up">
                  <CheckCircle2 size={20} />
                  <span className="text-sm">Mensagem enviada com sucesso!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 animate-fade-in-up">
                  <AlertCircle size={20} />
                  <span className="text-sm">Erro ao enviar. Verifique sua conexão.</span>
                </div>
              )}

            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Bruno Berval. Desenvolvido com React, Tailwind e dedicação.</p>
        </div>
      </div>
    </section>
  );
}
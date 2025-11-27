import { userData } from '../../data/user';
import { Button } from '../ui/Button';
import { ArrowRight, Github, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna de Texto (Esquerda) */}
        <div className="order-2 md:order-1 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">
              {userData.name.split(' ')[0]} {userData.name.split(' ').pop()}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            {userData.role}. {userData.headline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects" icon={ArrowRight}>
              Ver Projetos
            </Button>
            
            <Button variant="outline" href={userData.contact.github} icon={Github}>
              GitHub
            </Button>

            {/* Link direto para Email */}
            <Button variant="ghost" href={`mailto:${userData.contact.email}`} icon={Mail}>
              Email
            </Button>
          </div>
        </div>

        {/* Coluna da Imagem (Direita) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          {/* Elemento decorativo de fundo (Blob) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Moldura Decorativa (Sombra deslocada) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl rotate-6 opacity-20 scale-105 transform transition-transform duration-500 hover:rotate-3"></div>
            
            {/* Container da Imagem */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={userData.profilePicture} 
                alt={userData.name} 
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
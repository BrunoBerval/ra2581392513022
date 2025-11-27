import { userData } from '../../data/user';
import { SectionTitle } from '../ui/SectionTitle';
import { Layout, Server, Brain, Container, Code2 } from 'lucide-react';

// Função para pegar ícones do Devicon (Linguagens principais)
const getDevicon = (tech: string, file: string = 'original') => 
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-${file}.svg`;

// Função para pegar ícones do Simple Icons (Bibliotecas específicas)
// A URL retorna o SVG já com a cor oficial da marca
const getSimpleIcon = (slug: string) => 
  `https://cdn.simpleicons.org/${slug}`;

const skillIcons: Record<string, string> = {
  // --- Frontend (Devicon fica melhor aqui) ---
  "React": getDevicon('react'),
  "TypeScript": getDevicon('typescript'),
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  "HTML5/CSS3": getDevicon('html5'),

  // --- Backend ---
  "Python": getDevicon('python'),
  "Go": getDevicon('go', 'original-wordmark'),
  "Node.js": getDevicon('nodejs'),
  
  // Usando Simple Icons para frameworks específicos
  "Express": getSimpleIcon('express'), 
  "Flask": getSimpleIcon('flask'), 
  "Gin (Go)": getSimpleIcon('gin'), // Ícone oficial do Gin (Martini)
  "SQLAlchemy": getSimpleIcon('sqlalchemy'),

  // --- Data/AI ---
  "Pandas": getSimpleIcon('pandas'),
  "NumPy": getSimpleIcon('numpy'),
  "TensorFlow": getDevicon('tensorflow'),
  "Keras": getSimpleIcon('keras'), // Ícone oficial do Keras (Vermelho)
  
  // YOLO não tem logo "próprio", usa-se o da Ultralytics (empresa mantenedora do YOLOv5, v8, v11)
  "YOLO 11": getSimpleIcon('ultralytics'), 
  
  // --- Tools ---
  "Docker": getDevicon('docker'),
  "Git": getDevicon('git'),
  "PostgreSQL": getDevicon('postgresql'),
  "Redis": getDevicon('redis'),
};

export function Skills() {
  const categories = [
    {
      name: "Frontend Development",
      icon: Layout,
      skills: userData.skills.frontend
    },
    {
      name: "Backend Architecture",
      icon: Server,
      skills: userData.skills.backend
    },
    {
      name: "Data Science & AI",
      icon: Brain,
      skills: userData.skills.ai
    },
    {
      name: "DevOps & Tools",
      icon: Container,
      skills: [...userData.skills.devops, ...userData.skills.database]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Tecnologias & Ferramentas" 
          subtitle="Ferramentas e tecnologias que utilizo para transformar problemas em soluções."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              
              {/* Cabeçalho do Card */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-700">
                  <category.icon size={24} />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-lg">
                  {category.name}
                </h3>
              </div>

              {/* Lista de Skills */}
              <ul className="space-y-3">
                {category.skills.map((skill) => {
                  const iconUrl = skillIcons[skill];
                  
                  return (
                    <li key={skill} className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors group">
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        {iconUrl ? (
                          <img 
                            src={iconUrl} 
                            alt={skill} 
                            // Adicionei max-w e max-h para garantir que ícones quadrados e retangulares fiquem alinhados
                            className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          <Code2 size={20} className="text-slate-400" />
                        )}
                      </div>
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
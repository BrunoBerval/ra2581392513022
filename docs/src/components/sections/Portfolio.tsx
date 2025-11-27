import { useState } from 'react';
import { projects, type ProjectCategory } from '../../data/project';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionTitle } from '../ui/SectionTitle';

// Lista de categorias para os botões de filtro
const categories: (ProjectCategory | 'Todos')[] = [
  'Todos',
  'Fullstack',
  'Backend',
  'AI & Data',
  'Academic'
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'Todos'>('Todos');

  // Filtra os projetos com base no estado atual
  const filteredProjects = projects.filter(project => 
    activeCategory === 'Todos' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Projetos em Destaque" 
          subtitle="Uma seleção de projetos acadêmicos e pessoais que demonstram minhas capacidades técnicas."
          center
        />

        {/* Barra de Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeCategory === category 
                  ? 'bg-blue-700 text-white border-blue-700 shadow-md transform scale-105' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Mensagem caso não haja projetos (segurança) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}
      </div>
    </section>
  );
}
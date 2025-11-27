import { type Project } from '../../data/project';
import { TechBadge } from './TechBadge';
import { Button } from './Button';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
      
      {/* Área da Imagem com Zoom Effect */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge da Categoria sobre a imagem */}
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>

        {/* Footer com Botões */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
          {project.repoLink && (
            <Button 
              variant="outline" 
              href={project.repoLink} 
              icon={Github}
              className="w-full text-sm py-2"
            >
              Código
            </Button>
          )}
          
          {project.demoLink && (
            <Button 
              variant="primary" 
              href={project.demoLink} 
              icon={ExternalLink}
              className="w-full text-sm py-2"
            >
              Demo
            </Button>
          )}
          
          {!project.repoLink && !project.demoLink && (
            <div className="w-full text-center text-sm text-slate-400 italic flex items-center justify-center gap-2">
              <FolderGit2 size={16} />
              Projeto Interno / Privado
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
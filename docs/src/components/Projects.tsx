import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    title: 'Projeto 1',
    description: 'Uma breve descrição do seu projeto. Destaque as tecnologias usadas e a funcionalidade principal.',
    link: 'https://github.com/seuperfil/projeto-1',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    title: 'Projeto 2',
    description: 'Outra descrição do projeto, explicando o problema que ele resolve ou a tecnologia que demonstra.',
    link: 'https://github.com/seuperfil/projeto-2',
    image: 'https://via.placeholder.com/400x300',
  },
  {
    title: 'Projeto 3',
    description: 'Mais um projeto para mostrar sua diversidade de habilidades e conhecimentos técnicos.',
    link: 'https://github.com/seuperfil/projeto-3',
    image: 'https://via.placeholder.com/400x300',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
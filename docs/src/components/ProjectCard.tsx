import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
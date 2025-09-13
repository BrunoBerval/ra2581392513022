import React from 'react';
import { SiTypescript, SiPython, SiPostgresql, SiScrumalliance } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'Python', icon: <SiPython size={40} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
  { name: 'Scrum', icon: <SiScrumalliance size={40} /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Minhas Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
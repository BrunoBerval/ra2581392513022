import React from 'react';
import './Header.css'; // Crie este arquivo CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav container">
        <a href="#hero" className="header-logo">
          Meu Portfólio
        </a>
        <div className="header-links">
          <a href="#projects" className="header-link">Projetos</a>
          <a href="#skills" className="header-link">Habilidades</a>
          <a href="#about" className="header-link">Sobre</a>
          <a href="#contact" className="header-link">Contato</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
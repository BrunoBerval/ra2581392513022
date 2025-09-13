import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile-pic.jpg'; 

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content container">
        <img src={profilePic} alt="Sua Foto" className="hero-img" />
        <h1 className="animate-fadeInDown">
          Olá, sou um <span className="hero-accent">Desenvolvedor</span>
        </h1>
        <p className="hero-subtitle animate-fadeIn">
          Especializado em criar aplicações web robustas e escaláveis, com foco em tecnologias como React, Node.js e muito mais.
        </p>
        <a href="#contact" className="btn">
          Fale Comigo
        </a>
      </div>
    </section>
  );
};

export default Hero;
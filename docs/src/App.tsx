import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
//import Footer from './components/Footer';
//import About from './components/About';
//import Contact from './components/Contact';
import './App.css'; // Importe o arquivo CSS aqui

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* Você pode adicionar os componentes de About e Contact aqui */}
        {/* <About /> */}
        {/* <Contact /> */}
      </main>
       {/* <Footer /> */}
    </div>
  );
};

export default App;

import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Proyectos';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <footer className="mt-12 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Aldo Pintado. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;


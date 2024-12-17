import React, { useState } from 'react';
import cv from '../public/CV  Aldo Pintado.pdf';
const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="text-white text-xl font-bold">Aldo Pintado</a>
                <div className="hidden md:flex space-x-4">
                    <a href="#about" className="text-white hover:text-gray-300">Sobre mí</a>
                    <a href="#skills" className="text-white hover:text-gray-300">Habilidades</a>
                    <a href="#projects" className="text-white hover:text-gray-300">Proyectos</a>
                    <a href="#contact" className="text-white hover:text-gray-300">Contacto</a>
                    <a href={cv} download className="text-white hover:text-gray-300">CV</a>
                </div>
                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" className="block text-white hover:text-gray-300 py-2">Sobre mí</a>
                        <a href="#skills" className="block text-white hover:text-gray-300 py-2">Habilidades</a>
                        <a href="#projects" className="block text-white hover:text-gray-300 py-2">Proyectos</a>
                        <a href="#contact" className="block text-white hover:text-gray-300 py-2">Contacto</a>
                        <a href={cv} download className="block text-white hover:text-gray-300 py-2">CV</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;


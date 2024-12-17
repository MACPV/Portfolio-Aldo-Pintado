import React from 'react';
import logo from '../assets/logo.jpeg';
import cv from '../public/CV  Aldo Pintado.pdf';
const Header: React.FC = () => {
    return (
        <header className="py-1 text-center">
            <img src={logo} alt="Logo" className="mx-auto" />
            <a
                href={cv}
                download
                className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
                Descargar CV
            </a>
        </header>
    );
};

export default Header;


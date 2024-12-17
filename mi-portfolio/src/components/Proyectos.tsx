import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Project {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "Catalogo Virtual",
            description: "Proyecto FrontEnd con Next.js y REACT",
            url: "https://ava-creaciones.netlify.app/",
            imageUrl: "/Ava Creaciones.png"
        },
        {
            title: "API de Libreia",
            description: "Proyecto BackEnd con Java y API REST",
            url: "https://github.com/MACPV/libreriaapi",
            imageUrl: "/Libreria API.png"
        },
    ];

    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-white mb-8">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition duration-300"
                    >
                        <div className="relative h-48 w-full">
                            <LazyLoadImage
                                src={project.imageUrl}
                                alt={project.title}
                                effect="blur"
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                                wrapperClassName="w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;


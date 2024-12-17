import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="py-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">
                ¿Interesado en trabajar juntos? ¡Contáctame!
            </p>
            <a
                href="mailto:tu@email.com"
                className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
                Enviar email
            </a>
        </section>
    );
};

export default Contact;


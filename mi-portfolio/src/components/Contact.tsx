import { Linkedin, Mail } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
    const email = 'aldo.pintado.98@gmail.com';
    const linkedinUrl = 'https://www.linkedin.com/in/aldo-pintado/';

    return (
        <section id="contact" className="py-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-8">Contacto</h2>
            <div className="space-y-4">
                <a
                    href={`mailto:${email}`}
                    className="flex items-center text-white hover:text-gray-300 transition duration-300"
                >
                    <Mail className="w-6 h-6 mr-2" />
                    <span>{email}</span>
                </a>
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-gray-300 transition duration-300"
                >
                    <Linkedin className="w-6 h-6 mr-2" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;


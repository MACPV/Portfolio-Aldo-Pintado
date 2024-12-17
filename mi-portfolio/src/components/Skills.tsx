import React from 'react';

const Skills: React.FC = () => {
    const skills = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git', 'Java', 'Spring Boot', 'API REST'];

    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Habilidades</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;


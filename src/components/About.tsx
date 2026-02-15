import data from '@/data/data.json';

export default function About() {
    const techStack = [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    ];

    return (
        <section id="about" className="py-20 max-w-4xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">About Me</h2>

                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                    I'm a {data.personal.role}.
                </h3>

                <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed mb-16">
                    <p>
                        {data.about.summary}
                    </p>
                    <p>
                        With a strong foundation in machine learning and software engineering, I bridge the gap between complex algorithms and user-centric applications.
                    </p>
                </div>

                <div className="w-full">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {techStack.map((tech) => (
                            <div key={tech.name} className="group flex flex-col items-center gap-3">
                                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center p-2 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-wider">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

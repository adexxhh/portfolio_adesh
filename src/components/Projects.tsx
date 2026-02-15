import data from '@/data/data.json';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">Selected Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.projects.map((project) => (
                    <div key={project.id} className="group border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <a href={project.link} className="text-gray-400 group-hover:text-blue-600 transition-colors">
                                <ArrowUpRight size={20} />
                            </a>
                        </div>

                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

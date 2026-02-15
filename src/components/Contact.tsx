import data from '@/data/data.json';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 max-w-5xl mx-auto px-6">
            <div className="bg-black text-white rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
                    {data.contact.message}
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <a
                        href={`mailto:${data.contact.email}`}
                        className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <Mail size={18} />
                        <span>Email Me</span>
                    </a>

                    <div className="flex gap-4">
                        <a
                            href={data.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={data.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors text-white"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

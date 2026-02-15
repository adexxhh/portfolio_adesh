import Link from 'next/link';
import data from '@/data/data.json';
import { User, Briefcase, LayoutGrid, PenTool, Mail, Github, Linkedin, FileText } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-gray-200/20 rounded-full px-2 py-2 flex items-center justify-between pointer-events-auto gap-4 md:gap-8">

                {/* Mobile: Logo only? Or simple home icon? Let's keep it clean. 
                    Actually, the requested design focused on the tabs. 
                    Let's make a unified pill bar. 
                */}

                <nav className="flex items-center gap-1">
                    <Link href="#about" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                        <User size={16} />
                        <span className="hidden md:inline">About</span>
                    </Link>
                    <Link href="#journey" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                        <Briefcase size={16} />
                        <span className="hidden md:inline">Journey</span>
                    </Link>
                    <Link href="#projects" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                        <LayoutGrid size={16} />
                        <span className="hidden md:inline">Projects</span>
                    </Link>
                    <Link href="#blogs" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                        <PenTool size={16} />
                        <span className="hidden md:inline">Writing</span>
                    </Link>
                    <Link href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-white hover:shadow-sm transition-all">
                        <Mail size={16} />
                        <span className="hidden md:inline">Contact</span>
                    </Link>
                </nav>

                <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

                <div className="flex items-center gap-3 pr-2">
                    <a href={data.personal.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100">
                        <Github size={20} />
                    </a>
                    <a href={data.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </header>
    );
}

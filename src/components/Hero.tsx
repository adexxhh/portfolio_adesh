import data from '@/data/data.json';
import Link from 'next/link';
import DecryptedText from '@/components/animations/DecryptedText';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-5xl mx-auto px-6">
            <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <DecryptedText
                        text={`Hi, I'm ${data.personal.name}`}
                        animateOn="view"
                        revealDirection="start"
                        sequential={true}
                        speed={100}
                        once={false}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                        parentClassName="block whitespace-nowrap overflow-hidden text-ellipsis"
                    />
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
                    {data.personal.role} {data.personal.specialization}
                </p>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl">
                    {data.about.summary}
                </p>

                <div className="flex flex-wrap gap-4">
                    <Link
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
                    >
                        View Projects
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-gray-200 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

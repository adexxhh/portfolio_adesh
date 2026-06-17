import data from '@/data/data.json';
import Image from 'next/image';

export default function Journey() {
    return (
        <section id="journey" className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">Professional Journey</h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-8">
                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        Experience
                    </h3>
                    <div className="space-y-12 border-l border-gray-200 pl-8 ml-3 relative">
                        {data.experience.map((item) => (
                            <div key={item.id} className="relative group cursor-pointer">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[39px] top-6 h-5 w-5 rounded-full border-4 border-white bg-gray-200 group-hover:bg-blue-500 transition-colors duration-300" />
                                
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-gray-50 hover:shadow-sm transition-all duration-300">
                                    {(item as any).logo && (
                                        <div className="flex-shrink-0 w-14 h-14 relative rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 hover:shadow-md cursor-pointer">
                                            {(item as any).website ? (
                                                <a href={(item as any).website} target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center">
                                                    <Image 
                                                        src={(item as any).logo} 
                                                        alt={item.company} 
                                                        fill 
                                                        className="object-contain p-2" 
                                                    />
                                                </a>
                                            ) : (
                                                <Image 
                                                    src={(item as any).logo} 
                                                    alt={item.company} 
                                                    fill 
                                                    className="object-contain p-2" 
                                                />
                                            )}
                                        </div>
                                    )}
                                    <div>
                                        <span className="text-sm font-mono text-gray-500 mb-1 block group-hover:text-blue-500 transition-colors duration-300">{item.duration}</span>
                                        <h4 className="text-lg font-bold text-gray-900">{item.role}</h4>
                                        <p className="text-gray-600 font-medium mb-2">{item.company}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        Education
                    </h3>
                    <div className="space-y-12 border-l border-gray-200 pl-8 ml-3 relative">
                        {data.education.map((item) => (
                            <div key={item.id} className="relative group cursor-pointer p-4 -ml-4 rounded-xl hover:bg-gray-50 hover:shadow-sm transition-all duration-300">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[23px] top-6 h-5 w-5 rounded-full border-4 border-white bg-gray-200 group-hover:bg-blue-500 transition-colors duration-300" />

                                <span className="text-sm font-mono text-gray-500 mb-1 block group-hover:text-blue-500 transition-colors duration-300">{item.duration}</span>
                                <h4 className="text-lg font-bold text-gray-900">{item.degree}</h4>
                                <p className="text-gray-600 font-medium mb-2">{item.institution}</p>
                                {item.description && (
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

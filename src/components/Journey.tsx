import data from '@/data/data.json';

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
                            <div key={item.id} className="relative">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-gray-200" />

                                <span className="text-sm font-mono text-gray-500 mb-2 block">{item.duration}</span>
                                <h4 className="text-lg font-bold text-gray-900">{item.role}</h4>
                                <p className="text-gray-600 font-medium mb-2">{item.company}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
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
                            <div key={item.id} className="relative">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[39px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-gray-200" />

                                <span className="text-sm font-mono text-gray-500 mb-2 block">{item.duration}</span>
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

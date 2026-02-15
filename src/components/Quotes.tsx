'use client';

import { useState, useEffect } from 'react';
import data from '@/data/data.json';

export default function Quotes() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.quotes.length);
        }, 5000); // Change quote every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="min-h-[160px] flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out">
                    <blockquote className="text-2xl md:text-4xl font-serif text-gray-800 mb-6 italic leading-relaxed">
                        "{data.quotes[currentIndex].text}"
                    </blockquote>
                    <cite className="text-sm font-bold uppercase tracking-widest text-gray-500 not-italic">
                        — {data.quotes[currentIndex].author}
                    </cite>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {data.quotes.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to quote ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    thumbnail: string;
}

export default function Blogs() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://medium.com/feed/@adexxhh')}`
                );
                const data = await res.json();
                if (data.status === 'ok') {
                    setPosts(data.items.slice(0, 3)); // Get top 3 posts
                }
            } catch (error) {
                console.error('Error fetching Medium posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Format date for display
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <section id="blogs" className="py-20 max-w-5xl mx-auto px-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">Latest Writing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
                    ))}
                </div>
            </section>
        );
    }

    if (posts.length === 0) return null;

    return (
        <section id="blogs" className="py-20 max-w-5xl mx-auto px-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-12">Latest Writing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <a
                        key={post.guid}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="border border-gray-100 rounded-2xl p-6 h-full hover:border-gray-200 hover:shadow-sm transition-all bg-white flex flex-col">
                            <div className="flex items-center gap-2 mb-4 text-gray-400 text-xs font-medium uppercase tracking-wider">
                                <BookOpen size={14} />
                                <span>Medium</span>
                            </div>

                            <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                <span className="text-sm text-gray-500 font-mono">
                                    {formatDate(post.pubDate)}
                                </span>
                                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-blue-600 transition-colors" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

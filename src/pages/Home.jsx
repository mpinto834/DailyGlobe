import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PublicationCard from '../components/PublicationCard';
import { getRecentPublications } from '../data/publications';
import { Link } from 'react-router-dom';

export default function Home() {
    const recentPublications = getRecentPublications(3);

    return (
        <div className="bg-stone-50 min-h-screen">
            <SEO
                title="Home"
                description="Daily Globe - Leading source for world news, interviews, and journal entries."
            />

            {/* Hero Section - Text First */}
            <section className="relative py-24 px-4 border-b border-gray-200 bg-white">
                <div className="container mx-auto max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-xs font-bold tracking-[0.2em] text-daily-accent uppercase mb-6">
                            Est. MMXXV
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-serif font-black text-daily-dark mb-8 leading-tight">
                            Stories that shape <br className="hidden md:block" /> our world.
                        </h1>
                        <p className="text-xl text-gray-500 font-serif max-w-2xl mx-auto italic mb-10">
                            "The only security of all is in a free press."
                        </p>

                        <Link
                            to="/catalog"
                            className="inline-block border-2 border-daily-dark text-daily-dark hover:bg-daily-accent hover:border-daily-accent hover:text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300"
                        >
                            Read Latest Issues
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Publications */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
                        <h2 className="text-3xl font-serif font-bold text-daily-dark">
                            Latest Publications
                        </h2>
                        <Link to="/catalog" className="text-sm font-bold uppercase tracking-wider text-daily-accent hover:underline">
                            View Archive &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recentPublications.map((pub, index) => (
                            <motion.div
                                key={pub.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <PublicationCard publication={pub} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

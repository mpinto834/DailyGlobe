import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PublicationCard from '../components/PublicationCard';
import { getPublicationsByType } from '../data/publications';
import SEO from '../components/SEO';

const Catalog = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Journal', 'News', 'Interview', 'Trolhiçes'];

    // Get filtered publications
    const publications = filter === 'All'
        ? getPublicationsByType('')
        : getPublicationsByType(filter);

    return (
        <div className="bg-stone-50 min-h-screen pt-12 pb-24">
            <SEO
                title="Publications"
                description="Browse our archive of journals, news, and interviews."
            />

            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-daily-dark mb-6">
                        Publications Archive
                    </h1>
                    <div className="w-24 h-1 bg-daily-dark mx-auto"></div>
                </div>

                {/* Filter Tabs */}
                <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filter === category
                                ? 'bg-daily-accent text-white border-2 border-daily-accent shadow-md'
                                : 'bg-white text-gray-500 border-2 border-transparent hover:border-gray-300'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence>
                        {publications.map((pub) => (
                            <motion.div
                                layout
                                key={pub.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PublicationCard publication={pub} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {publications.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-400 font-serif italic">No publications found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;

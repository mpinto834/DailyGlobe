import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPublicationById, getRecentPublications } from '../data/publications';
import PublicationCard from '../components/PublicationCard';
import SEO from '../components/SEO';

const PublicationDetail = () => {
    const { id } = useParams();
    const publication = getPublicationById(id);
    const relatedPublications = getRecentPublications(3).filter(p => p.id !== publication?.id).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!publication) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-stone-50">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-daily-dark mb-4">Publication Not Found</h1>
                    <Link to="/catalog" className="text-daily-accent hover:underline font-bold uppercase tracking-wider">Return to Archive</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <SEO title={publication.title} description={publication.summary} />

            <div className="container mx-auto px-4 max-w-4xl py-12 md:py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 mb-6 text-xs font-bold font-sans tracking-widest text-white bg-daily-dark uppercase">
                        {publication.type}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-black text-daily-dark mb-6 leading-tight">
                        {publication.title}
                    </h1>
                    <div className="flex items-center justify-center text-sm font-sans font-bold text-gray-500 space-x-3">
                        <span>{publication.date}</span>
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        <span className="text-daily-accent">{publication.author}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="aspect-video w-full overflow-hidden"
                    >
                        <img
                            src={publication.image}
                            alt={publication.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Content */}
                <article className="prose prose-lg prose-serif max-w-none mb-20 text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: publication.content }} />
                </article>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-16"></div>

                {/* Related */}
                <div>
                    <h3 className="text-2xl font-serif font-bold text-daily-dark mb-8 text-center">Read Next</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {relatedPublications.map(pub => (
                            <PublicationCard key={pub.id} publication={pub} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicationDetail;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { isYouTubeUrl, getYouTubeThumbnail } from '../utils/media';

const PublicationCard = ({ publication }) => {
    const isVideo = isYouTubeUrl(publication.image);
    const displayImage = isVideo ? getYouTubeThumbnail(publication.image) : publication.image;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group flex flex-col h-full bg-white border border-gray-100 hover:border-gray-300 transition-colors duration-300"
        >
            <div className="relative overflow-hidden aspect-[16/9] bg-gray-100">
                <img
                    src={displayImage}
                    alt={publication.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />

                {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-daily-accent" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold font-sans tracking-wide text-white bg-daily-dark uppercase">
                        {publication.type}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center text-xs text-gray-500 font-sans mb-3 space-x-2">
                    <span>{publication.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{publication.author}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-daily-dark mb-3 leading-tight group-hover:text-daily-accent transition-colors">
                    <Link to={`/publication/${publication.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {publication.title}
                    </Link>
                </h3>

                <p className="text-gray-600 font-serif leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {publication.summary}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-daily-accent uppercase tracking-wider group-hover:underline">
                        Read Story
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default PublicationCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-jotep-dark h-[600px] flex items-center">
            {/* Background Gradient & Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-jotep-blue/20 to-jotep-dark z-0" />
            <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1a202c/Png')] opacity-30 mix-blend-overlay" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-jotep-blue/10 text-jotep-blue text-xs font-bold tracking-wider mb-6 border border-jotep-blue/20">
                                PREMIUM HARDWARE
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
                        >
                            Build With <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jotep-blue via-white to-jotep-yellow animate-gradient bg-[200%_auto]">
                                Confidence
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg"
                        >
                            Professional-grade tools and equipment for contractors and serious DIYers. Quality you can trust, service you deserve.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/catalog"
                                className="px-8 py-4 bg-jotep-blue hover:bg-jotep-blue-hover text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-jotep-blue/25 hover:-translate-y-1"
                            >
                                Browse Catalog
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl backdrop-blur-sm border border-white/10 transition-all hover:-translate-y-1"
                            >
                                Get a Quote
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:block relative self-center place-self-end"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="https://placehold.co/600x400?text=Premium+Tools"
                                alt="Hero Tools"
                                className="w-full h-auto object-cover md:max-w-lg"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-jotep-yellow/20 rounded-full blur-3xl z-0" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-jotep-blue/20 rounded-full blur-3xl z-0" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

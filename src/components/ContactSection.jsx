import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <div id="contact-section" className="bg-slate-50 py-16 relative">
            {/* Background decoration */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Visit Us Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-daily-accent"
                    >
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-center text-daily-dark mb-6">Visit Us</h3>

                            <div className="text-center space-y-4 mb-8">
                                <div>
                                    <p className="font-semibold text-daily-dark">Daily Globe Media</p>
                                    <p className="text-gray-600">123 Press Plaza</p>
                                    <p className="text-gray-600">New York, NY</p>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Office Hours</p>
                                    <p className="text-gray-700">Mon - Fri: <span className="font-medium text-daily-accent">9:00 - 18:00</span></p>
                                    <p className="text-gray-400 italic text-sm mt-1">Sun: Closed</p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
                                {/* Map iframe code */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Us Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-daily-dark"
                    >
                        <div className="p-8 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-center text-daily-dark mb-8">Contact Us</h3>

                            <div className="space-y-8 text-center">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Phone</h4>
                                    <a href="tel:+15550123456" className="block text-3xl font-black text-daily-dark hover:text-daily-accent transition duration-300">
                                        +1 (555) 012-3456
                                    </a>
                                </div>

                                <div className="pt-8 border-t border-gray-100">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Email</h4>
                                    <a href="mailto:editors@dailyglobe.local" className="text-xl font-medium text-daily-accent hover:underline transition duration-300">
                                        editors@dailyglobe.local
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

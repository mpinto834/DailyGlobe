import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-daily-dark text-gray-400 py-16 border-t border-gray-800">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-3xl font-serif font-black text-white mb-6 block">
                            Daily Globe
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500 font-sans">
                            Dedicated to delivering the truth with integrity and depth. Independent journalism since 2025.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Offices</h4>
                        <ul className="space-y-3 text-sm font-serif">
                            <li>123 Press Plaza, New York</li>
                            <li>editors@dailyglobe.local</li>
                            <li className="text-white">+1 (555) 012-3456</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Sections</h4>
                        <ul className="space-y-3 text-sm font-serif">
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Buisness</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Technology</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Culture</Link></li>
                            <li><Link to="/catalog" className="hover:text-white transition-colors">Opinion</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-2 text-sm font-serif">
                            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Daily Globe Media. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b-4 border-daily-dark shadow-sm">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center h-24">
                    <Link to="/" className="flex flex-col items-start group">
                        <span className="text-3xl font-serif font-black tracking-tight text-daily-dark group-hover:text-daily-accent transition-colors">
                            Daily Globe
                        </span>
                        <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-gray-500">
                            Est. 2025
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {['Home', 'Publications', 'Contact'].map((item) => (
                            <NavLink
                                key={item}
                                to={item === 'Home' ? '/' : item === 'Publications' ? '/catalog' : `/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `text-sm font-sans font-bold uppercase tracking-wider transition-colors duration-200 relative group py-2 ${isActive ? 'text-daily-accent' : 'text-gray-900 hover:text-daily-accent'
                                    }`
                                }
                            >
                                {item}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-daily-dark hover:bg-gray-100 focus:outline-none"
                    >
                        <div className="w-6 flex flex-col items-end gap-1.5">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
                    >
                        <ul className="flex flex-col p-4 space-y-2">
                            {['Home', 'Publications', 'Contact'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={item === 'Home' ? '/' : item === 'Publications' ? '/catalog' : `/${item.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            `block px-4 py-3 rounded text-base font-serif font-bold transition-colors ${isActive
                                                ? 'bg-gray-100 text-daily-accent'
                                                : 'text-gray-900 hover:bg-gray-50'
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.1 }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    // Aktif link kontrol fonksiyonu
    const isActive = (href) => {
        if(href === '/') return pathname === href;
        return pathname.startsWith(href);
    };

    return (
        <>
            <motion.nav
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50"
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-3xl font-black bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                                SpiceArtisan
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'Products', 'About', 'Contact'].map((item) => {
                                const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                return (
                                    <motion.div key={item} variants={navItemVariants}>
                                        <Link
                                            href={href}
                                            className={`relative px-3 py-2 transition-colors group ${
                                                isActive(href) 
                                                ? 'text-amber-600 font-medium' 
                                                : 'text-gray-600 hover:text-amber-600'
                                            }`}
                                        >
                                            {item}
                                            <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                                                isActive(href) ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            {/* <motion.div variants={navItemVariants}>
                                <Link
                                    href="/shop"
                                    className="ml-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white px-6 py-2.5 rounded-full 
                                    shadow-lg hover:shadow-amber-200/40 transition-all hover:scale-[1.02] flex items-center space-x-2"
                                >
                                    <i className="fas fa-shopping-bag"></i>
                                    <span>Shop Now</span>
                                </Link>
                            </motion.div> */}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-600 hover:text-amber-600 transition-colors p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed top-20 left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl z-40"
                    >
                        <div className="flex flex-col p-4 space-y-4 border-t border-gray-100">
                            {['Home', 'Products', 'About', 'Contact'].map((item) => {
                                const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                return (
                                    <Link
                                        key={item}
                                        href={href}
                                        className={`px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 group ${
                                            isActive(href)
                                            ? 'bg-amber-50 text-amber-600'
                                            : 'text-gray-600 hover:bg-amber-50'
                                        }`}
                                    >
                                        <i className={`fas fa-chevron-right text-amber-400 ${
                                            isActive(href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        } transition-opacity`}></i>
                                        <span>{item}</span>
                                    </Link>
                                );
                            })}
                           
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
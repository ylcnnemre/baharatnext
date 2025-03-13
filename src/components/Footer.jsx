"use client"
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Spice Artisan</h3>
                        <p className="text-gray-400">Bringing the finest spices from around the world to your kitchen.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                            <li><a href="#products" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Products</a></li>
                            <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">123 Spice Street</li>
                            <li className="text-gray-400">New York, NY 10001</li>
                            <li className="text-gray-400">+1 (555) 123-4567</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Spice Artisan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
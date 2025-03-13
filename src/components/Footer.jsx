"use client"
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Baharat Ustası</h3>
                        <p className="text-gray-400">Dünyanın en kaliteli baharatlarını mutfağınıza getiriyoruz.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Hakkımızda</a></li>
                            <li><a href="#products" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Ürünler</a></li>
                            <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Baharat Sokak No:123</li>
                            <li className="text-gray-400">İstanbul, Türkiye</li>
                            <li className="text-gray-400">+90 (555) 123 45 67</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Bizi Takip Edin</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <FaFacebook size={18} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Baharat Ustası. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
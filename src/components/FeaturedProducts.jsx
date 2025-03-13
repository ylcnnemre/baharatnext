"use client"
import React, { useState } from 'react'

const FeaturedProducts = () => {
    const [activeTab, setActiveTab] = useState('all');
    const products = [
        {
            id: 1,
            name: 'Premium Saffron Threads',
            price: 24.99,
            image: 'https://public.readdy.ai/ai/img_res/8953891f814975f03e5b2715adb3c124.jpg',
            category: 'premium'
        },
        {
            id: 2,
            name: 'Organic Turmeric Powder',
            price: 12.99,
            image: 'https://public.readdy.ai/ai/img_res/7bb8082a038a1f72c7356230e5d4f5a3.jpg',
            category: 'organic'
        },
        {
            id: 3,
            name: 'Smoked Paprika',
            price: 9.99,
            image: 'https://public.readdy.ai/ai/img_res/aee5666cfa6802fa2ea20a99a5ec391c.jpg',
            category: 'premium'
        }
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="flex justify-center mb-8 space-x-4">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`!rounded-button px-6 py-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'all' ? 'bg-[#D64545] text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveTab('premium')}
                    className={`!rounded-button px-6 py-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'premium' ? 'bg-[#D64545] text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                >
                    Premium
                </button>
                <button
                    onClick={() => setActiveTab('organic')}
                    className={`!rounded-button px-6 py-2 transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'organic' ? 'bg-[#D64545] text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                >
                    Organic
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products
                    .filter(product => activeTab === 'all' || product.category === activeTab)
                    .map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="h-48 overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-[#D64545] font-bold">${product.price}</p>
                                <button className="!rounded-button mt-4 w-full bg-[#D64545] text-white py-2 hover:bg-[#B83A3A] transition-colors cursor-pointer whitespace-nowrap">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default FeaturedProducts
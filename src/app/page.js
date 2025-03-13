"use client"

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isHovered, setIsHovered] = useState(null);
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

  // Nav animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  // Product card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  // Stagger animation for product grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Navigation */}

      {/* Hero Section with Text Animation */}
      <div className="relative h-screen bg-cover bg-center" style={{
        backgroundImage: "url('/images/bgbaharat.jpg')"
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-start px-8 md:px-16"
        >
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover the Art of Flavor</h1>
            <p className="text-lg md:text-xl mb-8">Experience the finest hand-selected spices from around the world, carefully curated for the most discerning palates.</p>
            <button className="!rounded-button bg-[#D64545] text-white px-8 py-3 text-lg hover:bg-[#B83A3A] transition-transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Explore Collection
            </button>
          </div>
        </motion.div>
      </div>
      {/* Animated Product Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Products
        </motion.h2>
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products
            .filter(product => activeTab === 'all' || product.category === activeTab)
            .map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mt-2">
                    Discover the rich aroma and vibrant color of our {product.name.toLowerCase()}.
                  </p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </section>
      {/* Animated Quality Commitment Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Quality Commitment
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="h-64 overflow-hidden rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={`https://public.readdy.ai/ai/img_res/${index === 0 ? 'bd730f8ad4980c39cf281f60f5f6626c.jpg' : index === 1 ? 'df63b593d083c0c26227406f163ca409.jpg' : '1bf403e9e3ee790843fff2aa4f1c564b.jpg'}`}
                    alt={index === 0 ? 'Hand Selection' : index === 1 ? 'Traditional Processing' : 'Quality Testing'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-semibold mb-3">{index === 0 ? 'Hand-Selected' : index === 1 ? 'Traditional Processing' : 'Quality Tested'}</h3>
                  <p className="text-gray-600">{index === 0 ? 'Each spice is carefully hand-picked and selected to ensure premium quality' : index === 1 ? 'Using time-honored methods to preserve authentic flavors' : 'Rigorous testing ensures the highest quality standards'}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Global Sourcing Section */}
      <section className="py-20 bg-[#FDF8F6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold mb-6">Global Spice Journey</h2>
              <p className="text-gray-600 mb-8">We travel the world to source the finest spices directly from traditional farmers and artisans. Our commitment to ethical sourcing ensures both quality and sustainability.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fas fa-check-circle text-[#D64545] text-xl"></i>
                  <span className="text-gray-700">Direct partnership with local farmers</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-check-circle text-[#D64545] text-xl"></i>
                  <span className="text-gray-700">Sustainable harvesting practices</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-check-circle text-[#D64545] text-xl"></i>
                  <span className="text-gray-700">Fair trade certified</span>
                </div>
              </div>
              <button className="!rounded-button mt-8 bg-[#D64545] text-white px-8 py-3 hover:bg-[#B83A3A] transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Learn More About Our Process
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="relative">
                <img
                  src="https://public.readdy.ai/ai/img_res/f2b047b8d265f0e7aec646cc444741d6.jpg"
                  alt="Spice Sourcing"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold text-[#D64545]">25+</p>
                  <p className="text-gray-600">Countries Sourced</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
    
    </div>
  );
}
export default App

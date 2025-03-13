"use client"

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tümü');
  const [isHovered, setIsHovered] = useState(null);
  
  const urunler = [
    {
      id: 1,
      ad: 'Premium Safran İplikleri',
      fiyat: 24.99,
      resim: 'https://public.readdy.ai/ai/img_res/8953891f814975f03e5b2715adb3c124.jpg',
      kategori: 'premium'
    },
    {
      id: 2,
      ad: 'Organik Zerdeçal Tozu',
      fiyat: 12.99,
      resim: 'https://public.readdy.ai/ai/img_res/7bb8082a038a1f72c7356230e5d4f5a3.jpg',
      kategori: 'organik'
    },
    {
      id: 3,
      ad: 'İsli Kırmızı Biber',
      fiyat: 9.99,
      resim: 'https://public.readdy.ai/ai/img_res/aee5666cfa6802fa2ea20a99a5ec391c.jpg',
      kategori: 'premium'
    }
  ];

  // Animasyon varyantları
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

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
      {/* Hero Bölümü */}
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Lezzetin Sanatını Keşfedin</h1>
            <p className="text-lg md:text-xl mb-8">Dünyanın dört bir yanından özenle seçilmiş en kaliteli baharatları deneyimleyin.</p>
            <button className="!rounded-button bg-[#D64545] text-white px-8 py-3 text-lg hover:bg-[#B83A3A] transition-transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Koleksiyonu Keşfet
            </button>
          </div>
        </motion.div>
      </div>

      {/* Ürün Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold"
          >
            Öne Çıkan Ürünler
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="w-24 h-1 bg-[#D64545] mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex justify-center mb-8 space-x-4"
        >
          {['tümü', 'premium', 'organik'].map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`!rounded-button px-6 py-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab ? 'bg-[#D64545] text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {urunler
                .filter(urun => activeTab === 'tümü' || urun.kategori === activeTab)
                .map((urun, index) => (
                  <motion.div
                    layout
                    key={urun.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        duration: 0.5,
                        delay: index * 0.1,
                        bounce: 0.2
                      }
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 400, duration: 0.2 }
                    }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl group"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        src={urun.resim}
                        alt={urun.ad}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-6 bg-white"
                    >
                      <h3 className="text-xl font-bold text-gray-900">{urun.ad}</h3>
                      <p className="text-gray-600 mt-2">
                        {urun.ad.toLowerCase()} benzersiz aroması ve canlı rengiyle mutfağınıza özel bir dokunuş katıyor.
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </section>

      {/* Kalite Taahhüdü Bölümü */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Kalite Taahhüdümüz
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
                    alt={index === 0 ? 'El ile seçim' : index === 1 ? 'Geleneksel işleme' : 'Kalite testi'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-semibold mb-3">
                    {index === 0 ? 'El ile Seçim' : index === 1 ? 'Geleneksel İşleme' : 'Kalite Testi'}
                  </h3>
                  <p className="text-gray-600">
                    {index === 0 ? 'Her baharat premium kaliteyi garanti etmek için özenle el ile seçilir' 
                     : index === 1 ? 'Otantik lezzetleri korumak için geleneksel yöntemler kullanıyoruz' 
                     : 'En yüksek kalite standartları için titiz testler'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Küresel Tedarik Bölümü */}
      <section className="py-20 bg-[#FDF8F6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold mb-6">Küresel Baharat Yolculuğu</h2>
              <p className="text-gray-600 mb-8">En kaliteli baharatları doğrudan geleneksel üreticilerden temin ediyoruz. Etik tedarik politikamız hem kaliteyi hem sürdürülebilirliği garanti ediyor.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fas fa-check-circle text-[#D64545] text-xl"></i>
                  <span className="text-gray-700">Yerel çiftçilerle doğrudan iş birliği</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-check-circle text-[#D64545] text-xl"></i>
                  <span className="text-gray-700">Sürdürülebilir hasat yöntemleri</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-check-circle text-[#D64545] text-xl"></i>
                  <span className="text-gray-700">Adil ticaret sertifikalı</span>
                </div>
              </div>
              <button className="!rounded-button mt-8 bg-[#D64545] text-white px-8 py-3 hover:bg-[#B83A3A] transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                Sürecimizi Öğrenin
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
                  alt="Baharat Tedariği"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-2xl font-bold text-[#D64545]">25+</p>
                  <p className="text-gray-600">Ülkeden Tedarik</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

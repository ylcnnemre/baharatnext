"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const page = () => {
    const urunler = [
        {
            id: 1,
            ad: "Premium Safran İplikleri",
            aciklama: "El hasadı yapılmış yoğun aromalı safran iplikleri. Paella, risotto ve Orta Doğu mutfağı için ideal.",
            menşei: "Keşmir Vadisi, Hindistan",
            fiyat: 299.99,
            puan: 4.9,
            yorum: 128,
            resim: "https://public.readdy.ai/ai/img_res/47689765ebe3c4aeba026ccd61dda72a.jpg",
            kategori: "premium",
        },
        {
            id: 2,
            ad: "Organik Zerdeçal Tozu",
            aciklama: "Yüksek kurkumin içerikli tek menşeli organik zerdeçal. Doğal şifalı özellikleri korunarak taş değirmende öğütülmüştür.",
            menşei: "Kerala, Hindistan",
            fiyat: 24.99,
            puan: 4.8,
            yorum: 256,
            resim: "https://public.readdy.ai/ai/img_res/08280c531c0d4ab80dcca58d5aa6dec3.jpg",
            kategori: "organik",
        },
        {
            id: 3,
            ad: "İsli Kırmızı Biber",
            aciklama: "Meşe odunu ile tütsülenmiş özel seçilmiş biberlerden yapılmış, derin aromalı isli kırmızıbiber.",
            menşei: "La Vera, İspanya",
            fiyat: 19.99,
            puan: 4.7,
            yorum: 189,
            resim: "https://public.readdy.ai/ai/img_res/8819fb2c45a4b48686c21aab6d27500a.jpg",
            kategori: "premium",
        },
        {
            id: 4,
            ad: "Seylan Tarçını",
            aciklama: "Narin aroması ve tatlı notalara sahip gerçek Seylan tarçını. Hem tatlı hem tuzlu yemeklerde kullanılabilir.",
            menşei: "Sri Lanka",
            fiyat: 34.99,
            puan: 4.9,
            yorum: 167,
            resim: "https://public.readdy.ai/ai/img_res/72b427dd35837d2d9aac91d67d960205.jpg",
            kategori: "premium",
        },
        {
            id: 5,
            ad: "Tellicherry Karabiber",
            aciklama: "Tek çiftlikten karmaşık lezzet profiline sahip Tellicherry karabiberi. En kaliteli karabiber çeşidi.",
            menşei: "Malabar Sahili, Hindistan",
            fiyat: 29.99,
            puan: 4.8,
            yorum: 203,
            resim: "https://public.readdy.ai/ai/img_res/b895af6c95e0b8c2f24968f64fa35a53.jpg",
            kategori: "premium",
        },
        {
            id: 6,
            ad: "Organik Kakule",
            aciklama: "El toplanmış yeşil kakule tohumları. Chai ve Orta Doğu mutfağı için vazgeçilmez bir lezzet.",
            menşei: "Guatemala",
            fiyat: 39.99,
            puan: 4.7,
            yorum: 145,
            resim: "https://public.readdy.ai/ai/img_res/1a8b8f811439c1af95799366b566cb3b.jpg",
            kategori: "organik",
        },
    ];
    const [seciliKategori, setSeciliKategori] = useState("tümü");
    const [siralama, setSiralama] = useState("öncelikli");
    const [filtreGoster, setFiltreGoster] = useState(false);
    const filtrelenenUrunler = urunler
        .filter(urun => 
            seciliKategori === "tümü" || urun.kategori === seciliKategori
        )
        .sort((a, b) => {
            switch(siralama) {
                case "ucuz": return a.fiyat - b.fiyat;
                case "pahalı": return b.fiyat - a.fiyat;
                case "puan": return b.puan - a.puan;
                default: return 0;
            }
        });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-16 min-h-screen bg-gray-50"
        >
            {/* Hero Bölümü */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative h-[50vh] bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('https://public.readdy.ai/ai/img_res/ac19ccf61221fae64936e021221b33a1.jpg')" }}
            >
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-black/50"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center text-center"
                >
                    <motion.h1
                        initial={{ y: 30, rotate: -2 }}
                        animate={{ y: 0, rotate: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Baharat Evreni
                    </motion.h1>
                </motion.div>
            </motion.div>

            {/* Ürün Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4 py-12"
            >
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    layout
                >
                    <AnimatePresence>
                        {filtrelenenUrunler.map((urun, index) => (
                            <motion.div
                                key={urun.id}
                                layout
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 100,
                                    delay: index * 0.05 
                                }}
                                whileHover={{ 
                                    y: -10,
                                    transition: { duration: 0.3 } 
                                }}
                                className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer"
                            >
                                <motion.div
                                    className="relative h-80 overflow-hidden"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <img
                                        src={urun.resim}
                                        alt={urun.ad}
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className="absolute inset-0 bg-black/40 flex items-center justify-center"
                                    >
                                        <motion.div
                                            initial={{ y: 20 }}
                                            whileInView={{ y: 0 }}
                                            className="text-center text-white p-4"
                                        >
                                            <h3 className="text-2xl font-bold mb-2">{urun.ad}</h3>
                                            <p className="italic">{urun.menşei}</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                {/* Açıklama ve Puan */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="p-6"
                                >
                                    <motion.p
                                        whileHover={{ x: 5 }}
                                        className="text-gray-600 mb-4 line-clamp-3"
                                    >
                                        {urun.aciklama}
                                    </motion.p>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.2 }}
                                                className={`text-xl ${i < Math.floor(urun.puan) ? 'text-yellow-400' : 'text-gray-300'}`}
                                            >
                                                ★
                                            </motion.span>
                                        ))}
                                        <span className="ml-2 text-sm text-gray-500">
                                            ({urun.yorum} değerlendirme)
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default page
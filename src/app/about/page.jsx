"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSeedling, FaHandHoldingHeart, FaGlobeAmericas } from 'react-icons/fa'

const page = () => {
    return (
        <section
            id="about"
            className="py-17 bg-gradient-to-b from-white to-[#FDF8F6]"
        >
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[60vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://public.readdy.ai/ai/img_res/c91bb865c37bb7ebd3303539951e2507.jpg')",
                }}
            >
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-black/40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-white max-w-4xl px-4"
                    >
                        <motion.h1
                            initial={{ y: 30 }}
                            animate={{ y: 0 }}
                            className="text-5xl font-bold mb-6"
                        >
                            1995'ten Beri Lezzet Mükemmelliği
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl"
                        >
                            Dünyanın en kaliteli baharatlarını geleneksel ustalık ve modern
                            teknoloji ile işlemeye adanmış bir kuruluş.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Hikayemiz
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                2010 yılında kurulan SpiceArtisan, basit bir misyonla yola çıktı: 
                                dünyanın en kaliteli baharatlarını tutkulu aşçılar ve mutfak 
                                meraklılarıyla buluşturmak. Yolculuğumuz Asya'nın canlı 
                                pazarlarında başladı ve beş kıtada premium baharat yetiştiricileriyle 
                                kurduğumuz ilişkilerle genişledi.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Bugün, dünya çapında 200'den fazla Michelin yıldızlı restoranın 
                                ve premium baharatların yemeklerinde yaratabileceği farkı takdir 
                                eden sayısız ev şefinin güvenilir baharat tedarikçisi olmaktan 
                                gurur duyuyoruz.
                            </p>
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#D64545] mb-2">
                                        15+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Yıllık Deneyim
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#D64545] mb-2">
                                        50+
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Tedarik Ülkesi
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-[#D64545] mb-2">
                                        100%
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        Organik Sertifikalı
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://public.readdy.ai/ai/img_res/d31311b5be37ed59d82e55dd4e7c4dbb.jpg"
                                alt="Hikayemiz"
                                className="rounded-xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/ae425166e63155359093a8ef9da67722.jpg"
                                    alt="Kalite Sertifikası"
                                    className="w-32"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-16 h-16 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                                <FaSeedling className="text-[#D64545] text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Değerlerimiz</h3>
                            <p className="text-gray-600">
                                Sürdürülebilir tarım uygulamalarına, adil ticaret ortaklıklarına 
                                ve nesillerdir aktarılan geleneksel baharat yetiştirme 
                                yöntemlerinin korunmasına inanıyoruz.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-16 h-16 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                                <FaHandHoldingHeart className="text-[#D64545] text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Taahhüdümüz</h3>
                            <p className="text-gray-600">
                                Koleksiyonumuzdaki her baharat, doğal yağlarını ve aromatik 
                                bileşenlerini korumak için titiz kalite testlerinden geçer 
                                ve özenle işlenir.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl">
                            <div className="w-16 h-16 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                                <FaGlobeAmericas className="text-[#D64545] text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Etkimiz</h3>
                            <p className="text-gray-600">
                                Dünya çapında 1.000'den fazla küçük ölçekli çiftçiyi destekleyerek, 
                                geleneksel tarım uygulamalarını korurken adil ücret almalarını 
                                sağlamaktan gurur duyuyoruz.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img
                                src="https://public.readdy.ai/ai/img_res/3e95c958b5d11865771a27785ce3012e.jpg"
                                alt="Sürecimiz"
                                className="rounded-xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                                <img
                                    src="https://public.readdy.ai/ai/img_res/9b05ce0a5a1a8e9ad1478f880f12b6da.jpg"
                                    alt="Organik Sertifika"
                                    className="w-32"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Sürecimiz
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-[#D64545] font-semibold">01</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Özenli Seçim
                                        </h4>
                                        <p className="text-gray-600">
                                            Uzmanlarımız, en kaliteli baharatları doğrudan sertifikalı 
                                            organik çiftliklerden tedarik etmek için dünyayı geziyor.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-[#D64545] font-semibold">02</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Kalite Testleri
                                        </h4>
                                        <p className="text-gray-600">
                                            Her parti, saflık, etkinlik ve aromatik bileşenler için 
                                            kapsamlı testlerden geçirilir.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-[#D64545] font-semibold">03</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Geleneksel İşleme
                                        </h4>
                                        <p className="text-gray-600">
                                            Geleneksel yöntemler modern teknoloji ile birleştirilerek 
                                            optimum lezzet korunması sağlanır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default page
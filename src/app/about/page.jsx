"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

            <div className="max-w-7xl mx-auto px-4 mt-20">
                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative"
                >
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D64545]"
                    />
                    <div className="space-y-16">
                        {[1995, 2005, 2015, 2025].map((year, index) => (
                            <motion.div
                                key={year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                className="relative"
                            >
                                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end md:justify-start md:pl-[50%] md:pr-8' : 'justify-start md:justify-end md:pr-[50%] md:pl-8'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg cursor-pointer"
                                    >
                                        <span className="text-[#D64545] font-bold">{year}</span>
                                        <h3 className="text-xl font-bold mt-2">
                                            {index === 0 && "Şirket Kuruluşu"}
                                            {index === 1 && "Global Genişleme"}
                                            {index === 2 && "Sürdürülebilirlik Girişimi"}
                                            {index === 3 && "Gelecek Vizyonu"}
                                        </h3>
                                        <p className="text-gray-600 mt-2">
                                            {index === 0 && "New York'un tarihi bölgesinde küçük bir aile baharat dükkanı olarak başladık."}
                                            {index === 1 && "Uluslararası pazarlara açılarak global bir marka haline geldik."}
                                            {index === 2 && "Sürdürülebilir tarım uygulamalarını ve çevre dostu üretim süreçlerini benimsedik."}
                                            {index === 3 && "İnovasyon ve sürdürülebilirlik odaklı geleceğe yönelik planlarımızı hayata geçiriyoruz."}
                                        </p>
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.2 + 0.7 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 -mt-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#D64545] border-4 border-white" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mission, Vision, Values */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-32"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Misyon', 'Vizyon', 'Değerler'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 + 1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-lg shadow-lg cursor-pointer"
                            >
                                <div className="text-[#D64545] text-3xl mb-4">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item}</h3>
                                <p className="text-gray-600">
                                    {index === 0 && "Dünyanın en kaliteli baharatlarını her mutfağa ulaştırırken sürdürülebilir tarım uygulamalarını ve geleneksel üreticileri desteklemek."}
                                    {index === 1 && "Baharat sektöründe global bir lider olarak, yenilikçi ürünler ve sürdürülebilir uygulamalarla dünya mutfaklarına ilham vermek."}
                                    {index === 2 && "Kalite, şeffaflık, sürdürülebilirlik ve müşteri memnuniyeti ilkelerine bağlı kalarak sektörde örnek bir kuruluş olmak."}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-32"
                >
                    <motion.h2
                        initial={{ y: 30 }}
                        animate={{ y: 0 }}
                        className="text-4xl font-bold text-center mb-16"
                    >
                        Yönetim Ekibimiz
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Ayşe Yılmaz",
                                position: "Genel Müdür",
                                image:
                                    "https://public.readdy.ai/ai/img_res/a5955ea0a222b3a8b58d21ea7391f9ca.jpg",
                            },
                            {
                                name: "Mehmet Kaya",
                                position: "Operasyon Müdürü",
                                image:
                                    "https://public.readdy.ai/ai/img_res/923037141a63ad90ea774fa51524f0d7.jpg",
                            },
                            {
                                name: "Zeynep Demir",
                                position: "İnovasyon Direktörü",
                                image:
                                    "https://public.readdy.ai/ai/img_res/c5cee5cdaa64b147709300d6b46f0d41.jpg",
                            },
                            {
                                name: "Ahmet Şahin",
                                position: "Global Tedarik Direktörü",
                                image:
                                    "https://public.readdy.ai/ai/img_res/b32d26e0fb9240fea47e0e5ede51f752.jpg",
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 + 1.2 }}
                                className="group relative overflow-hidden rounded-lg shadow-lg"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="aspect-w-1 aspect-h-1"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-sm">{member.position}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default page
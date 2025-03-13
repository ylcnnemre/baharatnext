"use client"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const page = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <section className="py-26 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        İletişim
                    </h2>
                    <p className="text-xl text-gray-600">
                        Size nasıl yardımcı olabileceğimizi bize bildirin, en kısa sürede dönüş yapalım.
                    </p>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="rounded-xl overflow-hidden shadow-lg"
                    >
                        <img
                            src="https://public.readdy.ai/ai/img_res/ddfce39d1bb063fcb0b853cfaa37e8f8.jpg"
                            alt="İletişim"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg p-8"
                    >
                        <motion.form 
                            variants={staggerChildren}
                            initial="hidden"
                            animate={inView ? "visible" : ""}
                            className="space-y-6"
                        >
                            <motion.div 
                                variants={fadeInUp}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                            <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ad
                                </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-[#D64545] focus:ring-[#D64545] bg-gray-50"
                                        placeholder="Adınızı giriniz"
                                />
                            </div>
                            <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Soyad
                                </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.02 }}
                                    type="text"
                                        className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-[#D64545] focus:ring-[#D64545] bg-gray-50"
                                        placeholder="Soyadınızı giriniz"
                                />
                            </div>
                            </motion.div>

                            {['email', 'subject', 'message'].map((field, i) => (
                                <motion.div
                                    key={field}
                                    variants={fadeInUp}
                                >
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {{
                                            email: 'E-posta',
                                            subject: 'Konu',
                                            message: 'Mesaj'
                                        }[field]}
                                </label>
                                    {field === 'subject' ? (
                                        <motion.select
                                            whileFocus={{ scale: 1.02 }}
                                            className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-[#D64545] focus:ring-[#D64545] bg-gray-50"
                                        >
                                            <option value="">Bir konu seçin</option>
                                            <option value="general">Genel Soru</option>
                                            <option value="support">Ürün Desteği</option>
                                            <option value="wholesale">Toptan Satış</option>
                                            <option value="other">Diğer</option>
                                        </motion.select>
                                    ) : field === 'message' ? (
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02 }}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-[#D64545] focus:ring-[#D64545] bg-gray-50"
                                            placeholder="Mesajınızı buraya yazın"
                                        />
                                    ) : (
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type={field}
                                            className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-[#D64545] focus:ring-[#D64545] bg-gray-50"
                                            placeholder={`${{
                                                email: 'E-posta adresiniz'
                                            }[field]}`}
                                        />
                                    )}
                                </motion.div>
                            ))}

                            <motion.button
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="!rounded-button w-full bg-[#D64545] text-white py-3 px-6 hover:bg-[#B83A3A] transition-colors cursor-pointer whitespace-nowrap"
                            >
                                Mesaj Gönder
                            </motion.button>
                        </motion.form>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
                        >
                            {[
                                { icon: 'map-marker-alt', title: 'Adres', content: 'Baharat Sokak No:123, İstanbul' },
                                { icon: 'phone', title: 'Telefon', content: '+90 (555) 123 45 67' },
                                { icon: 'envelope', title: 'E-posta', content: 'iletisim@bahat.com' }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ scale: 0.9 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-[#D64545] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <i className={`fas fa-${item.icon} text-[#D64545] text-xl`} />
                            </div>
                                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{item.content}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default page
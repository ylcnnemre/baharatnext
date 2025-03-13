"use client"
import React, { useState } from 'react'

const page = () => {
    const products = [
        {
            id: 1,
            name: "Premium Saffron Threads",
            description:
                "Hand-harvested premium quality saffron threads with intense aroma and rich golden-red color. Perfect for paella, risotto, and middle eastern cuisine.",
            origin: "Kashmir Valley, India",
            price: 299.99,
            rating: 4.9,
            reviews: 128,
            image:
                "https://public.readdy.ai/ai/img_res/47689765ebe3c4aeba026ccd61dda72a.jpg",
            category: "premium",
        },
        {
            id: 2,
            name: "Organic Turmeric Powder",
            description:
                "Single-origin organic turmeric with high curcumin content. Stone-ground to preserve its natural healing properties and vibrant color.",
            origin: "Kerala, India",
            price: 24.99,
            rating: 4.8,
            reviews: 256,
            image:
                "https://public.readdy.ai/ai/img_res/08280c531c0d4ab80dcca58d5aa6dec3.jpg",
            category: "organic",
        },
        {
            id: 3,
            name: "Smoked Paprika",
            description:
                "Traditional oak-smoked paprika with intense depth and complexity. Made from specially selected peppers dried over oak wood.",
            origin: "La Vera, Spain",
            price: 19.99,
            rating: 4.7,
            reviews: 189,
            image:
                "https://public.readdy.ai/ai/img_res/8819fb2c45a4b48686c21aab6d27500a.jpg",
            category: "premium",
        },
        {
            id: 4,
            name: "Ceylon Cinnamon",
            description:
                "True Ceylon cinnamon with delicate, complex flavor and sweet aromatic notes. Perfect for both sweet and savory dishes.",
            origin: "Sri Lanka",
            price: 34.99,
            rating: 4.9,
            reviews: 167,
            image:
                "https://public.readdy.ai/ai/img_res/72b427dd35837d2d9aac91d67d960205.jpg",
            category: "premium",
        },
        {
            id: 5,
            name: "Tellicherry Black Pepper",
            description:
                "Single-estate Tellicherry peppercorns with complex flavor profile and intense aroma. The finest grade of black pepper available.",
            origin: "Malabar Coast, India",
            price: 29.99,
            rating: 4.8,
            reviews: 203,
            image:
                "https://public.readdy.ai/ai/img_res/b895af6c95e0b8c2f24968f64fa35a53.jpg",
            category: "premium",
        },
        {
            id: 6,
            name: "Organic Cardamom Pods",
            description:
                "Handpicked green cardamom pods with intense aromatic oils and complex flavor profile. Essential for chai and middle eastern cuisine.",
            origin: "Guatemala",
            price: 39.99,
            rating: 4.7,
            reviews: 145,
            image:
                "https://public.readdy.ai/ai/img_res/1a8b8f811439c1af95799366b566cb3b.jpg",
            category: "organic",
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);
    const filteredProducts = products
        .filter(
            (product) =>
                selectedCategory === "all" || product.category === selectedCategory,
        )
        .sort((a, b) => {
            switch (sortBy) {
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "rating":
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });

    return (
        <div className="pt-16 min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <div
                className="relative h-[40vh] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://public.readdy.ai/ai/img_res/ac19ccf61221fae64936e021221b33a1.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Our Collection
                        </h1>
                        <p className="text-xl text-white">
                            Discover our carefully curated selection of premium spices
                        </p>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Filters and Sort */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`!rounded-button px-6 py-2 text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${selectedCategory === "all"
                                ? "bg-[#D64545] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            All Spices
                        </button>
                        <button
                            onClick={() => setSelectedCategory("premium")}
                            className={`!rounded-button px-6 py-2 text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${selectedCategory === "premium"
                                ? "bg-[#D64545] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            Premium Selection
                        </button>
                        <button
                            onClick={() => setSelectedCategory("organic")}
                            className={`!rounded-button px-6 py-2 text-sm transition-all duration-300 cursor-pointer whitespace-nowrap ${selectedCategory === "organic"
                                ? "bg-[#D64545] text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            Organic Collection
                        </button>
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="!rounded-button bg-white px-6 py-2 text-sm flex items-center space-x-2 cursor-pointer whitespace-nowrap"
                        >
                            <i className="fas fa-sort-amount-down"></i>
                            <span>Sort By</span>
                        </button>
                        {showFilters && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                                <div className="py-2">
                                    <button
                                        onClick={() => {
                                            setSortBy("featured");
                                            setShowFilters(false);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                    >
                                        Featured
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSortBy("price-low");
                                            setShowFilters(false);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                    >
                                        Price: Low to High
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSortBy("price-high");
                                            setShowFilters(false);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                    >
                                        Price: High to Low
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSortBy("rating");
                                            setShowFilters(false);
                                        }}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                    >
                                        Highest Rated
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4">
                                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
                                        <i className="far fa-heart text-gray-600"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <span className="text-sm text-gray-500 italic">
                                        {product.origin}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center text-yellow-400">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <i
                                                key={index}
                                                className={`fas fa-star ${index < Math.floor(product.rating)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                            ></i>
                                        ))}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">
                                        ({product.reviews} reviews)
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-[#D64545]">
                                        ${product.price}
                                    </span>
                                    <button className="!rounded-button bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors cursor-pointer whitespace-nowrap">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
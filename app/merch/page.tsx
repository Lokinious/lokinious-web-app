'use client';

import { useState } from 'react';

interface MerchItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export default function MerchPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock merchandise items - replace with actual product data/API
  const merchItems: MerchItem[] = [
    {
      id: 1,
      name: 'Neon Logo T-Shirt',
      price: 29.99,
      description: 'Premium cotton tee with glowing Lokinious logo',
      category: 'apparel',
    },
    {
      id: 2,
      name: 'Gaming Hoodie',
      price: 54.99,
      description: 'Comfortable hoodie perfect for gaming sessions',
      category: 'apparel',
    },
    {
      id: 3,
      name: 'Neon Cap',
      price: 24.99,
      description: 'Adjustable cap with embroidered logo',
      category: 'accessories',
    },
    {
      id: 4,
      name: 'Gaming Mouse Pad',
      price: 19.99,
      description: 'Extra-large mouse pad with neon design',
      category: 'accessories',
    },
    {
      id: 5,
      name: 'Lokinious Sticker Pack',
      price: 9.99,
      description: 'Set of 10 premium vinyl stickers',
      category: 'accessories',
    },
    {
      id: 6,
      name: 'Limited Edition Jersey',
      price: 69.99,
      description: 'Exclusive team jersey with player number',
      category: 'apparel',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? merchItems
      : merchItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6 animate-pulse-glow">
            Exclusive Merch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Show your support with exclusive Lokinious merchandise. Limited edition items available!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#39ff14] text-black'
                  : 'border-2 border-[#39ff14]/30 text-[#39ff14] hover:bg-[#39ff14]/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg overflow-hidden hover:neon-glow transition-all duration-300"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gray-900 flex items-center justify-center border-b-2 border-[#39ff14]/30">
                <div className="text-8xl text-[#39ff14]">👕</div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#39ff14] mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#39ff14]">
                    ${item.price.toFixed(2)}
                  </span>
                  <button className="bg-[#39ff14] text-black px-6 py-2 rounded-lg font-bold hover:neon-glow transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-[#39ff14] mb-6">More Coming Soon!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re constantly adding new merchandise to our store. Join our newsletter to be 
            the first to know about new releases and exclusive drops!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black border-2 border-[#39ff14]/30 rounded-lg text-gray-300 focus:border-[#39ff14] focus:outline-none"
            />
            <button className="bg-[#39ff14] text-black px-8 py-3 rounded-lg font-bold hover:neon-glow transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-[#39ff14] mb-2">Free Shipping</h3>
            <p className="text-gray-400">On orders over $50</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-[#39ff14] mb-2">Premium Quality</h3>
            <p className="text-gray-400">High-quality materials and printing</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-[#39ff14] mb-2">Easy Returns</h3>
            <p className="text-gray-400">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

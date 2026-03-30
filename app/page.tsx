'use client';

import { useState } from 'react';
import { products, categories, Product } from './data/products';
import Link from 'next/link';

function ProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/product/${product.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-blue-700 text-white text-sm font-medium px-3 py-1 rounded-full">
          ¥{product.price}
        </span>
      </div>
      <div className="p-4">
        <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium">
          {product.category}
        </span>
        <h3 className="font-semibold text-gray-800 mt-2 mb-1 group-hover:text-blue-700 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredProducts = selectedCategory === '全部' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-700">Jack爸爸学数学</h1>
              <p className="text-gray-500 text-sm mt-0.5">数学思维训练打印纸玩具</p>
            </div>
            <Link 
              href="/cart" 
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              购物车
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">一页纸游戏打印</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            每个视频配套一页纸游戏，支持A4/A5尺寸打印，普通纸/铜版纸选择
          </p>
          <div className="mt-4 inline-block bg-amber-500 text-white px-4 py-2 rounded-lg font-medium">
            🎉 全流程测试中 - ROS-5
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Category Filter */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">暂无该分类产品</h2>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p className="font-medium text-blue-700">© 2024 Jack爸爸学数学</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

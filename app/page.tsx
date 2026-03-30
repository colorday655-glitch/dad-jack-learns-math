'use client';

import { useState } from 'react';
import { products, categories, Product } from './data/products';
import Link from 'next/link';

function ProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/product/${product.id}`}
      className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm px-4 py-1.5 rounded-full font-medium shadow-lg animate-pulse-glow">
          ¥{product.price}
        </span>
      </div>
      <div className="p-5">
        <span className="inline-block text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg text-white mt-3 mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center text-cyan-400 text-sm group-hover:translate-x-2 transition-transform">
          <span>查看详情</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
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
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold gradient-text">Jack爸爸学数学</h1>
              <p className="text-slate-400 text-sm mt-0.5">🎮 一页纸游戏打印</p>
            </div>
            <Link 
              href="/cart" 
              className="group relative px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl font-medium text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                🛒 购物车
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="glass rounded-2xl p-6 mb-10 gradient-border">
      <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📚</span>
          <p className="text-slate-200">每个视频配套一页纸游戏，支持A4/A5尺寸打印，普通纸/铜版纸选择</p>
        </div>
        <div className="mt-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-4 border border-green-500/30">
          <p className="text-green-300 text-center font-medium">🎉 全流程测试中 - ROS-4</p>
        </div>
        </div>

        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30'
                  : 'glass text-slate-300 hover:bg-indigo-500/20 hover:border-indigo-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-slate-300 mb-2">暂无该分类产品</h2>
          </div>
        )}
      </main>

      <footer className="glass mt-16 border-t border-indigo-500/20">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-500 text-sm">
          <span className="gradient-text font-medium">© 2024 Jack爸爸学数学</span> · All rights reserved.
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { products, categories, printOptions, Product } from './data/products';
import Link from 'next/link';

function ProductCard({ product }: { product: Product }) {
  return (
    <Link 
      href={`/product/${product.id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-video">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-sm px-3 py-1 rounded font-medium">
          ¥{product.price}
        </span>
      </div>
      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {product.category}
        </span>
        <h3 className="font-semibold text-lg text-gray-800 mt-2 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Jack爸爸学数学</h1>
              <p className="text-gray-500 mt-1">一页纸游戏打印</p>
            </div>
            <Link href="/cart" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              🛒 购物车
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-4 mb-8">
          <p className="text-blue-800">
            📚 每个视频配套一页纸游戏，支持A4/A5尺寸打印，普通纸/铜版纸选择
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
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
          <div className="text-center py-20 text-gray-500">
            暂无该分类产品
          </div>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          © 2024 Jack爸爸学数学. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
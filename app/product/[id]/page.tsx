'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { products, printOptions } from '../../data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('a4');
  const [selectedPaper, setSelectedPaper] = useState('normal');
  const [adding, setAdding] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">产品未找到</h1>
          <Link href="/" className="text-blue-500 hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const sizePrice = printOptions.sizes.find(s => s.id === selectedSize)?.price || 0;
  const paperPrice = printOptions.paper.find(p => p.id === selectedPaper)?.price || 0;
  const totalPrice = (product.price + sizePrice + paperPrice) * quantity;

  const addToCart = () => {
    const cartItem = {
      productId: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      basePrice: product.price,
      size: selectedSize,
      paper: selectedPaper,
      quantity: quantity,
      unitPrice: product.price + sizePrice + paperPrice,
      totalPrice: totalPrice,
    };

    if (typeof window !== 'undefined') {
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      existingCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(existingCart));
    }

    setAdding(true);
    setTimeout(() => setAdding(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← 返回产品列表
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-2">
                {product.title}
              </h1>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              
              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-800 mb-3">打印选项</h3>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">尺寸</label>
                  <div className="flex gap-2">
                    {printOptions.sizes.map((size: any) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        className={`px-3 py-2 rounded border ${
                          selectedSize === size.id 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-200 text-gray-600'
                        }`}
                      >
                        {size.name} {size.price > 0 ? `+¥${size.price}` : size.price < 0 ? `-¥${Math.abs(size.price)}` : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">纸质</label>
                  <div className="flex gap-2">
                    {printOptions.paper.map((paper: any) => (
                      <button
                        key={paper.id}
                        onClick={() => setSelectedPaper(paper.id)}
                        className={`px-3 py-2 rounded border ${
                          selectedPaper === paper.id 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-200 text-gray-600'
                        }`}
                      >
                        {paper.name} {paper.price > 0 ? `+¥${paper.price}` : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-2">数量</label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-200 rounded px-3 py-2"
                  >
                    {printOptions.quantity.map((q: any) => (
                      <option key={q} value={q}>{q}份</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">单价: ¥{product.price + sizePrice + paperPrice}</span>
                  <span className="text-2xl font-bold text-orange-500">¥{totalPrice}</span>
                </div>
                
                <button
                  onClick={addToCart}
                  disabled={adding}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    adding 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {adding ? '✓ 已加入购物车' : '🛒 加入购物车'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">产品说明</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 每个产品对应一个视频的一页纸游戏</li>
            <li>• PDF格式，下载后可直接打印</li>
            <li>• A4尺寸建议双面打印，A5尺寸建议单面</li>
            <li>• 铜版纸效果更佳，适合长期使用</li>
          </ul>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          © 2024 Jack爸爸学数学. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
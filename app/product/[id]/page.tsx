'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { products, printOptions } from '../../data/products';
import Link from 'next/link';

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">产品未找到</h1>
          <Link href="/" className="text-blue-500">返回首页</Link>
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
      totalPrice,
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
      <header className="bg-white border-b">
        <div className="max-w-md mx-auto px-4 py-3">
          <Link href="/" className="text-blue-500 text-sm hover:underline">
            ← 返回
          </Link>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full"
            style={{ aspectRatio: '16/9' }}
          />
          
          <div className="p-4">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
              {product.category}
            </span>
            
            <h1 className="text-lg font-bold text-gray-800 mt-2 mb-2">
              {product.title}
            </h1>
            
            <p className="text-sm text-gray-500 mb-4">
              {product.description}
            </p>

            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-400 mb-1">尺寸</div>
                <div className="flex gap-2">
                  {printOptions.sizes.map((size: any) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`flex-1 py-2 rounded text-sm ${
                        selectedSize === size.id 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-400 mb-1">纸质</div>
                <div className="flex gap-2">
                  {printOptions.paper.map((paper: any) => (
                    <button
                      key={paper.id}
                      onClick={() => setSelectedPaper(paper.id)}
                      className={`flex-1 py-2 rounded text-sm ${
                        selectedPaper === paper.id 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {paper.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs text-gray-400 mb-1">数量</div>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 text-sm"
                >
                  {printOptions.quantity.map((q: any) => (
                    <option key={q} value={q}>{q} 份</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400">总价</span>
                <div className="text-xl font-bold text-orange-500">¥{totalPrice}</div>
              </div>
              
              <button
                onClick={addToCart}
                disabled={adding}
                className={`px-6 py-2.5 rounded-lg font-medium text-sm ${
                  adding 
                    ? 'bg-green-500 text-white' 
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                {adding ? '✓ 已加入' : '加入购物车'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-4 text-gray-400 text-xs">
        © 2024 Jack爸爸学数学
      </footer>
    </div>
  );
}
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
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-blue-500 hover:underline text-sm">
            ← 返回产品列表
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
            </div>
            
            <div className="md:w-3/5 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-xl font-bold text-gray-800 mb-2">
                {product.title}
              </h1>
              
              <p className="text-gray-500 text-sm mb-6">
                {product.description}
              </p>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-2">尺寸</div>
                  <div className="flex gap-2">
                    {printOptions.sizes.map((size: any) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selectedSize === size.id 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {size.name}
                        <span className="ml-1 text-xs">
                          {size.price > 0 ? `+¥${size.price}` : size.price < 0 ? `-¥${Math.abs(size.price)}` : ''}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 mb-2">纸质</div>
                  <div className="flex gap-2">
                    {printOptions.paper.map((paper: any) => (
                      <button
                        key={paper.id}
                        onClick={() => setSelectedPaper(paper.id)}
                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                          selectedPaper === paper.id 
                            ? 'border-blue-500 bg-blue-50 text-blue-700' 
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {paper.name}
                        {paper.price > 0 && <span className="ml-1 text-xs">+¥{paper.price}</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 mb-2">数量</div>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  >
                    {printOptions.quantity.map((q: any) => (
                      <option key={q} value={q}>{q} 份</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-xs text-gray-500">单价</span>
                    <div className="text-lg font-bold text-orange-500">¥{product.price + sizePrice + paperPrice}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">总计</span>
                    <div className="text-2xl font-bold text-orange-500">¥{totalPrice}</div>
                  </div>
                </div>
                
                <button
                  onClick={addToCart}
                  disabled={adding}
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    adding 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white hover:bg-orange-600 active:scale-98'
                  }`}
                >
                  {adding ? '✓ 已加入购物车' : '🛒 加入购物车'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-sm p-5">
          <h2 className="text-sm font-medium text-gray-800 mb-3">📋 产品说明</h2>
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
            <span>✓ 对应视频课程</span>
            <span>✓ PDF格式下载</span>
            <span>✓ 支持A4/A5打印</span>
            <span>✓ 多种纸张选择</span>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center text-gray-400 text-xs">
          © 2024 Jack爸爸学数学
        </div>
      </footer>
    </div>
  );
}
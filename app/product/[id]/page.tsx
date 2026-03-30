'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  price: number;
}

const products: Product[] = [
  { id: '1', title: '把积木变平了', description: '空间思维训练游戏', category: '空间思维', thumbnail: '/images/1.jpg', price: 9.9 },
  { id: '2', title: '等价交换入门', description: '逻辑思维训练', category: '逻辑思维', thumbnail: '/images/2.jpg', price: 9.9 },
  { id: '3', title: '周期性规律', description: '逻辑思维训练', category: '逻辑思维', thumbnail: '/images/3.jpg', price: 9.9 },
  { id: '4', title: '凑十法入门', description: '计算能力训练', category: '计算能力', thumbnail: '/images/4.jpg', price: 9.9 },
  { id: '5', title: '进制逻辑入门', description: '逻辑思维训练', category: '逻辑思维', thumbnail: '/images/5.jpg', price: 9.9 },
  { id: '6', title: '模块化思维', description: '解决问题训练', category: '解决问题', thumbnail: '/images/6.jpg', price: 9.9 },
  { id: '7', title: '形状属性逻辑', description: '空间思维训练', category: '空间思维', thumbnail: '/images/7.jpg', price: 9.9 },
  { id: '8', title: '减法逻辑入门', description: '计算能力训练', category: '计算能力', thumbnail: '/images/8.jpg', price: 9.9 },
  { id: '9', title: '加法逻辑入门', description: '计算能力训练', category: '计算能力', thumbnail: '/images/9.jpg', price: 9.9 },
  { id: '10', title: '符号化思维', description: '逻辑思维训练', category: '逻辑思维', thumbnail: '/images/10.jpg', price: 9.9 },
  { id: '11', title: '坐标系定位', description: '空间思维训练', category: '空间思维', thumbnail: '/images/11.jpg', price: 9.9 },
  { id: '12', title: '相对性原理', description: '空间思维训练', category: '空间思维', thumbnail: '/images/12.jpg', price: 9.9 },
  { id: '13', title: '集合逻辑入门', description: '逻辑思维训练', category: '逻辑思维', thumbnail: '/images/13.jpg', price: 9.9 },
];

const sizes = [
  { id: 'a4', name: 'A4', price: 0 },
  { id: 'a5', name: 'A5', price: -2 },
];

const papers = [
  { id: 'normal', name: '普通纸', price: 0 },
  { id: 'glossy', name: '铜版纸', price: 5 },
];

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('a4');
  const [selectedPaper, setSelectedPaper] = useState('normal');
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-white mb-4">产品未找到</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← 返回产品列表
          </Link>
        </div>
      </div>
    );
  }

  const sizePrice = sizes.find(s => s.id === selectedSize)?.price || 0;
  const paperPrice = papers.find(p => p.id === selectedPaper)?.price || 0;
  const total = (product.price + sizePrice + paperPrice) * quantity;

  const handleAddToCart = () => {
    const item = {
      productId: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      basePrice: product.price,
      size: selectedSize,
      paper: selectedPaper,
      quantity: quantity,
      unitPrice: product.price + sizePrice + paperPrice,
      totalPrice: total,
    };
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-md mx-auto px-5 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回产品列表
          </Link>
        </div>
      </header>

      <main className="max-w-md mx-auto px-5 py-8">
        <div className="glass rounded-2xl overflow-hidden">
          <div className="relative">
            <img 
              src={product.thumbnail} 
              alt={product.title}
              className="w-full block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <div className="p-6">
            <span className="inline-block text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
              {product.category}
            </span>
            
            <h1 className="text-xl font-bold text-white mt-3">
              {product.title}
            </h1>
            
            <p className="text-sm text-slate-400 mt-2">
              {product.description}
            </p>

            <div className="mt-6">
              <div className="text-xs text-slate-500 mb-3">📐 尺寸</div>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSize === size.id
                        ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30'
                        : 'glass text-slate-300 hover:bg-indigo-500/20'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs text-slate-500 mb-3">📄 纸质</div>
              <div className="flex gap-3">
                {papers.map(paper => (
                  <button
                    key={paper.id}
                    onClick={() => setSelectedPaper(paper.id)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedPaper === paper.id
                        ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30'
                        : 'glass text-slate-300 hover:bg-indigo-500/20'
                    }`}
                  >
                    {paper.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs text-slate-500 mb-3">🔢 数量</div>
              <select 
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full glass bg-indigo-500/10 border border-indigo-500/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-indigo-500"
              >
                {[1,2,3,4,5,10,20].map(q => (
                  <option key={q} value={q} className="bg-slate-800">{q} 份</option>
                ))}
              </select>
            </div>

            <div className="mt-6 pt-6 border-t border-indigo-500/20 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500">总计</div>
                <div className="text-3xl font-bold gradient-text">¥{total}</div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className={`px-8 py-3 rounded-xl font-medium transition-all hover:-translate-y-1 ${
                  added 
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
                    : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30'
                }`}
              >
                {added ? '✓ 已加入' : '🛒 加入购物车'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-slate-500 text-sm">
        © 2024 Jack爸爸学数学
      </footer>
    </div>
  );
}

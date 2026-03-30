'use client';

import { useState, useEffect } from 'react';
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
  { id: 'G101', title: '集合逻辑入门', description: '建立分类与集合思维的数学游戏，适合1-2年级。', category: '逻辑思维', thumbnail: '/images/G101.svg', price: 9.9 },
  { id: 'G102', title: '相对性原理', description: '理解相对与比较的空间游戏，适合1-2年级。', category: '空间思维', thumbnail: '/images/G102.svg', price: 9.9 },
  { id: 'G103', title: '坐标系定位', description: '建立空间索引能力的坐标游戏，适合1-3年级。', category: '空间思维', thumbnail: '/images/G103.svg', price: 9.9 },
  { id: 'G104', title: '符号化思维', description: '训练信息压缩与抽象思维的数学游戏，适合1-3年级。', category: '逻辑思维', thumbnail: '/images/G104.svg', price: 9.9 },
  { id: 'G105', title: '加法逻辑入门', description: '理解加法系统集成思维的游戏，适合1-2年级。', category: '计算能力', thumbnail: '/images/G105.svg', price: 9.9 },
  { id: 'G106', title: '减法逻辑入门', description: '理解减法意义的差值寻找游戏，适合1-2年级。', category: '计算能力', thumbnail: '/images/G106.svg', price: 9.9 },
  { id: 'G107', title: '形状属性逻辑', description: '认识几何形状与功能的关系，适合1-3年级。', category: '空间思维', thumbnail: '/images/G107.svg', price: 9.9 },
  { id: 'G108', title: '模块化思维', description: '培养问题拆解能力的乐高式游戏，适合1-3年级。', category: '解决问题', thumbnail: '/images/G108.svg', price: 9.9 },
  { id: 'G109', title: '进制逻辑入门', description: '理解数字结构的进制游戏，适合1-3年级。', category: '逻辑思维', thumbnail: '/images/G109.svg', price: 9.9 },
  { id: 'G110', title: '凑十法入门', description: '训练计算速度的凑十法练习游戏，适合1-2年级。', category: '计算能力', thumbnail: '/images/G110.svg', price: 9.9 },
  { id: 'G111', title: '周期性规律', description: '认识时间与周期的数学游戏，适合小学1-2年级。', category: '逻辑思维', thumbnail: '/images/G111.svg', price: 9.9 },
  { id: 'G112', title: '等价交换入门', description: '帮助孩子理解价值交换逻辑的人民币游戏，适合1-3年级。', category: '逻辑思维', thumbnail: '/images/G112.svg', price: 9.9 },
  { id: 'G201', title: '把积木变平了', description: '适合小学1-3年级的空间思维训练游戏。包含影子配对、立体图形辨识等趣味练习。', category: '空间思维', thumbnail: '/images/G201.svg', price: 9.9 },
  { id: 'G202', title: '七块板的魔法', description: '拼图与空间想象力的游戏，适合1-3年级。', category: '空间思维', thumbnail: '/images/G202.svg', price: 9.9 },
  { id: 'G203', title: '最听话的正方形', description: '对称与旋转的空间思维游戏，适合1-3年级。', category: '空间思维', thumbnail: '/images/G203.svg', price: 9.9 },
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
  const [customImage, setCustomImage] = useState<string | null>(null);

  const product = products.find(p => p.id === id);

  useEffect(() => {
    if (id) {
      const uploaded = localStorage.getItem(`game_${id}`);
      if (uploaded) {
        setCustomImage(uploaded);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">产品未找到</h1>
          <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回产品列表
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-xl p-8 mb-6">
          <img 
            src={customImage || product.thumbnail} 
            alt={product.title}
            className="w-full max-h-80 object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="mb-6">
          <span className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium">
            {product.category}
          </span>
          
          <h1 className="text-2xl font-bold text-gray-800 mt-3">
            {product.title}
          </h1>
          
          <p className="text-gray-500 mt-2">
            {product.description}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Size */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">📐 尺寸</div>
            <div className="flex gap-3">
              {sizes.map(size => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                    selectedSize === size.id
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Paper */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">📄 纸质</div>
            <div className="flex gap-3">
              {papers.map(paper => (
                <button
                  key={paper.id}
                  onClick={() => setSelectedPaper(paper.id)}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                    selectedPaper === paper.id
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {paper.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">🔢 数量</div>
            <select 
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 text-gray-800 focus:outline-none focus:border-blue-700"
            >
              {[1,2,3,4,5,10,20].map(q => (
                <option key={q} value={q}>{q} 份</option>
              ))}
            </select>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">总计</div>
            <div className="text-3xl font-bold text-blue-700">¥{total}</div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className={`px-8 py-3 rounded-lg font-medium transition-all ${
              added 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-700 hover:bg-blue-800 text-white'
            }`}
          >
            {added ? '✓ 已加入' : (
              <>
                <svg className="w-5 h-5 inline mr-1" viewBox="0 0 24 24">
                  <path fill="white" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                加入购物车
              </>
            )}
          </button>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2024 Jack爸爸学数学
      </footer>
    </div>
  );
}

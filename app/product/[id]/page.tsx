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
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>产品未找到</h1>
          <Link href="/" style={{ color: '#3b82f6' }}>返回首页</Link>
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
      size: selectedSize,
      paper: selectedPaper,
      quantity: quantity,
      total: total,
    };
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '12px 16px' }}>
        <Link href="/" style={{ color: '#3b82f6', fontSize: '14px' }}>← 返回产品列表</Link>
      </header>

      <main style={{ maxWidth: '400px', margin: '0 auto', padding: '16px' }}>
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <img 
            src={product.thumbnail} 
            alt={product.title}
            style={{ width: '100%', display: 'block' }}
          />
          
          <div style={{ padding: '16px' }}>
            <span style={{ fontSize: '12px', background: '#dbeafe', color: '#1d4ed8', padding: '2px 8px', borderRadius: '4px' }}>
              {product.category}
            </span>
            
            <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginTop: '8px' }}>
              {product.title}
            </h1>
            
            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
              {product.description}
            </p>

            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>尺寸</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      border: selectedSize === size.id ? 'none' : '1px solid #e5e7eb',
                      background: selectedSize === size.id ? '#3b82f6' : '#f3f4f6',
                      color: selectedSize === size.id ? 'white' : '#4b5563',
                      fontSize: '14px',
                    }}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>纸质</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {papers.map(paper => (
                  <button
                    key={paper.id}
                    onClick={() => setSelectedPaper(paper.id)}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      border: selectedPaper === paper.id ? 'none' : '1px solid #e5e7eb',
                      background: selectedPaper === paper.id ? '#3b82f6' : '#f3f4f6',
                      color: selectedPaper === paper.id ? 'white' : '#4b5563',
                      fontSize: '14px',
                    }}
                  >
                    {paper.name}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>数量</div>
              <select 
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '14px' }}
              >
                {[1,2,3,4,5,10,20].map(q => (
                  <option key={q} value={q}>{q} 份</option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>总计</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f97316' }}>¥{total}</div>
              </div>
              
              <button
                onClick={handleAddToCart}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  background: added ? '#22c55e' : '#f97316',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  border: 'none',
                }}
              >
                {added ? '✓ 已加入' : '加入购物车'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '16px', color: '#9ca3af', fontSize: '12px' }}>
        © 2024 Jack爸爸学数学
      </footer>
    </div>
  );
}
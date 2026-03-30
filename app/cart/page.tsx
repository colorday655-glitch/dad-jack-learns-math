'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CartItem {
  productId: string;
  title: string;
  thumbnail: string;
  basePrice: number;
  size: string;
  paper: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setLoading(false);
  }, []);

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const updateQuantity = (index: number, quantity: number) => {
    const newCart = [...cart];
    const item = newCart[index];
    item.quantity = quantity;
    item.totalPrice = item.unitPrice * quantity;
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', '[]');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass rounded-xl px-8 py-4">
            <div className="flex items-center gap-3 text-blue-700">
            <div className="w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" />
            <span>加载中...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <div className="h-6 w-px bg-blue-800/30" />
            <h1 className="text-2xl font-bold gradient-text">购物车</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
          {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-float">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">购物车是空的</h2>
            <p className="text-gray-500 mb-8">快去选择喜欢的游戏吧！</p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-800 to-amber-500 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-blue-800/30 transition-all hover:-translate-y-1"
            >
              去选购
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ) : (
          <>
            <div className="glass rounded-2xl overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-blue-800/10">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm font-medium text-gray-600">商品</th>
                    <th className="px-5 py-4 text-left text-sm font-medium text-gray-600">规格</th>
                    <th className="px-5 py-4 text-center text-sm font-medium text-gray-600">单价</th>
                    <th className="px-5 py-4 text-center text-sm font-medium text-gray-600">数量</th>
                    <th className="px-5 py-4 text-center text-sm font-medium text-gray-600">小计</th>
                    <th className="px-5 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-800/10">
                  {cart.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-800/5 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-16 h-16 object-cover rounded-lg" 
                          />
                          <div>
                            <div className="font-medium text-gray-800">{item.title}</div>
                            <div className="text-sm text-gray-500">¥{item.basePrice}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-gray-500">
                        {item.size === 'a4' ? '📄 A4' : '📄 A5'} / {item.paper === 'normal' ? '普通纸' : '铜版纸'}
                      </td>
                      <td className="px-5 py-4 text-center text-gray-600">¥{item.unitPrice}</td>
                      <td className="px-5 py-4 text-center">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(index, Number(e.target.value))}
                          className="glass bg-blue-800/10 border border-blue-800/20 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:border-blue-800"
                        >
                          {[1, 2, 3, 4, 5, 10, 20].map((q) => (
                            <option key={q} value={q} className="bg-white">{q}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-5 py-4 text-center font-bold text-blue-700">¥{item.totalPrice}</td>
                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() => removeItem(index)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mb-6">
              <button 
                onClick={clearCart} 
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                清空购物车
              </button>
              <div className="text-gray-500">
                共 <span className="text-gray-800 font-medium">{cart.length}</span> 件商品
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500">合计：</span>
                <span className="text-4xl font-bold gradient-text">¥{totalPrice}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5">
                  💚 微信支付
                </button>
                <button className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-blue-800 to-blue-600 hover:shadow-lg hover:shadow-blue-800/30 transition-all hover:-translate-y-0.5">
                  💙 支付宝
                </button>
                <button className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-amber-500 to-yellow-400 hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5">
                  💳 银行卡支付
                </button>
              </div>
              
              <p className="text-center text-gray-500 text-sm mt-5">
                ✨ 点击上方按钮完成支付
              </p>
            </div>
          </>
        )}
      </main>

      <footer className="glass mt-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <span className="gradient-text font-medium">© 2024 Jack爸爸学数学</span> · All rights reserved.
        </div>
      </footer>
    </div>
  );
}

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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex items-center gap-3 text-blue-700">
          <div className="w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin" />
          <span>加载中...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-700 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回首页
            </Link>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-xl font-bold text-blue-700">购物车</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">购物车是空的</h2>
            <p className="text-gray-500 mb-8">快去选择喜欢的游戏吧！</p>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors"
            >
              去选购
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">商品</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">规格</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">单价</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">数量</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">小计</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {cart.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-14 h-14 object-contain bg-gray-50 rounded-lg" 
                          />
                          <div>
                            <div className="font-medium text-gray-800">{item.title}</div>
                            <div className="text-sm text-gray-500">¥{item.basePrice}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">
                        {item.size === 'a4' ? 'A4' : 'A5'} / {item.paper === 'normal' ? '普通纸' : '铜版纸'}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">¥{item.unitPrice}</td>
                      <td className="px-4 py-4 text-center">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(index, Number(e.target.value))}
                          className="bg-gray-100 border border-gray-200 rounded-lg px-2 py-1 text-gray-800 focus:outline-none focus:border-blue-700"
                        >
                          {[1, 2, 3, 4, 5, 10, 20].map((q) => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700">¥{item.totalPrice}</td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => removeItem(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
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

            {/* Actions */}
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

            {/* Checkout */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500">合计：</span>
                <span className="text-4xl font-bold text-blue-700">¥{totalPrice}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full py-4 rounded-lg font-medium text-white bg-green-500 hover:bg-green-600 transition-colors">
                  💚 微信支付
                </button>
                <button className="w-full py-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  💙 支付宝
                </button>
                <button className="w-full py-4 rounded-lg font-medium text-white bg-amber-500 hover:bg-amber-600 transition-colors">
                  💳 银行卡支付
                </button>
              </div>
              
              <p className="text-center text-gray-400 text-sm mt-5">
                ✨ 点击上方按钮完成支付
              </p>
            </div>
          </>
        )}
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p className="font-medium text-blue-700">© 2024 Jack爸爸学数学</p>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div>加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-blue-500 hover:underline">
              ← 返回首页
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">购物车</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">购物车是空的</h2>
            <p className="text-gray-500 mb-4">快去选择喜欢的游戏吧！</p>
            <Link href="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              去选购
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
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
                <tbody className="divide-y divide-gray-200">
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
                          <div>
                            <div className="font-medium text-gray-800">{item.title}</div>
                            <div className="text-sm text-gray-500">¥{item.basePrice}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {item.size === 'a4' ? 'A4' : 'A5'} / {item.paper === 'normal' ? '普通纸' : '铜版纸'}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">¥{item.unitPrice}</td>
                      <td className="px-4 py-4 text-center">
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(index, Number(e.target.value))}
                          className="border border-gray-200 rounded px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5, 10, 20].map((q) => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 text-center font-medium text-orange-500">¥{item.totalPrice}</td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => removeItem(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          删除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mb-6">
              <button onClick={clearCart} className="text-gray-500 hover:text-gray-700">
                清空购物车
              </button>
              <div className="text-gray-500">
                共 {cart.length} 件商品
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">合计：</span>
                <span className="text-3xl font-bold text-orange-500">¥{totalPrice}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  微信支付
                </button>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  支付宝
                </button>
                <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
                  银行卡支付
                </button>
              </div>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                * 点击上方按钮完成支付
              </p>
            </div>
          </>
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
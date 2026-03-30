'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '../data/products';

interface UploadedImage {
  productId: string;
  filename: string;
}

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('uploadedImages');
    if (saved) {
      setUploadedImages(JSON.parse(saved));
    }
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) {
      setMessage('请选择产品');
      return;
    }

    const fileInput = document.getElementById('gameImage') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    
    if (!file) {
      setMessage('请选择图片文件');
      return;
    }

    setUploading(true);
    setMessage('');

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      const key = `game_${selectedProduct}`;
      localStorage.setItem(key, base64);
      
      const newImage: UploadedImage = {
        productId: selectedProduct,
        filename: file.name
      };
      const updated = [...uploadedImages.filter(img => img.productId !== selectedProduct), newImage];
      setUploadedImages(updated);
      localStorage.setItem('uploadedImages', JSON.stringify(updated));
      
      setMessage('上传成功！');
      setUploading(false);
      setSelectedProduct('');
      (fileInput as HTMLInputElement).value = '';
    };
    reader.onerror = () => {
      setMessage('上传失败');
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const getProductTitle = (id: string) => {
    const product = products.find(p => p.id === id);
    return product?.title || id;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-700">上传游戏图片</h1>
            <Link href="/" className="text-gray-600 hover:text-blue-700">
              返回首页
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">上传新产品图片</h2>
          <form onSubmit={handleUpload}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择产品
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-700"
              >
                <option value="">请选择...</option>
                {products.map(p => (
                  <option key={p.id} value={p.id}>{p.title}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择图片
              </label>
              <input
                type="file"
                id="gameImage"
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-700"
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {uploading ? '上传中...' : '上传图片'}
            </button>

            {message && (
              <p className={`mt-3 text-center ${message.includes('成功') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        {uploadedImages.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">已上传图片</h2>
            <div className="space-y-2">
              {uploadedImages.map(img => (
                <div key={img.productId} className="flex items-center justify-between bg-white p-3 rounded-lg">
                  <span className="text-gray-700">{getProductTitle(img.productId)}</span>
                  <span className="text-green-600 text-sm">✓ 已上传</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

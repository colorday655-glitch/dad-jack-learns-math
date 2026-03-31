'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { videos } from '../../data/videos';

function isBundle(id: string): boolean {
  return id === 'G1-bundle' || id === 'G2-bundle';
}

function isSingleVideo(id: string): boolean {
  return videos.some(v => v.id === id);
}

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  
  if (isBundle(id)) {
    return <BundlePage id={id} />;
  }
  
  if (isSingleVideo(id)) {
    return <SingleVideoPage id={id} />;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">未找到</h1>
        <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}

function SingleVideoPage({ id }: { id: string }) {
  const video = videos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">视频未找到</h1>
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium">
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  if (!video.available) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏰</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">即将上线</h1>
          <p className="text-gray-500 mb-4">{video.title}</p>
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium">
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="pixar-card overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image 
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className={`pixar-tag ${video.category === 'G1系列' ? 'pixar-tag-g1' : 'pixar-tag-g2'}`}>
                {video.id}
              </span>
            </div>
            {video.duration && (
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-lg">
                {video.duration}
              </span>
            )}
          </div>
          
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              {video.title.replace(/^G\d+\s*/, '')}
            </h1>
            <p className="text-gray-500 text-sm mb-4">
              {video.description}
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 mb-6">
              <div className="text-sm text-gray-600 mb-2">💰 价格</div>
              <div className="text-3xl font-bold text-orange-500">¥9.9</div>
              <div className="text-xs text-gray-400 mt-1">包含百度网盘下载链接</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">📦</span>
                <span>视频配套一页纸游戏打印版</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">🔗</span>
                <span>百度网盘链接 + 提取码</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">📱</span>
                <span>微信支付，安全便捷</span>
              </div>
            </div>

            <button className="w-full pixar-btn py-4 text-lg mt-6">
              立即购买 ¥9.9
            </button>

            <Link 
              href="/"
              className="block text-center text-gray-400 text-sm mt-4 hover:text-orange-500"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2024 Jack爸爸学数学
      </footer>
    </div>
  );
}

function BundlePage({ id }: { id: string }) {
  const isG1 = id === 'G1-bundle';
  const isG2 = id === 'G2-bundle';
  
  const videos_ = isG1 
    ? videos.filter(v => v.category === 'G1系列')
    : isG2 
      ? videos.filter(v => v.category === 'G2系列')
      : [];
      
  const availableCount = videos_.filter(v => v.available).length;
  const price = '99.9';
  const seriesName = isG1 ? 'G1系列' : isG2 ? 'G2系列' : '';

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className={`inline-block pixar-tag mb-4 ${isG1 ? 'pixar-tag-g1' : 'pixar-tag-g2'}`}>
            {seriesName}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isG1 ? '🚀 逻辑思维入门套装' : '🌟 进阶思维训练套装'}
          </h1>
          <p className="text-gray-500">
            共 {videos_.length} 集，已上线 {availableCount} 集
          </p>
        </div>

        <div className="pixar-card overflow-hidden mb-6">
          <div className="grid grid-cols-4 gap-2 p-4">
            {videos_.map(video => (
              <div 
                key={video.id} 
                className={`relative aspect-square rounded-lg overflow-hidden ${
                  !video.available ? 'opacity-50' : ''
                }`}
              >
                <Image 
                  src={video.thumbnail}
                  alt={video.id}
                  fill
                  className="object-cover"
                />
                {!video.available && (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">敬请期待</span>
                  </div>
                )}
                <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.id.replace('G', '')}
                </span>
              </div>
            ))}
          </div>
          
          <div className="p-6 border-t border-orange-100">
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">套餐价格</span>
                <span className="text-3xl font-bold text-orange-500">¥{price}</span>
              </div>
              <div className="text-xs text-gray-400">
                原价 ¥{9.9 * videos_.length}，现优惠 ¥{((9.9 * videos_.length) - 99.9).toFixed(1)}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">📦</span>
                <span>{videos_.length} 集完整版游戏打印版</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">🔗</span>
                <span>百度网盘完整下载链接</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">💾</span>
                <span>后续更新免费获取</span>
              </div>
            </div>

            <button className="w-full pixar-btn py-4 text-lg">
              立即购买 ¥{price}
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              微信支付 · 安全便捷 · 退款保障
            </p>

            <Link 
              href="/"
              className="block text-center text-gray-400 text-sm mt-4 hover:text-orange-500"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2024 Jack爸爸学数学
      </footer>
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const paid = searchParams.get('paid');
  
  if (paid === 'true') {
    return <PaymentSuccessPage id={id} />;
  }
  
  if (isBundle(id)) {
    return <BundlePage id={id} />;
  }
  
  if (isSingleVideo(id)) {
    return <SingleVideoPage id={id} />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">未找到</h1>
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          ← 返回首页
        </Link>
      </div>
    </div>
  );
}

function PaymentSuccessPage({ id }: { id: string }) {
  const video = videos.find(v => v.id === id);
  const isBundlePage = id === 'G1-bundle' || id === 'G2-bundle';
  const [netdiskData, setNetdiskData] = useState<{ link: string; password: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('netdiskLinks');
    if (saved) {
      const links = JSON.parse(saved);
      if (isBundlePage) {
        const g1Videos = videos.filter(v => v.category === 'G1系列').map(v => v.id);
        const g2Videos = videos.filter(v => v.category === 'G2系列').map(v => v.id);
        const targetIds = id === 'G1-bundle' ? g1Videos : g2Videos;
        const link = links.find((l: any) => targetIds.includes(l.videoId));
        if (link) {
          setNetdiskData({ link: link.link, password: link.password });
        }
      } else {
        const link = links.find((l: any) => l.videoId === id);
        if (link) {
          setNetdiskData({ link: link.link, password: link.password });
        }
      }
    }
  }, [id, isBundlePage]);

  const title = isBundlePage 
    ? (id === 'G1-bundle' ? 'G1系列套装' : 'G2系列套装')
    : video?.title || '';

  const netdiskLink = netdiskData?.link || '尚未设置下载链接，请联系客服';
  const netdiskPassword = netdiskData?.password || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
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
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">购买成功！</h1>
          <p className="text-gray-500">感谢您的支持</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📦 您购买的内容</h2>
            <p className="text-gray-600 mb-6">{title}</p>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-bold text-blue-700 mb-3">🔗 百度网盘下载链接</h3>
              {netdiskData ? (
                <>
                  <div className="bg-white rounded-lg p-4 mb-3">
                    <p className="text-sm text-gray-500 mb-1">链接</p>
                    <a 
                      href={netdiskLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {netdiskLink}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">提取码：</span>
                    <span className="bg-white px-3 py-1 rounded font-mono font-bold text-gray-800">
                      {netdiskPassword}
                    </span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(netdiskPassword)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      复制
                    </button>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-gray-500">{netdiskLink}</p>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <p>📌 使用说明：</p>
              <ul className="list-disc list-inside ml-2">
                <li>复制链接到浏览器打开</li>
                <li>输入提取码保存到自己的网盘</li>
                <li>下载后解压使用</li>
              </ul>
            </div>

            <Link 
              href="/"
              className="block text-center text-blue-600 hover:underline font-medium mt-6"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 Jack爸爸学数学
      </footer>
    </div>
  );
}

function SingleVideoPage({ id }: { id: string }) {
  const video = videos.find(v => v.id === id);
  const [showModal, setShowModal] = useState(false);

  if (!video) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">视频未找到</h1>
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  if (!video.available) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏰</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">即将上线</h1>
          <p className="text-gray-500 mb-4">{video.title}</p>
          <Link href="/" className="text-blue-600 hover:underline font-medium">
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  const handleBuy = () => {
    setShowModal(true);
  };

  const isPlaceholder = video.thumbnail.includes('placeholder');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center">
            {isPlaceholder ? (
              <span className="text-gray-400 text-lg">暂无封面</span>
            ) : (
              <Image 
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-contain"
              />
            )}
            <div className="absolute top-3 left-3">
              <span className={`text-xs px-2 py-1 rounded font-medium ${video.category === 'G1系列' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
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
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-sm text-gray-600 mb-2">💰 价格</div>
              <div className="text-gray-400 line-through text-lg">¥9.9</div>
              <div className="text-3xl font-semibold text-blue-600">¥0.99</div>
              <div className="text-xs text-gray-400 mt-1">限量优惠价，包含百度网盘下载链接</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">📦</span>
                <span>视频配套一页纸游戏打印版</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🔗</span>
                <span>百度网盘链接 + 提取码</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">📱</span>
                <span>微信支付，安全便捷</span>
              </div>
            </div>

            <button onClick={handleBuy} className="w-full bg-blue-600 text-white py-4 text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors mt-6">
              立即购买 ¥0.99
            </button>

            <Link 
              href="/"
              className="block text-center text-gray-400 text-sm mt-4 hover:text-blue-600"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">💬 联系客服购买</h3>
            <p className="text-gray-500 text-sm text-center mb-4">
              点击下方按钮添加客服微信，注明"购买{video.id}"
            </p>
            <a 
              href="https://work.weixin.qq.com/kfid/XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white py-3 text-center rounded-lg mb-3 hover:bg-blue-700"
            >
              联系客服
            </a>
            <button 
              onClick={() => setShowModal(false)}
              className="block w-full text-gray-400 text-sm text-center hover:text-gray-600"
            >
              取消
            </button>
          </div>
        </div>
      )}

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 Jack爸爸学数学
      </footer>
    </div>
  );
}

function BundlePage({ id }: { id: string }) {
  const isG1 = id === 'G1-bundle';
  const isG2 = id === 'G2-bundle';
  const [showModal, setShowModal] = useState(false);
  
  const videos_ = isG1 
    ? videos.filter(v => v.category === 'G1系列')
    : isG2 
      ? videos.filter(v => v.category === 'G2系列')
      : [];
      
  const availableCount = videos_.filter(v => v.available).length;
  const price = '9.9';
  const seriesName = isG1 ? 'G1系列' : isG2 ? 'G2系列' : '';

  const handleBuy = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
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
          <span className={`inline-block text-xs px-3 py-1 rounded font-medium mb-4 ${isG1 ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
            {seriesName}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isG1 ? '📐 逻辑思维入门套装' : '🧩 进阶思维训练套装'}
          </h1>
          <p className="text-gray-500">
            共 {videos_.length} 集，已上线 {availableCount} 集
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="grid grid-cols-4 gap-2 p-4">
            {videos_.map(video => {
              const isPlaceholder = video.thumbnail.includes('placeholder');
              return (
                <div 
                  key={video.id} 
                  className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center ${
                    !video.available ? 'opacity-50' : ''
                  }`}
                >
                  {isPlaceholder ? (
                    <span className="text-gray-400 text-xs">暂无</span>
                  ) : (
                    <Image 
                      src={video.thumbnail}
                      alt={video.id}
                      fill
                      className="object-cover"
                    />
                  )}
                  {!video.available && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-500">敬请期待</span>
                    </div>
                  )}
                  <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                    {video.id.replace('G', '')}
                  </span>
                </div>
              );
            })}
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">套餐价格</span>
                <div>
                  <span className="text-lg text-gray-400 line-through mr-2">¥99</span>
                  <span className="text-3xl font-semibold text-blue-600">¥{price}</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                12集完整版，原价 ¥99，限时优惠 ¥9.9
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">📦</span>
                <span>{videos_.length} 集完整版游戏打印版</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🔗</span>
                <span>百度网盘完整下载链接</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">💾</span>
                <span>后续更新免费获取</span>
              </div>
            </div>

            <button onClick={handleBuy} className="w-full bg-blue-600 text-white py-4 text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors">
              立即购买 ¥{price}
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              微信支付 · 安全便捷 · 退款保障
            </p>

            <Link 
              href="/"
              className="block text-center text-gray-400 text-sm mt-4 hover:text-blue-600"
            >
              返回首页
            </Link>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">💬 联系客服购买</h3>
            <p className="text-gray-500 text-sm text-center mb-4">
              点击下方按钮添加客服微信，注明"购买{seriesName}"
            </p>
            <a 
              href="https://work.weixin.qq.com/kfid/XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white py-3 text-center rounded-lg mb-3 hover:bg-blue-700"
            >
              联系客服
            </a>
            <button 
              onClick={() => setShowModal(false)}
              className="block w-full text-gray-400 text-sm text-center hover:text-gray-600"
            >
              取消
            </button>
          </div>
        </div>
      )}

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 Jack爸爸学数学
      </footer>
    </div>
  );
}
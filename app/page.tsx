'use client';

import { videos, categories, Video } from './data/videos';
import Link from 'next/link';
import Image from 'next/image';

function SeriesCard({ title, subtitle, price, episodes, color, link }: { 
  title: string; 
  subtitle: string; 
  price: string;
  episodes: number;
  color: 'blue' | 'green';
  link: string;
}) {
  const isBlue = color === 'blue';
  return (
    <Link href={link} className="block group">
      <div className={`bg-white rounded-lg shadow-sm border ${isBlue ? 'border-blue-200' : 'border-green-200'} p-6 hover:shadow-md transition-shadow`}>
        <div className="flex items-center gap-4">
          <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-3xl ${isBlue ? 'bg-blue-100' : 'bg-green-100'}`}>
            {isBlue ? '📐' : '🧩'}
          </div>
          <div className="flex-1">
            <span className={`text-xs px-2 py-1 rounded font-medium ${isBlue ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
              {title}
            </span>
            <h3 className="text-lg font-medium text-gray-800 mt-2 group-hover:text-blue-600 transition-colors">
              {subtitle}
            </h3>
            <p className="text-gray-500 text-sm mt-1">共 {episodes} 集</p>
          </div>
          <div className="text-right">
            <div className="text-xl text-gray-400 line-through">¥99</div>
            <div className="text-2xl font-semibold text-blue-600">¥9.9</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function VideoCard({ video }: { video: Video }) {
  const isAvailable = video.available;
  const isPlaceholder = video.thumbnail.includes('placeholder');
  
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${!isAvailable ? 'opacity-60' : 'hover:shadow-md transition-shadow'}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
        {isPlaceholder ? (
          <span className="text-gray-400 text-lg font-medium">暂无封面</span>
        ) : (
          <Image 
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-contain"
          />
        )}
        {!isAvailable && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <span className="text-white text-lg font-medium px-4 py-2 bg-gray-800/80 rounded-lg">
              敬请期待
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs px-2 py-1 rounded font-medium ${video.category === 'G1系列' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
            {video.id}
          </span>
        </div>
        <h3 className="font-medium text-gray-800 text-sm line-clamp-2 mb-2">
          {video.title.replace(/^G\d+\s*/, '')}
        </h3>
        {isAvailable ? (
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-400 text-xs line-through">¥9.9</span>
              <span className="text-blue-600 font-semibold ml-1">¥0.99</span>
            </div>
            <Link href={`/product/${video.id}`} className="text-sm text-blue-600 hover:underline">
              购买
            </Link>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">即将上线</span>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const g1Videos = videos.filter(v => v.category === 'G1系列');
  const g2Videos = videos.filter(v => v.category === 'G2系列');
  const availableG2 = g2Videos.filter(v => v.available);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Jack爸爸学数学
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">专注 6-12 岁数学底层逻辑重构 · 拒绝刷题，拒绝应试，只聊逻辑与兴趣</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">数学思维训练游戏</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            每个视频配套一页纸游戏，在游戏中培养数学思维
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#g1-series" className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200">
              G1系列 · 12集
            </a>
            <a href="#g2-series" className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200">
              G2系列 · 12集
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">🎁</span> 套装优惠
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SeriesCard 
              title="G1系列"
              subtitle="逻辑思维入门套装"
              price="99.9"
              episodes={12}
              color="blue"
              link="/product/G1-bundle"
            />
            <SeriesCard 
              title="G2系列"
              subtitle="进阶思维训练套装"
              price="99.9"
              episodes={12}
              color="green"
              link="/product/G2-bundle"
            />
          </div>
        </section>

        <section id="g1-series" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">📺</span> G1系列 · 已上线 {g1Videos.length} 集
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {g1Videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        <section id="g2-series" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">📺</span> G2系列 · 已上线 {availableG2.length} 集
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {g2Videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2026 Jack爸爸学数学 · All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
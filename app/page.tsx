'use client';

import { videos, categories, Video } from './data/videos';
import Link from 'next/link';
import Image from 'next/image';

function SeriesCard({ title, subtitle, price, episodes, color, link }: { 
  title: string; 
  subtitle: string; 
  price: string;
  episodes: number;
  color: 'orange' | 'mint';
  link: string;
}) {
  const isOrange = color === 'orange';
  return (
    <Link href={link} className="block group">
      <div className={`pixar-card p-6 ${isOrange ? 'border-2 border-orange-200' : 'border-2 border-mint-200'}`}>
        <div className="flex items-center gap-4">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl ${isOrange ? 'bg-gradient-to-br from-orange-400 to-orange-500' : 'bg-gradient-to-br from-mint-400 to-mint-500'}`}>
            {isOrange ? '🚀' : '🌟'}
          </div>
          <div className="flex-1">
            <span className={`pixar-tag ${isOrange ? 'pixar-tag-g1' : 'pixar-tag-g2'}`}>
              {title}
            </span>
            <h3 className="text-xl font-bold text-gray-800 mt-2 group-hover:text-orange-500 transition-colors">
              {subtitle}
            </h3>
            <p className="text-gray-500 text-sm mt-1">共 {episodes} 集</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">¥{price}</div>
            <span className="text-sm text-gray-500">限时优惠</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function VideoCard({ video }: { video: Video }) {
  const isAvailable = video.available;
  
  return (
    <div className={`pixar-card overflow-hidden ${!isAvailable ? 'opacity-60' : 'group'}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image 
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-medium px-4 py-2 bg-gray-800/80 rounded-lg">
              敬请期待
            </span>
          </div>
        )}
        {isAvailable && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
        {isAvailable && video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`pixar-tag text-xs ${video.category === 'G1系列' ? 'pixar-tag-g1' : 'pixar-tag-g2'}`}>
            {video.id}
          </span>
        </div>
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">
          {video.title.replace(/^G\d+\s*/, '')}
        </h3>
        {isAvailable ? (
          <div className="flex items-center justify-between">
            <span className="text-orange-500 font-bold">¥9.9</span>
            <button className="pixar-btn text-sm py-1.5 px-3">
              购买
            </button>
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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Jack爸爸学数学
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">数学思维训练 · 皮克斯趣味风格</p>
            </div>
            <Link 
              href="/cart" 
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              购物车
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-orange-400 via-pink-400 to-cyan-400 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">🎮 数学思维训练游戏</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
            每个视频配套一页纸游戏，在游戏中培养数学思维
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">
              ✨ G1系列 · 12集
            </span>
            <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-medium">
              🌟 G2系列 · 12集
            </span>
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
              color="orange"
              link="/product/G1-bundle"
            />
            <SeriesCard 
              title="G2系列"
              subtitle="进阶思维训练套装"
              price="99.9"
              episodes={12}
              color="mint"
              link="/product/G2-bundle"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-2xl">📺</span> G1系列 · 已上线 {g1Videos.length} 集
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {g1Videos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        <section className="mb-12">
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

      <footer className="bg-gradient-to-r from-orange-100 to-pink-100 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p className="font-medium bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            © 2024 Jack爸爸学数学
          </p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
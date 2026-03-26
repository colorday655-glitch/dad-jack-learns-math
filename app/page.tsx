'use client';

import { useState } from 'react';
import { videos, categories, Video } from './data/videos';

function VideoCard({ video }: { video: Video }) {
  return (
    <a 
      href={`/video/${video.id}`}
      className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </span>
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          {video.platform === 'bilibili' ? 'B站' : video.platform === 'youtube' ? 'YouTube' : '抖音'}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {video.category}
          </span>
          <span className="text-xs text-gray-400">
            {video.publishDate}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {video.description}
        </p>
      </div>
    </a>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredVideos = selectedCategory === '全部' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Jack爸爸学数学</h1>
          <p className="text-gray-500 mt-1">有趣的数学启蒙，让学习变得简单</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            暂无该分类视频
          </div>
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
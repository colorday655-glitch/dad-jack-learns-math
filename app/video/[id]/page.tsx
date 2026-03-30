import { videos } from '../../data/videos';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function VideoPage({ params }: Props) {
  const { id } = await params;
  const video = videos.find((v) => v.id === id);

  if (!video) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <header className="glass sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回视频列表
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="glass rounded-2xl overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe
              src={`https://player.bilibili.com/player.html?bvid=${video.videoUrl.replace('https://www.bilibili.com/video/', '').replace('/', '')}`}
              className="w-full h-full"
              allowFullScreen
              frameBorder="0"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full">
                {video.platform === 'bilibili' ? '📺 B站' : video.platform === 'youtube' ? '▶️ YouTube' : '🎵 抖音'}
              </span>
              <span className="bg-indigo-500/20 text-indigo-300 text-sm px-3 py-1 rounded-full border border-indigo-500/30">
                {video.category}
              </span>
              <span className="text-slate-500 text-sm">
                {video.duration} · {video.publishDate}
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              {video.title}
            </h1>
            
            <p className="text-slate-400 leading-relaxed">
              {video.description}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-white mb-5">相关推荐</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {videos
              .filter((v) => v.id !== video.id && v.category === video.category)
              .slice(0, 3)
              .map((v) => (
                <Link
                  key={v.id}
                  href={`/video/${v.id}`}
                  className="group glass rounded-xl overflow-hidden hover:glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm text-white line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      {v.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <footer className="glass mt-16 border-t border-indigo-500/20">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-500 text-sm">
          <span className="gradient-text font-medium">© 2024 Jack爸爸学数学</span> · All rights reserved.
        </div>
      </footer>
    </div>
  );
}

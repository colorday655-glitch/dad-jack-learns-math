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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-500 hover:underline">
            ← 返回视频列表
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe
              src={`https://player.bilibili.com/player.html?bvid=${video.videoUrl.replace('https://www.bilibili.com/video/', '').replace('/', '')}`}
              className="w-full h-full"
              allowFullScreen
              frameBorder="0"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
                {video.platform === 'bilibili' ? 'B站' : video.platform === 'youtube' ? 'YouTube' : '抖音'}
              </span>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded">
                {video.category}
              </span>
              <span className="text-gray-400 text-sm">
                {video.duration} · {video.publishDate}
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {video.title}
            </h1>
            
            <p className="text-gray-600 leading-relaxed">
              {video.description}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">相关推荐</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {videos
              .filter((v) => v.id !== video.id && v.category === video.category)
              .slice(0, 3)
              .map((v) => (
                <Link
                  key={v.id}
                  href={`/video/${v.id}`}
                  className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow"
                >
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-gray-800 line-clamp-2">
                      {v.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          © 2024 Jack爸爸学数学. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
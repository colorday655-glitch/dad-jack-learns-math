export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  platform: 'bilibili' | 'youtube' | 'douyin';
  category: '学前' | '小学' | '初中';
  thumbnail: string;
  duration: string;
  publishDate: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: '加法入门：数的合成',
    description: '通过有趣的故事和动画，帮助孩子理解加法的本质——数的合成。适合学前班和一年级小朋友。',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7XD/',
    platform: 'bilibili',
    category: '学前',
    thumbnail: 'https://picsum.photos/seed/math1/400/225',
    duration: '10:30',
    publishDate: '2024-01-15'
  },
  {
    id: '2',
    title: '减法基础：数的分解',
    description: '用生活中的例子教孩子学会减法，理解什么是"减少"和"剩下"。',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7XE/',
    platform: 'bilibili',
    category: '学前',
    thumbnail: 'https://picsum.photos/seed/math2/400/225',
    duration: '12:15',
    publishDate: '2024-01-20'
  },
  {
    id: '3',
    title: '乘法口诀表轻松学',
    description: '通过朗朗上口的儿歌，帮助孩子快速记住乘法口诀。',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7XF/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'https://picsum.photos/seed/math3/400/225',
    duration: '15:00',
    publishDate: '2024-02-01'
  },
  {
    id: '4',
    title: '分数的初步认识',
    description: '用切蛋糕的比喻，帮助孩子理解什么是分数。',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7XG/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'https://picsum.photos/seed/math4/400/225',
    duration: '18:20',
    publishDate: '2024-02-10'
  },
  {
    id: '5',
    title: '一元一次方程',
    description: '初中数学基础，用图形帮助理解方程的概念。',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7XH/',
    platform: 'bilibili',
    category: '初中',
    thumbnail: 'https://picsum.photos/seed/math5/400/225',
    duration: '22:45',
    publishDate: '2024-03-01'
  },
  {
    id: '6',
    title: '平面几何基础：三角形',
    description: '认识三角形的种类和性质，为几何学习打下基础。',
    videoUrl: 'https://www.bilibili.com/video/BV1xx411c7XI/',
    platform: 'bilibili',
    category: '初中',
    thumbnail: 'https://picsum.photos/seed/math6/400/225',
    duration: '25:30',
    publishDate: '2024-03-15'
  }
];

export const categories = ['全部', '学前', '小学', '初中'];
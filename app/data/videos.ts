export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  platform: 'bilibili' | 'youtube' | 'douyin';
  category: string;
  thumbnail: string;
  duration: string;
  publishDate: string;
  available: boolean;
}

export const videos: Video[] = [
  {
    id: 'G101',
    title: 'G101 集合逻辑入门｜分类秩序',
    description: 'Jack爸爸学数学，专注小学数学思维启蒙。本期讲集合逻辑，带孩子通过分类建立秩序感。',
    videoUrl: 'https://www.bilibili.com/video/BV1QWNgzLE44/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G101.jpg',
    duration: '03:40',
    publishDate: '2024-04-10',
    available: true
  },
  {
    id: 'G102',
    title: 'G102 相对性原理｜大小长短',
    description: 'Jack爸爸学数学，专注逻辑思维训练。本期讲相对性原理，选对参照物看清真实世界。',
    videoUrl: 'https://www.bilibili.com/video/BV17kPXzuEuM/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G102.jpg',
    duration: '05:35',
    publishDate: '2024-04-01',
    available: true
  },
  {
    id: 'G103',
    title: 'G103 坐标系定位｜空间索引',
    description: 'Jack爸爸学数学，专注空间思维启蒙。本期讲坐标系定位，带孩子建立空间索引精准定位。',
    videoUrl: 'https://www.bilibili.com/video/BV1GpcQzpES4/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G103.jpg',
    duration: '04:33',
    publishDate: '2024-03-25',
    available: true
  },
  {
    id: 'G104',
    title: 'G104 符号化思维｜信息压缩',
    description: 'Jack爸爸学数学，专注数学逻辑入门。本期讲符号化思维，学会用信息压缩释放大脑带宽。',
    videoUrl: 'https://www.bilibili.com/video/BV1UbwczuEvA/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G104.jpg',
    duration: '04:49',
    publishDate: '2024-03-20',
    available: true
  },
  {
    id: 'G105',
    title: 'G105 加法逻辑入门｜系统集成',
    description: 'Jack爸爸学数学，专注逻辑思维启蒙。本期讲加法逻辑，理解系统集成与合并的力量。',
    videoUrl: 'https://www.bilibili.com/video/BV1DswWzuEWE/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G105.jpg',
    duration: '04:32',
    publishDate: '2024-03-15',
    available: true
  },
  {
    id: 'G106',
    title: 'G106 减法逻辑入门｜寻找差值',
    description: 'Jack爸爸学数学，专注小学数学思维。本期讲减法逻辑，学会通过寻找差值解决缺失问题。',
    videoUrl: 'https://www.bilibili.com/video/BV1E4w3zHEKT/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G106.jpg',
    duration: '03:25',
    publishDate: '2024-03-10',
    available: true
  },
  {
    id: 'G107',
    title: 'G107 形状属性逻辑｜功能主义',
    description: 'Jack爸爸学数学，专注工程思维训练。本期讲形状属性，理解功能主义：形状决定用途。',
    videoUrl: 'https://www.bilibili.com/video/BV1xwwzzGEgB/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G107.jpg',
    duration: '02:49',
    publishDate: '2024-03-01',
    available: true
  },
  {
    id: 'G108',
    title: 'G108 模块化思维｜数字拼装',
    description: 'Jack爸爸学数学，专注解决问题能力。本期讲模块化思维，学会拆解与拼装复杂大目标。',
    videoUrl: 'https://www.bilibili.com/video/BV1jXAEz6EQc/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G108.jpg',
    duration: '02:25',
    publishDate: '2024-02-20',
    available: true
  },
  {
    id: 'G109',
    title: 'G109 进制逻辑入门｜进位魔术',
    description: 'Jack爸爸学数学，专注小学数学思维启蒙。本期讲进制逻辑，看穿"以一当十"的进位魔术。',
    videoUrl: 'https://www.bilibili.com/video/BV13gAczjEEH/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G109.jpg',
    duration: '01:46',
    publishDate: '2024-02-15',
    available: true
  },
  {
    id: 'G110',
    title: 'G110 凑十法入门｜算法优化提速',
    description: 'Jack爸爸学数学，专注逻辑思维训练。本期讲凑十法，教孩子用算法优化思维实现计算提速。',
    videoUrl: 'https://www.bilibili.com/video/BV1aQAcz7Ece/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G110.jpg',
    duration: '01:34',
    publishDate: '2024-02-10',
    available: true
  },
  {
    id: 'G111',
    title: 'G111 周期性规律｜认识钟表逻辑',
    description: 'Jack爸爸学数学，专注小学数学思维。本期讲周期性规律，从时间刻度理解宇宙节奏。',
    videoUrl: 'https://www.bilibili.com/video/BV13GAAzXEXi/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G111.jpg',
    duration: '01:32',
    publishDate: '2024-02-01',
    available: true
  },
  {
    id: 'G112',
    title: 'G112 等价交换入门｜看透价值秩序',
    description: 'Jack爸爸学数学，专注逻辑思维启蒙。本期讲等价交换，理解认识人民币背后的数学信用。',
    videoUrl: 'https://www.bilibili.com/video/BV1sGAKzJEK8/',
    platform: 'bilibili',
    category: 'G1系列',
    thumbnail: '/images/videos/G112.jpg',
    duration: '01:42',
    publishDate: '2024-01-20',
    available: true
  },
  {
    id: 'G201',
    title: 'G201 把积木变平了 | 藏在影子里的秘密',
    description: 'Jack爸爸学数学，专注逻辑思维启蒙。本期讲把积木变平，理解从 3D 到 2D 转换背后的空间逻辑。',
    videoUrl: 'https://www.bilibili.com/video/BV1kTXsBuEqU/',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/G201.jpg',
    duration: '01:23',
    publishDate: '2024-01-15',
    available: true
  },
  {
    id: 'G202',
    title: 'G202 七块板的魔法 | 拼出一个大世界',
    description: 'Jack爸爸学数学，专注空间思维训练。本期讲七巧板拼图，培养空间想象力。',
    videoUrl: 'https://www.bilibili.com/video/BV17aXyB9EQw/',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/G202.jpg',
    duration: '02:15',
    publishDate: '2024-01-22',
    available: true
  },
  {
    id: 'G203',
    title: 'G203 最听话的正方形 | 怎么转都长得一样',
    description: 'Jack爸爸学数学，专注对称思维。本期讲正方形旋转对称，理解形状的不变性。',
    videoUrl: 'https://www.bilibili.com/video/BV1VXXDBeEWv/',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/G203.jpg',
    duration: '02:30',
    publishDate: '2024-01-29',
    available: true
  },
  {
    id: 'G204',
    title: 'G204 伸缩的长方形 | 长长短短的空间游戏',
    description: 'Jack爸爸学数学，专注空间感知。本期讲长方形的变化，理解大小和比例。',
    videoUrl: 'https://www.bilibili.com/video/BV1GiX6BvENL/',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/G204.jpg',
    duration: '02:45',
    publishDate: '2024-02-05',
    available: true
  },
  {
    id: 'G205',
    title: 'G205 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G206',
    title: 'G206 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G207',
    title: 'G207 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G208',
    title: 'G208 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G209',
    title: 'G209 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G210',
    title: 'G210 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G211',
    title: 'G211 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  },
  {
    id: 'G212',
    title: 'G212 敬请期待',
    description: '敬请期待',
    videoUrl: '',
    platform: 'bilibili',
    category: 'G2系列',
    thumbnail: '/images/videos/placeholder.jpg',
    duration: '',
    publishDate: '',
    available: false
  }
];

export const categories = ['全部', 'G1系列', 'G2系列'];
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
}

export const videos: Video[] = [
  {
    id: '1',
    title: '把积木变平了 | 藏在影子里的秘密',
    description: 'Jack爸爸学数学，专注逻辑思维启蒙。本期讲把积木变平，理解从 3D 到 2D 转换背后的空间逻辑。适合：小学 1-3 年级、总把积木画成"歪盒子"的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1kTXsBuEqU/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/060e5b92785a28c4a1ce576d65829190443449a9.jpg',
    duration: '01:23',
    publishDate: '2024-01-15'
  },
  {
    id: '2',
    title: '等价交换入门｜看透价值秩序',
    description: 'Jack爸爸学数学，专注逻辑思维启蒙。本期讲等价交换，理解认识人民币背后的数学信用。适合：小学1-3年级、不懂交易逻辑的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1sGAKzJEK8/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i0.hdslb.com/bfs/archive/f26c6fca6764dc875847353e99faead81fb34ea8.jpg',
    duration: '01:42',
    publishDate: '2024-01-20'
  },
  {
    id: '3',
    title: '周期性规律｜认识钟表逻辑',
    description: 'Jack爸爸学数学，专注小学数学思维。本期讲周期性规律，从时间刻度理解宇宙节奏。适合：小学1-2年级、没有时间感的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV13GAAzXEXi/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/57a63b6324b0b6d8c89876852a2590badb42f0a2.jpg',
    duration: '01:32',
    publishDate: '2024-02-01'
  },
  {
    id: '4',
    title: '凑十法入门｜算法优化提速',
    description: 'Jack爸爸学数学，专注逻辑思维训练。本期讲凑十法，教孩子用算法优化思维实现计算提速。适合：小学1-2年级、做加法数指头的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1aQAcz7Ece/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/27131e60de37d81b8ce22e5815d9ffe6121dc492.jpg',
    duration: '01:34',
    publishDate: '2024-02-10'
  },
  {
    id: '5',
    title: '进制逻辑入门｜进位魔术',
    description: 'Jack爸爸学数学，专注小学数学思维启蒙。本期讲进制逻辑，看穿"以一当十"的进位魔术。适合：小学1-3年级、理解不了数字结构的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV13gAczjEEH/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/199e2267e43f222bc6b0e636625934370642c070.jpg',
    duration: '01:46',
    publishDate: '2024-02-15'
  },
  {
    id: '6',
    title: '模块化思维｜数字拼装',
    description: 'Jack爸爸学数学，专注解决问题能力。本期讲模块化思维，学会拆解与拼装复杂大目标。适合：小学1-3年级、做事没头绪的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1jXAEz6EQc/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i0.hdslb.com/bfs/archive/1e8adfc1bc570955c5daad4f2f7c275c459ece6f.jpg',
    duration: '02:25',
    publishDate: '2024-02-20'
  },
  {
    id: '7',
    title: '形状属性逻辑｜功能主义',
    description: 'Jack爸爸学数学，专注工程思维训练。本期讲形状属性，理解功能主义：形状决定用途。适合：小学1-3年级、对几何形状缺乏认知的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1xwwzzGEgB/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/710f01945b4c6506d44d8fccdd5ea0fc5ee910f2.jpg',
    duration: '02:49',
    publishDate: '2024-03-01'
  },
  {
    id: '8',
    title: '减法逻辑入门｜寻找差值',
    description: 'Jack爸爸学数学，专注小学数学思维。本期讲减法逻辑，学会通过寻找差值解决缺失问题。适合：小学1-2年级、不理解减法意义的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1E4w3zHEKT/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/ef7496d5735c241eb7909e223201cc2d4273298b.jpg',
    duration: '03:25',
    publishDate: '2024-03-10'
  },
  {
    id: '9',
    title: '加法逻辑入门｜系统集成',
    description: 'Jack爸爸学数学，专注逻辑思维启蒙。本期讲加法逻辑，理解系统集成与合并的力量。适合：小学1-2年级、机械背诵加法表的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1DswWzuEWE/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/00111d64275da864119faa1a591cc8754da4f237.jpg',
    duration: '04:32',
    publishDate: '2024-03-15'
  },
  {
    id: '10',
    title: '符号化思维｜信息压缩',
    description: 'Jack爸爸学数学，专注数学逻辑入门。本期讲符号化思维，学会用信息压缩释放大脑带宽。适合：小学1-3年级、觉得数学公式枯燥的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1UbwczuEvA/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i0.hdslb.com/bfs/archive/d645cbb1878d551139011e61ade40195a58eb957.jpg',
    duration: '04:49',
    publishDate: '2024-03-20'
  },
  {
    id: '11',
    title: '坐标系定位｜空间索引',
    description: 'Jack爸爸学数学，专注空间思维启蒙。本期讲坐标系定位，带孩子建立空间索引精准定位。适合：小学1-3年级、分不清左右的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1GpcQzpES4/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/9eb3dc04f6728335f7bd02c45ffd6a48745aa414.jpg',
    duration: '04:33',
    publishDate: '2024-03-25'
  },
  {
    id: '12',
    title: '相对性原理｜大小长短',
    description: 'Jack爸爸学数学，专注逻辑思维训练。本期讲相对性原理，选对参照物看清真实世界。适合：小学1-2年级、对空间比例没概念的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV17kPXzuEuM/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/1cc5a4a7f7091ebb29e0d1c89d9da9e9729cb5af.jpg',
    duration: '05:35',
    publishDate: '2024-04-01'
  },
  {
    id: '13',
    title: '集合逻辑入门｜分类秩序',
    description: 'Jack爸爸学数学，专注小学数学思维启蒙。本期讲集合逻辑，带孩子通过分类建立秩序感。适合：小学1-2年级、逻辑混乱的孩子。',
    videoUrl: 'https://www.bilibili.com/video/BV1QWNgzLE44/',
    platform: 'bilibili',
    category: '小学',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/3bbfb4aa7cd027bb1a769c3245fa2680e8d1bfeb.jpg',
    duration: '03:40',
    publishDate: '2024-04-10'
  }
];

export const categories = ['全部', '小学'];
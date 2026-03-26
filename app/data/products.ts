export interface Product {
  id: string;
  title: string;
  description: string;
  videoId: string;
  thumbnail: string;
  price: number;
  pdfUrl: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: '把积木变平了 - 一页纸游戏',
    description: '适合小学1-3年级的空间思维训练游戏。包含影子配对、立体图形辨识等趣味练习。',
    videoId: '1',
    thumbnail: '/images/1.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-1.pdf',
    category: '空间思维'
  },
  {
    id: '2',
    title: '等价交换入门 - 一页纸游戏',
    description: '帮助孩子理解价值交换逻辑的人民币游戏，适合1-3年级。',
    videoId: '2',
    thumbnail: '/images/2.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-2.pdf',
    category: '逻辑思维'
  },
  {
    id: '3',
    title: '周期性规律 - 一页纸游戏',
    description: '认识时间与周期的数学游戏，适合小学1-2年级。',
    videoId: '3',
    thumbnail: '/images/3.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-3.pdf',
    category: '逻辑思维'
  },
  {
    id: '4',
    title: '凑十法入门 - 一页纸游戏',
    description: '训练计算速度的凑十法练习游戏，适合1-2年级。',
    videoId: '4',
    thumbnail: '/images/4.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-4.pdf',
    category: '计算能力'
  },
  {
    id: '5',
    title: '进制逻辑入门 - 一页纸游戏',
    description: '理解数字结构的进制游戏，适合1-3年级。',
    videoId: '5',
    thumbnail: '/images/5.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-5.pdf',
    category: '逻辑思维'
  },
  {
    id: '6',
    title: '模块化思维 - 一页纸游戏',
    description: '培养问题拆解能力的乐高式游戏，适合1-3年级。',
    videoId: '6',
    thumbnail: '/images/6.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-6.pdf',
    category: '解决问题'
  },
  {
    id: '7',
    title: '形状属性逻辑 - 一页纸游戏',
    description: '认识几何形状与功能的关系，适合1-3年级。',
    videoId: '7',
    thumbnail: '/images/7.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-7.pdf',
    category: '空间思维'
  },
  {
    id: '8',
    title: '减法逻辑入门 - 一页纸游戏',
    description: '理解减法意义的差值寻找游戏，适合1-2年级。',
    videoId: '8',
    thumbnail: '/images/8.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-8.pdf',
    category: '计算能力'
  },
  {
    id: '9',
    title: '加法逻辑入门 - 一页纸游戏',
    description: '理解加法系统集成思维的游戏，适合1-2年级。',
    videoId: '9',
    thumbnail: '/images/9.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-9.pdf',
    category: '计算能力'
  },
  {
    id: '10',
    title: '符号化思维 - 一页纸游戏',
    description: '训练信息压缩与抽象思维的数学游戏，适合1-3年级。',
    videoId: '10',
    thumbnail: '/images/10.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-10.pdf',
    category: '逻辑思维'
  },
  {
    id: '11',
    title: '坐标系定位 - 一页纸游戏',
    description: '建立空间索引能力的坐标游戏，适合1-3年级。',
    videoId: '11',
    thumbnail: '/images/11.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-11.pdf',
    category: '空间思维'
  },
  {
    id: '12',
    title: '相对性原理 - 一页纸游戏',
    description: '理解相对与比较的空间游戏，适合1-2年级。',
    videoId: '12',
    thumbnail: '/images/12.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-12.pdf',
    category: '空间思维'
  },
  {
    id: '13',
    title: '集合逻辑入门 - 一页纸游戏',
    description: '建立分类与集合思维的数学游戏，适合1-2年级。',
    videoId: '13',
    thumbnail: '/images/13.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-13.pdf',
    category: '逻辑思维'
  }
];

export const categories = ['全部', '空间思维', '逻辑思维', '计算能力', '解决问题'];

export const printOptions = {
  sizes: [
    { id: 'a4', name: 'A4', price: 0, description: '210×297mm 标准打印尺寸' },
    { id: 'a5', name: 'A5', price: -2, description: '148×210mm 便携尺寸' },
  ],
  paper: [
    { id: 'normal', name: '普通纸', price: 0, description: '80g 书写纸' },
    { id: 'glossy', name: '铜版纸', price: 5, description: '157g 铜版纸，色彩更鲜艳' },
  ],
  quantity: [1, 2, 3, 4, 5, 10, 20]
};
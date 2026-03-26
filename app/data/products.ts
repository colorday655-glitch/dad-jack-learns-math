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
    thumbnail: 'http://i1.hdslb.com/bfs/archive/060e5b92785a28c4a1ce576d65829190443449a9.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-1.pdf',
    category: '空间思维'
  },
  {
    id: '2',
    title: '等价交换入门 - 一页纸游戏',
    description: '帮助孩子理解价值交换逻辑的人民币游戏，适合1-3年级。',
    videoId: '2',
    thumbnail: 'http://i0.hdslb.com/bfs/archive/f26c6fca6764dc875847353e99faead81fb34ea8.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-2.pdf',
    category: '逻辑思维'
  },
  {
    id: '3',
    title: '周期性规律 - 一页纸游戏',
    description: '认识时间与周期的数学游戏，适合小学1-2年级。',
    videoId: '3',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/57a63b6324b0b6d8c89876852a2590badb42f0a2.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-3.pdf',
    category: '逻辑思维'
  },
  {
    id: '4',
    title: '凑十法入门 - 一页纸游戏',
    description: '训练计算速度的凑十法练习游戏，适合1-2年级。',
    videoId: '4',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/27131e60de37d81b8ce22e5815d9ffe6121dc492.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-4.pdf',
    category: '计算能力'
  },
  {
    id: '5',
    title: '进制逻辑入门 - 一页纸游戏',
    description: '理解数字结构的进制游戏，适合1-3年级。',
    videoId: '5',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/199e2267e43f222bc6b0e636625934370642c070.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-5.pdf',
    category: '逻辑思维'
  },
  {
    id: '6',
    title: '模块化思维 - 一页纸游戏',
    description: '培养问题拆解能力的乐高式游戏，适合1-3年级。',
    videoId: '6',
    thumbnail: 'http://i0.hdslb.com/bfs/archive/1e8adfc1bc570955c5daad4f2f7c275c459ece6f.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-6.pdf',
    category: '解决问题'
  },
  {
    id: '7',
    title: '形状属性逻辑 - 一页纸游戏',
    description: '认识几何形状与功能的关系，适合1-3年级。',
    videoId: '7',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/710f01945b4c6506d44d8fccdd5ea0fc5ee910f2.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-7.pdf',
    category: '空间思维'
  },
  {
    id: '8',
    title: '减法逻辑入门 - 一页纸游戏',
    description: '理解减法意义的差值寻找游戏，适合1-2年级。',
    videoId: '8',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/ef7496d5735c241eb7909e223201cc2d4273298b.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-8.pdf',
    category: '计算能力'
  },
  {
    id: '9',
    title: '加法逻辑入门 - 一页纸游戏',
    description: '理解加法系统集成思维的游戏，适合1-2年级。',
    videoId: '9',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/00111d64275da864119faa1a591cc8754da4f237.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-9.pdf',
    category: '计算能力'
  },
  {
    id: '10',
    title: '符号化思维 - 一页纸游戏',
    description: '训练信息压缩与抽象思维的数学游戏，适合1-3年级。',
    videoId: '10',
    thumbnail: 'http://i0.hdslb.com/bfs/archive/d645cbb1878d551139011e61ade40195a58eb957.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-10.pdf',
    category: '逻辑思维'
  },
  {
    id: '11',
    title: '坐标系定位 - 一页纸游戏',
    description: '建立空间索引能力的坐标游戏，适合1-3年级。',
    videoId: '11',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/9eb3dc04f6728335f7bd02c45ffd6a48745aa414.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-11.pdf',
    category: '空间思维'
  },
  {
    id: '12',
    title: '相对性原理 - 一页纸游戏',
    description: '理解相对与比较的空间游戏，适合1-2年级。',
    videoId: '12',
    thumbnail: 'http://i1.hdslb.com/bfs/archive/1cc5a4a7f7091ebb29e0d1c89d9da9e9729cb5af.jpg',
    price: 9.9,
    pdfUrl: '/pdfs/game-12.pdf',
    category: '空间思维'
  },
  {
    id: '13',
    title: '集合逻辑入门 - 一页纸游戏',
    description: '建立分类与集合思维的数学游戏，适合1-2年级。',
    videoId: '13',
    thumbnail: 'http://i2.hdslb.com/bfs/archive/3bbfb4aa7cd027bb1a769c3245fa2680e8d1bfeb.jpg',
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
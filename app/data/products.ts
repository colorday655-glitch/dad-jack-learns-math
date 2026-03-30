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
    id: 'G101',
    title: '集合逻辑入门 - 一页纸游戏',
    description: '建立分类与集合思维的数学游戏，适合1-2年级。',
    videoId: 'G101',
    thumbnail: '/images/G101.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g101.pdf',
    category: '逻辑思维'
  },
  {
    id: 'G102',
    title: '相对性原理 - 一页纸游戏',
    description: '理解相对与比较的空间游戏，适合1-2年级。',
    videoId: 'G102',
    thumbnail: '/images/G102.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g102.pdf',
    category: '空间思维'
  },
  {
    id: 'G103',
    title: '坐标系定位 - 一页纸游戏',
    description: '建立空间索引能力的坐标游戏，适合1-3年级。',
    videoId: 'G103',
    thumbnail: '/images/G103.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g103.pdf',
    category: '空间思维'
  },
  {
    id: 'G104',
    title: '符号化思维 - 一页纸游戏',
    description: '训练信息压缩与抽象思维的数学游戏，适合1-3年级。',
    videoId: 'G104',
    thumbnail: '/images/G104.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g104.pdf',
    category: '逻辑思维'
  },
  {
    id: 'G105',
    title: '加法逻辑入门 - 一页纸游戏',
    description: '理解加法系统集成思维的游戏，适合1-2年级。',
    videoId: 'G105',
    thumbnail: '/images/G105.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g105.pdf',
    category: '计算能力'
  },
  {
    id: 'G106',
    title: '减法逻辑入门 - 一页纸游戏',
    description: '理解减法意义的差值寻找游戏，适合1-2年级。',
    videoId: 'G106',
    thumbnail: '/images/G106.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g106.pdf',
    category: '计算能力'
  },
  {
    id: 'G107',
    title: '形状属性逻辑 - 一页纸游戏',
    description: '认识几何形状与功能的关系，适合1-3年级。',
    videoId: 'G107',
    thumbnail: '/images/G107.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g107.pdf',
    category: '空间思维'
  },
  {
    id: 'G108',
    title: '模块化思维 - 一页纸游戏',
    description: '培养问题拆解能力的乐高式游戏，适合1-3年级。',
    videoId: 'G108',
    thumbnail: '/images/G108.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g108.pdf',
    category: '解决问题'
  },
  {
    id: 'G109',
    title: '进制逻辑入门 - 一页纸游戏',
    description: '理解数字结构的进制游戏，适合1-3年级。',
    videoId: 'G109',
    thumbnail: '/images/G109.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g109.pdf',
    category: '逻辑思维'
  },
  {
    id: 'G110',
    title: '凑十法入门 - 一页纸游戏',
    description: '训练计算速度的凑十法练习游戏，适合1-2年级。',
    videoId: 'G110',
    thumbnail: '/images/G110.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g110.pdf',
    category: '计算能力'
  },
  {
    id: 'G111',
    title: '周期性规律 - 一页纸游戏',
    description: '认识时间与周期的数学游戏，适合小学1-2年级。',
    videoId: 'G111',
    thumbnail: '/images/G111.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g111.pdf',
    category: '逻辑思维'
  },
  {
    id: 'G112',
    title: '等价交换入门 - 一页纸游戏',
    description: '帮助孩子理解价值交换逻辑的人民币游戏，适合1-3年级。',
    videoId: 'G112',
    thumbnail: '/images/G112.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g112.pdf',
    category: '逻辑思维'
  },
  {
    id: 'G201',
    title: '把积木变平了 - 一页纸游戏',
    description: '适合小学1-3年级的空间思维训练游戏。包含影子配对、立体图形辨识等趣味练习。',
    videoId: 'G201',
    thumbnail: '/images/G201.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g201.pdf',
    category: '空间思维'
  },
  {
    id: 'G202',
    title: '七块板的魔法 - 一页纸游戏',
    description: '拼图与空间想象力的游戏，适合1-3年级。',
    videoId: 'G202',
    thumbnail: '/images/G202.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g202.pdf',
    category: '空间思维'
  },
  {
    id: 'G203',
    title: '最听话的正方形 - 一页纸游戏',
    description: '对称与旋转的空间思维游戏，适合1-3年级。',
    videoId: 'G203',
    thumbnail: '/images/G203.svg',
    price: 9.9,
    pdfUrl: '/pdfs/game-g203.pdf',
    category: '空间思维'
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

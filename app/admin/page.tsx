'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { videos } from '../data/videos';

interface NetdiskLink {
  videoId: string;
  link: string;
  password: string;
  updatedAt: string;
}

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'jack2024';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [netdiskLinks, setNetdiskLinks] = useState<NetdiskLink[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ link: '', password: '' });
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('netdiskLinks');
    if (saved) {
      setNetdiskLinks(JSON.parse(saved));
    }
    
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('adminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('用户名或密码错误');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminAuth');
  };

  const handleEdit = (videoId: string) => {
    const existing = netdiskLinks.find(l => l.videoId === videoId);
    setEditForm({
      link: existing?.link || '',
      password: existing?.password || ''
    });
    setEditingId(videoId);
  };

  const handleSave = () => {
    if (!editingId) return;
    
    const updated = netdiskLinks.filter(l => l.videoId !== editingId);
    const newLink: NetdiskLink = {
      videoId: editingId,
      link: editForm.link,
      password: editForm.password,
      updatedAt: new Date().toISOString()
    };
    const final = [...updated, newLink];
    setNetdiskLinks(final);
    localStorage.setItem('netdiskLinks', JSON.stringify(final));
    
    setEditingId(null);
    setEditForm({ link: '', password: '' });
    setSavedMessage('保存成功！');
    setTimeout(() => setSavedMessage(''), 2000);
  };

  const getLinkInfo = (videoId: string) => {
    return netdiskLinks.find(l => l.videoId === videoId);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
        <div className="pixar-card p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔐</div>
            <h1 className="text-2xl font-bold text-gray-800">管理员登录</h1>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                用户名
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="请输入用户名"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-500"
                placeholder="请输入密码"
              />
            </div>
            
            {loginError && (
              <p className="text-red-500 text-sm mb-4 text-center">{loginError}</p>
            )}
            
            <button
              type="submit"
              className="w-full pixar-btn py-3"
            >
              登录
            </button>
          </form>
          
          <Link 
            href="/"
            className="block text-center text-gray-400 text-sm mt-4 hover:text-orange-500"
          >
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">📚 百度网盘链接管理</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">已登录</span>
              <button 
                onClick={handleLogout}
                className="text-orange-500 hover:text-orange-600 text-sm"
              >
                退出
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {savedMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 text-center">
            {savedMessage}
          </div>
        )}

        <div className="space-y-6">
          <div className="pixar-card p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">🚀 G1系列 (12集)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {videos.filter(v => v.category === 'G1系列').map(video => (
                <div key={video.id} className="border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`pixar-tag text-xs ${video.available ? 'pixar-tag-g1' : 'bg-gray-200'}`}>
                      {video.id}
                    </span>
                    {getLinkInfo(video.id) && (
                      <span className="text-green-500 text-xs">✓ 已设置</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.title.replace(/^G\d+\s*/, '')}
                  </p>
                  
                  {editingId === video.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editForm.link}
                        onChange={(e) => setEditForm({ ...editForm, link: e.target.value })}
                        placeholder="百度网盘链接"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                      <input
                        type="text"
                        value={editForm.password}
                        onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                        placeholder="提取码"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={handleSave}
                          className="flex-1 bg-green-500 text-white text-sm py-1 rounded"
                        >
                          保存
                        </button>
                        <button 
                          onClick={() => setEditingId(null)}
                          className="flex-1 bg-gray-300 text-gray-700 text-sm py-1 rounded"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleEdit(video.id)}
                      className="w-full text-orange-500 text-sm hover:underline"
                    >
                      {getLinkInfo(video.id) ? '修改链接' : '设置链接'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pixar-card p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">🌟 G2系列 (12集)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {videos.filter(v => v.category === 'G2系列').map(video => (
                <div key={video.id} className="border border-mint-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`pixar-tag text-xs ${video.available ? 'pixar-tag-g2' : 'bg-gray-200'}`}>
                      {video.id}
                    </span>
                    {getLinkInfo(video.id) && (
                      <span className="text-green-500 text-xs">✓ 已设置</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.title.replace(/^G\d+\s*/, '')}
                  </p>
                  
                  {editingId === video.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editForm.link}
                        onChange={(e) => setEditForm({ ...editForm, link: e.target.value })}
                        placeholder="百度网盘链接"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                      <input
                        type="text"
                        value={editForm.password}
                        onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                        placeholder="提取码"
                        className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={handleSave}
                          className="flex-1 bg-green-500 text-white text-sm py-1 rounded"
                        >
                          保存
                        </button>
                        <button 
                          onClick={() => setEditingId(null)}
                          className="flex-1 bg-gray-300 text-gray-700 text-sm py-1 rounded"
                        >
                          取消
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleEdit(video.id)}
                      className="w-full text-orange-500 text-sm hover:underline"
                    >
                      {getLinkInfo(video.id) ? '修改链接' : '设置链接'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link 
          href="/"
          className="block text-center text-gray-400 text-sm mt-8 hover:text-orange-500"
        >
          返回首页
        </Link>
      </main>
    </div>
  );
}
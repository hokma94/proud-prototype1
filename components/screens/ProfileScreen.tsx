import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState('artworks');

  const userStats = {
    followers: 1247,
    following: 345,
    artworks: 28,
    totalSales: 3420,
    totalEarnings: 2850,
    likesReceived: 4680
  };

  const myArtworks = [
    {
      id: 1,
      title: '봄날의 수채화',
      image: 'https://images.unsplash.com/photo-1683143725470-af37c3c38557?w=300&h=300&fit=crop',
      likes: 142,
      price: 89,
      sold: true,
      featured: true
    },
    {
      id: 2,
      title: '추상적 감정',
      image: 'https://images.unsplash.com/photo-1716889033775-b93550f8247b?w=300&h=300&fit=crop',
      likes: 67,
      price: null,
      sold: false,
      featured: false
    },
    {
      id: 3,
      title: '디지털 판타지',
      image: 'https://images.unsplash.com/photo-1679237686712-a71949f4b5b1?w=300&h=300&fit=crop',
      likes: 234,
      price: 156,
      sold: true,
      featured: true
    },
    {
      id: 4,
      title: '자연의 향기',
      image: 'https://images.unsplash.com/photo-1575995874161-325b260c9b1c?w=300&h=300&fit=crop',
      likes: 89,
      price: 120,
      sold: false,
      featured: false
    },
    {
      id: 5,
      title: '모던 아트',
      image: 'https://images.unsplash.com/photo-1604095288333-55f9bf7f8031?w=300&h=300&fit=crop',
      likes: 156,
      price: 200,
      sold: true,
      featured: false
    },
    {
      id: 6,
      title: '컬러 스플래시',
      image: 'https://images.unsplash.com/photo-1662486551474-24530b0a26c6?w=300&h=300&fit=crop',
      likes: 78,
      price: 95,
      sold: false,
      featured: false
    }
  ];

  const salesHistory = [
    { artwork: '봄날의 수채화', buyer: '김**', date: '2024.01.15', amount: 89 },
    { artwork: '디지털 판타지', buyer: '박**', date: '2024.01.12', amount: 156 },
    { artwork: '모던 아트', buyer: '이**', date: '2024.01.08', amount: 200 },
    { artwork: '자연 속 평온', buyer: '최**', date: '2024.01.05', amount: 75 },
    { artwork: '추상 컬렉션', buyer: '정**', date: '2024.01.02', amount: 120 }
  ];

  const followers = [
    {
      name: '김수진',
      avatar: 'https://images.unsplash.com/photo-1496672254107-b07a26403885?w=50&h=50&fit=crop&crop=face',
      isFollowing: true
    },
    {
      name: '박민호',
      avatar: 'https://images.unsplash.com/photo-1660738360230-2725346cf0cd?w=50&h=50&fit=crop&crop=face',
      isFollowing: false
    },
    {
      name: '이하늘',
      avatar: 'https://images.unsplash.com/photo-1621986601685-534276f162db?w=50&h=50&fit=crop&crop=face',
      isFollowing: true
    },
    {
      name: '최예진',
      avatar: 'https://images.unsplash.com/photo-1496672254107-b07a26403885?w=50&h=50&fit=crop&crop=face',
      isFollowing: false
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">프로필</h1>
          <div className="flex items-center space-x-4">
            {/* Share Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
            {/* Menu Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 py-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            {/* 김아트 - 할아버지 이미지 */}
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1544529569-38982a060348?w=80&h=80&fit=crop&crop=face"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">김아트</h2>
            <p className="text-gray-500 mb-2">@kimart_official</p>
            <p className="text-sm text-gray-600">자연의 아름다움을 수채화로 표현하는 작가입니다. 🎨</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{userStats.followers.toLocaleString()}</p>
            <p className="text-sm text-gray-500">팔로워</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{userStats.following}</p>
            <p className="text-sm text-gray-500">팔로잉</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{userStats.artworks}</p>
            <p className="text-sm text-gray-500">작품</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 py-3 bg-purple-600 text-white rounded-lg font-semibold">
            프로필 편집
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 mx-6 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">판매 현황</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">총 판매액</p>
            <p className="text-xl font-bold text-green-600">${userStats.totalEarnings.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">받은 좋아요</p>
            <p className="text-xl font-bold text-red-500">{userStats.likesReceived.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="flex space-x-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('artworks')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'artworks'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            작품
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'sales'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            판매 내역
          </button>
          <button
            onClick={() => setActiveTab('followers')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'followers'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            팔로워
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-6">
        {/* Artworks Tab */}
        {activeTab === 'artworks' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">내 작품 ({myArtworks.length})</h3>
              <button className="text-purple-600 text-sm font-medium">정렬</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {myArtworks.map((artwork) => (
                <div key={artwork.id} className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex space-x-1">
                    {artwork.featured && (
                      <div className="px-2 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </div>
                    )}
                    {artwork.sold && (
                      <div className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        SOLD
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h4 className="font-medium text-gray-900 mb-1 text-sm">{artwork.title}</h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span className="text-xs text-gray-600">{artwork.likes}</span>
                      </div>
                      {artwork.price && (
                        <span className="text-sm font-bold text-green-600">${artwork.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sales Tab */}
        {activeTab === 'sales' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">판매 내역</h3>
              <button className="text-purple-600 text-sm font-medium">전체보기</button>
            </div>
            
            <div className="space-y-3">
              {salesHistory.map((sale, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{sale.artwork}</p>
                    <p className="text-sm text-gray-500">구매자: {sale.buyer} • {sale.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">${sale.amount}</p>
                    <p className="text-xs text-gray-500">수수료 제외</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">이번 달 수익</span>
                <span className="font-bold text-blue-900">$435</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-blue-700 mt-1">목표 $650의 68% 달성</p>
            </div>
          </div>
        )}

        {/* Followers Tab */}
        {activeTab === 'followers' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">팔로워 ({userStats.followers.toLocaleString()})</h3>
              <button className="text-purple-600 text-sm font-medium">관리</button>
            </div>
            
            <div className="space-y-3">
              {followers.map((follower, index) => (
                <div key={index} className="flex items-center justify-between p-3">
                  <div className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={follower.avatar}
                      alt={follower.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{follower.name}</p>
                      <p className="text-sm text-gray-500">아티스트</p>
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      follower.isFollowing
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {follower.isFollowing ? '팔로잉' : '팔로우'}
                  </button>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-3 text-purple-600 font-medium border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
              더 많은 팔로워 보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
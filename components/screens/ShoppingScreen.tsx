import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ShoppingScreen() {
  const [activeTab, setActiveTab] = useState('featured');

  const categories = [
    { id: 'paintings', label: '회화', icon: '🎨' },
    { id: 'digital', label: '디지털아트', icon: '💻' },
    { id: 'photography', label: '사진', icon: '📸' },
    { id: 'illustration', label: '일러스트', icon: '✏️' },
    { id: 'sculpture', label: '조각', icon: '🗿' }
  ];

  const featuredArtworks = [
    {
      id: 1,
      title: '봄날의 수채화',
      artist: '김아트',
      image: 'https://images.unsplash.com/photo-1683143725470-af37c3c38557?w=400&h=400&fit=crop',
      price: 89,
      originalPrice: 120,
      rating: 4.9,
      reviews: 234,
      badge: 'BEST'
    },
    {
      id: 2,
      title: '도시의 밤',
      artist: '박화가',
      image: 'https://images.unsplash.com/photo-1682668701024-b6508708a764?w=400&h=400&fit=crop',
      price: 156,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      badge: 'NEW'
    },
    {
      id: 3,
      title: '추상적 감정',
      artist: '최컬러',
      image: 'https://images.unsplash.com/photo-1716889033775-b93550f8247b?w=400&h=400&fit=crop',
      price: 234,
      originalPrice: 300,
      rating: 4.8,
      reviews: 189,
      badge: 'HOT'
    }
  ];

  const followingArtists = [
    {
      name: '김아트',
      avatar: 'https://images.unsplash.com/photo-1544529569-38982a060348?w=40&h=40&fit=crop&crop=face',
      artworks: 12,
      newArtworks: 3
    },
    {
      name: '박화가',
      avatar: 'https://images.unsplash.com/photo-1660738360230-2725346cf0cd?w=40&h=40&fit=crop&crop=face',
      artworks: 8,
      newArtworks: 1
    },
    {
      name: '이디지털',
      avatar: 'https://images.unsplash.com/photo-1621986601685-534276f162db?w=40&h=40&fit=crop&crop=face',
      artworks: 15,
      newArtworks: 5
    }
  ];

  const recommendedArtworks = [
    {
      id: 4,
      title: '자연의 향기',
      price: 125,
      image: 'https://images.unsplash.com/photo-1575995874161-325b260c9b1c?w=200&h=200&fit=crop',
      rating: 4.6,
      artist: '유자연'
    },
    {
      id: 5,
      title: '모던 스타일',
      price: 198,
      image: 'https://images.unsplash.com/photo-1604095288333-55f9bf7f8031?w=200&h=200&fit=crop',
      rating: 4.4,
      artist: '정모던'
    },
    {
      id: 6,
      title: '컬러 스플래시',
      price: 87,
      image: 'https://images.unsplash.com/photo-1662486551474-24530b0a26c6?w=200&h=200&fit=crop',
      rating: 4.7,
      artist: '최컬러'
    },
    {
      id: 7,
      title: '환상의 세계',
      price: 267,
      image: 'https://images.unsplash.com/photo-1679237686712-a71949f4b5b1?w=200&h=200&fit=crop',
      rating: 4.5,
      artist: '이판타지'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">아트 마켓</h1>
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            {/* Wishlist Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all relative">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">5</span>
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="원하는 작품을 검색해보세요"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('featured')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'featured'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            추천 작품
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'following'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            팔로잉
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === 'categories'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            카테고리
          </button>
        </div>
      </div>

      {/* Featured Tab */}
      {activeTab === 'featured' && (
        <div>
          {/* Special Offer Banner */}
          <div className="mx-6 my-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">신년 아트 컬렉션 🎨</h3>
                <p className="text-sm opacity-90">엄선된 작품들을 특가로 만나보세요</p>
              </div>
              <button className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold text-sm">
                보러가기
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="px-6 py-4">
            <div className="flex space-x-3 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="flex flex-col items-center space-y-2 p-3 bg-gray-50 rounded-lg min-w-[80px] hover:bg-gray-100 transition-colors"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Artworks */}
          <div className="px-6 py-4">
            <h2 className="font-bold text-lg text-gray-900 mb-4">인기 작품</h2>
            <div className="space-y-4">
              {featuredArtworks.map((artwork) => (
                <div key={artwork.id} className="flex space-x-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {artwork.badge && (
                      <div className={`absolute -top-2 -right-2 px-2 py-1 text-xs font-bold rounded-full ${
                        artwork.badge === 'BEST' ? 'bg-red-500 text-white' :
                        artwork.badge === 'NEW' ? 'bg-green-500 text-white' :
                        'bg-orange-500 text-white'
                      }`}>
                        {artwork.badge}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{artwork.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">by {artwork.artist}</p>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">{artwork.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">({artwork.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg text-gray-900">${artwork.price}</span>
                        {artwork.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${artwork.originalPrice}</span>
                        )}
                      </div>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors">
                        구매하기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Artworks */}
          <div className="px-6 py-4">
            <h2 className="font-bold text-lg text-gray-900 mb-4">추천 작품</h2>
            <div className="grid grid-cols-2 gap-4">
              {recommendedArtworks.map((artwork) => (
                <div key={artwork.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 mb-1 text-sm line-clamp-2">{artwork.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">by {artwork.artist}</p>
                    <div className="flex items-center space-x-1 mb-2">
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs text-gray-600">{artwork.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-purple-600">${artwork.price}</span>
                      <button className="p-1">
                        <svg className="w-5 h-5 text-gray-400 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Following Tab */}
      {activeTab === 'following' && (
        <div className="px-6 py-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">팔로잉 작가들의 신작</h2>
          
          <div className="space-y-4">
            {followingArtists.map((artist, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <ImageWithFallback
                      src={artist.avatar}
                      alt={artist.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{artist.name}</p>
                      <p className="text-sm text-gray-500">{artist.artworks}개 작품 판매중</p>
                    </div>
                  </div>
                  {artist.newArtworks > 0 && (
                    <div className="px-2 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                      NEW {artist.newArtworks}
                    </div>
                  )}
                </div>
                <button className="w-full py-2 text-purple-600 font-medium text-sm border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                  작품 보러가기
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg text-center">
            <p className="text-purple-700 mb-2">더 많은 작가를 팔로우하고</p>
            <p className="text-purple-700 mb-3">다양한 작품을 만나보세요!</p>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold">
              작가 탐색하기
            </button>
          </div>
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div className="px-6 py-6">
          <h2 className="font-bold text-lg text-gray-900 mb-4">카테고리별 작품</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg text-center hover:from-purple-100 hover:to-pink-100 transition-colors">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.label}</h3>
                <p className="text-sm text-gray-500 mb-4">다양한 {category.label} 작품들</p>
                <button className="px-4 py-2 bg-white text-purple-600 rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-shadow">
                  둘러보기
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
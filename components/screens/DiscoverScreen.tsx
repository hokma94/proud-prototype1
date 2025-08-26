import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DiscoverScreen() {
  const [activeCategory, setActiveCategory] = useState('trending');

  const categories = [
    { id: 'trending', label: '트렌딩', icon: '🔥' },
    { id: 'painting', label: '회화', icon: '🎨' },
    { id: 'digital', label: '디지털', icon: '💻' },
    { id: 'photography', label: '사진', icon: '📸' },
    { id: 'sculpture', label: '조각', icon: '🗿' }
  ];

  const artworks = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1662486551474-24530b0a26c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwYXJ0JTIwZXhoaWJpdGlvbiUyMHBhaW50aW5nc3xlbnwxfHx8fDE3NTYxNzExMTZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      artist: '김모던',
      likes: 892,
      price: 245
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1682668701024-b6508708a764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBtdXNldW0lMjBwaWVjZXN8ZW58MXx8fHwxNzU2MTcxMTE2fDA&ixlib=rb-4.1.0&q=80&w=400',
      artist: '박현대',
      likes: 634,
      price: 180
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611087966028-bc70bc75d5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMHBob3RvZ3JhcGh5JTIwY3JlYXRpdmV8ZW58MXx8fHwxNzU2MTcxMTE2fDA&ixlib=rb-4.1.0&q=80&w=400',
      artist: '이크리에이티브',
      likes: 1203,
      price: 320
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1683143725470-af37c3c38557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      artist: '최자연',
      likes: 456,
      price: 125
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1716889033775-b93550f8247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      artist: '정추상',
      likes: 789,
      price: 290
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1575995874161-325b260c9b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
      artist: '유클래식',
      likes: 567,
      price: 380
    }
  ];

  const topArtists = [
    {
      name: '김모던',
      avatar: 'https://images.unsplash.com/photo-1544529569-38982a060348?w=60&h=60&fit=crop&crop=face',
      followers: '15.2K',
      sales: '$12.8K',
      rank: 1
    },
    {
      name: '박현대',
      avatar: 'https://images.unsplash.com/photo-1660738360230-2725346cf0cd?w=60&h=60&fit=crop&crop=face',
      followers: '12.8K',
      sales: '$9.4K',
      rank: 2
    },
    {
      name: '이크리에이티브',
      avatar: 'https://images.unsplash.com/photo-1621986601685-534276f162db?w=60&h=60&fit=crop&crop=face',
      followers: '11.5K',
      sales: '$8.9K',
      rank: 3
    },
    {
      name: '최자연',
      avatar: 'https://images.unsplash.com/photo-1496672254107-b07a26403885?w=60&h=60&fit=crop&crop=face',
      followers: '9.3K',
      sales: '$7.2K',
      rank: 4
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">탐색</h1>
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            {/* Settings Button */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="작품이나 작가를 검색해보세요"
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 py-4">
        <div className="flex space-x-3 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Artists Section */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">인기 작가</h2>
          <button className="text-purple-600 font-medium">전체보기</button>
        </div>
        
        <div className="space-y-3">
          {topArtists.map((artist) => (
            <div key={artist.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white rounded-full text-sm font-bold">
                  {artist.rank}
                </div>
                <ImageWithFallback
                  src={artist.avatar}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{artist.name}</p>
                  <p className="text-sm text-gray-500">{artist.followers} 팔로워</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">{artist.sales}</p>
                <p className="text-sm text-gray-500">총 판매</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Artworks Grid */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">추천 작품</h2>
          <button className="text-purple-600 font-medium">더보기</button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="aspect-square">
                <ImageWithFallback
                  src={artwork.image}
                  alt={`Artwork by ${artwork.artist}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900 text-sm">{artwork.artist}</p>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-xs text-gray-600">{artwork.likes}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">${artwork.price}</span>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">
                    구매
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Tags */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">인기 태그</h2>
        <div className="flex flex-wrap gap-2">
          {['#수채화', '#추상화', '#풍경화', '#인물화', '#디지털아트', '#현대미술', '#일러스트', '#사진예술'].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
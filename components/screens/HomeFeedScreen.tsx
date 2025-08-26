import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function HomeFeedScreen() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Proud100
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Message Button (moved to left) */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </button>
            {/* Settings Button (new, on the right) */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stories */}
      <div className="px-6 py-4">
        <div className="flex space-x-4 overflow-x-auto">
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
            <span className="text-xs text-gray-600">내 스토리</span>
          </div>
          
          {/* 김수진 - 할머니 이미지 */}
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1496672254107-b07a26403885?w=80&h=80&fit=crop&crop=face"
                alt="김수진"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">김수진</span>
          </div>
          
          {/* 박민호 - 할아버지 이미지 */}
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660738360230-2725346cf0cd?w=80&h=80&fit=crop&crop=face"
                alt="박민호"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">박민호</span>
          </div>
          
          {/* 이하늘 - 할아버지 이미지 (다른) */}
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621986601685-534276f162db?w=80&h=80&fit=crop&crop=face"
                alt="이하늘"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">이하늘</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1496672254107-b07a26403885?w=80&h=80&fit=crop&crop=face"
                alt="최예진"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">최예진</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-0.5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1496672254107-b07a26403885?w=80&h=80&fit=crop&crop=face"
                alt="정다은"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600">정다은</span>
          </div>
        </div>
      </div>

      {/* Feed Posts */}
      <div className="space-y-6">
        {/* Post 1 - Watercolor Landscape */}
        <div className="bg-white">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* 김아트 - 할아버지 이미지 */}
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544529569-38982a060348?w=40&h=40&fit=crop&crop=face"
                alt="김아트"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">김아트</p>
                <p className="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <button className="p-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </svg>
            </button>
          </div>

          <div className="w-full h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1683143725470-af37c3c38557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjE3MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="수채화 풍경화"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-gray-900 font-semibold">142</span>
                </button>
                <button className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-gray-600">23</span>
                </button>
                <button>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-semibold text-lg">$89</span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold">
                  구매하기
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-900">
                <span className="font-semibold">김아트</span> 봄날의 따뜻한 햇살을 담은 수채화입니다. 자연의 아름다움을 표현해보았어요 ✨
              </p>
              <p className="text-gray-500 text-sm">#수채화 #풍경화 #봄 #자연</p>
              <button className="text-gray-500 text-sm">댓글 23개 모두 보기</button>
            </div>
          </div>
        </div>

        {/* Post 2 - Abstract Modern Art */}
        <div className="bg-white">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660738360230-2725346cf0cd?w=40&h=40&fit=crop&crop=face"
                alt="박화가"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">박화가</p>
                <p className="text-sm text-gray-500">5시간 전</p>
              </div>
            </div>
            <button className="p-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </svg>
            </button>
          </div>

          <div className="w-full h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716889033775-b93550f8247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vZGVybiUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NjE3MTA0NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="추상화 작품"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-gray-600">67</span>
                </button>
                <button className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-gray-600">12</span>
                </button>
                <button>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-gray-600 text-sm">전시 전용</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-900">
                <span className="font-semibold">박화가</span> 감정의 흐름을 표현한 추상화 작품입니다. 갤러리 전시 예정작이에요! 🎨
              </p>
              <p className="text-gray-500 text-sm">#추상화 #현대미술 #전시 #갤러리</p>
              <button className="text-gray-500 text-sm">댓글 12개 모두 보기</button>
            </div>
          </div>
        </div>

        {/* Post 3 - Digital Fantasy Art */}
        <div className="bg-white">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621986601685-534276f162db?w=40&h=40&fit=crop&crop=face"
                alt="이디지털"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">이디지털</p>
                <p className="text-sm text-gray-500">1일 전</p>
              </div>
            </div>
            <button className="p-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="12" cy="19" r="2"></circle>
              </svg>
            </button>
          </div>

          <div className="w-full h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1679237686712-a71949f4b5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwaWxsdXN0cmF0aW9uJTIwZmFudGFzeXxlbnwxfHx8fDE3NTYxNzEwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="디지털 판타지 아트"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6 py-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-gray-900 font-semibold">234</span>
                </button>
                <button className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-gray-600">45</span>
                </button>
                <button>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-semibold text-lg">$156</span>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold">
                  구매하기
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-900">
                <span className="font-semibold">이디지털</span> 판타지 세계의 신비로운 풍경을 디지털로 표현했습니다. 꿈과 현실의 경계에서 🌟
              </p>
              <p className="text-gray-500 text-sm">#디지털아트 #판타지 #일러스트 #컨셉아트</p>
              <button className="text-gray-500 text-sm">댓글 45개 모두 보기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
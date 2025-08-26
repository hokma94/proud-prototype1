import React, { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function UploadScreen() {
  const [uploadStep, setUploadStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    visibility: 'public',
    forSale: false,
    price: ''
  });

  const categories = [
    { id: 'painting', label: '회화', icon: '🎨' },
    { id: 'digital', label: '디지털 아트', icon: '💻' },
    { id: 'photography', label: '사진', icon: '📸' },
    { id: 'illustration', label: '일러스트', icon: '✏️' },
    { id: 'sculpture', label: '조각', icon: '🗿' },
    { id: 'mixed', label: '혼합 매체', icon: '🎭' }
  ];

  const visibilityOptions = [
    { id: 'public', label: '전체 공개', description: '모든 사용자가 볼 수 있습니다' },
    { id: 'followers', label: '팔로워만', description: '나를 팔로우하는 사용자만 볼 수 있습니다' },
    { id: 'private', label: '비공개', description: '나만 볼 수 있습니다' }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setUploadStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (key: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {uploadStep > 1 && (
              <button 
                onClick={() => setUploadStep(uploadStep - 1)}
                className="p-2 -ml-2"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <h1 className="text-xl font-bold text-gray-900">새 작품 업로드</h1>
          </div>
          {uploadStep > 1 && (
            <button className="text-purple-600 font-semibold">
              게시
            </button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            uploadStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-400'
          }`}>
            <span className="text-sm font-semibold">1</span>
          </div>
          <div className={`flex-1 h-1 rounded ${
            uploadStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'
          }`}></div>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            uploadStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-400'
          }`}>
            <span className="text-sm font-semibold">2</span>
          </div>
          <div className={`flex-1 h-1 rounded ${
            uploadStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'
          }`}></div>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            uploadStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-400'
          }`}>
            <span className="text-sm font-semibold">3</span>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-gray-500">이미지 선택</span>
          <span className="text-xs text-gray-500">작품 정보</span>
          <span className="text-xs text-gray-500">판매 설정</span>
        </div>
      </div>

      {/* Step 1: Image Upload */}
      {uploadStep === 1 && (
        <div className="px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">작품 이미지를 선택해주세요</h2>
            <p className="text-gray-500">고품질의 이미지일수록 더 많은 관심을 받을 수 있어요</p>
          </div>

          <div className="space-y-4">
            {/* Camera Option */}
            <button className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 transition-colors">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">카메라로 촬영</p>
                  <p className="text-sm text-gray-500">실시간으로 작품을 촬영해보세요</p>
                </div>
              </div>
            </button>

            {/* Gallery Option */}
            <label htmlFor="gallery-upload" className="block">
              <div className="w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 transition-colors cursor-pointer">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">갤러리에서 선택</p>
                    <p className="text-sm text-gray-500">저장된 이미지를 업로드하세요</p>
                  </div>
                </div>
              </div>
              <input
                id="gallery-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Tips */}
          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">📸 촬영 팁</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• 자연광에서 촬영하면 색감이 더 생생해집니다</li>
              <li>• 작품 전체가 프레임에 들어오도록 촬영해주세요</li>
              <li>• 그림자나 반사가 생기지 않도록 주의하세요</li>
              <li>• 최소 1080x1080 해상도를 권장합니다</li>
            </ul>
          </div>
        </div>
      )}

      {/* Step 2: Artwork Information */}
      {uploadStep === 2 && selectedImage && (
        <div className="px-6 py-6">
          {/* Image Preview */}
          <div className="mb-6">
            <div className="aspect-square w-full max-w-xs mx-auto rounded-lg overflow-hidden">
              <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">작품 제목</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="작품의 제목을 입력해주세요"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">작품 설명</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="작품에 대해 설명해주세요 (제작 과정, 영감, 의미 등)"
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">카테고리</label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleInputChange('category', category.id)}
                    className={`p-3 border rounded-lg text-left transition-colors ${
                      formData.category === category.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{category.icon}</span>
                      <span className="font-medium">{category.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">태그</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                placeholder="#수채화 #풍경화 #자연 (쉼표로 구분)"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mt-1">태그를 통해 더 많은 사람들이 작품을 발견할 수 있어요</p>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">공개 범위</label>
              <div className="space-y-3">
                {visibilityOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleInputChange('visibility', option.id)}
                    className={`w-full p-3 border rounded-lg text-left transition-colors ${
                      formData.visibility === option.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{option.label}</p>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        formData.visibility === option.id
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {formData.visibility === option.id && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => setUploadStep(3)}
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              다음 단계
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Sale Settings */}
      {uploadStep === 3 && (
        <div className="px-6 py-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">판매 설정</h2>
            <p className="text-gray-500">작품 판매 여부와 가격을 설정해주세요</p>
          </div>

          <div className="space-y-6">
            {/* For Sale Toggle */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">작품 판매</p>
                <p className="text-sm text-gray-500">이 작품을 판매하고 싶으신가요?</p>
              </div>
              <button
                onClick={() => handleInputChange('forSale', !formData.forSale)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  formData.forSale ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData.forSale ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Price Input */}
            {formData.forSale && (
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">판매 가격</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">$</span>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Proud100에서 15%의 수수료가 부과됩니다</p>
              </div>
            )}

            {/* Pricing Guide */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">💡 가격 책정 가이드</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 초보 작가: $30-100</li>
                <li>• 중급 작가: $100-300</li>
                <li>• 숙련 작가: $300-1000+</li>
                <li>• 작품 크기, 재료, 소요 시간을 고려하세요</li>
              </ul>
            </div>

            {/* Like Goal */}
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <h3 className="font-semibold text-yellow-900">Discover 진출 목표</h3>
              </div>
              <p className="text-sm text-yellow-700">
                100개의 좋아요를 받으면 자동으로 Discover 페이지에 노출됩니다! 🎉
              </p>
            </div>

            {/* Upload Button */}
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors">
              작품 업로드하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
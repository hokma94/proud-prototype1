import React, { useState } from 'react';
import { HomeFeedScreen } from './components/screens/HomeFeedScreen';
import { DiscoverScreen } from './components/screens/DiscoverScreen';
import { UploadScreen } from './components/screens/UploadScreen';
import { ShoppingScreen } from './components/screens/ShoppingScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeFeedScreen />;
      case 'discover':
        return <DiscoverScreen />;
      case 'upload':
        return <UploadScreen />;
      case 'shopping':
        return <ShoppingScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeFeedScreen />;
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-gray-100 min-h-screen">
      <div className="bg-white relative">
        {/* Status Bar */}
        <div className="h-12 bg-white flex items-center justify-between px-6 pt-2">
          <div className="text-black text-sm font-semibold">9:41</div>
          <div className="flex items-center space-x-1">
            {/* Signal Bars - Previous Version (Restored) */}
            <div className="flex items-end space-x-0.5 mr-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1.5 bg-black rounded-full"></div>
              <div className="w-1 h-2 bg-black rounded-full"></div>
              <div className="w-1 h-2.5 bg-black rounded-full"></div>
            </div>
            
            {/* WiFi Icon - New iPhone Style */}
            <svg className="w-4 h-3 text-black mr-1" fill="currentColor" viewBox="0 0 18 15">
              <path d="M9 1C5.5 1 2.27 2.11 0 4.05l2.04 2.04C3.73 4.75 6.25 3.86 9 3.86s5.27.89 6.96 2.23L18 4.05C15.73 2.11 12.5 1 9 1z"/>
              <path d="M9 7.27c-1.5 0-2.89.57-3.93 1.51l2.04 2.04c.52-.43 1.17-.68 1.89-.68s1.37.25 1.89.68l2.04-2.04C11.89 7.84 10.5 7.27 9 7.27z"/>
              <circle cx="9" cy="13" r="1.5"/>
            </svg>
            
            {/* Battery Icon - iPhone Style with Green Fill */}
            <div className="flex items-center">
              <div className="relative">
                {/* Battery Outline */}
                <div className="w-6 h-3 border border-black rounded-sm bg-white relative">
                  {/* Green Battery Fill (80% charged) */}
                  <div className="w-4 h-1.5 bg-green-500 rounded-sm absolute left-0.5 top-0.5"></div>
                </div>
                {/* Battery Terminal */}
                <div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-black rounded-r-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="min-h-screen pb-20">
          {renderScreen()}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-100 px-4 py-2">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setCurrentScreen('home')}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                currentScreen === 'home' ? 'text-purple-600' : 'text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.1l8.5 8.5v11.4h-6v-7h-5v7h-6V10.6L12 2.1z"/>
              </svg>
              <span className="text-xs">홈</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('discover')}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                currentScreen === 'discover' ? 'text-purple-600' : 'text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <span className="text-xs">검색</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('upload')}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                currentScreen === 'upload' ? 'text-purple-600' : 'text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span className="text-xs">업로드</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('shopping')}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                currentScreen === 'shopping' ? 'text-purple-600' : 'text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 01-8 0"></path>
              </svg>
              <span className="text-xs">쇼핑</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('profile')}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                currentScreen === 'profile' ? 'text-purple-600' : 'text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="text-xs">프로필</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
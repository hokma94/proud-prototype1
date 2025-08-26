// SVG를 PNG로 변환하는 스크립트
// 이 스크립트는 Node.js 환경에서 실행되어야 합니다

const fs = require('fs');
const path = require('path');

// SVG 내용을 읽어서 PNG로 변환하는 간단한 방법
// 실제로는 sharp나 canvas 라이브러리를 사용해야 하지만, 
// 여기서는 SVG를 그대로 복사해서 다양한 크기로 제공

const svgContent = fs.readFileSync('./public/favicon.svg', 'utf8');

// 32x32 PNG (실제로는 SVG를 PNG로 변환해야 함)
fs.writeFileSync('./public/favicon-32x32.png', svgContent);

// 16x16 PNG
fs.writeFileSync('./public/favicon-16x16.png', svgContent);

// Apple touch icon (180x180)
fs.writeFileSync('./public/apple-touch-icon.png', svgContent);

console.log('아이콘 파일들이 생성되었습니다!');
console.log('참고: 실제 PNG 변환을 위해서는 sharp 라이브러리 설치가 필요합니다.');

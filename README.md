# 제이앤디소프트 공식 홈페이지

AI와 전문가가 함께하는 IT 파트너. SI 시스템 구축, IT 컨설팅, 스타트업 MVP 개발, AWOP 플랫폼 제공

## 🚀 기술 스택

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **CSS Framework**: Tailwind CSS v4
- **Component Library**: shadcn-vue
- **Icons**: Lucide Vue Next
- **Animation**: @vueuse/motion
- **State Management**: Pinia
- **Utilities**: VueUse

## 📦 설치 및 실행

### 개발 서버 실행

```bash
npm install
npm run dev
```

개발 서버는 `http://localhost:5173`에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 프리뷰

```bash
npm run preview
```

## 📁 프로젝트 구조

```
jndsoft-homepage/
├── src/
│   ├── components/
│   │   ├── layout/         # 레이아웃 컴포넌트 (Header, Footer)
│   │   └── sections/       # 섹션 컴포넌트 (Hero, Services, etc.)
│   ├── assets/
│   │   ├── images/         # 이미지 파일
│   │   └── styles/         # CSS 파일
│   ├── types/              # TypeScript 타입 정의
│   ├── App.vue             # 루트 컴포넌트
│   └── main.ts             # 진입점
├── public/                 # 정적 파일
├── index.html              # HTML 템플릿
├── vite.config.ts          # Vite 설정
├── tsconfig.json           # TypeScript 설정
└── package.json            # 의존성 관리
```

## 🎨 주요 기능

### 섹션 구성

1. **Hero Section**: 메인 히어로 이미지와 CTA 버튼
2. **Services**: 4대 사업 영역 소개 (SI, 컨설팅, MVP, AWOP)
3. **Projects**: 주요 프로젝트 포트폴리오
4. **Competitiveness**: AI 기반 경쟁력 소개
5. **Culture**: 회사 문화 및 가치
6. **Journey**: 회사 연혁
7. **Contact**: 연락처 및 지도

### 반응형 디자인

- **Desktop**: ≥ 1024px
- **Tablet**: 640px ~ 1023px
- **Mobile**: < 640px

### 애니메이션

- 스크롤 기반 애니메이션 (@vueuse/motion)
- 호버 인터랙션
- 부드러운 스크롤 네비게이션

## 🎯 배포

### Netlify / Vercel (권장)

1. GitHub 저장소와 연결
2. 빌드 명령: `npm run build`
3. 출력 디렉토리: `dist`
4. 자동 배포 활성화

### 수동 배포 (가비아 호스팅)

1. `npm run build` 실행
2. `dist/` 폴더의 모든 파일을 FTP로 업로드

## 📝 라이선스

Copyright © 2024 JnDSOFT Inc. All Rights Reserved.

## 📧 문의

- Email: business@jndsoft.co.kr
- Address: 서울특별시 강서구 양천로 424 (등촌동) 데시앙플렉스 지식산업센터 630호

# RANDOM-GALLERY

`picsum.photos`의 랜덤 이미지를 이용해 만든 가상의 사진 전시회 웹사이트입니다.  
페이지를 새로고침하거나 `작품 다시 걸기` 버튼을 누를 때마다 약 30개의 작품 이미지가 새롭게 배치됩니다.

## Features

- 랜덤 이미지 30장을 전시 작품처럼 구성한 갤러리 레이아웃
- 대표 작품 영역, 큐레이터 노트, 다양한 비율의 작품 카드
- `작품 다시 걸기` 버튼으로 새로고침 없이 전체 작품 교체
- React + Vite 기반의 가벼운 프런트엔드 구성

## Tech Stack

- React
- Vite
- Picsum Photos API

## Installation

```bash
npm install
```

## Usage

개발 서버 실행:

```bash
npm run dev
```

프로덕션 빌드:

```bash
npm run build
```

빌드 결과 미리보기:

```bash
npm run preview
```

## Project Structure

```text
.
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ styles.css
├─ index.html
├─ vite.config.js
└─ package.json
```

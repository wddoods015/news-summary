// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slice/NewsSlice'; // 뉴스 슬라이스 임포트
import modalReducer from './slice/ModalSlice'; // 모달 슬라이스 임포트
import menuReducer from './slice/MenuSlice'; // 모달 슬라이스 임포트
import trendReducer from './slice/TrendSlice'; // 트렌드 슬라이스 임포트
import categoryReducer from './slice/CategorySlice'; // 카테고리 슬라이스 임포트
import headlineReducer from './slice/HeadLineSlice';
import summaryReducer from './slice/SummarySlice';

export const store = configureStore({
  reducer: {
    news: newsReducer, // 뉴스 슬라이스 추가
    modal: modalReducer, // 모달 슬라이스 추가
    menu: menuReducer, // 모달 슬라이스 추가
    trends: trendReducer, // 트렌드 슬라이스 추가
    categories: categoryReducer, // 카테고리 슬라이스 추가
    headlines: headlineReducer,
    summary: summaryReducer,
  },
});

// RootState 및 AppDispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

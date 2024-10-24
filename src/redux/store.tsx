// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slice/NewsSlice'; // 뉴스 슬라이스 임포트
import modalReducer from './slice/ModalSlice'; // 모달 슬라이스 임포트
import trendReducer from './slice/TrendSlice';
import headlineReducer from './slice/HeadLineSlice';
import summaryReducer from './slice/SummarySlice';

export const store = configureStore({
  reducer: {
    news: newsReducer, // 뉴스 슬라이스 추가
    modal: modalReducer, // 모달 슬라이스 추가
    trends: trendReducer,
    headlines: headlineReducer,
    summary: summaryReducer,
  },
});

// RootState 및 AppDispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

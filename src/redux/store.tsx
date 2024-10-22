import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './slice/NewsSlice';
import trendReducer from './slice/TrendSlice';

export const store = configureStore({
  reducer: {
      news: newsReducer,
      trends: trendReducer,
    },
  },
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
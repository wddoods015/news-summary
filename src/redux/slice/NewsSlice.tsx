// src/redux/slice/newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://wispmall.duckdns.org'

// 날짜 형식을 YYYY-MM-DD로 변환하는 함수
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 타입 정의
export interface NewsItem {
  title: string;
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
}

interface NewsApiResponse {
  data: {
    items: NewsItem[];
    lastBuildDate: string;
    total: number;
    start: number;
    display: number;
  };
  status: number;
  statusText: string;
}

interface NewsState {
  items: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
};

// fetch 함수
// export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
//   const response = await fetch(`${API_URL}/api/articles/${{currentDate}}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch news');
//   }
//   const data = await response.json();
//   console.log(data.data.items)
//   return data.data.items; 
// });

// API 요청 함수
export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      const currentDate = formatDate(new Date());

      const response = await axios.get<NewsApiResponse>(`${API_URL}/api/articles/${currentDate}`);
      console.log(response.data);
      console.log(response.data.data.items)
      return response.data.data.items;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null; // 로딩 시작할 때 에러 초기화
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<NewsItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export default newsSlice.reducer;
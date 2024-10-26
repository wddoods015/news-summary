// src/redux/slice/newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getNewsByCategory, getNewsByDate } from '@/api/apiNewsList';
import { getNewsByCategory, getNewsByDate } from '@/api/apiNewsList';
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

export interface NewsApiResponse {
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

// API 요청 함수 
// 현재날짜 뉴스리스트
// 수정전
// export const fetchNewsByDate = createAsyncThunk(
//   'news/fetchNewsByDate',
//   async (_, { rejectWithValue }) => {
//     try {
//       const currentDate = formatDate(new Date());

//       const response = await axios.get<NewsApiResponse>(`${API_URL}/api/articles/${currentDate}`);
//       const currentDate = formatDate(new Date());

//       const response = await axios.get<NewsApiResponse>(`${API_URL}/api/articles/${currentDate}`);
//       console.log(response.data);
//       console.log(response.data.data.items)
//       return response.data.data.items;
//       console.log(response.data.data.items)
//       return response.data.data.items;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return rejectWithValue(error.message);
//       }
//       return rejectWithValue('An unexpected error occurred');
//     }
//   }
// );

// 수정후
export const fetchNewsByDate = createAsyncThunk(
  'news/fetchNewsByDate',
  async (_, { rejectWithValue }) => {
    try {
      const currentDate = formatDate(new Date());
      return await getNewsByDate(currentDate);
    } catch (error: any) {
      return rejectWithValue(error.message);

    //   const response = await axios.get<NewsApiResponse>(`${API_URL}/api/articles/${currentDate}`);
    //   console.log(response.data);
    //   console.log(response.data.data.items)
    //   return response.data.data.items;
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     return rejectWithValue(error.message);
    //   }
    //   return rejectWithValue('An unexpected error occurred');
    }
  }
);

// 카테고리 뉴스리스트
export const fetchNewsByCategory = createAsyncThunk(
  'news/fetchNewsByCategory',
  async (category: string, { rejectWithValue }) => {
    try {
      return await getNewsByCategory(category);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// 수정후
export const fetchNewsByDate = createAsyncThunk(
  'news/fetchNewsByDate',
  async (_, { rejectWithValue }) => {
    try {
      const currentDate = formatDate(new Date());
      return await getNewsByDate(currentDate);
    } catch (error: any) {
      return rejectWithValue(error.message);

    //   const response = await axios.get<NewsApiResponse>(`${API_URL}/api/articles/${currentDate}`);
    //   console.log(response.data);
    //   console.log(response.data.data.items)
    //   return response.data.data.items;
    // } catch (error) {
    //   if (axios.isAxiosError(error)) {
    //     return rejectWithValue(error.message);
    //   }
    //   return rejectWithValue('An unexpected error occurred');
    }
  }
);

// 카테고리 뉴스리스트
export const fetchNewsByCategory = createAsyncThunk(
  'news/fetchNewsByCategory',
  async (category: string, { rejectWithValue }) => {
    try {
      return await getNewsByCategory(category);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNewsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchNewsByDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsByDate.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNewsByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
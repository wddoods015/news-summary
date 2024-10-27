// src/redux/slice/newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getNewsByCategory, getNewsByDate, getNewsByKeyword } from '@/api/apiNewsList';

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
  searchKeyword: string;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
  searchKeyword: ''
};

// API 요청 함수 
// 현재날짜 뉴스리스트
export const fetchNewsByDate = createAsyncThunk(
  'news/fetchNewsByDate',
  async (_, { rejectWithValue }) => {
    try {
      const currentDate = formatDate(new Date());
      return await getNewsByDate(currentDate);
    } catch (error: any) {
      return rejectWithValue(error.message);
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

// 검색 결과
export const fetchNewsByKeyword = createAsyncThunk(
  'news/fetchNewsByKeyword',
  async (keyword: string, { rejectWithValue }) => {
    try {
      return await getNewsByKeyword(keyword);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
    clearSearch: (state) => {
      state.searchKeyword = '';
      state.items = [];
    },
  },
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
      })
      .addCase(fetchNewsByKeyword.pending, (state) => {
        state.loading =true;
        state.error = null;
      })
      .addCase(fetchNewsByKeyword.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNewsByKeyword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchKeyword, clearSearch } = newsSlice.actions;
export default newsSlice.reducer;
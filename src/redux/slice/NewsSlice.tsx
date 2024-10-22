// src/redux/slice/newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://wispmall.duckdns.org'
const currentDate = new Date;
console.log(currentDate)

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch(`${API_URL}/api/articles/${{currentDate}}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  console.log(data.data.items)
  return data.data.items; 
});

// export const fetchNews = createAsyncThunk(
//   'news/fetchNews',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`http://43.203.208.22:3000/api/articles/${currentDate}`);
//       console.log(response.data);
//       return response.data.data.items; // API 응답 구조에 맞게 조정
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return rejectWithValue(error.message);
//       }
//       return rejectWithValue('An unexpected error occurred');
//     }
//   }
// );

interface NewsState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<any[]>) => {
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
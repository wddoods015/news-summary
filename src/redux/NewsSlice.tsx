// src/redux/newsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://43.203.208.22:3000/'

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch(`http://43.203.208.22:3000/api/articles/${'2024.10.21.'}`);
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  console.log(data.data.items)
  return data.data.items; // Adjust according to the actual API response structure
});

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
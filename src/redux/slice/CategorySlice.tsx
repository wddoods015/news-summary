// src/redux/slice/CategorySlice.tsx

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '@/api/apiCategories';

interface CategoryState {
  categories: string[];
  selectedCategories: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  selectedCategories: [],
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await getCategories();
      return categories;
    } catch (error) {
      return rejectWithValue('카테고리를 불러오는데 실패했습니다.');
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const categories = action.payload;
      const index = state.selectedCategories.indexOf(categories);
      if (index === -1) {
        state.selectedCategories.push(categories);
      } else {
        state.selectedCategories.splice(index, 1);
      }
    },
    clearSelectedCategories: (state) => {
      state.selectedCategories = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { toggleCategory, clearSelectedCategories } = categorySlice.actions;
export default categorySlice.reducer; 
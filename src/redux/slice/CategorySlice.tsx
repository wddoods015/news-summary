// src/redux/slice/CategorySlice.tsx

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  categories: string[];
  selectedCategory: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: ['전체', '정치', '경제', '사회', '생활문화', 'IT과학', '세계'],
  selectedCategory: '전체',  // 기본값: '전체' 카테고리 
  isLoading: false,
  error: null,
};

// export const fetchCategories = createAsyncThunk(
//   'categories/fetchCategories',
//   async (_, { rejectWithValue }) => {
//     try {
//       const categories = await getCategories();
//       return categories;
//     } catch (error) {
//       return rejectWithValue('카테고리를 불러오는데 실패했습니다.');
//     }
//   }
// );

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = '전체';
    },
  },
});

export const { setSelectedCategory, clearSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
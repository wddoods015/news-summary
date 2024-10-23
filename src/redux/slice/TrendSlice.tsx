import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTrends } from '@/api/apiTrends';

interface TrendResponse {
  timeStamp: string;
  statusCode: number;
  httpStatus: string;
  message: string;
  data: string[];
}

interface TrendState {
  trends: string[];
  isLoading: boolean;
  error: string | null;
  isModalOpen: boolean;
}

const initialState: TrendState = {
  trends: [],
  isLoading: false,
  error: null,
  isModalOpen: false
};

export const fetchTrends = createAsyncThunk(
  'trends/fetchTrends',
  async (_, { rejectWithValue }) => {
    try {
      const trends = await getTrends();
      return trends;
    } catch (error) {
      return rejectWithValue('실시간 트렌드를 불러오는데 실패했습니다.');
    }
  }
);

const trendSlice = createSlice({
  name: 'trends',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrends.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTrends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trends = action.payload;
      })
      .addCase(fetchTrends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
});

export const { openModal, closeModal } = trendSlice.actions;
export default trendSlice.reducer;
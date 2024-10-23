import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getHeadLine } from '@/api/apiHeadLine';

// interface 설정 안쓰이는 것 같아서.. 일단 주석,,
// interface HeadlineResponse {
//     timeStamp: string;
//     statusCode: number;
//     httpStatus: string;
//     message: string;
//     data: string[];
//   }

interface HeadlineState {
    headlines: string[];
    isLoading: boolean;
    error: string | null;
  }
  
const initialState: HeadlineState = {
    headlines: [],
    isLoading: false,
    error: null,
  };  

// thunk fetch action 설정

export const fetchHeadines = createAsyncThunk(
  'headines/fetchHeadines',
  async (_, { rejectWithValue }) => {
    try {
      const headlines = await getHeadLine();
      return headlines;
    } catch (error) {
      return rejectWithValue('실시간 헤드라인 뉴스를 불러오는데 실패했습니다.');
    }
  }
);  

// slices 설정

const headineSlice = createSlice({
    name: 'headlines',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchHeadines.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHeadines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.headlines = action.payload;
      })
      .addCase(fetchHeadines.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch Headiine news';
      });
    },
});

export default headineSlice.reducer;
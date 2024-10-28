// MenuSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
  isMenuOpen: boolean; // 모달 상태 정의
}

const initialState: MenuState = {
  isMenuOpen: false, // 초기값 설정
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true; // 모달 열기
    },
    closeMenu: (state) => {
      state.isMenuOpen = false; // 모달 닫기
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer; // 리듀서 내보내기

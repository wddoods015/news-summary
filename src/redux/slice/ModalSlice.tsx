// ModalSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean; // 모달 상태 정의
}

const initialState: ModalState = {
  isOpen: false, // 초기값 설정
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true; // 모달 열기
    },
    closeModal: (state) => {
      state.isOpen = false; // 모달 닫기
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer; // 리듀서 내보내기

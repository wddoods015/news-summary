"use client"; 

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; // RootState 가져오기
import { closeSummaryModal } from '@/redux/slice/SummarySlice'; // closeModal 액션 가져오기

const SummaryModal: React.FC = () => {
  const isSummaryOpen = useSelector((state: RootState) => state.summary.isSummaryOpen);
   const dispatch = useDispatch<AppDispatch>();
   
   
   const summary = useSelector((state: RootState) => state.summary.summary);
   const link = useSelector((state: RootState) => state.summary.link);
   console.log('모달에서 summary 확인:', summary); 
   console.log('모달에서 해당기사 링크:', link);
  // 모달이 닫혀 있으면 null 반환
  if (!isSummaryOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex mt-[60px] z-[50]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(closeSummaryModal());
        }
      }}
    >
      <dialog className="w-full mx-auto h-screen rounded-b-lg shadow-lg p-10 flex flex-col">
        <h2 className="text-lg font-bold mb-[40px]">3줄 요약</h2>
        <span>{summary}</span> 
        <span>뉴스 링크</span>
        <button 
          className="mt-4 p-2 w-12 bg-blue-500 text-white rounded" 
          onClick={() => dispatch(closeSummaryModal())} // 버튼 클릭 시 모달 닫기
        >
          x
        </button>
      </dialog>
    </div>
  );
};

export default SummaryModal;

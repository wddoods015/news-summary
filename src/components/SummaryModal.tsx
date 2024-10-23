"use client"; 

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; // RootState 가져오기
import { closeSummaryModal } from '@/redux/slice/SummarySlice'; // closeModal 액션 가져오기
import { fetchSummary } from '@/redux/slice/SummarySlice';

const SummaryModal: React.FC = () => {
const state = useSelector((state: RootState) => state);

const isOpen = useSelector((state: RootState) => state.summary.isSummaryOpen);
const dispatch = useDispatch<AppDispatch>();

const { summary } = useSelector(
    (state: RootState) => state.summary
  );
  console.log('요약 뉴스 확인',summary); // 트렌드 키워드 배열로 가져옴

useEffect(() => {
    if(isOpen) {
        dispatch(fetchSummary());
    }
}, [isOpen, dispatch]);

if (!isOpen) return null; // 모달이 닫혀 있으면 null 반환

return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex"
        onClick={(e) => {
            if (e.target === e.currentTarget) {
              dispatch(closeSummaryModal());
            }
          }}
        >
            <dialog className="w-full mx-auto h-600 rounded-b-lg shadow-lg p-10 flex flex-col">
                <span>여기 요약 뉴스 보여줄 곳</span>
                <span>뉴스 링크</span>
                <button>x</button>
            </dialog>
        </div>
    );
};

export default SummaryModal;
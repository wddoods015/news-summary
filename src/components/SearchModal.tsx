"use client"; 

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; // RootState 가져오기
import { closeModal } from '@/redux/slice/ModalSlice'; // closeModal 액션 가져오기
import { fetchTrends } from '@/redux/slice/TrendSlice';

const SearchModal: React.FC = () => {
  const state = useSelector((state: RootState) => state); // 전체 상태 가져오기
  //console.log('이건가?',state); // 상태를 출력하여 modal의 상태 확인

  const isOpen = useSelector((state: RootState) => state.modal.isOpen); // modal 상태 가져오기
  const dispatch = useDispatch<AppDispatch>();

  const { trends, isLoading, error } = useSelector(
    (state: RootState) => state.trends
  );
  console.log('t',trends); // 트렌드 키워드 배열로 가져옴

  useEffect(() => {
    if(isOpen) {
      dispatch(fetchTrends());
    }
  }, [isOpen, dispatch]);
  
  if (!isOpen) return null; // 모달이 닫혀 있으면 null 반환

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex"
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        dispatch(closeModal());
      }
    }}
    >
  <dialog
    open={isOpen}
    className="w-full mx-auto h-600 rounded-b-lg shadow-lg p-10 flex flex-col">
      <input
                            type="text"
                            placeholder="여기에 입력하세요"
                            className="mt-4 min-w-[390px] max-w-[590px] p-2 border border-gray-300 rounded block"
                        />
    <h2>오늘의 키워드</h2>
    {trends && trends.map((keyword, index) => (
      <ul key={index}>
        <li>{keyword}</li>
      </ul>
    ))}
    <button
      onClick={() => dispatch(closeModal())}
      className="w-16 mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center block"
    >
      x
    </button>
  </dialog>
</div>
 
  );
};

export default SearchModal;

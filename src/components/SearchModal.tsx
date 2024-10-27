"use client"; 

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store'; // RootState 가져오기
import { closeModal } from '@/redux/slice/ModalSlice'; // closeModal 액션 가져오기
import { fetchTrends } from '@/redux/slice/TrendSlice';
import { fetchNewsByKeyword, setSearchKeyword } from '@/redux/slice/NewsSlice';
import { useRouter } from 'next/navigation';

const SearchModal: React.FC = () => {
  const state = useSelector((state: RootState) => state); // 전체 상태 가져오기
  //console.log('이건가?',state); // 상태를 출력하여 modal의 상태 확인

  const isOpen = useSelector((state: RootState) => state.modal.isOpen); // modal 상태 가져오기
  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');

  const { trends, isLoading, error } = useSelector(
    (state: RootState) => state.trends
  );
  // console.log('seaechModal.tsx trends확인',trends); // 트렌드 키워드 배열로 가져옴

  useEffect(() => {
    if(isOpen) {
      dispatch(fetchTrends());
    }
  }, [isOpen, dispatch]);
  
  if (!isOpen) return null; // 모달이 닫혀 있으면 null 반환

  // 검색 기능
  // 검색 처리 함수
  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim()) {
      dispatch(setSearchKeyword(searchTerm));
      dispatch(closeModal());
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);  // 검색결과 페이지로 이동
    }
  };

  // 폼 제출
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchInput);
  }

  // 트렌드 키워드 클릭
  const handleTrendClick = (keyword: string) => {
    handleSearch(keyword);
    console.log('모달에서 트렌드 키워드 클릭: ', keyword)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        dispatch(closeModal());
      }
    }}
    >
  <dialog
    open={isOpen}
    className="w-full mx-auto h-600 rounded-b-lg shadow-lg p-10 flex flex-col items-center">
    <form onSubmit={handleSubmit} className='relative'>
      <input
                            type="text"
                            placeholder="여기에 입력하세요"
                            className="m-4 min-w-[390px] max-w-[590px] p-2 pr-10 border border-gray-300 rounded-lg block"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
          <button 
            type="submit" 
            className="absolute right-6 top-1/2 transform -translate-y-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" aria-hidden="true" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" className="icon">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </button>
    </form>

    <h1 className='m-4 mt-8 font-bold w-full text-2xl text-center'>오늘의 키워드</h1>
      <ul  className="m-4 grid grid-cols-3 gap-4 w-full text-center">
      {trends && trends.map((keyword, index) => (
        <li 
        key={index} 
        className="col-span-1 cursor-pointer hover:underline transition-all duration-200"
        onClick={() => handleTrendClick(keyword)}
        >{keyword}
        </li>
      ))}
        </ul>
    <button
      onClick={() => dispatch(closeModal())}
      className="w-16 mt-4 text-black text-2xl py-2 px-4 rounded text-center block cursor-pointer"
    >
      ×
    </button>
  </dialog>
</div>
 
  );
};

export default SearchModal;
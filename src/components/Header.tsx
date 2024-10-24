'use client'; // 클라이언트 컴포넌트로 설정
import React from 'react';
import ListIcon from './icon/list-icon.svg';
import SearchIcon from './icon/search-icon.svg';
import { useDispatch } from 'react-redux';
import { openModal } from '@/redux/slice/ModalSlice'; // 경로에 맞게 수정

const Header: React.FC = () => {
  const dispatch = useDispatch(); // dispatch 가져오기
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <header className="flex justify-between items-center p-4">
      <h2 className="text-2xl font-bold mb-4">News</h2>
      <div className='flex gap-8'>
      <SearchIcon className="w-6 h-6" aria-label="Search Icon" onClick={handleOpenModal}/> {/* svg icon 컴포넌트로 사용 */}
      <ListIcon className="w-6 h-6" aria-label="List Icon" />
      </div>
    </header>
  );
};

export default Header;

'use client'; // 클라이언트 컴포넌트로 설정
import React from 'react';
import ListIcon from './icon/list-icon.svg';
import SearchIcon from './icon/search-icon.svg';
import { useDispatch } from 'react-redux';
import { openMenu } from '@/redux/slice/MenuSlice';
import { openModal } from '@/redux/slice/ModalSlice'; 

const Header: React.FC = () => {

  const dispatch = useDispatch(); // dispatch 가져오기
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleOpenMenu = () => {
    dispatch(openMenu());
  };


  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-[60] pl-[10px] pr-[10px]">
      <h2 className="text-2xl font-bold mb-4">News</h2>
      <div className='flex gap-8'>
      <SearchIcon className="w-6 h-6" aria-label="Search Icon" onClick={handleOpenModal}/> {/* svg icon 컴포넌트로 사용 */}
      <ListIcon className="w-6 h-6" aria-label="List Icon" onClick={handleOpenMenu}/>
      </div>
    </header>
  );
};

export default Header;

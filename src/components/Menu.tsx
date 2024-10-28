'use client'; // 클라이언트 컴포넌트로 설정

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store'; // RootState 경로 확인
import { closeMenu } from '@/redux/slice/MenuSlice'; // closeMenu 액션 가져오기
import { useRouter } from 'next/navigation';

const Menu: React.FC = () => {
  
  const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen); // 메뉴 상태 가져오기
  const dispatch = useDispatch();
  const router = useRouter(); // 앱라우팅 위한,,
  
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const deleteAllSaved = () => {
    window.localStorage.clear();
    alert('스크랩한 뉴스가 전체 삭제되었습니다.');
  }

  if (!isMenuOpen) return null; // 메뉴가 열리지 않았으면 아무것도 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-white bg-opacity-0 flex items-center justify-end z-50 mt-[80px]"
    onClick={(e) => {
        if (e.target === e.currentTarget) {
          dispatch(closeMenu());
        }
      }}
    >
      <dialog
        open={isMenuOpen}
        className="absolute right-0 top-0 w-[400px] h-auto rounded-b-lg shadow-lg p-10 flex flex-col items-center bg-white">
        <div>
          <h2 className="text-lg font-semibold h-16 "
          onClick={() => {
            router.push('/saved-news');
          }}
          >북마크 목록</h2>
          <h2 className="text-lg font-semibold"
           onClick={deleteAllSaved}
          >북마크 비우기</h2>
        </div>
        <button onClick={handleCloseMenu} className="self-end">x</button>
        {/* 메뉴 항목 추가 */}
      </dialog>
    </div>
  );
};

export default Menu;

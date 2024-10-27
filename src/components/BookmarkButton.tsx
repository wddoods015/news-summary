// BookmarkButton.tsx
import React from 'react';
import BookmarkIcon from './icon/bookmark-icon.svg';

// 북마크 인터페이스
interface Bookmark {
  title: string;      // 제목
  link: string;       // 북마크 고유키
  pubDate: string;
  description: string; // 설명
 
}

interface BookmarkButtonProps {
  Bookmark: Bookmark; // Bookmark 타입을 사용
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ Bookmark }) => {
  const saveBookmark = () => {
    // 북마크 저장 데이터의 고유성을 위해 key필수
    const bookmarkKey = Bookmark.link;
    window.localStorage.setItem(bookmarkKey, JSON.stringify(Bookmark));
    console.log('Bookmark saved:', Bookmark);
  };

  return (
  <button  onClick={saveBookmark}  aria-label="Bookmark Icon" className="border border-gray-800 text-gray-800 px-3 rounded">
    북마크
  </button>

  );
};

export default BookmarkButton;

//  <BookmarkIcon  onClick={saveBookmark}  aria-label="Bookmark Icon" className="w-6 h-6"/>
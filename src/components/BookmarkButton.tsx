import React, { useState } from 'react';
import BookmarkIcon from './icon/bookmark-icon.svg';
import FillBookmarkIcon from './icon/fillbookmark-icon.svg';

// 북마크 인터페이스
interface Bookmark {
  title: string;      // 제목
  link: string;       // 북마크 고유키 (고유해야 함)
  pubDate: string;
  description: string; // 설명
}

interface BookmarkButtonProps {
  Bookmark: Bookmark; // Bookmark 타입을 사용
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ Bookmark }) => {
  const [isSaved, setIsSaved] = useState(false); 

  const saveBookmark = (bookmark: Bookmark) => {
    const key = bookmark.link; // 고유한 link를 키로 사용
    window.localStorage.setItem(key, JSON.stringify(bookmark)); // 북마크 데이터 저장
    console.log('Bookmark saved:', bookmark);
    console.log('저장완료');
  };

  const removeBookmark = (bookmark: Bookmark) => {
    const keyToRemove = bookmark.link; // 고유한 link로 키 찾기
    window.localStorage.removeItem(keyToRemove); // 해당 키와 값 제거
    console.log('북마크가 제거되었습니다:', keyToRemove);
  };

  const handleClick = () => {
    if (isSaved) {
      removeBookmark(Bookmark); // 북마크 제거
    } else {
      saveBookmark(Bookmark); // 북마크 저장
    }

    setIsSaved(!isSaved); // 상태 토글
  };

  return (
    <button onClick={handleClick} aria-label="북마크 버튼">
      {isSaved ? (
        <FillBookmarkIcon className="w-8 h-auto mb-[20px]" />
      ) : (
        <BookmarkIcon className="w-6 h-auto mb-[20px]" />
      )}
    </button>
  );
};

export default BookmarkButton;

'use client';

import React, { useState, useEffect } from 'react';
import { removeHTMLTags } from '../../utils/textUtils';
// import BookmarkIcon from './icon/bookmark-icon.svg';
// import FillBookmarkIcon from './icon/fillbookmark-icon.svg';

export default function savedPage () {
    const [bookmarkList, setBookmarkList] = useState<{ key: string; value: any }[]>([]);

      useEffect(() => {
    fetchBookMarks(); // 북마크 가져오기
  }, [bookmarkList]); // 컴포넌트가 처음 렌더링될 때만 실행

  const fetchBookMarks = () => {
    const bookmarks: { key: string; value: any }[] = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.includes("http")) {
            try {
                const item = localStorage.getItem(key);
                if (item) {
                    bookmarks.push({ key, value: JSON.parse(item) });
                }
            } catch (error) {
                console.error(`Error parsing item with key "${key}":`, error);
            }
        }
    }

    setBookmarkList(bookmarks);
    console.log('저장데이터확인',bookmarkList);
};


const removeBookmark = (link: string) => {
    const keyToRemove = link;
    window.localStorage.removeItem(keyToRemove);
    console.log('북마크가 제거되었습니다:', keyToRemove);
};

    return (
        <main className="min-w-[390px] mx-auto p-4 border h-auto" >
           <h1 className="p-2 mt-4 mb-16 text-2xl font-bold border-b border-solid border-gray-500">스크랩한 뉴스</h1>
           <span className='mb-4'>전체 {bookmarkList.length}</span>
            <ul>
    {bookmarkList.map(({ key, value }) => (
        <div  key={key} className="bg-white shadow-md rounded-lg p-4 mb-[20px]">
        <div>
        <a href={value.link}>
        <h4 className="text-xl font-semibold mb-2">
        {value.title && <span>{removeHTMLTags(value.title)}</span>}
        <p className="text-gray-600 mb-4 text-xs">{removeHTMLTags(value.description)}</p>
        <p>{value.pubDate}</p>
        </h4>
        </a>
        <a href={value.originallink}>
        원문기사 읽기
        </a>
    </div>
    <button onClick={() => removeBookmark(value.link)} className='font-bold w-8 h-auto ml-[90%]'>x</button>
    </div>
  ))}
</ul>
        </main>
    )
}
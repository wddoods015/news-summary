// app/page.tsx
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       data
//     </div>
//   );
// }


// src/app/page.tsx
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../redux/store';
// import { fetchNews } from '../redux/NewsSlice';
import NewsListContainer from '../components/NewsListContainer';
import HeadLineContainer from '@/components/HeadLineContainer';
import SearchModal from '@/components/SearchModal';
import Header from '@/components/Header';
import SummaryModal from '@/components/SummaryModal';

export default function Home() {
  return (
    <main className="min-w-[390px] mx-auto p-4 border h-auto" >
      <Header/>
      <SummaryModal/>
      <SearchModal/>
      <details open>
      <summary>오늘의 헤드라인</summary>
        <div className="h-56 scrollbar-hidden">
      <HeadLineContainer />
      </div>
      </details>
      <div className='h-24 border border-gray-300'>
      카테고리 영역
      </div>
      <div className="h-1000 overflow-y-auto border border-gray-300">
      <NewsListContainer />
      </div>
    </main>
  );
}

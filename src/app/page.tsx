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
import Menu from '@/components/Menu';
import Header from '@/components/Header';
import SummaryModal from '@/components/SummaryModal';
import CategoryContainer from '@/components/CategoryContainer';

export default function Home() {
  return (
    <main className="min-w-[390px] mx-auto p-4 h-auto ml-[10%] mr-[10%]" >
      <Header/>
      <Menu/>
      <SummaryModal/>
      <SearchModal/>
      <details open className='mt-24'>
      <summary className='mb-4 font-bold text-xl'>오늘의 헤드라인</summary>
        <div className="h-auto scrollbar-hidden">
      <HeadLineContainer />
      </div>
      </details>
      <div className='h-24'>
      <CategoryContainer />
      </div>
      <div className="h-1000 overflow-y-auto">
      <NewsListContainer />
      </div>
      <div className="pt-[80px] w-full h-[180px] flex flex-col items-center gap-4">
       <span>© 2024. WI All Rights Reserved.</span>
       <a href='https://github.com/wddoods015/news-summary'>Github</a>

      </div>
    </main>
    
  );
}
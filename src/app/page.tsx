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

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">News</h1>
      <NewsListContainer />
    </main>
  );
}

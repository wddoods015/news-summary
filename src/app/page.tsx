// src/app/page.tsx

import NewsListContainer from '../components/NewsListContainer';
import SearchModal from '@/components/SearchModal';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">News</h1>
      <NewsListContainer />
      <SearchModal />
    </main>
  );
}

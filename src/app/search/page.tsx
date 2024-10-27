// 검색 결과 페이지
'use client';


import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchNewsByKeyword } from '@/redux/slice/NewsSlice';
import NewsList from '@/components/NewsList';

export default function SearchResults() {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const { items, loading, error, searchKeyword } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    if (query) {
      dispatch(fetchNewsByKeyword(query));
    }
  }, [query, dispatch]);

  return (
    <main className="min-w-[390px] max-w-[590px] mx-auto p-4 border h-auto">
      <div className="mb-4">
        <h1 className="mt-4 text-2xl font-bold">검색 결과: {query}</h1>
        {items.length > 0 && (
          <p className="text-gray-600">총 {items.length}개</p>
        )}
      </div>
      
      {loading && <div>검색 중...</div>}
      {error && <div>검색 중 오류가 발생했습니다: {error}</div>}
      {!loading && items.length === 0 && (
        <div>검색 결과가 없습니다.</div>
      )}
      {items.length > 0 && <NewsList items={items} />}
    </main>
  );
}
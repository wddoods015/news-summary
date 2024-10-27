// 검색 결과 페이지
'use client';

import { Suspense } from 'react';
import SearchResult from './SearchResult';

export default function SearchPage() {
  return (
    <Suspense fallback={<div>검색결과를 불러오는 중입니다...</div>}>
      <SearchResult />
    </Suspense>
  )
}
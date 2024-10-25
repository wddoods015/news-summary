// src/components/NewsListContainer.tsx
'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchNewsByDate } from '../redux/slice/NewsSlice';
import NewsList from './NewsList';

export default function NewsListContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsByDate());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <NewsList items={items} />;
}
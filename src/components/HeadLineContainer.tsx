// src/components/HeadLineContainer.tsx
'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchHeadines } from '../redux/slice/HeadLineSlice';
import HeadLineList from './HeadLineList';



export default function HeadLineContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const { headlines, isLoading, error } = useSelector((state: RootState) => state.headlines);

    useEffect(() => {
        dispatch(fetchHeadines());
      }, [dispatch]);
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
      console.log('headline news확인', headlines);

      return <HeadLineList headlines={headlines} />;
}

// src/components/CategoryContainer.tsx
// 카테고리 버튼 영역

'use client';

import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { setSelectedCategory } from '@/redux/slice/CategorySlice';
import { fetchNewsByDate, fetchNewsByCategory } from '@/redux/slice/NewsSlice';
import CategoryButton from './CategoryButton';


const CategoryContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const containerRef = useRef<HTMLDivElement>(null);
  const { categories, selectedCategory, isLoading } = useSelector(
    (state: RootState) => state.categories);

  // '전체' 카테고리 클릭시 fetchNewsByDate 함수 호출
  useEffect(() => {
    if (selectedCategory === '전체') {
      dispatch(fetchNewsByDate());
    }
  }, [dispatch]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // const handleCategoryClick = (category: string) => {
  //   dispatch(setSelectedCategory(category));
  //   dispatch(fetchNewsByCategory(category));
  // };

  const handleCategoryClick = (category: string) => {
    dispatch(setSelectedCategory(category));
    
    // '전체' 카테고리 선택 시 현재 날짜의 뉴스를 가져옴
    if (category === '전체') {
      dispatch(fetchNewsByDate());
    } else {
      dispatch(fetchNewsByCategory(category));
    }
  };

  if (isLoading) {
    return <div className="flex justify-center">카테고리를 불러오는 중입니다...</div>;
  }

  return (
    <div className="relative h-full flex items-center max-w-full py-4 z-0">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
        </button>
      </div>
      
      <div className="flex-1 flex justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-2 overflow-hidden scrollbar-hide px-8 scroll-smooth items-center"
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
        </button>
      </div>
    </div>
  );
};

export default CategoryContainer;
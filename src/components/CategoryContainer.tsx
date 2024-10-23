import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchCategories, toggleCategory } from '@/redux/slice/CategorySlice';
import CategoryButton from './CategoryButton';


const CategoryContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const containerRef = useRef<HTMLDivElement>(null);
  const { categories, selectedCategories, isLoading } = useSelector(
    (state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <div className="flex justify-center">카테고리를 불러오는 중입니다...</div>;
  }

  return (
    <div className="relative max-w-full py-4">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
          value="<"
        >
        </button>
      </div>
      
      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-8 scroll-smooth"
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategories.includes(category)}
            onClick={() => dispatch(toggleCategory(category))}
          />
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
          value=">"
        >
        </button>
      </div>
    </div>
  );
};

export default CategoryContainer;
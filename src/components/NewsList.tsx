// src/components/NewsList.tsx news 데이터 배열
import React from 'react';
import NewsCard from './NewsCard';
import { NewsItem } from '../redux/slice/NewsSlice';

interface NewsListProps {
  items: NewsItem[];
}

const NewsList: React.FC<NewsListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {items && items.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
// src/components/NewsList.tsx
import React from 'react';
import NewsCard from './NewsCard';

interface NewsListProps {
  items: any[];
}

const NewsList: React.FC<NewsListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items && items.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
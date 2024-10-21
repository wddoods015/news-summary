// src/components/NewsCard.tsx
import React from 'react';

interface NewsCardProps {
  article: any;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        네이버 뉴스 페이지로 이동
      </a>
      <a href={article.originallink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        원본 페이지로 이동
      </a>
      <p>{article.pubDate}</p>
    </div>
  );
};

export default NewsCard;
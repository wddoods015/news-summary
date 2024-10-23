// src/components/NewsCard.tsx
import React from 'react';
import { removeHTMLTags } from '../utils/textUtils';

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    link: string;
    originallink: string;
    pubDate: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-333333-500">
      <h4 className="text-xl font-semibold mb-2">{removeHTMLTags(article.title)}</h4>
      <p className="text-gray-600 mb-4 text-xs">{removeHTMLTags(article.description)}</p>
      </a>
      <a href={article.originallink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        원문기사 읽기
      </a>
      <p>{article.pubDate}</p>
      
    </div>
  );
};

export default NewsCard;


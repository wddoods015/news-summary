// src/components/NewsCard.tsx
import React from 'react';
import { removeHTMLTags } from '../utils/textUtils';
import { useDispatch } from 'react-redux';
import { openSummaryModal } from '@/redux/slice/SummarySlice';

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
  const dispatch = useDispatch(); // dispatch 가져오기
  
  const handleClick = () => {
    console.log('link',article.link);
    dispatch(openSummaryModal());
  };
  
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
      {article.link === article.originallink ? <button className="bg-blue-500 text-white  rounded-[5px] p-1.5 ml-[85%]" onClick={handleClick}>3줄 요약</button> : null}
    </div>
  );
};

export default NewsCard;


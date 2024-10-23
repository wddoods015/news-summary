// src/components/NewsCard.tsx
import React from 'react';
import { NewsItem } from '../redux/slice/NewsSlice';
import { removeHTMLTags } from '../utils/textUtils';
import { useDispatch, useSelector } from 'react-redux';
import { openSummaryModal, fetchSummary } from '@/redux/slice/SummarySlice';
import { AppDispatch } from '@/redux/store'; 

interface NewsCardProps {
  article: NewsItem;
  // {
  //   title: string;
  //   description: string;
  //   link: string;
  //   originallink: string;
  //   pubDate: string;
  // };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const dispatch: AppDispatch = useDispatch();  // AppDispatch 타입 적용
  
  const handleClick = (link:string) => {
    //console.log('link', article.link);
    dispatch(openSummaryModal());  // 모달 열기 액션 디스패치
    dispatch(fetchSummary(article.link));  // 비동기 액션으로 링크 전달
    
  };
  




  // article.link를 summary fetch 파라미터로 보내야 하는데... 
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
      {article.link !== article.originallink ? <button className="bg-blue-500 text-white  rounded-[5px] p-1.5 ml-[85%]" onClick={() => handleClick(article.link)}>3줄 요약</button> : null}
    </div>
  );
};

export default NewsCard;


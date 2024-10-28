// src/components/HeadLineCard.tsx
import React from 'react';
import { removeHTMLTags } from '../utils/textUtils';
import { useDispatch } from 'react-redux';
import { openSummaryModal, fetchSummary } from '@/redux/slice/SummarySlice';
import { AppDispatch } from '@/redux/store'; 

interface HeadLineCardProps {
    Headarticle: {
      title: string;
      description: string;
      link: string;
      originallink: string;
      pubDate: string;
    };
  }

  const HeadLineCard: React.FC<HeadLineCardProps> = ({ Headarticle }) => {
    const dispatch: AppDispatch = useDispatch();  // AppDispatch 타입 적용

    const handleClick = (link: string) => {
      //console.log('link', article.link);
      dispatch(openSummaryModal());  // 모달 열기 액션 디스패치
      dispatch(fetchSummary(Headarticle.link));  // 비동기 액션으로 링크 전달  
    };

    const containsNaver = (str: string): boolean => {
      return str.includes("naver.com");
  };

    return (
      <div className="bg-white border border-solid border-grey-500 rounded-lg p-4">
        <a href={Headarticle.link} target="_blank" rel="noopener noreferrer" className="text-333333-500">
        <h4 className="text-xl font-semibold mb-2">{removeHTMLTags(Headarticle.title)}</h4>
        <p className="text-gray-600 mb-4 text-xs">{removeHTMLTags(Headarticle.description)}</p>
        </a>
        <a href={Headarticle.originallink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          원문기사 읽기
        </a>
        <p>{Headarticle.pubDate}</p>
        {containsNaver(Headarticle.link) ? <button className="bg-blue-500 text-white  rounded-[5px] p-1.5 ml-[85%]" onClick={() => handleClick(Headarticle.link)}>3줄 요약</button> : null}
      </div>
    );
  };

  export default HeadLineCard;
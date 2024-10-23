// src/components/HeadLineCard.tsx
import React from 'react';
import { removeHTMLTags } from '../utils/textUtils';


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
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <a href={Headarticle.link} target="_blank" rel="noopener noreferrer" className="text-333333-500">
        <h4 className="text-xl font-semibold mb-2">{removeHTMLTags(Headarticle.title)}</h4>
        <p className="text-gray-600 mb-4 text-xs">{removeHTMLTags(Headarticle.description)}</p>
        </a>
        <a href={Headarticle.originallink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          원문기사 읽기
        </a>
        <p>{Headarticle.pubDate}</p>
        
      </div>
    );
  };

  export default HeadLineCard;
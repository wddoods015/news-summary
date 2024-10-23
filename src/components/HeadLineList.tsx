import React from 'react';
 import HeadLineCard from './HeadLineCard';

interface HeadLineListProps {
    headlines: any[];
  }

const HeadLineList: React.FC<HeadLineListProps> = ({headlines}) => {

    return (
        <div className="flex flex-col gap-12">
            {headlines && headlines.map((Headarticle, index) => (
        <HeadLineCard key={index} Headarticle={Headarticle} />
      ))}
        </div>
    );
};

export default HeadLineList;
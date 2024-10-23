import React from 'react';
 import HeadLineCard from './HeadLineCard';

interface HeadLineListProps {
    headlines: any[];
  }

const HeadLineList: React.FC<HeadLineListProps> = ({headlines}) => {

    return (
        <div>
            {headlines && headlines.map((Headarticle, index) => (
        <HeadLineCard key={index} Headarticle={Headarticle} />
      ))}
        </div>
    );
};

export default HeadLineList;
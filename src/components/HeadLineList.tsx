import React from "react";
import HeadLineCard from "./HeadLineCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface HeadLineListProps {
  headlines: any[];
}


const HeadLineList: React.FC<HeadLineListProps> = ({ headlines }) => {
  
  const settings = {
    dots: false, // 슬라이드 하단에 점 표시
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 자동 슬라이드
    autoplaySpeed: 2000, // 3초마다 슬라이드
  };

  return (
    <Slider {...settings}>
      {headlines && headlines.map((Headarticle, index) => (
        <div key={index}>
          <HeadLineCard Headarticle={Headarticle} />
        </div>
      ))}
    </Slider>
  );
};

export default HeadLineList;

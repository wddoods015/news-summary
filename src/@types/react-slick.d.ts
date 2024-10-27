declare module "react-slick" {
    import { Component } from "react";
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      // 필요한 옵션들을 추가할 수 있습니다.
    }
  
    export default class Slider extends Component<{ settings?: Settings }> {}
  }
  
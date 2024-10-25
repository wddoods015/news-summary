// 아직 적용 x
// apiNewsList.ts
// 현재날짜 모든 뉴스리스트, 카테고리 뉴스리스트 API 요청 함수

import axios from 'axios';
import { NewsApiResponse } from '@/redux/slice/NewsSlice';
const API_URL = 'https://wispmall.duckdns.org'

// 날짜 형식을 YYYY-MM-DD로 변환하는 함수
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// 현재날짜 모든 뉴스 리스트
export const getNewsByDate = async (date: string) => {
  const currentDate = formatDate(new Date());
  const response = await axios.get(`${API_URL}/api/articles/${currentDate}`);
  console.log('오늘자 모든 뉴스: ', response.data.data.items)
  return response.data.data.items;
};

// 카테고리 뉴스 리스트
export const getNewsByCategory = async (categoryName: string) => {
  const encodedCategory = encodeURIComponent(categoryName);
  const response = await axios.get<NewsApiResponse>(`${API_URL}/api/articles/category/${encodedCategory}`)
  // console.log('카테고리:', encodedCategory)
  console.log('카테고리 뉴스: ', response.data.data.items)
  return response.data.data.items;
}
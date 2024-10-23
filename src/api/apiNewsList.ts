// 아직 적용 x

import axios from 'axios';

export const getNews = async () => {
  const response = await axios.get('https://wispmall.duckdns.org/api/articles');
  return response.data.data;
};
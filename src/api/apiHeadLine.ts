import axios from 'axios';

export const getHeadLine = async () => {
  const response = await axios.get('https://wispmall.duckdns.org/api/articles');
  return response.data.data;
};
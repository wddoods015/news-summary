import axios from 'axios';

export const getCategories = async () => {
  const response = await axios.get('https://wispmall.duckdns.org/api/articles/category');
  return response.data.data;
};
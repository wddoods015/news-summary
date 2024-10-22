import axios from 'axios';

export const getTrends = async () => {
  const response = await axios.get('https://wispmall.duckdns.org/api/trends');
  return response.data.data;
};
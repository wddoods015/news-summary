import axios from 'axios';

export const getTrends = async () => {
  const response = await axios.get('http://43.203.208.22:3000/api/trends');
  return response.data.data;
};
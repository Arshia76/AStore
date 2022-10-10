import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const createRequest = async (reqData) => {
  const { data } = await axios.post(`${URL}/contact`, JSON.stringify(reqData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

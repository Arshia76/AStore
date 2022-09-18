import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const Register = async (userData) => {
  const { data } = await axios.post(
    `${URL}/auth/register`,
    JSON.stringify(userData),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
};

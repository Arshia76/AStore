import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

export const getUserOrders = async (userId) => {
  const { data } = await axios.get(`${URL}/order?user=${userId}`);
  return data;
};

export const getOrder = async (id) => {
  const { data } = await axios.get(`${URL}/order/${id}`);
  return data;
};

export const createOrder = async (orderData) => {
  const { data } = await axios.post(`${URL}/order`, JSON.stringify(orderData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

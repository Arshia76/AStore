import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllProducts = async (limit = 100, skip = 0) => {
  const { data } = await axios.get(
    `${URL}/products?limit=${limit}&skip=${skip}`
  );
  return data;
};

export const getSingleProduct = async (id) => {
  const { data } = await axios.get(`${URL}/products/${id}`);
  return data;
};

export const searchProduct = async (product) => {
  const { data } = await axios.get(`${URL}/products/search?q=${product}`);
  return data;
};

export const getCategories = async () => {
  const { data } = await axios.get(`${URL}/products/categories`);
  return data;
};

export const getProductsByCategory = async (category) => {
  const { data } = await axios.get(`${URL}/products/category/${category}`);
  return data;
};

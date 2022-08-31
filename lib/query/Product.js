import * as api from '../api/Product';
import * as keys from './keys';
import { useQuery } from 'react-query';

export const useGetProductsByCategory = (category, onSuccess, onError) => {
  return useQuery(
    [keys.PRODUCT_BY_CATEGORY, category],
    () => api.getProductsByCategory(category),
    {
      onSuccess,
      onError,
    }
  );
};
